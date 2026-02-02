import { Moon02Icon, Sun01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Logo } from '@/components/Logo';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { brand, footer } from '@/config/brand';
import { useTheme } from '@/hooks/useTheme';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme, mounted } = useTheme();

  // Lazy load AccessPro accessibility widget when footer enters viewport
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (document.getElementById('aswWidgetScript')) return;

    const loadScript = () => {
      const script = document.createElement('script');
      script.id = 'aswWidgetScript';
      script.src = 'https://web.accesspro.ai/static/widget/main.js';
      script.dataset.aswkey = '2dfd697d-9c9e-4d44-92c7-324db7a59cc2';
      script.dataset.aswdomain = 'op.digital';
      script.async = true;
      document.head.appendChild(script);
    };

    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadScript();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

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
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {brand.displayName}. All rights reserved.
            </p>
            <nav className="flex items-center gap-3 text-muted-foreground text-sm">
              <Link
                to="/terms"
                className="transition-colors hover:text-foreground"
              >
                Terms
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                to="/privacy"
                className="transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                to="/accessibility"
                className="transition-colors hover:text-foreground"
              >
                Accessibility
              </Link>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                className="accesspro-icon cursor-pointer transition-colors hover:text-foreground"
                aria-label="Open accessibility options"
              >
                Accessibility Options
              </button>
            </nav>
          </div>

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
