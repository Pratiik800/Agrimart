"use client"

import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  PieChart,
  Package,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  ShoppingCart,
  Star,
  Plus,
  Search,
  Filter,
  MapPin,
  ArrowUpRight,
  ArrowDownRight,
  CloudSun,
  Zap,
  Bell,
  MoreHorizontal,
  Edit,
  Trash2,
  Share2,
  X,
  FileText,
  ImageIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend } from "@/components/ui/chart"
import { Line } from "recharts"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState, useEffect } from "react"

// Sample data for charts
const salesData = [
  { month: "Jan", sales: 4000, lastYear: 3000 },
  { month: "Feb", sales: 3000, lastYear: 2800 },
  { month: "Mar", sales: 5000, lastYear: 4200 },
  { month: "Apr", sales: 4500, lastYear: 3800 },
  { month: "May", sales: 6000, lastYear: 5100 },
  { month: "Jun", sales: 5500, lastYear: 4800 },
  { month: "Jul", sales: 7000, lastYear: 6000 },
  { month: "Aug", sales: 6500, lastYear: 5500 },
  { month: "Sep", sales: 8000, lastYear: 6800 },
  { month: "Oct", sales: 7500, lastYear: 6300 },
  { month: "Nov", sales: 9000, lastYear: 7500 },
  { month: "Dec", sales: 8500, lastYear: 7000 },
]

const productCategoryData = [
  { name: "Seeds", value: 35 },
  { name: "Fertilizers", value: 25 },
  { name: "Equipment", value: 20 },
  { name: "Pesticides", value: 15 },
  { name: "Others", value: 5 },
]

const weeklyRevenueData = [
  { day: "Mon", revenue: 1200 },
  { day: "Tue", revenue: 1400 },
  { day: "Wed", revenue: 1300 },
  { day: "Thu", revenue: 1500 },
  { day: "Fri", revenue: 1800 },
  { day: "Sat", revenue: 2000 },
  { day: "Sun", revenue: 1700 },
]

// Sample products data
const initialProducts = [
  {
    id: 1,
    name: "Organic Tomato Seeds",
    category: "Seeds",
    price: 299,
    stock: 150,
    sold: 85,
    rating: 4.5,
    image: "/placeholder.svg?height=100&width=100",
    status: "Active",
    description: "High-quality organic tomato seeds with excellent germination rate.",
    weight: "50g",
    dimensions: "10 x 5 x 2 cm",
    sku: "TOM-ORG-001",
  },
  {
    id: 2,
    name: "NPK Fertilizer",
    category: "Fertilizers",
    price: 899,
    stock: 75,
    sold: 42,
    rating: 4.2,
    image: "/placeholder.svg?height=100&width=100",
    status: "Active",
    description: "Balanced NPK fertilizer for all types of crops.",
    weight: "5kg",
    dimensions: "25 x 15 x 5 cm",
    sku: "FER-NPK-002",
  },
  {
    id: 3,
    name: "Hand Sprayer",
    category: "Equipment",
    price: 1299,
    stock: 30,
    sold: 18,
    rating: 4.7,
    image: "/placeholder.svg?height=100&width=100",
    status: "Active",
    description: "Durable hand sprayer for pesticides and fertilizers.",
    weight: "1.2kg",
    dimensions: "30 x 15 x 10 cm",
    sku: "EQP-SPR-003",
  },
  {
    id: 4,
    name: "Organic Pesticide",
    category: "Pesticides",
    price: 599,
    stock: 50,
    sold: 28,
    rating: 4.3,
    image: "/placeholder.svg?height=100&width=100",
    status: "Low Stock",
    description: "Eco-friendly pesticide safe for organic farming.",
    weight: "500ml",
    dimensions: "10 x 5 x 15 cm",
    sku: "PES-ORG-004",
  },
  {
    id: 5,
    name: "Drip Irrigation Kit",
    category: "Equipment",
    price: 2999,
    stock: 15,
    sold: 7,
    rating: 4.8,
    image: "/placeholder.svg?height=100&width=100",
    status: "Active",
    description: "Complete drip irrigation kit for efficient water usage.",
    weight: "3.5kg",
    dimensions: "40 x 30 x 15 cm",
    sku: "EQP-DRK-005",
  },
]

// Sample orders data
const orders = [
  {
    id: "ORD-001234",
    customer: "Rahul Sharma",
    location: "Delhi",
    products: ["Organic Tomato Seeds", "NPK Fertilizer"],
    total: 1198,
    status: "Delivered",
    date: "2023-06-15",
  },
  {
    id: "ORD-002",
    customer: "Priya Patel",
    location: "Mumbai",
    products: ["Hand Sprayer"],
    total: 1299,
    status: "Shipped",
    date: "2023-06-18",
  },
  {
    id: "ORD-003",
    customer: "Amit Kumar",
    location: "Bangalore",
    products: ["Organic Pesticide", "Drip Irrigation Kit"],
    total: 3598,
    status: "Processing",
    date: "2023-06-20",
  },
  {
    id: "ORD-004",
    customer: "Sneha Reddy",
    location: "Hyderabad",
    products: ["Organic Tomato Seeds"],
    total: 299,
    status: "Pending",
    date: "2023-06-21",
  },
]

// Sample customer feedback
const feedback = [
  {
    id: 1,
    customer: "Rahul Sharma",
    product: "Organic Tomato Seeds",
    rating: 5,
    comment: "Excellent germination rate! Almost all seeds sprouted within a week.",
    date: "2023-06-10",
    avatar: "/placeholder.svg?height=40&width=40&text=RS",
  },
  {
    id: 2,
    customer: "Priya Patel",
    product: "Hand Sprayer",
    rating: 4,
    comment: "Good quality sprayer. Durable and easy to use. The nozzle could be better though.",
    date: "2023-06-12",
    avatar: "/placeholder.svg?height=40&width=40&text=PP",
  },
  {
    id: 3,
    customer: "Amit Kumar",
    product: "NPK Fertilizer",
    rating: 5,
    comment: "Saw visible improvement in my plants within two weeks of application. Highly recommended!",
    date: "2023-06-15",
    avatar: "/placeholder.svg?height=40&width=40&text=AK",
  },
]

// Sample seasonal recommendations
const seasonalRecommendations = [
  {
    id: 1,
    product: "Monsoon Resistant Seeds",
    reason: "Upcoming monsoon season",
    confidence: 85,
    action: "Increase stock",
  },
  {
    id: 2,
    product: "Fungicides",
    reason: "High humidity expected",
    confidence: 78,
    action: "Promote now",
  },
  {
    id: 3,
    product: "Water Conservation Equipment",
    reason: "Dry spell predicted after monsoon",
    confidence: 65,
    action: "Plan inventory",
  },
]

// Sample price suggestions
const priceSuggestions = [
  {
    id: 1,
    product: "Organic Tomato Seeds",
    currentPrice: 299,
    suggestedPrice: 349,
    reason: "High demand, low competition",
  },
  {
    id: 2,
    product: "NPK Fertilizer",
    currentPrice: 899,
    suggestedPrice: 849,
    reason: "Competitive pricing needed",
  },
  {
    id: 3,
    product: "Drip Irrigation Kit",
    currentPrice: 2999,
    suggestedPrice: 3199,
    reason: "Premium product, price elasticity low",
  },
]

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [timeRange, setTimeRange] = useState("monthly")
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState(initialProducts)
  // Initialize localStorage with products on component mount
  useEffect(() => {
    localStorage.setItem("farmerProducts", JSON.stringify(products))
  }, [])
  const [editingProduct, setEditingProduct] = useState(null)
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    weight: "",
    dimensions: "",
    sku: "",
    status: "Active",
  })
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showBulkUpload, setShowBulkUpload] = useState(false)
  const [bulkUploadFile, setBulkUploadFile] = useState(null)
  const [bulkUploadStep, setBulkUploadStep] = useState(1)
  const [bulkUploadPreview, setBulkUploadPreview] = useState([])
  const [productImage, setProductImage] = useState(null)

  const handleProductAction = (action, productId) => {
    const product = products.find((p) => p.id === productId)
    if (action === "edit") {
      setEditingProduct(product)
    } else if (action === "delete") {
      toast({
        title: "Delete Product",
        description: `Deleting ${product?.name}`,
      })
      setProducts(products.filter((p) => p.id !== productId))
    } else if (action === "share") {
      toast({
        title: "Share Product",
        description: `Sharing ${product?.name}`,
      })
    }
  }

  const handlePriceSuggestion = (productId, suggestedPrice) => {
    toast({
      title: "Price Updated",
      description: `Product price updated to ₹${suggestedPrice}`,
    })
  }

  const handleAddProduct = () => {
    const id = Math.max(...products.map((p) => p.id)) + 1
    const newProductWithId = {
      ...newProduct,
      id,
      price: Number.parseInt(newProduct.price),
      stock: Number.parseInt(newProduct.stock),
      sold: 0,
      rating: 0,
      image: productImage ? URL.createObjectURL(productImage) : "/placeholder.svg?height=100&width=100",
    }
    setProducts([...products, newProductWithId])
    // Store products in localStorage to share with buyer dashboard
    localStorage.setItem("farmerProducts", JSON.stringify([...products, newProductWithId]))
    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      weight: "",
      dimensions: "",
      sku: "",
      status: "Active",
    })
    setProductImage(null)
    setShowAddProduct(false)
    toast({
      title: "Product Added",
      description: `${newProductWithId.name} has been added successfully.`,
    })
  }

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    setProducts(updatedProducts)
    // Update localStorage to share with buyer dashboard
    localStorage.setItem("farmerProducts", JSON.stringify(updatedProducts))
    setEditingProduct(null)
    toast({
      title: "Product Updated",
      description: `${editingProduct.name} has been updated successfully.`,
    })
  }

  const handleBulkUpload = () => {
    // In a real app, this would process the CSV file
    // For demo purposes, we'll just add some sample products
    const newBulkProducts = bulkUploadPreview.map((item, index) => ({
      id: Math.max(...products.map((p) => p.id)) + index + 1,
      name: item.name,
      category: item.category,
      price: Number.parseInt(item.price),
      stock: Number.parseInt(item.stock),
      sold: 0,
      rating: 0,
      status: "Active",
      image: "/placeholder.svg?height=100&width=100",
      description: item.description || "Product description",
      weight: item.weight || "N/A",
      dimensions: item.dimensions || "N/A",
      sku: item.sku || `SKU-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    }))

    setProducts([...products, ...newBulkProducts])
    // Store products in localStorage to share with buyer dashboard
    localStorage.setItem("farmerProducts", JSON.stringify([...products, ...newBulkProducts]))
    setBulkUploadFile(null)
    setBulkUploadStep(1)
    setBulkUploadPreview([])
    setShowBulkUpload(false)
    toast({
      title: "Bulk Upload Complete",
      description: `${newBulkProducts.length} products have been added successfully.`,
    })
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setBulkUploadFile(file)
      // Simulate parsing CSV file
      // In a real app, you would actually parse the CSV
      setBulkUploadPreview([
        { name: "Wheat Seeds", category: "Seeds", price: "199", stock: "200", description: "Premium wheat seeds" },
        {
          name: "Organic Compost",
          category: "Fertilizers",
          price: "499",
          stock: "100",
          description: "Natural compost",
        },
        { name: "Garden Hoe", category: "Equipment", price: "799", stock: "50", description: "Durable garden tool" },
      ])
      setBulkUploadStep(2)
    }
  }

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProductImage(file)
    }
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Farmer Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Rajesh Kumar! Here's what's happening with your farm business.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Select defaultValue="english">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                <SelectItem value="marathi">मराठी (Marathi)</SelectItem>
                <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                <SelectItem value="telugu">తెలుగు (Telugu)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            {/* Key Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium flex items-center">
                      <ArrowUpRight className="h-4 w-4 mr-1" /> +20.1%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium flex items-center">
                      <ArrowUpRight className="h-4 w-4 mr-1" /> +12.5%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Product Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.6</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500 font-medium flex items-center">
                      <ArrowUpRight className="h-4 w-4 mr-1" /> +0.2
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inventory Status</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-red-500 font-medium flex items-center">
                      <ArrowDownRight className="h-4 w-4 mr-1" /> -5.2%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sales Trend */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Sales Trend</CardTitle>
                  <CardDescription>Compare your sales performance over time</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <ChartContainer className="h-[300px]">
                    <Chart>
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#16a34a"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                        data={salesData}
                      />
                      <Line
                        type="monotone"
                        dataKey="lastYear"
                        stroke="#94a3b8"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        data={salesData}
                      />
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <ChartTooltipContent
                                className="border-none bg-background shadow-md"
                                items={[
                                  {
                                    label: "This Year",
                                    value: `₹${payload[0].value}`,
                                    color: "#16a34a",
                                  },
                                  {
                                    label: "Last Year",
                                    value: `₹${payload[1].value}`,
                                    color: "#94a3b8",
                                  },
                                ]}
                              />
                            )
                          }
                          return null
                        }}
                      />
                    </Chart>
                    <ChartLegend
                      className="mt-4 justify-center"
                      items={[
                        {
                          label: "This Year",
                          color: "#16a34a",
                        },
                        {
                          label: "Last Year",
                          color: "#94a3b8",
                        },
                      ]}
                    />
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Product Categories</CardTitle>
                  <CardDescription>Distribution of your product sales by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer className="h-[300px]">
                    <Chart>
                      <PieChart
                        data={productCategoryData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#16a34a"
                        label
                      />
                      <ChartTooltip />
                    </Chart>
                    <ChartLegend
                      className="mt-4 justify-center"
                      items={productCategoryData.map((item) => ({
                        label: item.name,
                        color: getColorForCategory(item.name),
                      }))}
                    />
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders and Seasonal Recommendations */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your most recent customer orders</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.slice(0, 3).map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <ShoppingCart className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{order.customer}</p>
                            <p className="text-xs text-muted-foreground">{order.products.join(", ")}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={getOrderStatusVariant(order.status)}>{order.status}</Badge>
                              <span className="text-xs text-muted-foreground flex items-center">
                                <MapPin className="h-3 w-3 mr-1" /> {order.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">₹{order.total}</p>
                          <p className="text-xs text-muted-foreground">{formatDate(order.date)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>Seasonal Recommendations</CardTitle>
                    <CardDescription>AI-driven suggestions based on season</CardDescription>
                  </div>
                  <CloudSun className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {seasonalRecommendations.map((rec) => (
                      <div
                        key={rec.id}
                        className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="text-sm font-medium">{rec.product}</p>
                          <p className="text-xs text-muted-foreground">{rec.reason}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/20"
                            >
                              {rec.action}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{rec.confidence}% confidence</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Zap className="h-4 w-4 mr-1" /> Apply
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Price Suggestions and Inventory Alerts */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>AI Price Suggestions</CardTitle>
                    <CardDescription>Optimize your pricing for better sales</CardDescription>
                  </div>
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {priceSuggestions.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="text-sm font-medium">{suggestion.product}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs line-through text-muted-foreground">
                              ₹{suggestion.currentPrice}
                            </span>
                            <span className="text-sm font-medium text-green-600">₹{suggestion.suggestedPrice}</span>
                            {suggestion.suggestedPrice > suggestion.currentPrice ? (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/20"
                              >
                                +
                                {(
                                  ((suggestion.suggestedPrice - suggestion.currentPrice) / suggestion.currentPrice) *
                                  100
                                ).toFixed(1)}
                                %
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-700 hover:bg-red-50 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/20"
                              >
                                {(
                                  ((suggestion.suggestedPrice - suggestion.currentPrice) / suggestion.currentPrice) *
                                  100
                                ).toFixed(1)}
                                %
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{suggestion.reason}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePriceSuggestion(suggestion.id, suggestion.suggestedPrice)}
                        >
                          Apply
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>Inventory Alerts</CardTitle>
                    <CardDescription>Products that need your attention</CardDescription>
                  </div>
                  <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="rounded-md overflow-hidden w-12 h-12 flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Organic Pesticide"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Organic Pesticide</p>
                          <Badge variant="destructive">Low Stock</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Only 5 units remaining</p>
                        <div className="mt-2">
                          <Progress value={10} className="h-2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="rounded-md overflow-hidden w-12 h-12 flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Drip Irrigation Kit"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Drip Irrigation Kit</p>
                          <Badge variant="destructive">Low Stock</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Only 3 units remaining</p>
                        <div className="mt-2">
                          <Progress value={20} className="h-2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-md overflow-hidden w-12 h-12 flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="NPK Fertilizer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">NPK Fertilizer</p>
                          <Badge variant="warning">Reorder Soon</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">15 units remaining</p>
                        <div className="mt-2">
                          <Progress value={30} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Restock Inventory
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Recent Feedback */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Recent Customer Feedback</CardTitle>
                  <CardDescription>What your customers are saying about your products</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {feedback.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={item.avatar} alt={item.customer} />
                        <AvatarFallback>
                          {item.customer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{item.customer}</p>
                          <div className="flex items-center">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-1 text-xs text-muted-foreground">{formatDate(item.date)}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.product}</p>
                        <p className="text-sm">{item.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Product Management</h2>
                <p className="text-muted-foreground">Manage your product listings, inventory, and pricing.</p>
              </div>
              <div className="flex items-center gap-2">
                <Dialog open={showAddProduct} onOpenChange={setShowAddProduct}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" /> Add Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Add New Product</DialogTitle>
                      <DialogDescription>
                        Fill in the details below to add a new product to your inventory.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="product-name">Product Name</Label>
                          <Input
                            id="product-name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            placeholder="e.g. Organic Tomato Seeds"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="product-category">Category</Label>
                          <Select
                            value={newProduct.category}
                            onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                          >
                            <SelectTrigger id="product-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Seeds">Seeds</SelectItem>
                              <SelectItem value="Fertilizers">Fertilizers</SelectItem>
                              <SelectItem value="Equipment">Equipment</SelectItem>
                              <SelectItem value="Pesticides">Pesticides</SelectItem>
                              <SelectItem value="Others">Others</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="product-price">Price (₹)</Label>
                          <Input
                            id="product-price"
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            placeholder="e.g. 299"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="product-stock">Stock Quantity</Label>
                          <Input
                            id="product-stock"
                            type="number"
                            value={newProduct.stock}
                            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                            placeholder="e.g. 100"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product-description">Description</Label>
                        <Textarea
                          id="product-description"
                          value={newProduct.description}
                          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                          placeholder="Describe your product..."
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="product-weight">Weight</Label>
                          <Input
                            id="product-weight"
                            value={newProduct.weight}
                            onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })}
                            placeholder="e.g. 500g"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="product-dimensions">Dimensions</Label>
                          <Input
                            id="product-dimensions"
                            value={newProduct.dimensions}
                            onChange={(e) => setNewProduct({ ...newProduct, dimensions: e.target.value })}
                            placeholder="e.g. 10x5x2 cm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="product-sku">SKU</Label>
                          <Input
                            id="product-sku"
                            value={newProduct.sku}
                            onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
                            placeholder="e.g. TOM-001"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product-image">Product Image</Label>
                        <div className="flex items-center gap-4">
                          {productImage ? (
                            <div className="relative w-24 h-24 rounded-md overflow-hidden border">
                              <img
                                src={URL.createObjectURL(productImage) || "/placeholder.svg"}
                                alt="Product preview"
                                className="w-full h-full object-cover"
                              />
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-0 right-0 bg-background/80 rounded-full p-1 m-1"
                                onClick={() => setProductImage(null)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <div className="w-24 h-24 rounded-md border border-dashed flex items-center justify-center">
                              <ImageIcon className="h-8 w-8 text-muted-foreground" />
                            </div>
                          )}
                          <div className="flex-1">
                            <Input
                              id="product-image"
                              type="file"
                              accept="image/*"
                              onChange={handleProductImageUpload}
                              className="hidden"
                            />
                            <Label
                              htmlFor="product-image"
                              className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                            >
                              {productImage ? "Change Image" : "Upload Image"}
                            </Label>
                            <p className="text-xs text-muted-foreground mt-1">
                              Recommended size: 800x800px. Max size: 5MB.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setShowAddProduct(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddProduct}>Add Product</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog open={showBulkUpload} onOpenChange={setShowBulkUpload}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Plus className="h-4 w-4 mr-2" /> Bulk Upload
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Bulk Upload Products</DialogTitle>
                      <DialogDescription>Upload multiple products at once using a CSV file.</DialogDescription>
                    </DialogHeader>
                    {bulkUploadStep === 1 ? (
                      <div className="space-y-4 py-4">
                        <div className="border-2 border-dashed rounded-lg p-6 text-center">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <FileText className="h-10 w-10 text-muted-foreground" />
                            <h3 className="font-medium">Upload CSV File</h3>
                            <p className="text-sm text-muted-foreground">
                              Drag and drop your CSV file here, or click to browse
                            </p>
                            <Input
                              id="bulk-upload"
                              type="file"
                              accept=".csv"
                              onChange={handleFileUpload}
                              className="hidden"
                            />
                            <Label
                              htmlFor="bulk-upload"
                              className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-2"
                            >
                              Browse Files
                            </Label>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">CSV Format Requirements</h4>
                          <p className="text-sm text-muted-foreground">
                            Your CSV file should include the following columns:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                            <li>name (required): Product name</li>
                            <li>category (required): Product category</li>
                            <li>price (required): Product price in INR</li>
                            <li>stock (required): Available quantity</li>
                            <li>description (optional): Product description</li>
                            <li>weight (optional): Product weight</li>
                            <li>dimensions (optional): Product dimensions</li>
                            <li>sku (optional): Stock keeping unit</li>
                          </ul>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" target="_blank">
                              Download Template
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="#" target="_blank">
                              View Sample
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 py-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Preview Products</h3>
                          <p className="text-sm text-muted-foreground">{bulkUploadPreview.length} products found</p>
                        </div>
                        <div className="border rounded-lg overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Stock</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {bulkUploadPreview.map((item, index) => (
                                <TableRow key={index}>
                                  <TableCell>{item.name}</TableCell>
                                  <TableCell>{item.category}</TableCell>
                                  <TableCell>₹{item.price}</TableCell>
                                  <TableCell>{item.stock}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="confirm-upload" />
                          <Label htmlFor="confirm-upload">
                            I confirm that the data is correct and ready to be uploaded
                          </Label>
                        </div>
                      </div>
                    )}
                    <DialogFooter>
                      {bulkUploadStep === 1 ? (
                        <Button variant="outline" onClick={() => setShowBulkUpload(false)}>
                          Cancel
                        </Button>
                      ) : (
                        <>
                          <Button variant="outline" onClick={() => setBulkUploadStep(1)}>
                            Back
                          </Button>
                          <Button onClick={handleBulkUpload}>Upload Products</Button>
                        </>
                      )}
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full bg-background pl-8 pr-4"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="seeds">Seeds</SelectItem>
                  <SelectItem value="fertilizers">Fertilizers</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                  <SelectItem value="pesticides">Pesticides</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="active">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="low-stock">Low Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Stock</TableHead>
                    <TableHead className="text-right">Sold</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="rounded-md overflow-hidden w-10 h-10 flex-shrink-0">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <div className="flex items-center">
                              {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                              <span className="ml-1 text-xs text-muted-foreground">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-right">₹{product.price}</TableCell>
                      <TableCell className="text-right">{product.stock}</TableCell>
                      <TableCell className="text-right">{product.sold}</TableCell>
                      <TableCell>
                        <Badge variant={product.status === "Active" ? "outline" : "destructive"}>
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleProductAction("edit", product.id)}>
                              <Edit className="h-4 w-4 mr-2" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleProductAction("share", product.id)}>
                              <Share2 className="h-4 w-4 mr-2" /> Share
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => handleProductAction("delete", product.id)}
                              className="text-red-600 dark:text-red-400"
                            >
                              <Trash2 className="h-4 w-4 mr-2" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>

            {/* Edit Product Dialog */}
            {editingProduct && (
              <Dialog open={!!editingProduct} onOpenChange={(open) => !open && setEditingProduct(null)}>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                    <DialogDescription>Update the details of your product.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-product-name">Product Name</Label>
                        <Input
                          id="edit-product-name"
                          value={editingProduct.name}
                          onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-product-category">Category</Label>
                        <Select
                          value={editingProduct.category}
                          onValueChange={(value) => setEditingProduct({ ...editingProduct, category: value })}
                        >
                          <SelectTrigger id="edit-product-category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Seeds">Seeds</SelectItem>
                            <SelectItem value="Fertilizers">Fertilizers</SelectItem>
                            <SelectItem value="Equipment">Equipment</SelectItem>
                            <SelectItem value="Pesticides">Pesticides</SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-product-price">Price (₹)</Label>
                        <Input
                          id="edit-product-price"
                          type="number"
                          value={editingProduct.price}
                          onChange={(e) =>
                            setEditingProduct({ ...editingProduct, price: Number.parseInt(e.target.value) })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-product-stock">Stock Quantity</Label>
                        <Input
                          id="edit-product-stock"
                          type="number"
                          value={editingProduct.stock}
                          onChange={(e) =>
                            setEditingProduct({ ...editingProduct, stock: Number.parseInt(e.target.value) })
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-product-description">Description</Label>
                      <Textarea
                        id="edit-product-description"
                        value={editingProduct.description}
                        onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-product-weight">Weight</Label>
                        <Input
                          id="edit-product-weight"
                          value={editingProduct.weight}
                          onChange={(e) => setEditingProduct({ ...editingProduct, weight: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-product-dimensions">Dimensions</Label>
                        <Input
                          id="edit-product-dimensions"
                          value={editingProduct.dimensions}
                          onChange={(e) => setEditingProduct({ ...editingProduct, dimensions: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-product-sku">SKU</Label>
                        <Input
                          id="edit-product-sku"
                          value={editingProduct.sku}
                          onChange={(e) => setEditingProduct({ ...editingProduct, sku: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-product-status">Status</Label>
                      <RadioGroup
                        value={editingProduct.status}
                        onValueChange={(value) => setEditingProduct({ ...editingProduct, status: value })}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Active" id="status-active" />
                          <Label htmlFor="status-active">Active</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Low Stock" id="status-low-stock" />
                          <Label htmlFor="status-low-stock">Low Stock</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Out of Stock" id="status-out-of-stock" />
                          <Label htmlFor="status-out-of-stock">Out of Stock</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Product Image</Label>
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-24 rounded-md overflow-hidden border">
                          <img
                            src={editingProduct.image || "/placeholder.svg"}
                            alt={editingProduct.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <Input id="edit-product-image" type="file" accept="image/*" className="hidden" />
                          <Label
                            htmlFor="edit-product-image"
                            className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                          >
                            Change Image
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setEditingProduct(null)}>
                      Cancel
                    </Button>
                    <Button onClick={handleUpdateProduct}>Save Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </TabsContent>

          {/* Other tabs content remains the same */}
          <TabsContent value="orders" className="space-y-4">
            {/* Orders tab content */}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            {/* Analytics tab content */}
          </TabsContent>

          <TabsContent value="earnings" className="space-y-4">
            {/* Earnings tab content */}
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            {/* Feedback tab content */}
          </TabsContent>

          <TabsContent value="marketing" className="space-y-4">
            {/* Marketing tab content */}
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            {/* Resources tab content */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Helper functions
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

function getOrderStatusVariant(status) {
  switch (status) {
    case "Delivered":
      return "success"
    case "Shipped":
      return "info"
    case "Processing":
      return "warning"
    case "Pending":
      return "secondary"
    default:
      return "outline"
  }
}

function getColorForCategory(category) {
  switch (category) {
    case "Seeds":
      return "#16a34a"
    case "Fertilizers":
      return "#2563eb"
    case "Equipment":
      return "#d97706"
    case "Pesticides":
      return "#dc2626"
    case "Others":
      return "#6b7280"
    default:
      return "#6b7280"
  }
}

