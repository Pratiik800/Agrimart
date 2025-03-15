import Link from "next/link"
import { ArrowLeft, Calendar, Share2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample article data
const articles = {
  "1": {
    id: 1,
    title: "Best Practices for Sustainable Farming",
    content: `
      <p class="mb-4">Sustainable farming practices are essential for maintaining soil health, protecting the environment, and ensuring long-term agricultural productivity. This article explores key sustainable farming techniques that can be implemented by farmers across India.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">What is Sustainable Farming?</h2>
      <p class="mb-4">Sustainable farming, also known as sustainable agriculture, is a farming approach that focuses on producing crops and livestock while ensuring economic profitability, environmental stewardship, and social responsibility. It aims to meet the needs of the present without compromising the ability of future generations to meet their own needs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Key Sustainable Farming Practices</h2>
      
      <h3 class="text-xl font-bold mt-6 mb-3">1. Crop Rotation</h3>
      <p class="mb-4">Crop rotation involves changing the type of crops grown in a particular area according to a planned sequence. This practice helps in managing soil fertility, controlling pests and diseases, and reducing soil erosion.</p>
      <p class="mb-4">Benefits of crop rotation include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Improved soil structure and fertility</li>
        <li>Reduced pest and disease pressure</li>
        <li>Enhanced weed control</li>
        <li>Increased biodiversity</li>
        <li>Better nutrient management</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">2. Conservation Tillage</h3>
      <p class="mb-4">Conservation tillage refers to tillage methods that leave at least 30% of crop residue on the soil surface after planting. This helps in reducing soil erosion, conserving soil moisture, and improving soil health.</p>
      <p class="mb-4">Types of conservation tillage include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>No-till farming</li>
        <li>Strip tillage</li>
        <li>Ridge tillage</li>
        <li>Mulch tillage</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">3. Integrated Pest Management (IPM)</h3>
      <p class="mb-4">IPM is an ecosystem-based approach to pest management that combines different control methods to minimize economic, health, and environmental risks. It focuses on long-term prevention of pests through a combination of techniques such as biological control, habitat manipulation, and use of resistant crop varieties.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">4. Water Conservation</h3>
      <p class="mb-4">Efficient water management is crucial for sustainable farming, especially in regions with limited water resources. Some effective water conservation techniques include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Drip irrigation</li>
        <li>Rainwater harvesting</li>
        <li>Mulching</li>
        <li>Laser land leveling</li>
        <li>Scheduling irrigation based on crop water requirements</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">5. Organic Farming</h3>
      <p class="mb-4">Organic farming avoids the use of synthetic fertilizers, pesticides, growth regulators, and livestock feed additives. Instead, it relies on crop rotation, green manure, compost, biological pest control, and mechanical cultivation to maintain soil productivity and control pests.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Implementing Sustainable Practices on Your Farm</h2>
      <p class="mb-4">Transitioning to sustainable farming practices requires careful planning and a gradual approach. Here are some steps to help you get started:</p>
      <ol class="list-decimal pl-6 mb-4">
        <li>Assess your current farming practices and identify areas for improvement</li>
        <li>Set realistic goals for implementing sustainable practices</li>
        <li>Start with one or two practices that are most relevant to your farm</li>
        <li>Seek advice from agricultural extension services or experienced sustainable farmers</li>
        <li>Monitor and evaluate the results of your sustainable practices</li>
        <li>Gradually incorporate more sustainable practices as you gain experience and confidence</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Sustainable farming is not just an environmental necessity but also an economic opportunity for farmers. By adopting sustainable practices, farmers can reduce input costs, improve soil health, increase resilience to climate change, and potentially access premium markets for sustainably produced food.</p>
      <p class="mb-4">Remember that sustainable farming is a journey, not a destination. It requires continuous learning, adaptation, and innovation to address the evolving challenges of agriculture while ensuring the long-term health of our land and communities.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    date: "May 15, 2023",
    author: "Dr. Rajesh Kumar",
    authorBio:
      "Dr. Rajesh Kumar is an agricultural scientist with over 15 years of experience in sustainable farming practices. He has worked with numerous farmers across India to implement eco-friendly agricultural techniques.",
    category: "Sustainable Farming",
    readTime: "8 min read",
    tags: ["sustainable farming", "soil health", "crop rotation", "water conservation", "organic farming"],
  },
}

export default function ArticlePage({ params }) {
  const { id } = params
  const article = articles[id]

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Button asChild className="mt-4">
          <Link href="/knowledge">Back to Knowledge Center</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link href="/knowledge">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Knowledge Center
                </Link>
              </Button>
            </div>

            <article className="prose prose-green dark:prose-invert max-w-none">
              <div className="mb-6">
                <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  {article.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {article.author}
                </div>
                <div>{article.readTime}</div>
              </div>
              <div className="mb-8">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>

            <Separator className="my-8" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Share this article:</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About the Author</h2>
              <Card>
                <CardContent className="p-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=80&width=80&text=RK"
                      alt={article.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{article.author}</h3>
                    <p className="text-muted-foreground">{article.authorBio}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Understanding Soil Health for Better Crop Production</CardTitle>
                    <CardDescription>
                      Discover the importance of soil health and how it affects your crop production.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/knowledge/article/2">Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Water Conservation Methods for Agriculture</CardTitle>
                    <CardDescription>
                      Learn about innovative water conservation techniques to reduce water usage in farming.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/knowledge/article/4">Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

