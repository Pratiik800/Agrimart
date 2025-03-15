import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample articles data
const articles = {
  latest: [
    {
      id: 1,
      title: "Best Practices for Sustainable Farming",
      excerpt: "Learn how to implement sustainable farming practices that improve soil health and increase crop yield.",
      image: "/placeholder.svg?height=200&width=350",
      date: "May 15, 2023",
      author: "Dr. Rajesh Kumar",
      category: "Sustainable Farming",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Understanding Soil Health for Better Crop Production",
      excerpt: "Discover the importance of soil health and how it affects your crop production and farm profitability.",
      image: "/placeholder.svg?height=200&width=350",
      date: "June 2, 2023",
      author: "Priya Singh",
      category: "Soil Management",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Integrated Pest Management Techniques",
      excerpt: "Explore effective IPM strategies to control pests while minimizing the use of chemical pesticides.",
      image: "/placeholder.svg?height=200&width=350",
      date: "April 28, 2023",
      author: "Dr. Amit Verma",
      category: "Pest Management",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Water Conservation Methods for Agriculture",
      excerpt: "Learn about innovative water conservation techniques to reduce water usage in farming.",
      image: "/placeholder.svg?height=200&width=350",
      date: "May 20, 2023",
      author: "Sanjay Patel",
      category: "Water Management",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Climate-Resilient Farming Strategies",
      excerpt: "Adapt your farming practices to climate change with these resilient strategies.",
      image: "/placeholder.svg?height=200&width=350",
      date: "June 10, 2023",
      author: "Dr. Meena Sharma",
      category: "Climate Change",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Organic Certification Process in India",
      excerpt: "A step-by-step guide to obtaining organic certification for your farm in India.",
      image: "/placeholder.svg?height=200&width=350",
      date: "May 5, 2023",
      author: "Vikram Singh",
      category: "Organic Farming",
      readTime: "12 min read",
    },
  ],
  guides: [
    {
      id: 7,
      title: "Complete Guide to Using Organic Fertilizers",
      excerpt: "Learn how to make and apply organic fertilizers for different crops and soil types.",
      image: "/placeholder.svg?height=200&width=350",
      date: "April 12, 2023",
      author: "Neha Gupta",
      category: "Organic Farming",
      readTime: "15 min read",
    },
    {
      id: 8,
      title: "How to Select the Right Seeds for Your Region",
      excerpt: "A comprehensive guide to choosing seeds that will thrive in your specific climate and soil conditions.",
      image: "/placeholder.svg?height=200&width=350",
      date: "March 25, 2023",
      author: "Dr. Suresh Patel",
      category: "Seed Selection",
      readTime: "11 min read",
    },
    {
      id: 9,
      title: "Proper Use of Pesticides: Safety and Effectiveness",
      excerpt: "Learn how to safely and effectively use pesticides while minimizing environmental impact.",
      image: "/placeholder.svg?height=200&width=350",
      date: "May 8, 2023",
      author: "Rahul Sharma",
      category: "Pest Management",
      readTime: "14 min read",
    },
    {
      id: 10,
      title: "Drip Irrigation Installation and Maintenance",
      excerpt: "Step-by-step instructions for setting up and maintaining a drip irrigation system.",
      image: "/placeholder.svg?height=200&width=350",
      date: "April 5, 2023",
      author: "Anand Verma",
      category: "Irrigation",
      readTime: "13 min read",
    },
  ],
  diseases: [
    {
      id: 11,
      title: "Identifying and Treating Common Tomato Diseases",
      excerpt: "Learn to recognize and treat the most common diseases affecting tomato plants.",
      image: "/placeholder.svg?height=200&width=350",
      date: "May 18, 2023",
      author: "Dr. Kavita Reddy",
      category: "Plant Diseases",
      readTime: "9 min read",
    },
    {
      id: 12,
      title: "Managing Rice Blast Disease",
      excerpt: "Effective strategies for preventing and controlling rice blast disease in your paddy fields.",
      image: "/placeholder.svg?height=200&width=350",
      date: "April 22, 2023",
      author: "Dr. Manoj Kumar",
      category: "Plant Diseases",
      readTime: "10 min read",
    },
    {
      id: 13,
      title: "Controlling Aphid Infestations Naturally",
      excerpt: "Natural and organic methods to control aphid populations in your crops.",
      image: "/placeholder.svg?height=200&width=350",
      date: "June 5, 2023",
      author: "Sunita Devi",
      category: "Pest Control",
      readTime: "8 min read",
    },
    {
      id: 14,
      title: "Preventing Root Rot in Vegetable Crops",
      excerpt: "Learn how to identify, prevent, and treat root rot in various vegetable crops.",
      image: "/placeholder.svg?height=200&width=350",
      date: "May 30, 2023",
      author: "Dr. Prakash Joshi",
      category: "Plant Diseases",
      readTime: "11 min read",
    },
  ],
  schemes: [
    {
      id: 15,
      title: "PM-KISAN Scheme: Eligibility and Application Process",
      excerpt: "Complete guide to the Pradhan Mantri Kisan Samman Nidhi scheme and how to apply for it.",
      image: "/placeholder.svg?height=200&width=350",
      date: "June 8, 2023",
      author: "Aditya Sharma",
      category: "Government Schemes",
      readTime: "7 min read",
    },
    {
      id: 16,
      title: "Kisan Credit Card Scheme: Benefits and Application",
      excerpt: "Learn about the benefits of the Kisan Credit Card and the step-by-step application process.",
      image: "/placeholder.svg?height=200&width=350",
      date: "May 25, 2023",
      author: "Vijay Malhotra",
      category: "Government Schemes",
      readTime: "9 min read",
    },
    {
      id: 17,
      title: "Soil Health Card Scheme: Importance and Benefits",
      excerpt: "Understanding the Soil Health Card scheme and how it can improve your farm's productivity.",
      image: "/placeholder.svg?height=200&width=350",
      date: "April 15, 2023",
      author: "Ritu Patel",
      category: "Government Schemes",
      readTime: "6 min read",
    },
    {
      id: 18,
      title: "Pradhan Mantri Fasal Bima Yojana: Crop Insurance Guide",
      excerpt: "A comprehensive guide to the crop insurance scheme and how to protect your harvest.",
      image: "/placeholder.svg?height=200&width=350",
      date: "March 30, 2023",
      author: "Deepak Verma",
      category: "Government Schemes",
      readTime: "10 min read",
    },
  ],
}

export default function KnowledgePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Knowledge Center</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Expert articles, guides, and resources to help you grow better
              </p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search articles..." className="w-full bg-background pl-8 pr-4" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <Tabs defaultValue="latest">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="latest">Latest Articles</TabsTrigger>
                <TabsTrigger value="guides">How-to Guides</TabsTrigger>
                <TabsTrigger value="diseases">Disease & Pest Control</TabsTrigger>
                <TabsTrigger value="schemes">Government Schemes</TabsTrigger>
              </TabsList>

              {Object.keys(articles).map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles[category].map((article) => (
                      <Card key={article.id} className="overflow-hidden flex flex-col h-full">
                        <div className="relative">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6 flex-grow">
                          <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                          <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {article.date}
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {article.author}
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground">
                            <BookOpen className="h-3 w-3 inline mr-1" />
                            {article.readTime}
                          </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 mt-auto">
                          <Button asChild variant="outline" className="w-full">
                            <Link href={`/knowledge/article/${article.id}`}>
                              Read Article <ArrowRight className="ml-2 h-4 w-4" />
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
        </div>
      </section>
    </div>
  )
}

