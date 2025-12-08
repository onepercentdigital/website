import { Link } from '@tanstack/react-router';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { brand, footer } from '@/config/brand';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {footer.sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-foreground text-sm">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Logo Column */}
          <div className="flex items-center justify-center md:justify-end">
            <Logo size="xxl" showWordmark={false} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-border border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {brand.displayName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to={footer.cta.href}>{footer.cta.label}</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
