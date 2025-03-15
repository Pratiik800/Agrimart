import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Legal</div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Privacy Policy</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-green-50 dark:bg-green-950/50 border-0">
          <CardHeader className="flex flex-row items-center gap-4">
            <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
            <div>
              <CardTitle>Data Protection</CardTitle>
              <CardDescription>We prioritize the security of your information</CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-green-50 dark:bg-green-950/50 border-0">
          <CardHeader className="flex flex-row items-center gap-4">
            <Lock className="h-8 w-8 text-green-600 dark:text-green-400" />
            <div>
              <CardTitle>Privacy Controls</CardTitle>
              <CardDescription>You control how your data is used</CardDescription>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-green-50 dark:bg-green-950/50 border-0">
          <CardHeader className="flex flex-row items-center gap-4">
            <Eye className="h-8 w-8 text-green-600 dark:text-green-400" />
            <div>
              <CardTitle>Transparency</CardTitle>
              <CardDescription>Clear information about our practices</CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="prose prose-green dark:prose-invert max-w-none">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-bold">Last Updated: March 8, 2025</h2>
          <p>
            This Privacy Policy describes how AgriMart ("we", "us", or "our") collects, uses, and discloses your
            personal information when you use our website, mobile application, and services (collectively, the
            "Services").
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect several types of information from and about users of our Services, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Personal Information:</strong> Name, email address, postal address, phone number, and other
              identifiers by which you may be contacted online or offline.
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, account preferences, and profile information.
            </li>
            <li>
              <strong>Transaction Information:</strong> Details about purchases or orders you make through our Services,
              including payment information.
            </li>
            <li>
              <strong>Usage Information:</strong> Information about how you use our Services, including browsing
              history, search queries, and interaction with features.
            </li>
            <li>
              <strong>Device Information:</strong> Information about your device, including IP address, device type,
              operating system, and browser type.
            </li>
            <li>
              <strong>Location Information:</strong> General location information based on IP address or more precise
              location if you grant permission.
            </li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect for various purposes, including :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing, maintaining, and improving our Services</li>
            <li>Processing transactions and fulfilling orders</li>
            <li>Sending transactional messages and service announcements</li>
            <li>Responding to your comments, questions, and requests</li>
            <li>Personalizing your experience and delivering content relevant to your interests</li>
            <li>Sending marketing communications if you have opted in</li>
            <li>Monitoring and analyzing trends, usage, and activities in connection with our Services</li>
            <li>Detecting, preventing, and addressing fraud and security issues</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
          <p className="mb-4">We may share your personal information in the following situations:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>With Service Providers:</strong> We share information with third-party vendors, consultants, and
              other service providers who perform services on our behalf.
            </li>
            <li>
              <strong>For Business Transfers:</strong> We may share information in connection with a merger, sale of
              company assets, financing, or acquisition of all or a portion of our business.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose information if we believe it is necessary to comply
              with applicable laws, regulations, legal processes, or governmental requests.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may share information with third parties when you consent to such
              sharing.
            </li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal
            information. However, please note that no method of transmission over the Internet or electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Withdrawing your consent at any time, where we rely on consent to process your information</li>
            <li>Requesting restriction of processing of your personal information</li>
            <li>Requesting transfer of your personal information</li>
            <li>Opting out of marketing communications</li>
            <li>Lodging a complaint with a supervisory authority</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the Contact Us section below.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
          <p className="mb-4">
            Our Services are not intended for children under the age of 13, and we do not knowingly collect personal
            information from children under 13 If you are a parent or guardian and believe that your child has provided
            us with personal information, please contact us.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="bg-muted p-4 rounded-md">
            <p>Email: privacy@agrimart.com</p>
            <p>Address: 123 AgriTech Park, Sector 42, Gurugram, Haryana 122001, India</p>
            <p>Phone: +91 1800-123-4567</p>
          </div>
        </section>
      </div>
    </div>
  )
}

