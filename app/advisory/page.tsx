import { Search, Filter, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

// Sample crop data
const cropData = {
  kharif: [
    {
      id: 1,
      name: "Cotton",
      image: "/placeholder.svg?height=200&width=200",
      description: "Best practices for cotton cultivation during Kharif season",
      stages: ["Pre-sowing", "Sowing", "Vegetative", "Flowering", "Boll formation", "Harvesting"],
      currentStage: "Flowering",
    },
    {
      id: 2,
      name: "Rice",
      image: "/placeholder.svg?height=200&width=200",
      description: "Complete guide for paddy cultivation with high yield",
      stages: ["Nursery", "Transplanting", "Tillering", "Panicle initiation", "Flowering", "Harvesting"],
      currentStage: "Tillering",
    },
    {
      id: 3,
      name: "Maize",
      image: "/placeholder.svg?height=200&width=200",
      description: "Maximize your maize yield with these expert tips",
      stages: ["Land preparation", "Sowing", "Vegetative", "Tasseling", "Silking", "Harvesting"],
      currentStage: "Vegetative",
    },
    {
      id: 4,
      name: "Soybean",
      image: "/placeholder.svg?height=200&width=200",
      description: "Comprehensive guide for soybean cultivation",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Pod formation", "Harvesting"],
      currentStage: "Vegetative",
    },
    {
      id: 5,
      name: "Groundnut",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expert tips for groundnut cultivation in Kharif season",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Pegging", "Harvesting"],
      currentStage: "Vegetative",
    },
    {
      id: 6,
      name: "Sugarcane",
      image: "/placeholder.svg?height=200&width=200",
      description: "Complete guide for sugarcane cultivation",
      stages: ["Land preparation", "Planting", "Germination", "Tillering", "Grand growth", "Maturity"],
      currentStage: "Tillering",
    },
  ],
  rabi: [
    {
      id: 7,
      name: "Wheat",
      image: "/placeholder.svg?height=200&width=200",
      description: "Complete guide for wheat cultivation in Rabi season",
      stages: ["Land preparation", "Sowing", "Crown root initiation", "Tillering", "Flowering", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 8,
      name: "Chickpea",
      image: "/placeholder.svg?height=200&width=200",
      description: "Best practices for chickpea cultivation with disease management",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Pod formation", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 9,
      name: "Mustard",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expert tips for mustard cultivation in Rabi season",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Siliqua formation", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 10,
      name: "Barley",
      image: "/placeholder.svg?height=200&width=200",
      description: "Comprehensive guide for barley cultivation",
      stages: ["Land preparation", "Sowing", "Tillering", "Jointing", "Heading", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 11,
      name: "Potato",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expert tips for potato cultivation in Rabi season",
      stages: ["Land preparation", "Planting", "Emergence", "Vegetative", "Tuber formation", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 12,
      name: "Peas",
      image: "/placeholder.svg?height=200&width=200",
      description: "Complete guide for pea cultivation",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Pod formation", "Harvesting"],
      currentStage: "Land preparation",
    },
  ],
  zaid: [
    {
      id: 13,
      name: "Moong",
      image: "/placeholder.svg?height=200&width=200",
      description: "Short duration moong cultivation guide for Zaid season",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Pod formation", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 14,
      name: "Watermelon",
      image: "/placeholder.svg?height=200&width=200",
      description: "Maximize watermelon yield during summer months",
      stages: ["Land preparation", "Sowing", "Vine development", "Flowering", "Fruit development", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 15,
      name: "Cucumber",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expert tips for cucumber cultivation in summer",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Fruit development", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 16,
      name: "Bitter Gourd",
      image: "/placeholder.svg?height=200&width=200",
      description: "Comprehensive guide for bitter gourd cultivation",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Fruit development", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 17,
      name: "Bottle Gourd",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expert tips for bottle gourd cultivation in summer",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Fruit development", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 18,
      name: "Okra",
      image: "/placeholder.svg?height=200&width=200",
      description: "Complete guide for okra cultivation in summer",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Fruit development", "Harvesting"],
      currentStage: "Land preparation",
    },
  ],
}

export default function AdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Crop Advisory Services</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Expert guidance for every stage of crop cultivation to maximize your yield
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search for crops..." className="w-full bg-background pl-8 pr-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold">Crop Advisories</h2>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue placeholder="Filter by crop type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Crop Types</SelectItem>
                  <SelectItem value="cereals">Cereals</SelectItem>
                  <SelectItem value="pulses">Pulses</SelectItem>
                  <SelectItem value="oilseeds">Oilseeds</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          <Tabs defaultValue="kharif" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="kharif">Kharif Crops</TabsTrigger>
              <TabsTrigger value="rabi">Rabi Crops</TabsTrigger>
              <TabsTrigger value="zaid">Zaid Crops</TabsTrigger>
            </TabsList>

            {Object.keys(cropData).map((season) => (
              <TabsContent key={season} value={season}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cropData[season].map((crop) => (
                    <Card key={crop.id} className="overflow-hidden flex flex-col h-full">
                      <CardHeader className="p-0">
                        <img
                          src={crop.image || "/placeholder.svg"}
                          alt={crop.name}
                          className="w-full h-48 object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-6 flex-grow">
                        <CardTitle className="text-xl mb-2">{crop.name}</CardTitle>
                        <CardDescription className="mb-4">{crop.description}</CardDescription>

                        <div className="mt-2">
                          <h4 className="text-sm font-medium mb-2">
                            Current Stage:{" "}
                            <span className="text-green-600 dark:text-green-400">{crop.currentStage}</span>
                          </h4>
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-green-200 text-green-800">
                                  Progress
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-green-800">
                                  {Math.round(
                                    ((crop.stages.indexOf(crop.currentStage) + 1) / crop.stages.length) * 100,
                                  )}
                                  %
                                </span>
                              </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                              <div
                                style={{
                                  width: `${((crop.stages.indexOf(crop.currentStage) + 1) / crop.stages.length) * 100}%`,
                                }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 mt-auto">
                        <Button asChild className="w-full">
                          <Link href={`/advisory/crop/${crop.id}`}>
                            View Advisory <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}

