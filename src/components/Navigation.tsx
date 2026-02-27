import {
  ArrowRight01Icon,
  Menu09Icon,
  Moon02Icon,
  Sun01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from '@tanstack/react-router';
import { useCallback, useState } from 'react';
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
import { getAllSolutions } from '@/data/solutions';
import { useTheme } from '@/hooks/useTheme';
import { fallbackIcon, industryIcons } from '@/lib/industry-icons';

const solutions = getAllSolutions();

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
          <NavigationMenuList aria-orientation={undefined}>
            {navigation.main.map((item) =>
              item.type === 'dropdown' ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.items.map((subItem) =>
                      subItem.href === '/solutions' ? (
                        <SolutionsFlyout key={subItem.href} />
                      ) : (
                        <NavigationMenuLink
                          key={subItem.href}
                          render={<Link to={subItem.href} />}
                        >
                          {subItem.label}
                        </NavigationMenuLink>
                      ),
                    )}
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

function SolutionsFlyout() {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="group/solutions relative">
      <button
        type="button"
        onClick={handleClick}
        className="flex w-full items-center justify-between gap-1.5 rounded-xl p-3 text-sm outline-none transition-all hover:bg-muted focus:bg-muted focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        Solutions
        <HugeiconsIcon
          icon={ArrowRight01Icon}
          size={16}
          strokeWidth={2}
          className="text-muted-foreground"
        />
      </button>
      <div
        className={`invisible absolute top-0 left-full pl-1 opacity-0 transition-[visibility,opacity] duration-150 group-focus-within/solutions:visible group-focus-within/solutions:opacity-100 group-hover/solutions:visible group-hover/solutions:opacity-100 ${open ? 'visible! opacity-100!' : ''}`}
      >
        <div className="w-64 rounded-2xl bg-popover p-2.5 pr-3 shadow-2xl ring-1 ring-foreground/5">
          <div className="flex max-h-80 flex-col gap-0.5 overflow-y-auto">
            {solutions.map((solution) => {
              const icon = industryIcons[solution.slug] || fallbackIcon;
              return (
                <Link
                  key={solution.slug}
                  // biome-ignore lint/suspicious/noExplicitAny: Solutions use static routes
                  to={`/solutions/${solution.slug}` as any}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm outline-none transition-all hover:bg-muted focus:bg-muted focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <HugeiconsIcon
                    icon={icon}
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-muted-foreground"
                  />
                  {solution.name}
                </Link>
              );
            })}
          </div>
          <Separator className="my-1.5" />
          <Link
            to="/solutions"
            className="flex items-center gap-2 rounded-xl px-3 py-2 font-medium text-sm outline-none transition-all hover:bg-muted focus:bg-muted focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            View All Solutions
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={16}
              strokeWidth={2}
              className="text-muted-foreground"
            />
          </Link>
        </div>
      </div>
    </div>
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

            {/* Nav items in order */}
            {navigation.main.map((item) =>
              item.type === 'dropdown' ? (
                <Accordion
                  key={item.label}
                  className="gap-2 rounded-none border-0"
                >
                  <AccordionItem
                    value={item.label}
                    className="border-none data-open:bg-transparent"
                  >
                    <AccordionTrigger className="min-h-11 py-2 hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="[&_a]:no-underline">
                      <div className="flex flex-col gap-1">
                        {item.items.map((subItem) =>
                          subItem.href === '/solutions' ? (
                            <MobileSolutionsAccordion key={subItem.href} />
                          ) : (
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
                          ),
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
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
              ),
            )}

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

function MobileSolutionsAccordion() {
  return (
    <Accordion className="gap-0 rounded-none border-0">
      <AccordionItem
        value="solutions"
        className="border-none data-open:bg-transparent"
      >
        <AccordionTrigger className="min-h-11 px-3 py-2 font-normal text-sm hover:no-underline">
          Solutions
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex max-h-72 flex-col gap-1 overflow-y-auto pl-2">
            <SheetClose
              render={
                <Link
                  to="/solutions"
                  className="min-h-11 rounded-lg px-3 py-2 font-medium text-foreground text-sm transition-colors hover:bg-muted"
                />
              }
            >
              View All Solutions
            </SheetClose>
            {solutions.map((solution) => {
              const icon = industryIcons[solution.slug] || fallbackIcon;
              return (
                <SheetClose
                  key={solution.slug}
                  render={
                    <Link
                      // biome-ignore lint/suspicious/noExplicitAny: Solutions use static routes
                      to={`/solutions/${solution.slug}` as any}
                      className="flex min-h-11 items-center gap-2.5 rounded-lg px-3 py-2 text-foreground text-sm transition-colors hover:bg-muted"
                    />
                  }
                >
                  <HugeiconsIcon
                    icon={icon}
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-muted-foreground"
                  />
                  {solution.name}
                </SheetClose>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
