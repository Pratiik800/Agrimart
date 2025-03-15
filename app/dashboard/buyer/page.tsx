"use client"

import { useState } from "react"
import {
  Package,
  ShoppingBag,
  Heart,
  Clock,
  MapPin,
  CreditCard,
  User,
  LogOut,
  Calendar,
  Truck,
  CheckCircle2,
  AlertCircle,
  Search,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect } from "react"

// Sample orders data
const orders = [
  {
    id: "ORD-5678",
    date: "2023-06-15",
    status: "Delivered",
    total: 1198,
    items: [
      {
        name: "Organic Tomato Seeds",
        price: 299,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "NPK Fertilizer",
        price: 600,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  {
    id: "ORD-1234",
    date: "2023-06-10",
    status: "Processing",
    total: 2999,
    items: [
      {
        name: "Drip Irrigation Kit",
        price: 2999,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  {
    id: "ORD-9012",
    date: "2023-06-05",
    status: "Shipped",
    total: 1299,
    items: [
      {
        name: "Hand Sprayer",
        price: 1299,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
]

// Sample wishlist data
const wishlist = [
  {
    id: 1,
    name: "Organic Pesticide",
    price: 599,
    image: "/placeholder.svg?height=100&width=100",
    stock: "In Stock",
  },
  {
    id: 2,
    name: "Garden Tool Set",
    price: 1499,
    image: "/placeholder.svg?height=100&width=100",
    stock: "In Stock",
  },
  {
    id: 3,
    name: "Soil Testing Kit",
    price: 899,
    image: "/placeholder.svg?height=100&width=100",
    stock: "Out of Stock",
  },
]

// Sample addresses
const addresses = [
  {
    id: 1,
    type: "Home",
    name: "Rahul Sharma",
    address: "123, Green Avenue, Sector 14",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    phone: "+91 98765 43210",
    default: true,
  },
  {
    id: 2,
    type: "Office",
    name: "Rahul Sharma",
    address: "456, Tech Park, Whitefield",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560066",
    phone: "+91 98765 43210",
    default: false,
  },
]

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [farmerProducts, setFarmerProducts] = useState([])

  // Load products added by farmers
  useEffect(() => {
    const storedProducts = localStorage.getItem("farmerProducts")
    if (storedProducts) {
      setFarmerProducts(JSON.parse(storedProducts))
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Buyer Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Rahul! Manage your orders, wishlist, and account settings.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/shop">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="md:col-span-1">
            <CardHeader className="pb-2">
              <div className="flex flex-col items-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80&text=RS" alt="Rahul Sharma" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">Rahul Sharma</CardTitle>
                <CardDescription>rahul.sharma@example.com</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <nav className="flex flex-col space-y-1">
                <Button
                  variant={activeTab === "overview" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button
                  variant={activeTab === "orders" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("orders")}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  My Orders
                </Button>
                <Button
                  variant={activeTab === "wishlist" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("wishlist")}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button
                  variant={activeTab === "addresses" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("addresses")}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Addresses
                </Button>
                <Button
                  variant={activeTab === "payments" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("payments")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button
                  variant={activeTab === "profile" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile Settings
                </Button>
                <Button
                  variant={activeTab === "farmer-products" ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveTab("farmer-products")}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Farmer Products
                </Button>
              </nav>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </CardFooter>
          </Card>

          <div className="md:col-span-3 space-y-6">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">Over the last 6 months</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">Products saved for later</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Reward Points</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">350</div>
                      <p className="text-xs text-muted-foreground">Worth ₹350 in discounts</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your most recent purchases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {orders.slice(0, 2).map((order) => (
                        <div
                          key={order.id}
                          className="flex flex-col sm:flex-row gap-4 pb-4 border-b last:border-0 last:pb-0"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex gap-2">
                              {order.items.slice(0, 2).map((item, index) => (
                                <div key={index} className="w-16 h-16 rounded-md overflow-hidden">
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                              {order.items.length > 2 && (
                                <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center">
                                  <span className="text-sm font-medium">+{order.items.length - 2}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div>
                                <p className="font-medium">Order #{order.id}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge
                                    variant={
                                      order.status === "Delivered"
                                        ? "success"
                                        : order.status === "Shipped"
                                          ? "info"
                                          : "warning"
                                    }
                                  >
                                    {order.status}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" /> {formatDate(order.date)}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">₹{order.total}</p>
                                <Button variant="ghost" size="sm" className="h-8 mt-1">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("orders")}>
                      View All Orders
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Wishlist Highlights</CardTitle>
                    <CardDescription>Products you've saved for later</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {wishlist.slice(0, 3).map((item) => (
                        <div key={item.id} className="border rounded-lg overflow-hidden">
                          <div className="aspect-square relative">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 bg-background/80 rounded-full"
                            >
                              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                            </Button>
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium truncate">{item.name}</h3>
                            <div className="flex items-center justify-between mt-1">
                              <p className="font-bold">₹{item.price}</p>
                              <Badge
                                variant={item.stock === "In Stock" ? "outline" : "secondary"}
                                className={
                                  item.stock === "In Stock"
                                    ? "bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/20"
                                    : "bg-red-50 text-red-700 hover:bg-red-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/20"
                                }
                              >
                                {item.stock}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("wishlist")}>
                      View All Wishlist Items
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Orders</CardTitle>
                  <CardDescription>Track and manage your orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg overflow-hidden">
                        <div className="bg-muted p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <p className="font-medium">Order #{order.id}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge
                                  variant={
                                    order.status === "Delivered"
                                      ? "success"
                                      : order.status === "Shipped"
                                        ? "info"
                                        : "warning"
                                  }
                                >
                                  {order.status}
                                </Badge>
                                <span className="text-xs text-muted-foreground flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" /> {formatDate(order.date)}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">₹{order.total}</p>
                              <div className="flex gap-2 mt-1">
                                <Button variant="outline" size="sm" className="h-8">
                                  Track Order
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8">
                                  Invoice
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="space-y-4">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex gap-4">
                                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <p className="font-medium">{item.name}</p>
                                  <div className="flex items-center justify-between mt-1">
                                    <p className="text-sm text-muted-foreground">
                                      Qty: {item.quantity} × ₹{item.price}
                                    </p>
                                    <p className="font-medium">₹{item.price * item.quantity}</p>
                                  </div>
                                  {order.status === "Delivered" && (
                                    <div className="flex gap-2 mt-2">
                                      <Button variant="outline" size="sm" className="h-8">
                                        Write Review
                                      </Button>
                                      <Button variant="ghost" size="sm" className="h-8">
                                        Buy Again
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {order.status === "Delivered" && (
                          <div className="bg-muted/50 p-4 border-t">
                            <div className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                              <p className="text-sm">
                                Delivered on{" "}
                                {new Date(new Date(order.date).getTime() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  },
                                )}
                              </p>
                            </div>
                          </div>
                        )}
                        {order.status === "Shipped" && (
                          <div className="bg-muted/50 p-4 border-t">
                            <div className="flex items-center">
                              <Truck className="h-5 w-5 text-blue-500 mr-2" />
                              <p className="text-sm">
                                Expected delivery by{" "}
                                {new Date(new Date(order.date).getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  },
                                )}
                              </p>
                            </div>
                          </div>
                        )}
                        {order.status === "Processing" && (
                          <div className="bg-muted/50 p-4 border-t">
                            <div className="flex items-center">
                              <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                              <p className="text-sm">Processing your order. Will be shipped soon.</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Wishlist</CardTitle>
                  <CardDescription>Products you've saved for later</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {wishlist.map((item) => (
                      <div key={item.id} className="border rounded-lg overflow-hidden">
                        <div className="aspect-square relative">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-background/80 rounded-full"
                          >
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="flex items-center justify-between mt-1">
                            <p className="font-bold">₹{item.price}</p>
                            <Badge
                              variant={item.stock === "In Stock" ? "outline" : "secondary"}
                              className={
                                item.stock === "In Stock"
                                  ? "bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/20"
                                  : "bg-red-50 text-red-700 hover:bg-red-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/20"
                              }
                            >
                              {item.stock}
                            </Badge>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button className="w-full" size="sm" disabled={item.stock !== "In Stock"}>
                              Add to Cart
                            </Button>
                            <Button variant="outline" size="sm" className="flex-shrink-0">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Addresses</CardTitle>
                  <CardDescription>Manage your delivery addresses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <div key={address.id} className="border rounded-lg p-4 relative">
                        {address.default && <Badge className="absolute top-4 right-4">Default</Badge>}
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{address.type}</Badge>
                          <h3 className="font-medium">{address.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {address.address}, {address.city}, {address.state} - {address.pincode}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Phone: {address.phone}</p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            Delete
                          </Button>
                          {!address.default && (
                            <Button variant="ghost" size="sm">
                              Set as Default
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" /> Add New Address
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Payment Methods Tab */}
            {activeTab === "payments" && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your saved payment methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 relative">
                      <Badge className="absolute top-4 right-4">Default</Badge>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-6 bg-blue-500 rounded"></div>
                        <h3 className="font-medium">HDFC Bank Credit Card</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Card ending with 4567 • Expires 05/25</p>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 relative">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-6 bg-purple-500 rounded"></div>
                        <h3 className="font-medium">UPI - rahul@upi</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Linked to phone number ending with 3210</p>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                        <Button variant="ghost" size="sm">
                          Set as Default
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" /> Add New Payment Method
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Profile Settings Tab */}
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Manage your account details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="flex flex-col items-center gap-4 mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96&text=RS" alt="Rahul Sharma" />
                        <AvatarFallback>RS</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        Change Photo
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Rahul" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Sharma" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="rahul.sharma@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+91 98765 43210" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notifications">Email Notifications</Label>
                      <Select defaultValue="all">
                        <SelectTrigger id="notifications">
                          <SelectValue placeholder="Select notification preferences" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All notifications</SelectItem>
                          <SelectItem value="important">Important notifications only</SelectItem>
                          <SelectItem value="none">No notifications</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}

            {/* Farmer Products Tab */}
            {activeTab === "farmer-products" && (
              <Card>
                <CardHeader>
                  <CardTitle>Products from Farmers</CardTitle>
                  <CardDescription>Browse products added by farmers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search farmer products..."
                        className="w-full bg-background pl-8 pr-4"
                      />
                    </div>
                  </div>

                  {farmerProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {farmerProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden">
                          <div className="aspect-square relative">
                            <img
                              src={product.image || "/placeholder.svg?height=100&width=100"}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 bg-background/80 rounded-full"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium truncate">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.category}</p>
                            <div className="flex items-center justify-between mt-1">
                              <p className="font-bold">₹{product.price}</p>
                              <Badge variant={product.stock > 10 ? "outline" : "destructive"}>
                                {product.stock > 10 ? "In Stock" : "Low Stock"}
                              </Badge>
                            </div>
                            <Button className="w-full mt-3" size="sm">
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No products found</h3>
                      <p className="text-muted-foreground mb-4">
                        Farmers haven't added any products yet. Check back later!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

