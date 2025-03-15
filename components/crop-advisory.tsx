"use client"

import { useState } from "react"
import { ArrowRight, Bug, Droplet, Sun } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
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
  ],
  rabi: [
    {
      id: 4,
      name: "Wheat",
      image: "/placeholder.svg?height=200&width=200",
      description: "Complete guide for wheat cultivation in Rabi season",
      stages: ["Land preparation", "Sowing", "Crown root initiation", "Tillering", "Flowering", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 5,
      name: "Chickpea",
      image: "/placeholder.svg?height=200&width=200",
      description: "Best practices for chickpea cultivation with disease management",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Pod formation", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 6,
      name: "Mustard",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expert tips for mustard cultivation in Rabi season",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Siliqua formation", "Harvesting"],
      currentStage: "Land preparation",
    },
  ],
  zaid: [
    {
      id: 7,
      name: "Moong",
      image: "/placeholder.svg?height=200&width=200",
      description: "Short duration moong cultivation guide for Zaid season",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Pod formation", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 8,
      name: "Watermelon",
      image: "/placeholder.svg?height=200&width=200",
      description: "Maximize watermelon yield during summer months",
      stages: ["Land preparation", "Sowing", "Vine development", "Flowering", "Fruit development", "Harvesting"],
      currentStage: "Land preparation",
    },
    {
      id: 9,
      name: "Cucumber",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expert tips for cucumber cultivation in summer",
      stages: ["Land preparation", "Sowing", "Vegetative", "Flowering", "Fruit development", "Harvesting"],
      currentStage: "Land preparation",
    },
  ],
}

export default function CropAdvisory() {
  const [activeTab, setActiveTab] = useState("kharif")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Advisory</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Crop Advisory Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Expert guidance for every stage of crop cultivation
            </p>
          </div>
        </div>

        <Tabs defaultValue="kharif" className="mt-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="kharif">Kharif Crops</TabsTrigger>
              <TabsTrigger value="rabi">Rabi Crops</TabsTrigger>
              <TabsTrigger value="zaid">Zaid Crops</TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(cropData).map((season) => (
            <TabsContent key={season} value={season} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cropData[season].map((crop) => (
                  <CropCard key={crop.id} crop={crop} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/advisory">
              View All Crop Advisories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CropCard({ crop }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="p-0">
        <img src={crop.image || "/placeholder.svg"} alt={crop.name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl">{crop.name}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">{crop.description}</p>

        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">
            Current Stage: <span className="text-green-600 dark:text-green-400">{crop.currentStage}</span>
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
                  {Math.round(((crop.stages.indexOf(crop.currentStage) + 1) / crop.stages.length) * 100)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
              <div
                style={{ width: `${((crop.stages.indexOf(crop.currentStage) + 1) / crop.stages.length) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex items-center text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
            <Droplet className="h-3 w-3 mr-1" /> Irrigation
          </div>
          <div className="flex items-center text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded-full">
            <Sun className="h-3 w-3 mr-1" /> Nutrition
          </div>
          <div className="flex items-center text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 rounded-full">
            <Bug className="h-3 w-3 mr-1" /> Pest Control
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/advisory/crop/${crop.id}`}>View Advisory</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

