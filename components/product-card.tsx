"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

export default function ProductCard({ product, showBadge = true }) {
  const router = useRouter()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // Check if user is logged in (this is a simplified check)
    const isLoggedIn = false // In a real app, this would be determined by auth state

    if (!isLoggedIn) {
      // Redirect to register page with a redirect parameter
      router.push(`/register?redirectTo=/shop/product/${product.id}`)
      return
    }

    // Add to cart logic would go here
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

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
      <Link href={`/shop/product/${product.id}`}>
        <CardHeader className="p-0 relative">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
          {showBadge && product.bestseller && (
            <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">Bestseller</Badge>
          )}
          {showBadge && product.organic && (
            <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">Organic</Badge>
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
          <p className="text-sm text-muted-foreground mt-1">
            {product.brand || product.farmer} • {product.location}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button className="w-full" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

