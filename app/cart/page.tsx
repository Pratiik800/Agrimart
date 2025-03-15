"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2, CreditCard, Truck, MapPin, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Organic Tomato Seeds",
    price: 299,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
    seller: "GreenHarvest Seeds",
  },
  {
    id: 2,
    name: "NPK Fertilizer (5kg)",
    price: 450,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    seller: "NutriSoil",
  },
  {
    id: 3,
    name: "Garden Tool Set",
    price: 1299,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    seller: "FarmTools",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [activeTab, setActiveTab] = useState("cart")

  // Shipping and payment form states
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    email: "",
  })

  const [paymentMethod, setPaymentMethod] = useState("card")

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const applyCoupon = () => {
    if (couponCode.trim() === "") return
    setCouponApplied(true)
    // In a real app, you would validate the coupon code with the backend
  }

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleContinueToShipping = () => {
    setActiveTab("shipping")
  }

  const handleContinueToPayment = () => {
    setActiveTab("payment")
  }

  const handlePlaceOrder = () => {
    // In a real app, you would process the order here
    alert("Order placed successfully! Thank you for shopping with AgriMart.")
    setCartItems([])
    setActiveTab("cart")
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0
  const deliveryFee = subtotal > 1000 ? 0 : 99
  const total = subtotal - discount + deliveryFee

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Shopping Cart</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Review your items and proceed to checkout
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            {cartItems.length > 0 ? (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="cart">Cart</TabsTrigger>
                  <TabsTrigger value="shipping" disabled={cartItems.length === 0}>
                    Shipping
                  </TabsTrigger>
                  <TabsTrigger value="payment" disabled={cartItems.length === 0 || activeTab === "cart"}>
                    Payment
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="cart" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            <span>Cart Items ({cartItems.length})</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b"
                            >
                              <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">Sold by: {item.seller}</p>
                                <p className="font-bold text-green-600 dark:text-green-400 mt-1">₹{item.price}</p>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <div className="flex items-center border rounded-md">
                                  <button
                                    className="p-1 px-2"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="px-3">{item.quantity}</span>
                                  <button
                                    className="p-1 px-2"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                </div>
                                <button
                                  className="text-sm text-red-500 flex items-center"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash2 className="h-3 w-3 mr-1" /> Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" asChild>
                            <Link href="/shop">
                              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
                            </Link>
                          </Button>
                          <Button onClick={handleContinueToShipping}>
                            Continue to Shipping <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                          </div>
                          {couponApplied && (
                            <div className="flex justify-between text-green-600 dark:text-green-400">
                              <span>Discount (10%)</span>
                              <span>-₹{discount.toFixed(2)}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Delivery Fee</span>
                            <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee.toFixed(2)}`}</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                          </div>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Enter coupon code"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                              disabled={couponApplied}
                            />
                            <Button
                              variant="outline"
                              onClick={applyCoupon}
                              disabled={couponApplied || couponCode.trim() === ""}
                            >
                              Apply
                            </Button>
                          </div>
                          {couponApplied && (
                            <div className="text-sm text-green-600 dark:text-green-400">
                              Coupon applied successfully!
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="shipping" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Truck className="mr-2 h-5 w-5" />
                            <span>Shipping Information</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input
                                  id="fullName"
                                  name="fullName"
                                  value={shippingInfo.fullName}
                                  onChange={handleShippingInfoChange}
                                  placeholder="Enter your full name"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={shippingInfo.email}
                                  onChange={handleShippingInfoChange}
                                  placeholder="Enter your email address"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  value={shippingInfo.phone}
                                  onChange={handleShippingInfoChange}
                                  placeholder="Enter your phone number"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Textarea
                                  id="address"
                                  name="address"
                                  value={shippingInfo.address}
                                  onChange={handleShippingInfoChange}
                                  placeholder="Enter your full address"
                                  required
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="city">City</Label>
                                  <Input
                                    id="city"
                                    name="city"
                                    value={shippingInfo.city}
                                    onChange={handleShippingInfoChange}
                                    placeholder="Enter your city"
                                    required
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="state">State</Label>
                                  <Select
                                    value={shippingInfo.state}
                                    onValueChange={(value) => setShippingInfo((prev) => ({ ...prev, state: value }))}
                                  >
                                    <SelectTrigger id="state">
                                      <SelectValue placeholder="Select state" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                                      <SelectItem value="assam">Assam</SelectItem>
                                      <SelectItem value="bihar">Bihar</SelectItem>
                                      <SelectItem value="delhi">Delhi</SelectItem>
                                      <SelectItem value="gujarat">Gujarat</SelectItem>
                                      <SelectItem value="haryana">Haryana</SelectItem>
                                      <SelectItem value="karnataka">Karnataka</SelectItem>
                                      <SelectItem value="kerala">Kerala</SelectItem>
                                      <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                      <SelectItem value="punjab">Punjab</SelectItem>
                                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                                      <SelectItem value="telangana">Telangana</SelectItem>
                                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="pincode">PIN Code</Label>
                                <Input
                                  id="pincode"
                                  name="pincode"
                                  value={shippingInfo.pincode}
                                  onChange={handleShippingInfoChange}
                                  placeholder="Enter your PIN code"
                                  required
                                />
                              </div>
                            </div>
                          </form>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={() => setActiveTab("cart")}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
                          </Button>
                          <Button onClick={handleContinueToPayment}>
                            Continue to Payment <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            {cartItems.map((item) => (
                              <div key={item.id} className="flex justify-between text-sm">
                                <span>
                                  {item.name} × {item.quantity}
                                </span>
                                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                          </div>
                          {couponApplied && (
                            <div className="flex justify-between text-green-600 dark:text-green-400">
                              <span>Discount (10%)</span>
                              <span>-₹{discount.toFixed(2)}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Delivery Fee</span>
                            <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee.toFixed(2)}`}</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="payment" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <CreditCard className="mr-2 h-5 w-5" />
                            <span>Payment Method</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                            <div className="flex items-center space-x-2 border p-4 rounded-md">
                              <RadioGroupItem value="card" id="card" />
                              <Label htmlFor="card" className="flex-1 cursor-pointer">
                                <div className="font-medium">Credit/Debit Card</div>
                                <div className="text-sm text-muted-foreground">Pay securely with your card</div>
                              </Label>
                              <div className="flex gap-2">
                                <div className="w-10 h-6 bg-blue-500 rounded"></div>
                                <div className="w-10 h-6 bg-red-500 rounded"></div>
                                <div className="w-10 h-6 bg-green-500 rounded"></div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 border p-4 rounded-md">
                              <RadioGroupItem value="upi" id="upi" />
                              <Label htmlFor="upi" className="flex-1 cursor-pointer">
                                <div className="font-medium">UPI</div>
                                <div className="text-sm text-muted-foreground">
                                  Pay using UPI apps like Google Pay, PhonePe, etc.
                                </div>
                              </Label>
                              <div className="w-10 h-6 bg-purple-500 rounded"></div>
                            </div>

                            <div className="flex items-center space-x-2 border p-4 rounded-md">
                              <RadioGroupItem value="netbanking" id="netbanking" />
                              <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                                <div className="font-medium">Net Banking</div>
                                <div className="text-sm text-muted-foreground">Pay directly from your bank account</div>
                              </Label>
                              <div className="w-10 h-6 bg-gray-500 rounded"></div>
                            </div>

                            <div className="flex items-center space-x-2 border p-4 rounded-md">
                              <RadioGroupItem value="cod" id="cod" />
                              <Label htmlFor="cod" className="flex-1 cursor-pointer">
                                <div className="font-medium">Cash on Delivery</div>
                                <div className="text-sm text-muted-foreground">Pay when you receive your order</div>
                              </Label>
                              <div className="w-10 h-6 bg-yellow-500 rounded"></div>
                            </div>
                          </RadioGroup>

                          {paymentMethod === "card" && (
                            <div className="mt-6 space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="expiryDate">Expiry Date</Label>
                                  <Input id="expiryDate" placeholder="MM/YY" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="cvv">CVV</Label>
                                  <Input id="cvv" placeholder="123" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="nameOnCard">Name on Card</Label>
                                <Input id="nameOnCard" placeholder="Enter name as on card" />
                              </div>
                            </div>
                          )}

                          {paymentMethod === "upi" && (
                            <div className="mt-6 space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="upiId">UPI ID</Label>
                                <Input id="upiId" placeholder="yourname@upi" />
                              </div>
                            </div>
                          )}

                          {paymentMethod === "netbanking" && (
                            <div className="mt-6 space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="bank">Select Bank</Label>
                                <Select>
                                  <SelectTrigger id="bank">
                                    <SelectValue placeholder="Select your bank" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="sbi">State Bank of India</SelectItem>
                                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                                    <SelectItem value="icici">ICICI Bank</SelectItem>
                                    <SelectItem value="axis">Axis Bank</SelectItem>
                                    <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={() => setActiveTab("shipping")}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shipping
                          </Button>
                          <Button onClick={handlePlaceOrder}>Place Order</Button>
                        </CardFooter>
                      </Card>
                    </div>
                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            {cartItems.map((item) => (
                              <div key={item.id} className="flex justify-between text-sm">
                                <span>
                                  {item.name} × {item.quantity}
                                </span>
                                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                          <Separator />
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                          </div>
                          {couponApplied && (
                            <div className="flex justify-between text-green-600 dark:text-green-400">
                              <span>Discount (10%)</span>
                              <span>-₹{discount.toFixed(2)}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Delivery Fee</span>
                            <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee.toFixed(2)}`}</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                          </div>

                          <div className="pt-4">
                            <div className="flex items-start gap-2 text-sm">
                              <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">Delivery Address:</p>
                                <p className="text-muted-foreground">
                                  {shippingInfo.fullName && `${shippingInfo.fullName}, `}
                                  {shippingInfo.address && `${shippingInfo.address}, `}
                                  {shippingInfo.city && `${shippingInfo.city}, `}
                                  {shippingInfo.state && `${shippingInfo.state}, `}
                                  {shippingInfo.pincode && `${shippingInfo.pincode}`}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <Card className="text-center py-12">
                <CardContent className="flex flex-col items-center">
                  <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                  <p className="text-muted-foreground mb-6">
                    Looks like you haven't added any products to your cart yet.
                  </p>
                  <Button asChild>
                    <Link href="/shop">Start Shopping</Link>
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

