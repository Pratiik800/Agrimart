"use client"

import { useState, useEffect } from "react"
import { Search, TrendingUp, TrendingDown, Minus } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample market price data
const marketPriceData = {
  grains: [
    { name: "Wheat", min: 1950, max: 2150, avg: 2050, unit: "quintal", trend: "up", change: 2.5, location: "Delhi" },
    {
      name: "Paddy",
      min: 1850,
      max: 2050,
      avg: 1950,
      unit: "quintal",
      trend: "stable",
      change: 0.2,
      location: "Delhi",
    },
    { name: "Maize", min: 1750, max: 1950, avg: 1850, unit: "quintal", trend: "down", change: -1.8, location: "Delhi" },
    { name: "Barley", min: 1650, max: 1850, avg: 1750, unit: "quintal", trend: "up", change: 1.5, location: "Delhi" },
    {
      name: "Sorghum",
      min: 2250,
      max: 2450,
      avg: 2350,
      unit: "quintal",
      trend: "stable",
      change: 0.0,
      location: "Delhi",
    },
    {
      name: "Wheat",
      min: 1900,
      max: 2100,
      avg: 2000,
      unit: "quintal",
      trend: "down",
      change: -1.2,
      location: "Mumbai",
    },
    { name: "Paddy", min: 1900, max: 2100, avg: 2000, unit: "quintal", trend: "up", change: 3.0, location: "Mumbai" },
    {
      name: "Maize",
      min: 1800,
      max: 2000,
      avg: 1900,
      unit: "quintal",
      trend: "stable",
      change: 0.5,
      location: "Mumbai",
    },
    {
      name: "Wheat",
      min: 1850,
      max: 2050,
      avg: 1950,
      unit: "quintal",
      trend: "up",
      change: 1.8,
      location: "Bangalore",
    },
    {
      name: "Paddy",
      min: 1800,
      max: 2000,
      avg: 1900,
      unit: "quintal",
      trend: "down",
      change: -2.0,
      location: "Bangalore",
    },
    {
      name: "Maize",
      min: 1700,
      max: 1900,
      avg: 1800,
      unit: "quintal",
      trend: "stable",
      change: 0.3,
      location: "Bangalore",
    },
  ],
  pulses: [
    { name: "Chickpea", min: 4500, max: 5000, avg: 4750, unit: "quintal", trend: "up", change: 3.2, location: "Delhi" },
    {
      name: "Pigeon Pea",
      min: 5500,
      max: 6000,
      avg: 5750,
      unit: "quintal",
      trend: "stable",
      change: 0.5,
      location: "Delhi",
    },
    {
      name: "Green Gram",
      min: 6500,
      max: 7000,
      avg: 6750,
      unit: "quintal",
      trend: "up",
      change: 2.8,
      location: "Delhi",
    },
    {
      name: "Black Gram",
      min: 5000,
      max: 5500,
      avg: 5250,
      unit: "quintal",
      trend: "down",
      change: -1.5,
      location: "Delhi",
    },
    { name: "Lentil", min: 4000, max: 4500, avg: 4250, unit: "quintal", trend: "up", change: 1.2, location: "Delhi" },
    {
      name: "Chickpea",
      min: 4600,
      max: 5100,
      avg: 4850,
      unit: "quintal",
      trend: "stable",
      change: 0.0,
      location: "Mumbai",
    },
    {
      name: "Pigeon Pea",
      min: 5600,
      max: 6100,
      avg: 5850,
      unit: "quintal",
      trend: "up",
      change: 1.8,
      location: "Mumbai",
    },
    {
      name: "Chickpea",
      min: 4400,
      max: 4900,
      avg: 4650,
      unit: "quintal",
      trend: "down",
      change: -2.1,
      location: "Bangalore",
    },
    {
      name: "Pigeon Pea",
      min: 5400,
      max: 5900,
      avg: 5650,
      unit: "quintal",
      trend: "stable",
      change: 0.3,
      location: "Bangalore",
    },
  ],
  oilseeds: [
    {
      name: "Soybean",
      min: 3800,
      max: 4200,
      avg: 4000,
      unit: "quintal",
      trend: "stable",
      change: 0.4,
      location: "Delhi",
    },
    { name: "Mustard", min: 4500, max: 5000, avg: 4750, unit: "quintal", trend: "up", change: 2.2, location: "Delhi" },
    {
      name: "Groundnut",
      min: 5500,
      max: 6000,
      avg: 5750,
      unit: "quintal",
      trend: "down",
      change: -1.8,
      location: "Delhi",
    },
    {
      name: "Sunflower",
      min: 5000,
      max: 5500,
      avg: 5250,
      unit: "quintal",
      trend: "up",
      change: 1.5,
      location: "Delhi",
    },
    {
      name: "Sesame",
      min: 9000,
      max: 9500,
      avg: 9250,
      unit: "quintal",
      trend: "stable",
      change: 0.1,
      location: "Delhi",
    },
    { name: "Soybean", min: 3900, max: 4300, avg: 4100, unit: "quintal", trend: "up", change: 1.2, location: "Mumbai" },
    {
      name: "Mustard",
      min: 4600,
      max: 5100,
      avg: 4850,
      unit: "quintal",
      trend: "stable",
      change: 0.3,
      location: "Mumbai",
    },
    {
      name: "Soybean",
      min: 3700,
      max: 4100,
      avg: 3900,
      unit: "quintal",
      trend: "down",
      change: -2.5,
      location: "Bangalore",
    },
    {
      name: "Mustard",
      min: 4400,
      max: 4900,
      avg: 4650,
      unit: "quintal",
      trend: "up",
      change: 1.8,
      location: "Bangalore",
    },
  ],
  vegetables: [
    { name: "Tomato", min: 1500, max: 2500, avg: 2000, unit: "quintal", trend: "up", change: 15.0, location: "Delhi" },
    {
      name: "Potato",
      min: 1200,
      max: 1800,
      avg: 1500,
      unit: "quintal",
      trend: "down",
      change: -8.5,
      location: "Delhi",
    },
    {
      name: "Onion",
      min: 1800,
      max: 2400,
      avg: 2100,
      unit: "quintal",
      trend: "stable",
      change: 0.5,
      location: "Delhi",
    },
    {
      name: "Cauliflower",
      min: 1300,
      max: 1900,
      avg: 1600,
      unit: "quintal",
      trend: "up",
      change: 5.2,
      location: "Delhi",
    },
    {
      name: "Cabbage",
      min: 900,
      max: 1500,
      avg: 1200,
      unit: "quintal",
      trend: "down",
      change: -3.8,
      location: "Delhi",
    },
    {
      name: "Tomato",
      min: 1600,
      max: 2600,
      avg: 2100,
      unit: "quintal",
      trend: "stable",
      change: 0.8,
      location: "Mumbai",
    },
    { name: "Potato", min: 1300, max: 1900, avg: 1600, unit: "quintal", trend: "up", change: 7.5, location: "Mumbai" },
    {
      name: "Tomato",
      min: 1400,
      max: 2400,
      avg: 1900,
      unit: "quintal",
      trend: "down",
      change: -12.0,
      location: "Bangalore",
    },
    {
      name: "Potato",
      min: 1100,
      max: 1700,
      avg: 1400,
      unit: "quintal",
      trend: "stable",
      change: 0.2,
      location: "Bangalore",
    },
  ],
}

// Available market locations
const marketLocations = ["All Locations", "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"]

export default function MarketPricesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [sortOrder, setSortOrder] = useState("default")
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const now = new Date()
    setCurrentTime(
      now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    )
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, this would trigger an API call to search for specific crops
    console.log("Searching for:", searchQuery)
  }

  // Filter data based on selected location
  const filterDataByLocation = (data, location) => {
    if (location === "All Locations") return data
    return data.filter((item) => item.location === location)
  }

  // Sort data based on selected sort order
  const sortData = (data, order) => {
    if (order === "default") return data

    return [...data].sort((a, b) => {
      if (order === "price-low") return a.avg - b.avg
      if (order === "price-high") return b.avg - a.avg
      if (order === "name-asc") return a.name.localeCompare(b.name)
      if (order === "name-desc") return b.name.localeCompare(a.name)
      if (order === "trend-up") {
        if (a.trend === "up" && b.trend !== "up") return -1
        if (a.trend !== "up" && b.trend === "up") return 1
        return 0
      }
      if (order === "trend-down") {
        if (a.trend === "down" && b.trend !== "down") return -1
        if (a.trend !== "down" && b.trend === "down") return 1
        return 0
      }
      return 0
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Market Prices</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Real-time agricultural commodity prices to help you sell at the best rates
              </p>
            </div>
            <form onSubmit={handleSearch} className="w-full max-w-md flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search crops..."
                  className="w-full bg-background pl-8 pr-4"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold">Current Market Prices</h2>
              <p className="text-sm text-muted-foreground">Last updated: {currentTime}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {marketLocations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  <SelectItem value="trend-up">Trending Up</SelectItem>
                  <SelectItem value="trend-down">Trending Down</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="grains">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="grains">Grains</TabsTrigger>
              <TabsTrigger value="pulses">Pulses</TabsTrigger>
              <TabsTrigger value="oilseeds">Oilseeds</TabsTrigger>
              <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
            </TabsList>

            {Object.keys(marketPriceData).map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span>{category.charAt(0).toUpperCase() + category.slice(1)} Prices</span>
                      {selectedLocation !== "All Locations" && (
                        <Badge variant="outline" className="ml-2">
                          {selectedLocation}
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>Current market prices for {category} across agricultural markets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Crop</TableHead>
                            {selectedLocation === "All Locations" && <TableHead>Location</TableHead>}
                            <TableHead className="text-right">Min (₹)</TableHead>
                            <TableHead className="text-right">Max (₹)</TableHead>
                            <TableHead className="text-right">Avg (₹)</TableHead>
                            <TableHead className="text-right">Unit</TableHead>
                            <TableHead className="text-right">Change</TableHead>
                            <TableHead className="text-right">Trend</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {sortData(filterDataByLocation(marketPriceData[category], selectedLocation), sortOrder).map(
                            (item, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                {selectedLocation === "All Locations" && <TableCell>{item.location}</TableCell>}
                                <TableCell className="text-right">{item.min}</TableCell>
                                <TableCell className="text-right">{item.max}</TableCell>
                                <TableCell className="text-right font-bold">{item.avg}</TableCell>
                                <TableCell className="text-right">{item.unit}</TableCell>
                                <TableCell
                                  className={`text-right ${
                                    item.change > 0
                                      ? "text-green-600 dark:text-green-400"
                                      : item.change < 0
                                        ? "text-red-600 dark:text-red-400"
                                        : ""
                                  }`}
                                >
                                  {item.change > 0 ? "+" : ""}
                                  {item.change}%
                                </TableCell>
                                <TableCell className="text-right">
                                  <span
                                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                                      item.trend === "up"
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                        : item.trend === "down"
                                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                                    }`}
                                  >
                                    {item.trend === "up" ? (
                                      <TrendingUp className="h-3 w-3 mr-1" />
                                    ) : item.trend === "down" ? (
                                      <TrendingDown className="h-3 w-3 mr-1" />
                                    ) : (
                                      <Minus className="h-3 w-3 mr-1" />
                                    )}
                                    {item.trend}
                                  </span>
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Market Insights */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Price Trends</CardTitle>
                  <CardDescription>Analysis of recent price movements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h3 className="font-medium flex items-center text-green-800 dark:text-green-300">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Top Gainers
                      </h3>
                      <ul className="mt-2 space-y-2">
                        <li className="flex justify-between text-sm">
                          <span>Tomato (Delhi)</span>
                          <span className="font-medium text-green-600 dark:text-green-400">+15.0%</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>Chickpea (Delhi)</span>
                          <span className="font-medium text-green-600 dark:text-green-400">+3.2%</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>Paddy (Mumbai)</span>
                          <span className="font-medium text-green-600 dark:text-green-400">+3.0%</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h3 className="font-medium flex items-center text-red-800 dark:text-red-300">
                        <TrendingDown className="h-4 w-4 mr-2" />
                        Top Losers
                      </h3>
                      <ul className="mt-2 space-y-2">
                        <li className="flex justify-between text-sm">
                          <span>Tomato (Bangalore)</span>
                          <span className="font-medium text-red-600 dark:text-red-400">-12.0%</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>Potato (Delhi)</span>
                          <span className="font-medium text-red-600 dark:text-red-400">-8.5%</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span>Soybean (Bangalore)</span>
                          <span className="font-medium text-red-600 dark:text-red-400">-2.5%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market News</CardTitle>
                  <CardDescription>Latest updates affecting prices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h3 className="font-medium">Government Announces MSP Hike for Kharif Crops</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        The government has increased the minimum support price (MSP) for kharif crops by 4-8% for the
                        2025-26 season.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium">Unseasonal Rains Impact Vegetable Supplies</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Recent unseasonal rains in western India have affected vegetable supplies, leading to price
                        fluctuations in major markets.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">5 hours ago</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Export Restrictions Lifted on Select Agricultural Commodities</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        The government has lifted export restrictions on select agricultural commodities, potentially
                        affecting domestic prices.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Price Forecast</CardTitle>
                  <CardDescription>Projected price movements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h3 className="font-medium">Wheat</h3>
                        <p className="text-xs text-muted-foreground">Next 30 days</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-green-600 dark:text-green-400">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span className="font-medium">+3-5%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Expected rise</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h3 className="font-medium">Tomato</h3>
                        <p className="text-xs text-muted-foreground">Next 30 days</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-red-600 dark:text-red-400">
                          <TrendingDown className="h-4 w-4 mr-1" />
                          <span className="font-medium">-10-15%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Expected fall</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <h3 className="font-medium">Mustard</h3>
                        <p className="text-xs text-muted-foreground">Next 30 days</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <Minus className="h-4 w-4 mr-1" />
                          <span className="font-medium">±2%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Stable prices</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Market Tips */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Market Tips for Farmers</CardTitle>
                <CardDescription>Maximize your profits with these market insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Best Time to Sell</h3>
                    <p className="text-sm text-muted-foreground">
                      For grains like wheat and rice, prices typically peak 2-3 months after harvest season when supply
                      begins to tighten. Consider storing your produce if you have proper storage facilities.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Market Selection</h3>
                    <p className="text-sm text-muted-foreground">
                      Compare prices across different markets before selling. Sometimes traveling an extra 20-30 km can
                      result in 5-10% higher prices, especially for high-value crops.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Quality Premium</h3>
                    <p className="text-sm text-muted-foreground">
                      Invest in proper grading and sorting. High-quality produce can fetch 15-20% premium over average
                      market rates, especially for fruits and vegetables.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

