"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Star, Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample product data
const products = {
  seeds: [
    {
      id: 1,
      name: "Hybrid Tomato Seeds",
      price: 299,
      unit: "packet",
      brand: "GrowMore",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: true,
    },
    {
      id: 2,
      name: "Bt Cotton Seeds",
      price: 799,
      unit: "kg",
      brand: "CropKing",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: false,
    },
    {
      id: 3,
      name: "Hybrid Maize Seeds",
      price: 549,
      unit: "kg",
      brand: "SeedTech",
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: true,
    },
    {
      id: 4,
      name: "Paddy Seeds",
      price: 399,
      unit: "kg",
      brand: "GreenHarvest",
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: false,
    },
  ],
  fertilizers: [
    {
      id: 5,
      name: "NPK 20-20-20",
      price: 899,
      unit: "50kg",
      brand: "NutriSoil",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: true,
    },
    {
      id: 6,
      name: "Organic Vermicompost",
      price: 499,
      unit: "25kg",
      brand: "OrganicLife",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: true,
    },
    {
      id: 7,
      name: "Urea Fertilizer",
      price: 349,
      unit: "50kg",
      brand: "CropNutrient",
      rating: 4.4,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: false,
    },
    {
      id: 8,
      name: "Micronutrient Mix",
      price: 599,
      unit: "5kg",
      brand: "MicroGrow",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: false,
    },
  ],
  pesticides: [
    {
      id: 9,
      name: "Insecticide Spray",
      price: 449,
      unit: "1L",
      brand: "BugShield",
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: true,
    },
    {
      id: 10,
      name: "Fungicide Solution",
      price: 599,
      unit: "500ml",
      brand: "FungiClear",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: false,
    },
    {
      id: 11,
      name: "Weedicide",
      price: 399,
      unit: "1L",
      brand: "WeedFree",
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: false,
    },
    {
      id: 12,
      name: "Organic Pest Control",
      price: 649,
      unit: "1L",
      brand: "NaturalGuard",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: true,
    },
  ],
  equipment: [
    {
      id: 13,
      name: "Hand Sprayer",
      price: 1299,
      unit: "piece",
      brand: "FarmTools",
      rating: 4.4,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: true,
    },
    {
      id: 14,
      name: "Drip Irrigation Kit",
      price: 2999,
      unit: "set",
      brand: "WaterWise",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: true,
    },
    {
      id: 15,
      name: "Garden Tools Set",
      price: 899,
      unit: "set",
      brand: "GardenPro",
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: false,
    },
    {
      id: 16,
      name: "Soil Testing Kit",
      price: 1499,
      unit: "kit",
      brand: "SoilCheck",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      bestseller: false,
    },
  ],
}

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("seeds")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Products</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Quality Agricultural Inputs</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Premium products from trusted brands to maximize your crop yield
            </p>
          </div>
        </div>

        <Tabs defaultValue="seeds" className="mt-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="seeds">Seeds</TabsTrigger>
              <TabsTrigger value="fertilizers">Fertilizers</TabsTrigger>
              <TabsTrigger value="pesticides">Pesticides</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(products).map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products[category].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href={`/shop/${activeTab}`}>
              View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const router = useRouter()

  const toggleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // Check if user is logged in (this is a simplified check)
    const isLoggedIn = false // In a real app, this would be determined by auth state

    if (!isLoggedIn) {
      // Redirect to register page with a redirect parameter
      router.push(`/register?redirectTo=/shop/product/${product.id}`)
      return
    }

    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
        {product.bestseller && (
          <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">Bestseller</Badge>
        )}
        <button
          className={`absolute top-2 left-2 p-1.5 bg-white rounded-full ${isWishlisted ? "text-red-500" : "text-gray-400"} shadow-sm hover:bg-gray-100`}
          onClick={toggleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <div className="mt-2 flex justify-between items-center">
          <p className="font-bold text-green-600 dark:text-green-400">
            ₹{product.price}/{product.unit}
          </p>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm">{product.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Brand: {product.brand}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

