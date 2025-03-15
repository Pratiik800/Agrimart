import Link from "next/link"
import { ArrowRight, Calendar, User, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Sample articles data
const articles = [
  {
    id: 1,
    title: "Best Practices for Sustainable Farming",
    excerpt: "Learn how to implement sustainable farming practices that improve soil health and increase crop yield.",
    image: "/placeholder.svg?height=200&width=350",
    date: "May 15, 2023",
    author: "Dr. Rajesh Kumar",
    category: "Sustainable Farming",
  },
  {
    id: 2,
    title: "Understanding Soil Health for Better Crop Production",
    excerpt: "Discover the importance of soil health and how it affects your crop production and farm profitability.",
    image: "/placeholder.svg?height=200&width=350",
    date: "June 2, 2023",
    author: "Priya Singh",
    category: "Soil Management",
  },
  {
    id: 3,
    title: "Integrated Pest Management Techniques",
    excerpt: "Explore effective IPM strategies to control pests while minimizing the use of chemical pesticides.",
    image: "/placeholder.svg?height=200&width=350",
    date: "April 28, 2023",
    author: "Dr. Amit Verma",
    category: "Pest Management",
  },
]

export default function KnowledgeCenter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Knowledge</div>
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Farming Knowledge Center</h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-green-100 p-2 text-green-800 hover:bg-green-200 dark:bg-green-800 dark:text-green-200 dark:hover:bg-green-700"
              >
                <HelpCircle className="h-5 w-5" />
                <span className="sr-only">Get Help</span>
              </Link>
            </div>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Expert articles, guides, and videos to help you grow better
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden flex flex-col h-full">
              <CardHeader className="p-0">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs">
                    {article.category}
                  </span>
                </div>
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
              </CardContent>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/knowledge/article/${article.id}`}>Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/knowledge">
              Explore Knowledge Center <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

