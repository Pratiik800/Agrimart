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
  vegetables: [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 2.99,
      unit: "kg",
      farmer: "Green Valley Farms",
      location: "Karnataka",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: 1.99,
      unit: "bunch",
      farmer: "Sunshine Organics",
      location: "Tamil Nadu",
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 3,
      name: "Bell Peppers",
      price: 3.49,
      unit: "kg",
      farmer: "Hillside Gardens",
      location: "Maharashtra",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      organic: false,
    },
    {
      id: 4,
      name: "Potatoes",
      price: 1.49,
      unit: "kg",
      farmer: "Earth Harvest",
      location: "Punjab",
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200",
      organic: false,
    },
  ],
  fruits: [
    {
      id: 5,
      name: "Alphonso Mangoes",
      price: 5.99,
      unit: "kg",
      farmer: "Tropical Delights",
      location: "Maharashtra",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 6,
      name: "Bananas",
      price: 1.29,
      unit: "dozen",
      farmer: "Fruit Haven",
      location: "Kerala",
      rating: 4.1,
      image: "/placeholder.svg?height=200&width=200",
      organic: false,
    },
    {
      id: 7,
      name: "Strawberries",
      price: 3.99,
      unit: "box",
      farmer: "Berry Good Farms",
      location: "Himachal Pradesh",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 8,
      name: "Watermelon",
      price: 2.49,
      unit: "piece",
      farmer: "Juicy Fruits Co.",
      location: "Andhra Pradesh",
      rating: 4.4,
      image: "/placeholder.svg?height=200&width=200",
      organic: false,
    },
  ],
  grains: [
    {
      id: 9,
      name: "Basmati Rice",
      price: 4.99,
      unit: "kg",
      farmer: "Golden Grains",
      location: "Haryana",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 10,
      name: "Organic Wheat",
      price: 2.79,
      unit: "kg",
      farmer: "Harvest Fields",
      location: "Madhya Pradesh",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 11,
      name: "Millet Mix",
      price: 3.29,
      unit: "kg",
      farmer: "Ancient Grains",
      location: "Rajasthan",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 12,
      name: "Pulses Variety",
      price: 3.99,
      unit: "kg",
      farmer: "Pulse Perfect",
      location: "Gujarat",
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200",
      organic: false,
    },
  ],
  dairy: [
    {
      id: 13,
      name: "Farm Fresh Milk",
      price: 1.99,
      unit: "liter",
      farmer: "Happy Cows Dairy",
      location: "Punjab",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 14,
      name: "Artisan Cheese",
      price: 6.99,
      unit: "pack",
      farmer: "Mountain Dairy",
      location: "Himachal Pradesh",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 15,
      name: "Natural Yogurt",
      price: 2.49,
      unit: "500g",
      farmer: "Creamy Delights",
      location: "Gujarat",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      organic: true,
    },
    {
      id: 16,
      name: "Farm Butter",
      price: 3.99,
      unit: "250g",
      farmer: "Golden Meadows",
      location: "Haryana",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      organic: false,
    },
  ],
}

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("vegetables")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover fresh, locally-grown produce directly from farmers across India
            </p>
          </div>
        </div>

        <Tabs defaultValue="vegetables" className="mt-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
              <TabsTrigger value="fruits">Fruits</TabsTrigger>
              <TabsTrigger value="grains">Grains & Pulses</TabsTrigger>
              <TabsTrigger value="dairy">Dairy</TabsTrigger>
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
            <Link href={`/marketplace/${activeTab}`}>
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
        {product.organic && <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">Organic</Badge>}
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
        <p className="text-sm text-muted-foreground mt-1">
          {product.farmer} • {product.location}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

