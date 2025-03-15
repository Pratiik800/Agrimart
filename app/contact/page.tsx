"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "general",
  })

  const [chatMessages, setChatMessages] = useState([
    {
      role: "system",
      content:
        "Hello! I'm AgriBot, your agricultural assistant. How can I help you today with farming, crops, or agricultural products?",
    },
  ])
  const [userMessage, setUserMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // In a real app, you would send this data to your backend
    alert("Thank you for your message! Our experts will get back to you soon.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      category: "general",
    })
  }

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!userMessage.trim()) return

    // Add user message to chat
    const newUserMessage = {
      role: "user",
      content: userMessage,
    }

    setChatMessages((prev) => [...prev, newUserMessage])
    setUserMessage("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const botResponses = {
        pest: "For pest control, I recommend integrated pest management (IPM) which combines biological, cultural, physical, and chemical tools to minimize economic, health, and environmental risks. Would you like specific recommendations for your crop?",
        fertilizer:
          "The best fertilizer depends on your soil type and crop needs. Have you done a soil test recently? This can help determine the specific nutrients your soil needs.",
        water:
          "Water management is crucial for crop health. Drip irrigation is one of the most efficient methods, saving up to 60% water compared to traditional methods. Would you like more information on irrigation systems?",
        seed: "Selecting the right seeds is essential for a good harvest. Consider factors like your local climate, soil type, and market demand. What crop are you planning to grow?",
        organic:
          "Organic farming avoids synthetic inputs and focuses on techniques like crop rotation and biological pest control. It can lead to premium pricing for your produce. Are you interested in organic certification?",
        weather:
          "Weather patterns significantly impact farming decisions. I recommend checking the 10-day forecast before major farming activities. Would you like information on climate-resilient farming practices?",
        price:
          "Market prices fluctuate based on supply and demand. To get the best prices, consider direct marketing, value addition, or joining a farmer producer organization. What crops are you selling?",
        disease:
          "Plant diseases can reduce yields significantly. Early detection and proper identification are key to effective management. Can you describe the symptoms you're seeing in your crops?",
        soil: "Healthy soil is the foundation of successful farming. Regular testing, crop rotation, and adding organic matter can improve soil health. Have you noticed any issues with your soil?",
        government:
          "There are several government schemes available for farmers, including PM-KISAN, Soil Health Card, and crop insurance programs. Would you like information on a specific scheme?",
      }

      // Check if any keywords match in the user message
      const userMessageLower = userMessage.toLowerCase()
      let botResponse =
        "I understand you're asking about farming. Could you provide more details about your specific question or concern so I can give you more targeted advice?"

      for (const [keyword, response] of Object.entries(botResponses)) {
        if (userMessageLower.includes(keyword)) {
          botResponse = response
          break
        }
      }

      // Add bot response to chat
      setChatMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: botResponse,
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Support</div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Talk to an Expert</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get expert advice on farming, products, or any questions you might have
          </p>
        </div>
      </div>

      <Tabs defaultValue="contact" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="contact">Contact Form</TabsTrigger>
          <TabsTrigger value="chat">AI Chat Assistant</TabsTrigger>
        </TabsList>

        <TabsContent value="contact">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Query Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="products">Product Inquiry</SelectItem>
                          <SelectItem value="farming">Farming Advice</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="orders">Order Issues</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief subject of your inquiry" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Describe your query in detail" className="min-h-[150px]" />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us directly through these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Our Office</h3>
                    <p className="text-sm text-muted-foreground">
                      123 AgriTech Park, Sector 42
                      <br />
                      Gurugram, Haryana 122001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      support@agrimart.com
                      <br />
                      info@agrimart.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-sm text-muted-foreground">
                      +91 1800-123-4567 (Toll Free)
                      <br />
                      +91 98765-43210 (Support)
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="chat">
          <ChatWithAgriBot />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ChatWithAgriBot() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! I'm AgriBot, your agricultural assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(input)
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase()

    if (input.includes("pest") || input.includes("insect")) {
      return "For pest management, I recommend integrated pest management (IPM) techniques. Would you like specific advice for a particular crop or pest?"
    } else if (input.includes("fertilizer") || input.includes("nutrient")) {
      return "Proper fertilization is crucial for crop health. The best approach is to conduct a soil test first to determine exact nutrient needs. Would you like information on organic or chemical fertilizers?"
    } else if (input.includes("seed") || input.includes("variety")) {
      return "Selecting the right seed variety depends on your local climate, soil type, and market demand. We offer a wide range of high-quality seeds. Can you tell me which crop you're planning to grow?"
    } else if (input.includes("weather") || input.includes("rain") || input.includes("forecast")) {
      return "Weather patterns significantly impact farming decisions. I recommend checking our advisory section for seasonal forecasts. For immediate weather updates, you can use our mobile app."
    } else if (input.includes("price") || input.includes("market") || input.includes("sell")) {
      return "Current market prices vary by region. You can check real-time prices in our Market Prices section. Would you like advice on the best time to sell your produce?"
    } else if (input.includes("organic") || input.includes("natural")) {
      return "Organic farming focuses on sustainable practices without synthetic inputs. We offer certified organic products and can guide you through the certification process if you're interested."
    } else if (input.includes("water") || input.includes("irrigation")) {
      return "Efficient water management is essential for sustainable farming. Drip irrigation and rainwater harvesting are excellent options. Would you like specific irrigation recommendations for your crops?"
    } else if (input.includes("disease") || input.includes("fungus") || input.includes("rot")) {
      return "Plant diseases require prompt identification and treatment. Could you describe the symptoms or share a photo of the affected plant? This would help me provide more specific advice."
    } else if (input.includes("thank")) {
      return "You're welcome! I'm here to help with any agricultural questions you have. Feel free to ask anything else!"
    } else if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello there! How can I assist with your farming or gardening questions today?"
    } else {
      return "Thank you for your question. Our agricultural experts will review this and provide a detailed response within 24 hours. Is there anything else I can help with in the meantime?"
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-green-600" />
          AgriBot Assistant
        </CardTitle>
        <CardDescription>Get instant answers to your agricultural questions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] overflow-y-auto border rounded-md p-4 mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.role === "user" ? "flex justify-end" : "flex justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-green-600 animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-green-600 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 rounded-full bg-green-600 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Type your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="justify-start text-left h-auto py-2"
              onClick={() => {
                setInput("How do I control pests organically?")
                handleSend()
              }}
            >
              How do I control pests organically?
            </Button>
            <Button
              variant="outline"
              className="justify-start text-left h-auto py-2"
              onClick={() => {
                setInput("What fertilizers are best for vegetable crops?")
                handleSend()
              }}
            >
              What fertilizers are best for vegetable crops?
            </Button>
            <Button
              variant="outline"
              className="justify-start text-left h-auto py-2"
              onClick={() => {
                setInput("When is the best time to sow wheat?")
                handleSend()
              }}
            >
              When is the best time to sow wheat?
            </Button>
            <Button
              variant="outline"
              className="justify-start text-left h-auto py-2"
              onClick={() => {
                setInput("How can I improve soil health?")
                handleSend()
              }}
            >
              How can I improve soil health?
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

