import { Leaf, Users, ShieldCheck, TruckIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About AgriMart</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to bridge the gap between farmers and consumers for a fair, transparent, and sustainable
                agricultural trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Revolutionizing Agricultural Trade</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                AgriMart is more than just an e-commerce platform—it's a digital revolution for agriculture. We're
                committed to creating a fair marketplace where farmers receive the true value of their produce and
                consumers get access to fresh, high-quality agricultural products.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                By eliminating middlemen and leveraging technology, we're building a sustainable ecosystem that benefits
                both producers and consumers while promoting transparent and ethical trade practices.
              </p>
            </div>
            <img
              src="/placeholder.svg?height=550&width=550"
              alt="Farmers and consumers connected through technology"
              width={550}
              height={550}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What We Stand For</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values guide everything we do at AgriMart
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                <CardTitle className="mt-2">Farmer Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We believe in giving farmers the tools, platform, and fair prices they deserve.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-2">
                <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                <CardTitle className="mt-2">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We promote clear, honest transactions between all parties in the agricultural supply chain.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-2">
                <TruckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                <CardTitle className="mt-2">Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We streamline the farm-to-table process, reducing waste and improving delivery times.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-2">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                <CardTitle className="mt-2">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We support sustainable farming practices and environmentally responsible agriculture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">The People Behind AgriMart</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A dedicated team of professionals passionate about agriculture and technology
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Team Member ${i}`}
                  alt={`Team member ${i}`}
                  width={300}
                  height={300}
                  className="aspect-square rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Team Member {i}</h3>
                  <p className="text-sm text-muted-foreground">Position Title</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

