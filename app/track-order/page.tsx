"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

// Sample order data
const sampleOrder = {
  id: "ORD123456789",
  date: "2023-06-15",
  status: "shipped",
  estimatedDelivery: "2023-06-20",
  items: [
    {
      id: 1,
      name: "Organic Tomato Seeds",
      quantity: 2,
      price: 299,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "NPK Fertilizer (5kg)",
      quantity: 1,
      price: 450,
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
  shippingAddress: {
    name: "John Doe",
    line1: "123 Main Street",
    line2: "Apartment 4B",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
    phone: "+91 9876543210",
  },
  paymentMethod: "UPI",
  subtotal: 1048,
  deliveryFee: 99,
  total: 1147,
  trackingSteps: [
    {
      id: 1,
      title: "Order Placed",
      description: "Your order has been placed",
      date: "June 15, 2023",
      time: "10:30 AM",
      completed: true,
    },
    {
      id: 2,
      title: "Order Processed",
      description: "Your order has been processed",
      date: "June 16, 2023",
      time: "09:45 AM",
      completed: true,
    },
    {
      id: 3,
      title: "Shipped",
      description: "Your order has been shipped",
      date: "June 17, 2023",
      time: "02:15 PM",
      completed: true,
    },
    {
      id: 4,
      title: "Out for Delivery",
      description: "Your order is out for delivery",
      date: "Expected June 19, 2023",
      time: "",
      completed: false,
    },
    {
      id: 5,
      title: "Delivered",
      description: "Your order has been delivered",
      date: "Expected June 20, 2023",
      time: "",
      completed: false,
    },
  ],
}

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [order, setOrder] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      setOrder(sampleOrder)
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Track Your Order</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Enter your order details to check the status of your purchase
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            {!order ? (
              <Card>
                <CardHeader>
                  <CardTitle>Order Tracking</CardTitle>
                  <CardDescription>
                    Please enter your order number and email address to track your order
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="orderNumber">Order Number</Label>
                      <Input
                        id="orderNumber"
                        placeholder="e.g., ORD123456789"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter the email used for the order"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSearching}>
                      {isSearching ? "Searching..." : "Track Order"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Order #{order.id}</CardTitle>
                        <CardDescription>Placed on {new Date(order.date).toLocaleDateString()}</CardDescription>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Status:</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Tracking Timeline */}
                      <div className="relative">
                        {order.trackingSteps.map((step, index) => (
                          <div key={step.id} className="flex mb-6 last:mb-0">
                            <div className="flex flex-col items-center mr-4">
                              <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                  step.completed
                                    ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                                    : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                                }`}
                              >
                                {step.completed ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                              </div>
                              {index < order.trackingSteps.length - 1 && (
                                <div
                                  className={`h-full w-0.5 ${
                                    step.completed && order.trackingSteps[index + 1].completed
                                      ? "bg-green-600 dark:bg-green-400"
                                      : "bg-gray-200 dark:bg-gray-700"
                                  }`}
                                ></div>
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium">{step.title}</h3>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {step.date} {step.time && `• ${step.time}`}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      {/* Estimated Delivery */}
                      <div>
                        <h3 className="font-medium mb-2">Estimated Delivery</h3>
                        <div className="flex items-center">
                          <Truck className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                          <span>{new Date(order.estimatedDelivery).toLocaleDateString()} (Expected)</span>
                        </div>
                      </div>

                      <Separator />

                      {/* Order Items */}
                      <div>
                        <h3 className="font-medium mb-2">Order Items</h3>
                        <div className="space-y-4">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold">₹{item.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Shipping Address */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium mb-2">Shipping Address</h3>
                          <div className="text-sm">
                            <p className="font-medium">{order.shippingAddress.name}</p>
                            <p>{order.shippingAddress.line1}</p>
                            {order.shippingAddress.line2 && <p>{order.shippingAddress.line2}</p>}
                            <p>
                              {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                              {order.shippingAddress.pincode}
                            </p>
                            <p className="mt-1">Phone: {order.shippingAddress.phone}</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Order Summary</h3>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Subtotal:</span>
                              <span>₹{order.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Delivery Fee:</span>
                              <span>₹{order.deliveryFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold pt-2">
                              <span>Total:</span>
                              <span>₹{order.total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between pt-2">
                              <span>Payment Method:</span>
                              <span>{order.paymentMethod}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                      <Link href="/orders">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Orders
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

