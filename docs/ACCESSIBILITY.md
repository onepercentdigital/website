# Accessibility: Color Contrast Corrections

## Background

This project uses shadcn/ui's Maia theme with OKLCH colors. The original Maia theme prioritizes soft, rounded aesthetics but fails WCAG 2.1 AA contrast requirements in several areas.

**WCAG 2.1 AA Requirements:**
- Normal text (< 18pt or < 14pt bold): **4.5:1** minimum contrast ratio
- Large text (>= 18pt or >= 14pt bold): **3:1** minimum contrast ratio

## Issues Identified

An accessibility audit identified contrast failures in:
1. **Primary buttons** - White text on blue background
2. **Muted text** - Gray text on light/dark backgrounds (stats labels, descriptions)
3. **Sidebar primary elements** - Same issues as main primary colors

## Original vs Corrected Values

### Light Mode (`:root`)

| Variable | Original | Corrected | Change |
|----------|----------|-----------|--------|
| `--primary` | `oklch(0.61 0.11 222)` | `oklch(0.50 0.12 222)` | Darker blue (L: 61% -> 50%) |
| `--primary-foreground` | `oklch(0.98 0.02 201)` | `oklch(1 0 0)` | Pure white |
| `--muted-foreground` | `oklch(0.556 0 0)` | `oklch(0.45 0 0)` | Darker gray (L: 55.6% -> 45%) |
| `--sidebar-primary` | `oklch(0.61 0.11 222)` | `oklch(0.50 0.12 222)` | Matches primary |
| `--sidebar-primary-foreground` | `oklch(0.98 0.02 201)` | `oklch(1 0 0)` | Matches primary-foreground |

### Dark Mode (`.dark`)

| Variable | Original | Corrected | Change |
|----------|----------|-----------|--------|
| `--primary` | `oklch(0.71 0.13 215)` | `oklch(0.65 0.14 215)` | Slightly darker (L: 71% -> 65%) |
| `--primary-foreground` | `oklch(0.30 0.05 230)` | `oklch(0.15 0.03 230)` | Much darker (L: 30% -> 15%) |
| `--muted-foreground` | `oklch(0.708 0 0)` | `oklch(0.75 0 0)` | Lighter gray (L: 70.8% -> 75%) |
| `--sidebar-primary` | `oklch(0.80 0.13 212)` | `oklch(0.65 0.14 215)` | Matches primary |
| `--sidebar-primary-foreground` | `oklch(0.30 0.05 230)` | `oklch(0.15 0.03 230)` | Matches primary-foreground |

## Contrast Ratio Estimates

OKLCH lightness (L) values provide approximate contrast ratios:

### Light Mode
- **Primary button (white on blue):**
  - Original: L=61% background with L=98% text ~ 3.5:1 (FAIL)
  - Corrected: L=50% background with L=100% text ~ 5.5:1 (PASS)

- **Muted text (gray on white):**
  - Original: L=55.6% text on L=100% background ~ 4.2:1 (FAIL for small text)
  - Corrected: L=45% text on L=100% background ~ 5.8:1 (PASS)

### Dark Mode
- **Primary button (dark on light blue):**
  - Original: L=71% background with L=30% text ~ 3.8:1 (FAIL)
  - Corrected: L=65% background with L=15% text ~ 5.2:1 (PASS)

- **Muted text (gray on dark):**
  - Original: L=70.8% text on L=14.5% background ~ 4.3:1 (borderline)
  - Corrected: L=75% text on L=14.5% background ~ 5.0:1 (PASS)

## Alternative Considered

WCAG allows 3:1 contrast for "large text" (18pt/24px normal OR 14pt/18.67px bold). However:
- Buttons use `text-sm` (14px)
- Metric labels use `text-sm font-bold`

Increasing these to 18.67px+ would significantly alter the visual hierarchy. **Color adjustment was the cleaner fix.**

## Verification

To verify these changes:

1. Run the dev server: `bun run dev`
2. Use Chrome DevTools contrast checker:
   - Right-click element -> Inspect
   - Look for contrast ratio in Styles panel
3. Test both light and dark modes
4. Re-run audit at accessibilitychecker.org

## When to Review

Review contrast ratios when:
- Adding new color variables
- Modifying existing theme colors
- Creating new UI patterns with colored backgrounds
- Introducing new text/background combinations

## Resources

- [WCAG 2.1 Contrast Requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [OKLCH Color Picker](https://oklch.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
