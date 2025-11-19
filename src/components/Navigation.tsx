import { Link } from '@tanstack/react-router';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { navigation } from '@/config/brand';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.main.map((item) => (
            // biome-ignore lint/a11y/noStaticElementInteractions: Dropdown menu wrapper requires mouse events for hover behavior
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.type === 'dropdown' && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.type === 'dropdown' ? (
                <>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 font-medium text-foreground text-sm transition-colors hover:bg-secondary"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <>
                      {/* Invisible bridge to prevent dropdown from closing when mouse moves through gap */}
                      <div className="absolute top-full left-0 h-4 w-full" />

                      {/* Dropdown menu with visual spacing */}
                      <div className="absolute top-[calc(100%+1rem)] left-0 min-w-[200px]">
                        <div className="rounded-lg border border-border bg-background py-2 shadow-lg">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="block px-4 py-2 text-foreground text-sm transition-colors hover:bg-secondary"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className="rounded-lg px-3 py-2 font-medium text-foreground text-sm transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - CTA and Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to={navigation.cta.href}>{navigation.cta.label}</Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-border border-t bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navigation.main.map((item) => (
              <div key={item.label}>
                {item.type === 'dropdown' ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium text-foreground text-sm transition-colors hover:bg-secondary"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="mt-1 ml-4 flex flex-col gap-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-lg px-3 py-2 text-foreground text-sm transition-colors hover:bg-secondary"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 font-medium text-foreground text-sm transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button
              asChild
              className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link
                to={navigation.cta.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {navigation.cta.label}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
