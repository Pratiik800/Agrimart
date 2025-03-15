"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function BuyerRegistrationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    accountType: "individual",
    companyName: "",
    gstNumber: "",
    preferredPayment: "upi",
    agreedToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    // Redirect to success page or dashboard
    window.location.href = "/register/success?type=buyer"
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Buyer Registration</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Join AgriMart as a buyer to purchase fresh produce directly from farmers
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div
                  className={`flex flex-col items-center ${step >= 1 ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= 1 ? "border-green-600 bg-green-100 dark:border-green-400 dark:bg-green-950" : "border-muted"}`}
                  >
                    {step > 1 ? <Check className="h-5 w-5" /> : <span>1</span>}
                  </div>
                  <span className="mt-2 text-sm font-medium">Account Info</span>
                </div>
                <div
                  className={`w-full border-t ${step >= 2 ? "border-green-600 dark:border-green-400" : "border-muted"}`}
                ></div>
                <div
                  className={`flex flex-col items-center ${step >= 2 ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= 2 ? "border-green-600 bg-green-100 dark:border-green-400 dark:bg-green-950" : "border-muted"}`}
                  >
                    <span>2</span>
                  </div>
                  <span className="mt-2 text-sm font-medium">Delivery Details</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Account Information"}
                  {step === 2 && "Delivery & Payment Details"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Create your buyer account to start shopping"}
                  {step === 2 && "Add your delivery address and payment preferences"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Account Information */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Account Type</Label>
                        <RadioGroup
                          defaultValue={formData.accountType}
                          onValueChange={(value) => handleSelectChange("accountType", value)}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="individual" id="individual" />
                            <Label htmlFor="individual">Individual</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="business" id="business" />
                            <Label htmlFor="business">Business/Organization</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {formData.accountType === "business" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="companyName">Company/Organization Name</Label>
                            <Input
                              id="companyName"
                              name="companyName"
                              placeholder="Enter company name"
                              value={formData.companyName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gstNumber">GST Number (Optional)</Label>
                            <Input
                              id="gstNumber"
                              name="gstNumber"
                              placeholder="Enter GST number"
                              value={formData.gstNumber}
                              onChange={handleChange}
                            />
                          </div>
                        </>
                      )}

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Delivery & Payment Details */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="addressLine1">Address Line 1</Label>
                        <Input
                          id="addressLine1"
                          name="addressLine1"
                          placeholder="Enter your street address"
                          value={formData.addressLine1}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                        <Input
                          id="addressLine2"
                          name="addressLine2"
                          placeholder="Apartment, suite, unit, building, floor, etc."
                          value={formData.addressLine2}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Select value={formData.state} onValueChange={(value) => handleSelectChange("state", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                              <SelectItem value="karnataka">Karnataka</SelectItem>
                              <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                              <SelectItem value="telangana">Telangana</SelectItem>
                              <SelectItem value="kerala">Kerala</SelectItem>
                              <SelectItem value="maharashtra">Maharashtra</SelectItem>
                              <SelectItem value="gujarat">Gujarat</SelectItem>
                              <SelectItem value="punjab">Punjab</SelectItem>
                              <SelectItem value="haryana">Haryana</SelectItem>
                              <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                              {/* Add more states as needed */}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          placeholder="Enter PIN code"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Payment Method</Label>
                        <RadioGroup
                          defaultValue={formData.preferredPayment}
                          onValueChange={(value) => handleSelectChange("preferredPayment", value)}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label htmlFor="upi">UPI</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card">Credit/Debit Card</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="netbanking" id="netbanking" />
                            <Label htmlFor="netbanking">Net Banking</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label htmlFor="cod">Cash on Delivery</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="agreedToTerms"
                          name="agreedToTerms"
                          checked={formData.agreedToTerms}
                          onChange={handleChange}
                          className="h-4 w-4 mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
                          required
                        />
                        <label htmlFor="agreedToTerms" className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary underline">
                            Privacy Policy
                          </Link>
                          . I confirm that all the information provided is accurate.
                        </label>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                ) : (
                  <Button variant="outline" asChild>
                    <Link href="/register">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back to Options
                    </Link>
                  </Button>
                )}
                {step < 2 ? (
                  <Button onClick={nextStep}>Continue</Button>
                ) : (
                  <Button type="submit" onClick={handleSubmit}>
                    Complete Registration
                  </Button>
                )}
              </CardFooter>
            </Card>

            {/* Benefits Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Benefits of Registering as a Buyer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Fresh Farm Produce</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Access fresh, high-quality produce directly from farms, ensuring better taste and nutrition.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Competitive Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get better prices by cutting out middlemen and buying directly from farmers.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Traceability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Know exactly where your food comes from and how it was grown with complete transparency.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Support Farmers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Make a positive impact by supporting local farmers and sustainable agricultural practices.
                    </p>
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

