import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Scale, FileText } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Legal</div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Terms of Service</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Please read these terms carefully before using AgriMart
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-green-50 dark:bg-green-950/50 border-0">
          <CardHeader className="flex flex-row items-center gap-4">
            <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
            <div>
              <CardTitle>User Protection</CardTitle>
              <CardDescription>Safeguarding your rights and interests</CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-green-50 dark:bg-green-950/50 border-0">
          <CardHeader className="flex flex-row items-center gap-4">
            <Scale className="h-8 w-8 text-green-600 dark:text-green-400" />
            <div>
              <CardTitle>Fair Trading</CardTitle>
              <CardDescription>Ensuring transparent transactions</CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-green-50 dark:bg-green-950/50 border-0">
          <CardHeader className="flex flex-row items-center gap-4">
            <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
            <div>
              <CardTitle>Clear Guidelines</CardTitle>
              <CardDescription>Easy to understand policies</CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="prose prose-green dark:prose-invert max-w-none">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-bold">Last Updated: March 8, 2025</h2>
          <p>
            Welcome to AgriMart. By accessing or using our website, mobile application, and services (collectively, the
            "Services"), you agree to be bound by these Terms of Service.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using AgriMart, you agree to be bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our
            Services.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">2. User Registration</h2>
          <p className="mb-4">To access certain features of our Services, you must register for an account.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>You must provide accurate and complete information during registration</li>
            <li>You are responsible for maintaining the security of your account credentials</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
            <li>You may not use another user's account without permission</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">3. Marketplace Rules</h2>
          <p className="mb-4">When using our marketplace, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>List only agricultural products and related items</li>
            <li>Provide accurate descriptions of products</li>
            <li>Honor your commitments to buy or sell</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Maintain fair pricing practices</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
          <p className="mb-4">AgriMart facilitates transactions between buyers and sellers. Payment terms include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>All payments must be processed through our platform</li>
            <li>Service fees may apply to transactions</li>
            <li>Sellers receive payment after successful delivery confirmation</li>
            <li>Refund policies apply as per our guidelines</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">5. User Content</h2>
          <p className="mb-4">Users are responsible for the content they post on AgriMart. Content must not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Contain false or misleading information</li>
            <li>Include harmful or malicious content</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">6. Dispute Resolution</h2>
          <p className="mb-4">In case of disputes between users, our dispute resolution process includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Direct communication between parties</li>
            <li>Mediation by AgriMart support team</li>
            <li>Final decision by AgriMart in unresolved cases</li>
            <li>Option for arbitration in serious matters</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">AgriMart is not liable for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Quality of products sold by users</li>
            <li>Direct transactions between users outside our platform</li>
            <li>Loss or damage from using our Services</li>
            <li>Technical issues or service interruptions</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">8. Modifications to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Users will be notified of significant changes, and
            continued use of our Services constitutes acceptance of modified terms.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
          <div className="bg-muted p-4 rounded-md">
            <p>Email: legal@agrimart.com</p>
            <p>Address: 123 AgriTech Park, Sector 42, Gurugram, Haryana 122001, India</p>
            <p>Phone: +91 1800-123-4567</p>
          </div>
        </section>
      </div>
    </div>
  )
}

