"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, Package2, Sun, Moon, Search, User, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav pathname={pathname} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Package2 className="h-6 w-6 text-green-600 dark:text-green-400" />
          <span className="font-bold hidden sm:inline-block">AgriMart</span>
        </Link>
        <nav className="hidden md:flex gap-6 flex-1">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/shop" || pathname?.startsWith("/shop/") ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/advisory"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/advisory" || pathname?.startsWith("/advisory/")
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Advisory
          </Link>
          <Link
            href="/knowledge"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/knowledge" || pathname?.startsWith("/knowledge/")
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Knowledge Center
          </Link>
          <Link
            href="/track-order"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/track-order" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Track Order
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Support
          </Link>
        </nav>
        <div className="hidden md:flex md:flex-1 items-center justify-end gap-4">
          <form className="w-full max-w-sm lg:max-w-md">
            <div className="relative">
              <Input className="pl-8" placeholder="Search products, crops..." />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </form>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Open cart</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-600 text-xs text-white flex items-center justify-center">
                0
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <div className="grid gap-6 p-6">
      <Link href="/" className="flex items-center gap-2">
        <Package2 className="h-6 w-6 text-green-600 dark:text-green-400" />
        <span className="font-bold">AgriMart</span>
      </Link>
      <div className="relative">
        <Input className="pl-8" placeholder="Search products, crops..." />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <nav className="grid gap-3">
        <Link
          href="/"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === "/" ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Home
        </Link>
        <Link
          href="/shop"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === "/shop" || pathname?.startsWith("/shop/") ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Shop
        </Link>
        <Link
          href="/advisory"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === "/advisory" || pathname?.startsWith("/advisory/") ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Advisory
        </Link>
        <Link
          href="/knowledge"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === "/knowledge" || pathname?.startsWith("/knowledge/")
              ? "text-foreground"
              : "text-muted-foreground"
          }`}
        >
          Knowledge Center
        </Link>
        <Link
          href="/track-order"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === "/track-order" ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Track Order
        </Link>
        <Link
          href="/contact"
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Support
        </Link>
      </nav>
      <div className="flex flex-col gap-2">
        <Button asChild variant="outline" className="flex items-center">
          <Link href="/login">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Link>
        </Button>
        <Button asChild className="flex items-center">
          <Link href="/cart">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart (0)
          </Link>
        </Button>
      </div>
    </div>
  )
}

