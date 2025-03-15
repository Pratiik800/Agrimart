"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"

// Sample wishlist data
const initialWishlistItems = [
  {
    id: 1,
    name: "Hybrid Tomato Seeds",
    price: 299,
    unit: "packet",
    brand: "GrowMore",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 2,
    name: "Organic Vermicompost",
    price: 499,
    unit: "25kg",
    brand: "OrganicLife",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 3,
    name: "Drip Irrigation Kit",
    price: 2999,
    unit: "set",
    brand: "WaterWise",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 4,
    name: "Insecticide Spray",
    price: 449,
    unit: "1L",
    brand: "BugShield",
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)

  const removeFromWishlist = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  const moveToCart = (id) => {
    // In a real app, you would add the item to the cart
    // and then remove it from the wishlist
    console.log(`Moving item ${id} to cart`)
    // For demo purposes, we'll just remove it from wishlist
    removeFromWishlist(id)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Wishlist</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">Products you've saved for later</p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            {wishlistItems.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {wishlistItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden h-full flex flex-col">
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                        <button
                          className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-red-500 shadow-sm hover:bg-gray-100"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <CardContent className="p-4 flex-grow">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="mt-2 flex justify-between items-center">
                          <p className="font-bold text-green-600 dark:text-green-400">
                            ₹{item.price}/{item.unit}
                          </p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">{item.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Brand: {item.brand}</p>
                        <p className={`text-sm mt-2 ${item.inStock ? "text-green-600" : "text-red-500"}`}>
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 mt-auto">
                        <Button className="w-full" onClick={() => moveToCart(item.id)} disabled={!item.inStock}>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {item.inStock ? "Move to Cart" : "Out of Stock"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent className="flex flex-col items-center">
                  <Heart className="h-16 w-16 text-muted-foreground mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
                  <p className="text-muted-foreground mb-6">
                    Save items you like by clicking the heart icon on product pages.
                  </p>
                  <Button asChild>
                    <Link href="/shop">Explore Products</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

