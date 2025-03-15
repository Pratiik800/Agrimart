"use client"

import { useState, useEffect } from "react"
import {
  Cloud,
  CloudRain,
  Droplets,
  Sun,
  Thermometer,
  MapPin,
  Wind,
  Compass,
  Check,
  X,
  Bug,
  WormIcon as Virus,
  Calendar,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample weather data
const initialWeatherData = [
  {
    location: "Delhi",
    temperature: 32,
    condition: "Sunny",
    humidity: 45,
    windSpeed: 12,
    windDirection: "NE",
    icon: <Sun className="h-8 w-8 text-yellow-500" />,
    forecast: [
      { day: "Today", high: 32, low: 24, condition: "Sunny", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
      {
        day: "Tomorrow",
        high: 33,
        low: 25,
        condition: "Partly Cloudy",
        icon: <Cloud className="h-6 w-6 text-gray-500" />,
      },
      {
        day: "Wednesday",
        high: 30,
        low: 23,
        condition: "Rainy",
        icon: <CloudRain className="h-6 w-6 text-blue-500" />,
      },
      { day: "Thursday", high: 29, low: 22, condition: "Cloudy", icon: <Cloud className="h-6 w-6 text-gray-500" /> },
      { day: "Friday", high: 31, low: 24, condition: "Sunny", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
    ],
  },
  {
    location: "Mumbai",
    temperature: 29,
    condition: "Cloudy",
    humidity: 78,
    windSpeed: 8,
    windDirection: "SW",
    icon: <Cloud className="h-8 w-8 text-gray-500" />,
    forecast: [
      { day: "Today", high: 29, low: 26, condition: "Cloudy", icon: <Cloud className="h-6 w-6 text-gray-500" /> },
      { day: "Tomorrow", high: 30, low: 26, condition: "Rainy", icon: <CloudRain className="h-6 w-6 text-blue-500" /> },
      {
        day: "Wednesday",
        high: 29,
        low: 25,
        condition: "Rainy",
        icon: <CloudRain className="h-6 w-6 text-blue-500" />,
      },
      { day: "Thursday", high: 28, low: 25, condition: "Cloudy", icon: <Cloud className="h-6 w-6 text-gray-500" /> },
      {
        day: "Friday",
        high: 30,
        low: 26,
        condition: "Partly Cloudy",
        icon: <Cloud className="h-6 w-6 text-gray-500" />,
      },
    ],
  },
  {
    location: "Bangalore",
    temperature: 24,
    condition: "Rainy",
    humidity: 85,
    windSpeed: 6,
    windDirection: "SE",
    icon: <CloudRain className="h-8 w-8 text-blue-500" />,
    forecast: [
      { day: "Today", high: 24, low: 19, condition: "Rainy", icon: <CloudRain className="h-6 w-6 text-blue-500" /> },
      { day: "Tomorrow", high: 25, low: 18, condition: "Cloudy", icon: <Cloud className="h-6 w-6 text-gray-500" /> },
      {
        day: "Wednesday",
        high: 26,
        low: 19,
        condition: "Partly Cloudy",
        icon: <Cloud className="h-6 w-6 text-gray-500" />,
      },
      { day: "Thursday", high: 27, low: 20, condition: "Sunny", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
      {
        day: "Friday",
        high: 26,
        low: 19,
        condition: "Partly Cloudy",
        icon: <Cloud className="h-6 w-6 text-gray-500" />,
      },
    ],
  },
  {
    location: "Chennai",
    temperature: 31,
    condition: "Humid",
    humidity: 82,
    windSpeed: 10,
    windDirection: "E",
    icon: <Droplets className="h-8 w-8 text-blue-400" />,
    forecast: [
      { day: "Today", high: 31, low: 26, condition: "Humid", icon: <Droplets className="h-6 w-6 text-blue-400" /> },
      {
        day: "Tomorrow",
        high: 32,
        low: 27,
        condition: "Partly Cloudy",
        icon: <Cloud className="h-6 w-6 text-gray-500" />,
      },
      { day: "Wednesday", high: 33, low: 27, condition: "Sunny", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
      { day: "Thursday", high: 32, low: 26, condition: "Humid", icon: <Droplets className="h-6 w-6 text-blue-400" /> },
      {
        day: "Friday",
        high: 31,
        low: 25,
        condition: "Partly Cloudy",
        icon: <Cloud className="h-6 w-6 text-gray-500" />,
      },
    ],
  },
]

export default function WeatherPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("Delhi")
  const [weatherData, setWeatherData] = useState(initialWeatherData)
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
    if (searchQuery.trim() === "") return

    // In a real app, this would make an API call to get weather data for the searched location
    // For demo purposes, we'll just set the selected location if it exists in our data
    const foundLocation = weatherData.find((location) => location.location.toLowerCase() === searchQuery.toLowerCase())

    if (foundLocation) {
      setSelectedLocation(foundLocation.location)
    } else {
      // Simulate adding a new location with random weather data
      const newLocation = {
        location: searchQuery,
        temperature: Math.floor(Math.random() * 15) + 20, // Random temp between 20-35
        condition: ["Sunny", "Cloudy", "Rainy", "Humid"][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 40) + 40, // Random humidity between 40-80
        windSpeed: Math.floor(Math.random() * 15) + 5, // Random wind speed between 5-20
        windDirection: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.floor(Math.random() * 8)],
        icon: [
          <Sun className="h-8 w-8 text-yellow-500" key="sun" />,
          <Cloud className="h-8 w-8 text-gray-500" key="cloud" />,
          <CloudRain className="h-8 w-8 text-blue-500" key="rain" />,
          <Droplets className="h-8 w-8 text-blue-400" key="humid" />,
        ][Math.floor(Math.random() * 4)],
        forecast: [
          {
            day: "Today",
            high: Math.floor(Math.random() * 15) + 20,
            low: Math.floor(Math.random() * 10) + 15,
            condition: "Sunny",
            icon: <Sun className="h-6 w-6 text-yellow-500" />,
          },
          {
            day: "Tomorrow",
            high: Math.floor(Math.random() * 15) + 20,
            low: Math.floor(Math.random() * 10) + 15,
            condition: "Partly Cloudy",
            icon: <Cloud className="h-6 w-6 text-gray-500" />,
          },
          {
            day: "Wednesday",
            high: Math.floor(Math.random() * 15) + 20,
            low: Math.floor(Math.random() * 10) + 15,
            condition: "Rainy",
            icon: <CloudRain className="h-6 w-6 text-blue-500" />,
          },
          {
            day: "Thursday",
            high: Math.floor(Math.random() * 15) + 20,
            low: Math.floor(Math.random() * 10) + 15,
            condition: "Cloudy",
            icon: <Cloud className="h-6 w-6 text-gray-500" />,
          },
          {
            day: "Friday",
            high: Math.floor(Math.random() * 15) + 20,
            low: Math.floor(Math.random() * 10) + 15,
            condition: "Sunny",
            icon: <Sun className="h-6 w-6 text-yellow-500" />,
          },
        ],
      }

      setWeatherData([...weatherData, newLocation])
      setSelectedLocation(searchQuery)
    }

    setSearchQuery("")
  }

  const currentWeather = weatherData.find((data) => data.location === selectedLocation) || weatherData[0]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Weather Forecast</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Get real-time weather updates to plan your farming activities better
              </p>
            </div>
            <form onSubmit={handleSearch} className="w-full max-w-md flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search location..."
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
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">Last updated: {currentTime}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Weather */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Current Weather</span>
                    <span className="text-base font-normal">{currentWeather.location}</span>
                  </CardTitle>
                  <CardDescription>Detailed current conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="mr-4">{currentWeather.icon}</div>
                      <div>
                        <div className="text-4xl font-bold">{currentWeather.temperature}°C</div>
                        <div className="text-muted-foreground">{currentWeather.condition}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                        <div>
                          <div className="text-sm font-medium">Humidity</div>
                          <div>{currentWeather.humidity}%</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Wind className="h-5 w-5 mr-2 text-blue-500" />
                        <div>
                          <div className="text-sm font-medium">Wind</div>
                          <div>{currentWeather.windSpeed} km/h</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Compass className="h-5 w-5 mr-2 text-blue-500" />
                        <div>
                          <div className="text-sm font-medium">Direction</div>
                          <div>{currentWeather.windDirection}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Thermometer className="h-5 w-5 mr-2 text-red-500" />
                        <div>
                          <div className="text-sm font-medium">Feels Like</div>
                          <div>{currentWeather.temperature + (Math.random() > 0.5 ? 1 : -1)}°C</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location Selector */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Locations</CardTitle>
                  <CardDescription>Select a location to view weather</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {weatherData.map((location) => (
                      <Button
                        key={location.location}
                        variant={selectedLocation === location.location ? "default" : "outline"}
                        className="w-full justify-between"
                        onClick={() => setSelectedLocation(location.location)}
                      >
                        <span>{location.location}</span>
                        <div className="flex items-center">
                          <span className="mr-2">{location.temperature}°C</span>
                          {location.icon}
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>5-Day Forecast</CardTitle>
                <CardDescription>Weather forecast for the next 5 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                  {currentWeather.forecast.map((day, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="p-4 pb-2 bg-muted/50">
                        <CardTitle className="text-base">{day.day}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 text-center">
                        <div className="flex justify-center mb-2">{day.icon}</div>
                        <div className="text-sm">{day.condition}</div>
                        <div className="flex justify-between mt-2 text-sm">
                          <span className="text-red-500">{day.high}°</span>
                          <span className="text-blue-500">{day.low}°</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weather Impact on Crops */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Weather Impact on Crops</CardTitle>
                <CardDescription>How current weather conditions may affect your crops</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="general">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="irrigation">Irrigation</TabsTrigger>
                    <TabsTrigger value="pests">Pest Risk</TabsTrigger>
                    <TabsTrigger value="harvest">Harvest</TabsTrigger>
                  </TabsList>
                  <TabsContent value="general" className="mt-4">
                    <div className="p-4 border rounded-md bg-muted/30">
                      <h3 className="font-medium mb-2">General Farming Conditions</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {currentWeather.condition === "Sunny"
                          ? "Current sunny conditions are favorable for most field operations. Good time for harvesting and drying crops."
                          : currentWeather.condition === "Rainy"
                            ? "Rainy conditions may delay field operations. Consider postponing spraying and harvesting activities."
                            : currentWeather.condition === "Cloudy"
                              ? "Cloudy conditions are good for transplanting and field operations that don't require dry soil."
                              : "Current humid conditions may increase disease pressure. Monitor crops closely for fungal diseases."}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Recommended Activities</h4>
                            <p className="text-xs text-muted-foreground">
                              {currentWeather.condition === "Sunny"
                                ? "Harvesting, drying grains, soil preparation"
                                : currentWeather.condition === "Rainy"
                                  ? "Indoor activities, equipment maintenance, planning"
                                  : currentWeather.condition === "Cloudy"
                                    ? "Transplanting, fertilizer application, field preparation"
                                    : "Monitoring crops, preventive spraying, irrigation management"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-2 mt-1 bg-red-100 p-1 rounded-full">
                            <X className="h-4 w-4 text-red-600" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Activities to Avoid</h4>
                            <p className="text-xs text-muted-foreground">
                              {currentWeather.condition === "Sunny" && currentWeather.temperature > 30
                                ? "Midday spraying, transplanting without adequate irrigation"
                                : currentWeather.condition === "Rainy"
                                  ? "Spraying chemicals, harvesting, soil cultivation"
                                  : currentWeather.condition === "Cloudy"
                                    ? "Activities requiring full sun or dry conditions"
                                    : "Activities that may increase humidity in crop canopy"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="irrigation" className="mt-4">
                    <div className="p-4 border rounded-md bg-muted/30">
                      <h3 className="font-medium mb-2">Irrigation Recommendations</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {currentWeather.condition === "Sunny" && currentWeather.temperature > 30
                          ? "High evaporation rate. Increase irrigation frequency and volume, especially for shallow-rooted crops."
                          : currentWeather.condition === "Rainy"
                            ? "Natural precipitation may be sufficient. Monitor soil moisture before additional irrigation."
                            : currentWeather.condition === "Cloudy"
                              ? "Moderate evaporation rate. Maintain regular irrigation schedule with slightly reduced volume."
                              : "High humidity reduces water loss. Adjust irrigation to prevent waterlogging and disease."}
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
                        <div className="flex items-center">
                          <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                          <h4 className="text-sm font-medium">Water Requirement</h4>
                        </div>
                        <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{
                              width: `${
                                currentWeather.condition === "Sunny" && currentWeather.temperature > 30
                                  ? 90
                                  : currentWeather.condition === "Rainy"
                                    ? 20
                                    : currentWeather.condition === "Cloudy"
                                      ? 60
                                      : 40
                              }%`,
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                          <span>Low</span>
                          <span>Medium</span>
                          <span>High</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="pests" className="mt-4">
                    <div className="p-4 border rounded-md bg-muted/30">
                      <h3 className="font-medium mb-2">Pest & Disease Risk</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {currentWeather.condition === "Sunny" && currentWeather.temperature > 30
                          ? "High temperatures favor certain insect pests like aphids and mites. Monitor regularly."
                          : currentWeather.condition === "Rainy" || currentWeather.humidity > 80
                            ? "High humidity and wet conditions increase fungal disease risk. Consider preventive measures."
                            : currentWeather.condition === "Cloudy" && currentWeather.humidity > 70
                              ? "Moderate disease risk. Monitor for early signs of fungal infections."
                              : "Current conditions present moderate pest pressure. Maintain regular monitoring."}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md">
                          <h4 className="text-sm font-medium flex items-center">
                            <Bug className="h-4 w-4 mr-2 text-amber-500" />
                            Insect Pest Risk
                          </h4>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                              <div
                                className="bg-amber-500 h-2.5 rounded-full"
                                style={{
                                  width: `${
                                    currentWeather.condition === "Sunny" && currentWeather.temperature > 30
                                      ? 85
                                      : currentWeather.condition === "Rainy"
                                        ? 40
                                        : 60
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-xs">
                              {currentWeather.condition === "Sunny" && currentWeather.temperature > 30
                                ? "High"
                                : currentWeather.condition === "Rainy"
                                  ? "Low"
                                  : "Medium"}
                            </span>
                          </div>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-md">
                          <h4 className="text-sm font-medium flex items-center">
                            <Virus className="h-4 w-4 mr-2 text-emerald-500" />
                            Disease Risk
                          </h4>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                              <div
                                className="bg-emerald-500 h-2.5 rounded-full"
                                style={{
                                  width: `${
                                    currentWeather.condition === "Rainy" || currentWeather.humidity > 80
                                      ? 90
                                      : currentWeather.condition === "Sunny" && currentWeather.temperature < 30
                                        ? 30
                                        : 60
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-xs">
                              {currentWeather.condition === "Rainy" || currentWeather.humidity > 80
                                ? "High"
                                : currentWeather.condition === "Sunny" && currentWeather.temperature < 30
                                  ? "Low"
                                  : "Medium"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="harvest" className="mt-4">
                    <div className="p-4 border rounded-md bg-muted/30">
                      <h3 className="font-medium mb-2">Harvest Conditions</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {currentWeather.condition === "Sunny"
                          ? "Excellent conditions for harvesting most crops. Good for grain drying and quality preservation."
                          : currentWeather.condition === "Rainy"
                            ? "Poor harvesting conditions. Postpone harvest to avoid crop damage and quality deterioration."
                            : currentWeather.condition === "Cloudy"
                              ? "Fair harvesting conditions. Monitor moisture levels before harvesting grains."
                              : "Moderate harvesting conditions. High humidity may affect grain moisture content."}
                      </p>
                      <div className="flex items-center justify-between bg-orange-50 dark:bg-orange-900/20 p-3 rounded-md">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                          <h4 className="text-sm font-medium">Optimal Harvest Window</h4>
                        </div>
                        <span className="text-sm font-medium">
                          {currentWeather.condition === "Sunny"
                            ? "Now"
                            : currentWeather.condition === "Rainy"
                              ? "Wait 2-3 days"
                              : "Within 24 hours"}
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

