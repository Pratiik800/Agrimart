import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Leaf,
  Code,
  TrendingUp,
  HeartHandshake,
  Sprout,
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Help us transform agriculture through technology and innovation
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <a href="#open-positions">View Open Positions</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#why-join">Why Join AgriMart</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="why-join" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Join AgriMart</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of a team that's revolutionizing agriculture in India
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card className="bg-green-50 dark:bg-green-950/50 border-0">
              <CardHeader>
                <Leaf className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Meaningful Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your work directly helps millions of farmers improve their livelihoods and contributes to sustainable
                  agriculture.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/50 border-0">
              <CardHeader>
                <Code className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work with cutting-edge technologies and solve complex challenges in the agricultural technology space.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/50 border-0">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rapid company growth means abundant opportunities for career advancement and skill development.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/50 border-0">
              <CardHeader>
                <Users className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a diverse team of passionate professionals working together to transform Indian agriculture.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/50 border-0">
              <CardHeader>
                <HeartHandshake className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Competitive Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enjoy comprehensive health coverage, flexible work arrangements, and competitive compensation
                  packages.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/50 border-0">
              <CardHeader>
                <Sprout className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Learning & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access continuous learning opportunities, mentorship programs, and resources to grow your skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="open-positions" className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Open Positions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find your perfect role and join our growing team
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl mt-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All Roles</TabsTrigger>
                <TabsTrigger value="tech">Technology</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <JobCard
                  title="Senior Full Stack Developer"
                  department="Technology"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
                <JobCard
                  title="Product Manager - Farmer Platform"
                  department="Product"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
                <JobCard
                  title="Agricultural Data Scientist"
                  department="Technology"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
                <JobCard
                  title="Regional Sales Manager"
                  department="Business"
                  location="Delhi NCR, India"
                  type="Full-time"
                  remote={false}
                />
                <JobCard
                  title="Supply Chain Specialist"
                  department="Operations"
                  location="Multiple Locations"
                  type="Full-time"
                  remote={false}
                />
                <JobCard
                  title="UI/UX Designer"
                  department="Technology"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
                <JobCard
                  title="Content Writer - Agricultural Knowledge"
                  department="Marketing"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
                <JobCard
                  title="Customer Success Manager"
                  department="Operations"
                  location="Multiple Locations"
                  type="Full-time"
                  remote={false}
                />
              </TabsContent>

              <TabsContent value="tech" className="space-y-4">
                <JobCard
                  title="Senior Full Stack Developer"
                  department="Technology"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
                <JobCard
                  title="Agricultural Data Scientist"
                  department="Technology"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
                <JobCard
                  title="UI/UX Designer"
                  department="Technology"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
                <JobCard
                  title="Mobile App Developer"
                  department="Technology"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
              </TabsContent>

              <TabsContent value="business" className="space-y-4">
                <JobCard
                  title="Regional Sales Manager"
                  department="Business"
                  location="Delhi NCR, India"
                  type="Full-time"
                  remote={false}
                />
                <JobCard
                  title="Business Development Executive"
                  department="Business"
                  location="Multiple Locations"
                  type="Full-time"
                  remote={false}
                />
                <JobCard
                  title="Marketing Manager"
                  department="Business"
                  location="Bangalore, India"
                  type="Full-time"
                  remote={true}
                />
              </TabsContent>

              <TabsContent value="operations" className="space-y-4">
                <JobCard
                  title="Supply Chain Specialist"
                  department="Operations"
                  location="Multiple Locations"
                  type="Full-time"
                  remote={false}
                />
                <JobCard
                  title="Customer Success Manager"
                  department="Operations"
                  location="Multiple Locations"
                  type="Full-time"
                  remote={false}
                />
                <JobCard
                  title="Logistics Coordinator"
                  department="Operations"
                  location="Multiple Locations"
                  type="Full-time"
                  remote={false}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Hiring Process</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We've designed a transparent and efficient hiring process to find the best talent
                </p>
              </div>
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Application Review</h3>
                    <p className="text-sm text-muted-foreground">
                      Our recruitment team reviews your application and resume to assess your qualifications.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Initial Screening</h3>
                    <p className="text-sm text-muted-foreground">
                      A brief phone or video call to discuss your background, experience, and interest in the role.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Skills Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Depending on the role, you may be asked to complete a technical assessment or case study.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Team Interviews</h3>
                    <p className="text-sm text-muted-foreground">
                      Meet with potential team members and stakeholders to assess cultural fit and technical skills.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Offer & Onboarding</h3>
                    <p className="text-sm text-muted-foreground">
                      If selected, you'll receive an offer and begin our comprehensive onboarding program.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">FAQs</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common questions about working at AgriMart
                </p>
              </div>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Do I need agricultural experience to work at AgriMart?</h3>
                  <p className="text-sm text-muted-foreground">
                    While agricultural knowledge is beneficial for some roles, it's not required for all positions. We
                    value diverse backgrounds and provide training on agricultural concepts.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">What is your remote work policy?</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer hybrid and remote work options for many roles, especially in technology and business
                    functions. Field and operations roles typically require on-site presence.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">How long does the hiring process typically take?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our hiring process typically takes 2-4 weeks from application to offer, depending on the role and
                    scheduling availability.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">What benefits do you offer?</h3>
                  <p className="text-sm text-muted-foreground">
                    We provide comprehensive health insurance, retirement benefits, flexible work arrangements,
                    professional development opportunities, and more.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">I don't see a role that matches my skills. Can I still apply?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! We welcome general applications. Send your resume to careers@agrimart.com with details about
                    your interests and skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100 dark:bg-green-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Join Our Team?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our open positions and take the first step towards a rewarding career at AgriMart
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="#open-positions">View Open Positions</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:careers@agrimart.com">Contact Recruiting Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function JobCard({ title, department, location, type, remote }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="outline"
              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-0"
            >
              {department}
            </Badge>
            {remote && (
              <Badge
                variant="outline"
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-0"
              >
                Remote Eligible
              </Badge>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {location}
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              {type}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Posted 2 weeks ago
            </div>
          </div>
          <Button asChild>
            <Link href={`/careers/job/${title.toLowerCase().replace(/\s+/g, "-")}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

