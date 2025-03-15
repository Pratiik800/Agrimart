"use client"

import { useState, useEffect } from "react"
import { Cloud, CloudRain, Droplets, Sun, Thermometer } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample market price data
const marketPrices = {
  grains: [
    { name: "Wheat", min: 1950, max: 2150, avg: 2050, unit: "quintal", trend: "up" },
    { name: "Paddy", min: 1850, max: 2050, avg: 1950, unit: "quintal", trend: "stable" },
    { name: "Maize", min: 1750, max: 1950, avg: 1850, unit: "quintal", trend: "down" },
    { name: "Barley", min: 1650, max: 1850, avg: 1750, unit: "quintal", trend: "up" },
    { name: "Sorghum", min: 2250, max: 2450, avg: 2350, unit: "quintal", trend: "stable" },
  ],
  pulses: [
    { name: "Chickpea", min: 4500, max: 5000, avg: 4750, unit: "quintal", trend: "up" },
    { name: "Pigeon Pea", min: 5500, max: 6000, avg: 5750, unit: "quintal", trend: "stable" },
    { name: "Green Gram", min: 6500, max: 7000, avg: 6750, unit: "quintal", trend: "up" },
    { name: "Black Gram", min: 5000, max: 5500, avg: 5250, unit: "quintal", trend: "down" },
    { name: "Lentil", min: 4000, max: 4500, avg: 4250, unit: "quintal", trend: "up" },
  ],
  oilseeds: [
    { name: "Soybean", min: 3800, max: 4200, avg: 4000, unit: "quintal", trend: "stable" },
    { name: "Mustard", min: 4500, max: 5000, avg: 4750, unit: "quintal", trend: "up" },
    { name: "Groundnut", min: 5500, max: 6000, avg: 5750, unit: "quintal", trend: "down" },
    { name: "Sunflower", min: 5000, max: 5500, avg: 5250, unit: "quintal", trend: "up" },
    { name: "Sesame", min: 9000, max: 9500, avg: 9250, unit: "quintal", trend: "stable" },
  ],
}

// Sample weather data
const weatherData = [
  {
    location: "Delhi",
    temperature: 32,
    condition: "Sunny",
    humidity: 45,
    icon: <Sun className="h-8 w-8 text-yellow-500" />,
  },
  {
    location: "Mumbai",
    temperature: 29,
    condition: "Cloudy",
    humidity: 78,
    icon: <Cloud className="h-8 w-8 text-gray-500" />,
  },
  {
    location: "Bangalore",
    temperature: 24,
    condition: "Rainy",
    humidity: 85,
    icon: <CloudRain className="h-8 w-8 text-blue-500" />,
  },
  {
    location: "Chennai",
    temperature: 31,
    condition: "Humid",
    humidity: 82,
    icon: <Droplets className="h-8 w-8 text-blue-400" />,
  },
]

export default function MarketUpdates() {
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

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Updates</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Market & Weather Updates</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay informed with the latest market prices and weather forecasts to make better decisions
            </p>
            <p className="text-sm text-muted-foreground">Last updated: {currentTime}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Market Prices */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Current Market Prices</CardTitle>
                <CardDescription>Average prices across major agricultural markets in India</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="grains">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="grains">Grains</TabsTrigger>
                    <TabsTrigger value="pulses">Pulses</TabsTrigger>
                    <TabsTrigger value="oilseeds">Oilseeds</TabsTrigger>
                  </TabsList>

                  {Object.keys(marketPrices).map((category) => (
                    <TabsContent key={category} value={category} className="mt-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Crop</TableHead>
                            <TableHead className="text-right">Min (₹)</TableHead>
                            <TableHead className="text-right">Max (₹)</TableHead>
                            <TableHead className="text-right">Avg (₹)</TableHead>
                            <TableHead className="text-right">Unit</TableHead>
                            <TableHead className="text-right">Trend</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {marketPrices[category].map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell className="text-right">{item.min}</TableCell>
                              <TableCell className="text-right">{item.max}</TableCell>
                              <TableCell className="text-right">{item.avg}</TableCell>
                              <TableCell className="text-right">{item.unit}</TableCell>
                              <TableCell className="text-right">
                                <span
                                  className={`inline-block px-2 py-1 rounded-full text-xs ${
                                    item.trend === "up"
                                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                      : item.trend === "down"
                                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                                  }`}
                                >
                                  {item.trend === "up" ? "↑" : item.trend === "down" ? "↓" : "→"} {item.trend}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Weather Updates */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Weather Forecast</CardTitle>
                <CardDescription>Current conditions in major farming regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {weatherData.map((location, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{location.location}</h3>
                            <div className="flex items-center mt-1">
                              <Thermometer className="h-4 w-4 mr-1 text-red-500" />
                              <span className="text-sm">{location.temperature}°C</span>
                              <span className="mx-2 text-muted-foreground">|</span>
                              <Droplets className="h-4 w-4 mr-1 text-blue-500" />
                              <span className="text-sm">{location.humidity}%</span>
                            </div>
                          </div>
                          <div>{location.icon}</div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{location.condition}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

