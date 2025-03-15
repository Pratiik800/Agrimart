import Link from "next/link"
import { ArrowRight, Leaf, BookOpen, Cloud, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductShowcase from "@/components/product-showcase"
import MarketUpdates from "@/components/market-updates"
import CropAdvisory from "@/components/crop-advisory"
import KnowledgeCenter from "@/components/knowledge-center"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Complete Farming Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  AgriMart provides quality agricultural inputs, expert advice, and market access to help farmers grow
                  better.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/shop">
                    Shop Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/dashboard/farmer">Farmer Dashboard</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/advisory">Get Crop Advisory</Link>
                </Button>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=550&width=550"
              alt="Farmer in field with crops"
              width={550}
              height={550}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Services</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Complete Farming Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything farmers need to grow better crops and maximize profits
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <Link href="/shop" className="block">
              <Card className="border-green-200 dark:border-green-800 h-full transition-all hover:shadow-md hover:border-green-300 dark:hover:border-green-700">
                <CardHeader className="pb-2">
                  <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <CardTitle className="mt-2">Quality Inputs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Premium seeds, fertilizers, and pesticides from trusted brands.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/advisory" className="block">
              <Card className="border-green-200 dark:border-green-800 h-full transition-all hover:shadow-md hover:border-green-300 dark:hover:border-green-700">
                <CardHeader className="pb-2">
                  <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <CardTitle className="mt-2">Crop Advisory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Expert guidance on crop selection, disease management, and best practices.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/weather" className="block">
              <Card className="border-green-200 dark:border-green-800 h-full transition-all hover:shadow-md hover:border-green-300 dark:hover:border-green-700">
                <CardHeader className="pb-2">
                  <Cloud className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <CardTitle className="mt-2">Weather Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Accurate weather forecasts to help plan farming activities.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/market-prices" className="block">
              <Card className="border-green-200 dark:border-green-800 h-full transition-all hover:shadow-md hover:border-green-300 dark:hover:border-green-700">
                <CardHeader className="pb-2">
                  <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <CardTitle className="mt-2">Market Prices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Real-time market prices to help you sell at the best rates.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Crop Advisory */}
      <CropAdvisory />

      {/* Market Updates */}
      <MarketUpdates />

      {/* Knowledge Center */}
      <KnowledgeCenter />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Grow Better?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of farmers who trust AgriMart for their farming needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/register">Create an Account</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

