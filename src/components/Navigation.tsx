import { Menu09Icon, Moon02Icon, Sun01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from '@tanstack/react-router';
import { Logo } from '@/components/Logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { navigation } from '@/config/brand';
import { useTheme } from '@/hooks/useTheme';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-border border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8"
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList role="menubar">
            {navigation.main.map((item) =>
              item.type === 'dropdown' ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.items.map((subItem) => (
                      <NavigationMenuLink
                        key={subItem.href}
                        render={<Link to={subItem.href} />}
                      >
                        {subItem.label}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <Link to={item.href} className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button render={<Link to={navigation.cta.href} />}>
            {navigation.cta.label}
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}

function MobileMenu() {
  const { theme, setTheme, mounted } = useTheme();

  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger
          nativeButton={true}
          render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
        >
          <HugeiconsIcon icon={Menu09Icon} size={24} strokeWidth={2} />
        </SheetTrigger>
        <SheetContent
          side="full"
          showCloseButton
          className="overflow-y-auto px-6 pt-16 pb-[env(safe-area-inset-bottom)]"
        >
          <nav aria-label="Mobile menu" className="flex flex-col gap-2">
            {/* CTA at top */}
            <SheetClose
              render={
                <Button
                  render={<Link to={navigation.cta.href} />}
                  className="mb-4 w-full"
                  size="lg"
                />
              }
            >
              {navigation.cta.label}
            </SheetClose>

            {/* Accordion nav items */}
            <Accordion className="gap-2 rounded-none border-0">
              {navigation.main
                .filter((item) => item.type === 'dropdown')
                .map((item) => (
                  <AccordionItem
                    key={item.label}
                    value={item.label}
                    className="border-none data-open:bg-transparent"
                  >
                    <AccordionTrigger className="min-h-11 py-2 hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="[&_a]:no-underline">
                      <div className="flex max-h-72 flex-col gap-1 overflow-y-auto">
                        {item.items.map((subItem) => (
                          <SheetClose
                            key={subItem.href}
                            render={
                              <Link
                                to={subItem.href}
                                className="min-h-11 rounded-lg px-3 py-2 text-foreground text-sm transition-colors hover:bg-muted"
                              />
                            }
                          >
                            {subItem.label}
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>

            {/* Plain links (Enterprise) */}
            {navigation.main
              .filter((item) => item.type === 'link')
              .map((item) => (
                <SheetClose
                  key={item.label}
                  render={
                    <Link
                      to={item.href}
                      className="min-h-11 rounded-lg px-4 py-2 font-medium text-foreground text-sm transition-colors hover:bg-muted"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}

            {/* Theme toggle */}
            <div className="pt-4">
              <Separator className="mb-4" />
              <div className="flex items-center justify-between px-4">
                <span className="font-medium text-foreground text-sm">
                  Theme
                </span>
                {mounted && (
                  <ToggleGroup
                    value={[theme]}
                    onValueChange={(values) => {
                      const newTheme = values[0] as
                        | 'light'
                        | 'dark'
                        | undefined;
                      if (newTheme && newTheme !== theme) {
                        setTheme(newTheme);
                      }
                    }}
                    variant="outline"
                    size="sm"
                  >
                    <ToggleGroupItem value="light" aria-label="Light mode">
                      <HugeiconsIcon
                        icon={Sun01Icon}
                        size={16}
                        strokeWidth={2}
                      />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="dark" aria-label="Dark mode">
                      <HugeiconsIcon
                        icon={Moon02Icon}
                        size={16}
                        strokeWidth={2}
                      />
                    </ToggleGroupItem>
                  </ToggleGroup>
                )}
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
