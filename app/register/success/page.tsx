"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegistrationSuccessPage() {
  const searchParams = useSearchParams()
  const [userType, setUserType] = useState("")

  useEffect(() => {
    const type = searchParams.get("type")
    setUserType(type || "")
  }, [searchParams])

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Registration Successful!</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                {userType === "farmer"
                  ? "Thank you for registering as a farmer on AgriMart. Your account has been created successfully."
                  : "Thank you for registering as a buyer on AgriMart. Your account has been created successfully."}
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
                <CardDescription>Here are some steps to get you started on AgriMart</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userType === "farmer" ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium">Complete Your Profile</h3>
                        <p className="text-sm text-muted-foreground">
                          Add more details about your farm, upload photos, and specify the types of produce you grow.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium">List Your Products</h3>
                        <p className="text-sm text-muted-foreground">
                          Start adding your agricultural products with details like quantity, price, and quality
                          specifications.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium">Explore Crop Advisory</h3>
                        <p className="text-sm text-muted-foreground">
                          Check out our personalized crop advisory services to maximize your yield and product quality.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium">Browse Products</h3>
                        <p className="text-sm text-muted-foreground">
                          Explore our marketplace to discover fresh produce directly from farmers across the country.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium">Save Your Favorites</h3>
                        <p className="text-sm text-muted-foreground">
                          Add products and farmers to your favorites for quick access during future visits.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium">Place Your First Order</h3>
                        <p className="text-sm text-muted-foreground">
                          Select products, add them to your cart, and complete your first purchase to experience
                          farm-fresh quality.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href={userType === "farmer" ? "/dashboard/farmer" : "/shop"}>
                    {userType === "farmer" ? "Go to Farmer Dashboard" : "Start Shopping"}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/">Return to Home</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

