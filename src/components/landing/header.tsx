"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { LanguageSwitcher } from '@/components/language-switcher';
import Logo from '@/components/logo';
import { useTranslation } from '@/hooks/use-translation';
import StudentDialog from '@/components/landing/student-dialog';

export default function Header() {
  const t = useTranslation()

  const navLinks = [
    { href: '#programme', label: t.navigation.programme },
    { href: '#why', label: t.navigation.why },
    { href: '#comment-ca-marche', label: t.navigation.info },
    { href: '#faq', label: t.navigation.faq },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Desktop version */}
      <div className="container hidden md:flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo width={180} height={40} />
          </Link>
        </div>
        <div className="flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <StudentDialog variant="outline" className="hidden sm:inline-flex" />
          <Button asChild className='hidden sm:inline-flex'>
            <Link href="#pricing">{t.hero.buttons.register}</Link>
          </Button>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile version */}
      <div className="container flex md:hidden h-14 items-center">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-1">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              </SheetHeader>
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Logo width={180} height={40} variant="mobile" />
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <StudentDialog variant="outline" size="lg" className="w-full justify-start" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center">
            <Logo width={120} height={30} variant="mobile" />
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
