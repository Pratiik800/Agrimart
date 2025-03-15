"use client"

import { Filter, Heart } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useState } from "react"
// Import toast directly instead of using the hook
import { toast } from "@/components/ui/use-toast"

// Sample products data
const products = [
  {
    id: 1,
    name: "Hybrid Tomato Seeds",
    price: 299,
    unit: "packet",
    brand: "GrowMore",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
    bestseller: true,
    category: "Seeds",
    subcategory: "Vegetable Seeds",
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
    category: "Seeds",
    subcategory: "Cotton Seeds",
  },
  {
    id: 3,
    name: "NPK 20-20-20",
    price: 899,
    unit: "50kg",
    brand: "NutriSoil",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200",
    bestseller: true,
    category: "Fertilizers",
    subcategory: "NPK Fertilizers",
  },
  {
    id: 4,
    name: "Organic Vermicompost",
    price: 499,
    unit: "25kg",
    brand: "OrganicLife",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
    bestseller: true,
    category: "Fertilizers",
    subcategory: "Organic Fertilizers",
  },
  {
    id: 5,
    name: "Insecticide Spray",
    price: 449,
    unit: "1L",
    brand: "BugShield",
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200",
    bestseller: true,
    category: "Pesticides",
    subcategory: "Insecticides",
  },
  {
    id: 6,
    name: "Fungicide Solution",
    price: 599,
    unit: "500ml",
    brand: "FungiClear",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
    bestseller: false,
    category: "Pesticides",
    subcategory: "Fungicides",
  },
  {
    id: 7,
    name: "Hand Sprayer",
    price: 1299,
    unit: "piece",
    brand: "FarmTools",
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=200",
    bestseller: true,
    category: "Equipment",
    subcategory: "Sprayers",
  },
  {
    id: 8,
    name: "Drip Irrigation Kit",
    price: 2999,
    unit: "set",
    brand: "WaterWise",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
    bestseller: true,
    category: "Equipment",
    subcategory: "Irrigation",
  },
]

// Categories and subcategories
const categories = [
  {
    name: "Seeds",
    subcategories: ["Vegetable Seeds", "Cotton Seeds", "Maize Seeds", "Paddy Seeds"],
  },
  {
    name: "Fertilizers",
    subcategories: ["NPK Fertilizers", "Organic Fertilizers", "Micronutrients", "Biofertilizers"],
  },
  {
    name: "Pesticides",
    subcategories: ["Insecticides", "Fungicides", "Herbicides", "Organic Pesticides"],
  },
  {
    name: "Equipment",
    subcategories: ["Sprayers", "Irrigation", "Tools", "Soil Testing"],
  },
]

// Brands
const brands = ["GrowMore", "CropKing", "NutriSoil", "OrganicLife", "BugShield", "FungiClear", "FarmTools", "WaterWise"]

export default function ShopPage() {
  const router = useRouter()
  const [wishlist, setWishlist] = useState({})

  const toggleWishlist = (productId, productName) => {
    const isLoggedIn = false // In a real app, this would be determined by auth state

    if (!isLoggedIn) {
      // Redirect to register page with a redirect parameter
      router.push(`/register?redirectTo=/shop/product/${productId}`)
      return
    }

    setWishlist((prevState) => {
      const newState = { ...prevState }
      if (newState[productId]) {
        delete newState[productId]
        toast({
          title: "Removed from wishlist",
          description: `${productName} has been removed from your wishlist.`,
        })
      } else {
        newState[productId] = true
        toast({
          title: "Added to wishlist",
          description: `${productName} has been added to your wishlist.`,
        })
      }
      return newState
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Agricultural Products</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Premium quality seeds, fertilizers, pesticides, and equipment for better farming
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <Button variant="ghost" size="sm">
                    Clear All
                  </Button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={`category-${category.name}`} />
                          <label
                            htmlFor={`category-${category.name}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.name}
                          </label>
                        </div>
                        <div className="pl-6 space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <div key={subcategory} className="flex items-center space-x-2">
                              <Checkbox id={`subcategory-${subcategory}`} />
                              <label
                                htmlFor={`subcategory-${subcategory}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {subcategory}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="flex items-center space-x-2">
                    <Input type="number" placeholder="Min" className="h-9" />
                    <span>to</span>
                    <Input type="number" placeholder="Max" className="h-9" />
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Brands */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Brands</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <label
                          htmlFor={`brand-${brand}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Ratings */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Ratings</h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {rating}+ Stars
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:w-3/4">
              {/* Sort and Filter Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
                <div className="flex items-center gap-2">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px] h-9">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest Arrivals</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" className="h-9 md:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => {
                  const isWishlisted = !!wishlist[product.id]
                  return (
                    <Card key={product.id} className="overflow-hidden flex flex-col h-full">
                      <CardHeader className="p-0 relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        {product.bestseller && (
                          <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">Bestseller</Badge>
                        )}
                        <button
                          className={`absolute top-2 left-2 p-1.5 bg-white rounded-full ${isWishlisted ? "text-red-500" : "text-gray-400"} shadow-sm hover:bg-gray-100`}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleWishlist(product.id, product.name)
                          }}
                        >
                          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
                        </button>
                      </CardHeader>
                      <CardContent className="p-4 flex-grow">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <span className="text-xs">{product.category}</span>
                        </div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <div className="mt-2 flex justify-between items-center">
                          <p className="font-bold text-green-600 dark:text-green-400">
                            ₹{product.price}/{product.unit}
                          </p>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
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
                })}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

