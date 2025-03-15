import { CheckCircle2, Truck, CreditCard, ShoppingBag } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Process</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How AgriMart Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple four-step process that connects farmers directly with buyers
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-green-200 dark:bg-green-800 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-800 mb-4">
              <CheckCircle2 className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Register & List</h3>
            <p className="mt-2 text-muted-foreground">
              Farmers register and list their products with details and pricing
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-800 mb-4">
              <ShoppingBag className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Browse & Order</h3>
            <p className="mt-2 text-muted-foreground">Buyers browse products, compare prices, and place orders</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-800 mb-4">
              <CreditCard className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Secure Payment</h3>
            <p className="mt-2 text-muted-foreground">Multiple payment options with secure transaction processing</p>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-800 mb-4">
              <Truck className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Delivery & Feedback</h3>
            <p className="mt-2 text-muted-foreground">Orders are delivered and users can rate their experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

