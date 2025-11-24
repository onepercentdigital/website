#!/usr/bin/env bun

/**
 * Customer Logo Migration Script
 *
 * Uploads all customer logos from public/customer-logos/ to Cloudflare Images
 * and generates a mapping file for updating the data structure.
 */

import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import { uploadImage } from '../src/lib/cloudflare-images'

interface LogoMapping {
  filename: string
  customerName: string
  imageId: string
  cloudflareUrl: string
}

const LOGOS_DIR = join(process.cwd(), 'public', 'customer-logos')
const OUTPUT_FILE = join(process.cwd(), 'scripts', 'logo-migration-map.json')

// Customer name mapping from filenames
const CUSTOMER_NAMES: Record<string, string> = {
  'afni-careers.webp': 'Afni Careers',
  'goldfarb-and-associates.webp': 'Goldfarb & Associates',
  'grove-bay-hospitality-group.webp': 'Grove Bay Hospitality Group',
  'h-and-r-agri-power.webp': 'H&R Agri-Power',
  'modern-house-numbers.webp': 'Modern House Numbers',
  'revology-cars.webp': 'Revology Cars',
  'service-allies.webp': 'Service Allies',
  'sorting-robotics.webp': 'Sorting Robotics',
  'stiltsville-fish-bar.webp': 'Stiltsville Fish Bar',
  'stubborn-seed.webp': 'Stubborn Seed',
}

async function main() {
  console.log('🚀 Starting customer logo migration to Cloudflare Images...\n')

  // Read all WebP files from logos directory
  const files = await fs.readdir(LOGOS_DIR)
  const logoFiles = files.filter(f => f.endsWith('.webp'))

  console.log(`📁 Found ${logoFiles.length} logo files to migrate\n`)

  const mappings: LogoMapping[] = []
  const errors: string[] = []

  for (const filename of logoFiles) {
    const customerName = CUSTOMER_NAMES[filename]

    if (!customerName) {
      console.warn(`⚠️  No customer name mapping for ${filename}, skipping...`)
      continue
    }

    try {
      console.log(`📤 Uploading ${filename} (${customerName})...`)

      // Read file as buffer
      const filePath = join(LOGOS_DIR, filename)
      const fileBuffer = await fs.readFile(filePath)

      // Create File object from buffer
      const file = new File([fileBuffer], filename, { type: 'image/webp' })

      // Upload to Cloudflare with metadata
      const imageId = await uploadImage(file, {
        type: 'customer-logo',
        name: customerName,
        originalFilename: filename,
      })

      // Generate Cloudflare URL (using thumbnail variant for logos)
      const cloudflareUrl = `https://imagedelivery.net/${getAccountHash()}/${imageId}/thumbnail`

      mappings.push({
        filename,
        customerName,
        imageId,
        cloudflareUrl,
      })

      console.log(`   ✅ Uploaded: ${imageId}`)
    } catch (error) {
      const errorMsg = `Failed to upload ${filename}: ${error instanceof Error ? error.message : String(error)}`
      console.error(`   ❌ ${errorMsg}`)
      errors.push(errorMsg)
    }
  }

  // Save mapping to JSON file
  const mappingData = {
    migratedAt: new Date().toISOString(),
    totalFiles: logoFiles.length,
    successfulUploads: mappings.length,
    failedUploads: errors.length,
    mappings,
    errors: errors.length > 0 ? errors : undefined,
  }

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(mappingData, null, 2))

  // Print summary
  console.log('\n📊 Migration Summary:')
  console.log(`   Total files: ${logoFiles.length}`)
  console.log(`   Successful uploads: ${mappings.length}`)
  console.log(`   Failed uploads: ${errors.length}`)
  console.log(`\n💾 Mapping saved to: ${OUTPUT_FILE}`)

  if (mappings.length > 0) {
    console.log('\n✅ Next Steps:')
    console.log('   1. Update src/data/customers.ts with the Image IDs from logo-migration-map.json')
    console.log('   2. Update src/routes/customers.tsx to use getImageUrl()')
    console.log('   3. Test the customers page at http://localhost:3000/customers')
    console.log('   4. Delete public/customer-logos/ directory after verification')
  }

  if (errors.length > 0) {
    console.log('\n⚠️  Errors encountered:')
    errors.forEach(err => console.log(`   - ${err}`))
    process.exit(1)
  }

  console.log('\n🎉 Migration complete!')
}

// Helper to get account hash from cloudflare-images.ts
function getAccountHash(): string {
  // This matches the hardcoded hash in src/lib/cloudflare-images.ts
  return 'uIVQ6NXJhv6uJPgWapIyVQ'
}

main().catch((error) => {
  console.error('💥 Migration failed:', error)
  process.exit(1)
})
