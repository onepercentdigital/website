import { Moon02Icon, Sun01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from '@tanstack/react-router';
import { Logo } from '@/components/Logo';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { brand, footer } from '@/config/brand';
import { useTheme } from '@/hooks/useTheme';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme, mounted } = useTheme();

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
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
            <Logo size="footer" showWordmark={false} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {brand.displayName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {mounted && (
              <ToggleGroup
                value={[theme]}
                onValueChange={(values) => {
                  const newTheme = values[0] as 'light' | 'dark' | undefined;
                  if (newTheme && newTheme !== theme) {
                    setTheme(newTheme);
                  }
                }}
                variant="outline"
                size="sm"
              >
                <ToggleGroupItem value="light" aria-label="Light mode">
                  <HugeiconsIcon icon={Sun01Icon} size={16} strokeWidth={2} />
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Dark mode">
                  <HugeiconsIcon icon={Moon02Icon} size={16} strokeWidth={2} />
                </ToggleGroupItem>
              </ToggleGroup>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
