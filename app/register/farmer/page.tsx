"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function FarmerRegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    farmName: "",
    farmSize: "",
    farmLocation: "",
    district: "",
    state: "",
    pincode: "",
    cropTypes: [],
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    accountHolderName: "",
    idType: "aadhar",
    idNumber: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Sending Data:", formData);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phone,
          password: formData.password,
          id_type: formData.idType,
          id_number: formData.idNumber,
          role: "farmer",
          farm_name: formData.farmName,         // Step 2 Data
          farm_size: formData.farmSize,
          state: formData.state,
          district: formData.district,
          farm_address: formData.farmLocation,
          pin_code: formData.pincode,
          crops_grown: formData.cropTypes.join(", "),
          bank_name: formData.bankName,         // Step 3 Data
          account_holder_name: formData.accountHolderName,
          account_number: formData.accountNumber,
          ifsc_code: formData.ifscCode,
        }),
      });

      const data = await response.json();
      console.log("📥 Server Response:", data);

      if (response.ok) {
        alert("✅ Registration Successful!");
        window.location.href = "/register/success?type=farmer";
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("❌ Signup Error:", error);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Farmer Registration</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Join AgriMart as a farmer to sell your products directly to buyers and access valuable resources
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= 1 ? "border-green-600 bg-green-100 dark:border-green-400 dark:bg-green-950" : "border-muted"}`}>
                    {step > 1 ? <Check className="h-5 w-5" /> : <span>1</span>}
                  </div>
                  <span className="mt-2 text-sm font-medium">Personal Info</span>
                </div>
                <div className={`w-full border-t ${step >= 2 ? "border-green-600 dark:border-green-400" : "border-muted"}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= 2 ? "border-green-600 bg-green-100 dark:border-green-400 dark:bg-green-950" : "border-muted"}`}>
                    {step > 2 ? <Check className="h-5 w-5" /> : <span>2</span>}
                  </div>
                  <span className="mt-2 text-sm font-medium">Farm Details</span>
                </div>
                <div className={`w-full border-t ${step >= 3 ? "border-green-600 dark:border-green-400" : "border-muted"}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= 3 ? "border-green-600 bg-green-100 dark:border-green-400 dark:bg-green-950" : "border-muted"}`}>
                    <span>3</span>
                  </div>
                  <span className="mt-2 text-sm font-medium">Payment Info</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Personal Information"}
                  {step === 2 && "Farm Details"}
                  {step === 3 && "Payment Information"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Please provide your basic contact information"}
                  {step === 2 && "Tell us about your farm and what you grow"}
                  {step === 3 && "Add your bank details for receiving payments"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                                      <div className="space-y-4">
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
                                        <div className="space-y-2">
                                          <Label htmlFor="idType">ID Type</Label>
                                          <Select value={formData.idType} onValueChange={(value) => handleSelectChange("idType", value)}>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select ID type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="aadhar">Aadhar Card</SelectItem>
                                              <SelectItem value="pan">PAN Card</SelectItem>
                                              <SelectItem value="voter">Voter ID</SelectItem>
                                              <SelectItem value="driving">Driving License</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="idNumber">ID Number</Label>
                                          <Input
                                            id="idNumber"
                                            name="idNumber"
                                            placeholder="Enter your ID number"
                                            value={formData.idNumber}
                                            onChange={handleChange}
                                            required
                                          />
                                        </div>
                                      </div>
                                    )}


                                    {step === 2 && (
                                      <div className="space-y-4">
                                        <div className="space-y-2">
                                          <Label htmlFor="farmName">Farm Name</Label>
                                          <Input
                                            id="farmName"
                                            name="farmName"
                                            placeholder="Enter your farm name"
                                            value={formData.farmName}
                                            onChange={handleChange}
                                            required
                                          />
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                          <div className="space-y-2">
                                            <Label htmlFor="farmSize">
                                              <span className="flex items-center">
                                                Farm Size (in acres)
                                                <TooltipProvider>
                                                  <Tooltip>
                                                    <TooltipTrigger asChild>
                                                      <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                      <p>Enter the total area of your farm in acres</p>
                                                    </TooltipContent>
                                                  </Tooltip>
                                                </TooltipProvider>
                                              </span>
                                            </Label>
                                            <Input
                                              id="farmSize"
                                              name="farmSize"
                                              type="number"
                                              placeholder="Enter farm size"
                                              value={formData.farmSize}
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

                                              </SelectContent>
                                            </Select>
                                          </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                          <div className="space-y-2">
                                            <Label htmlFor="district">District</Label>
                                            <Input
                                              id="district"
                                              name="district"
                                              placeholder="Enter your district"
                                              value={formData.district}
                                              onChange={handleChange}
                                              required
                                            />
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
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="farmLocation">Farm Address</Label>
                                          <Textarea
                                            id="farmLocation"
                                            name="farmLocation"
                                            placeholder="Enter detailed farm address"
                                            value={formData.farmLocation}
                                            onChange={handleChange}
                                            required
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label>What do you grow?</Label>
                                          <Tabs defaultValue="kharif">
                                            <TabsList className="grid w-full grid-cols-3">
                                              <TabsTrigger value="kharif">Kharif Crops</TabsTrigger>
                                              <TabsTrigger value="rabi">Rabi Crops</TabsTrigger>
                                              <TabsTrigger value="zaid">Zaid Crops</TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="kharif" className="space-y-4">
                                              <div className="grid grid-cols-2 gap-4 mt-4">
                                                {["Rice", "Cotton", "Maize", "Soybean", "Groundnut", "Sugarcane"].map((crop) => (
                                                  <div key={crop} className="flex items-center space-x-2">
                                                    <input
                                                      type="checkbox"
                                                      id={`crop-${crop}`}
                                                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                                    />
                                                    <label
                                                      htmlFor={`crop-${crop}`}
                                                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                                    >
                                                      {crop}
                                                    </label>
                                                  </div>
                                                ))}
                                              </div>
                                            </TabsContent>
                                            <TabsContent value="rabi" className="space-y-4">
                                              <div className="grid grid-cols-2 gap-4 mt-4">
                                                {["Wheat", "Barley", "Mustard", "Chickpea", "Peas", "Potato"].map((crop) => (
                                                  <div key={crop} className="flex items-center space-x-2">
                                                    <input
                                                      type="checkbox"
                                                      id={`crop-${crop}`}
                                                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                                    />
                                                    <label
                                                      htmlFor={`crop-${crop}`}
                                                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                                    >
                                                      {crop}
                                                    </label>
                                                  </div>
                                                ))}
                                              </div>
                                            </TabsContent>
                                            <TabsContent value="zaid" className="space-y-4">
                                              <div className="grid grid-cols-2 gap-4 mt-4">
                                                {["Watermelon", "Muskmelon", "Cucumber", "Moong", "Bitter Gourd", "Pumpkin"].map(
                                                  (crop) => (
                                                    <div key={crop} className="flex items-center space-x-2">
                                                      <input
                                                        type="checkbox"
                                                        id={`crop-${crop}`}
                                                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                                      />
                                                      <label
                                                        htmlFor={`crop-${crop}`}
                                                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                                      >
                                                        {crop}
                                                      </label>
                                                    </div>
                                                  ),
                                                )}
                                              </div>
                                            </TabsContent>
                                          </Tabs>
                                        </div>
                                      </div>
                                    )}


                                    {step === 3 && (
                                      <div className="space-y-4">
                                        <div className="space-y-2">
                                          <Label htmlFor="bankName">Bank Name</Label>
                                          <Input
                                            id="bankName"
                                            name="bankName"
                                            placeholder="Enter your bank name"
                                            value={formData.bankName}
                                            onChange={handleChange}
                                            required
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="accountHolderName">Account Holder Name</Label>
                                          <Input
                                            id="accountHolderName"
                                            name="accountHolderName"
                                            placeholder="Enter account holder name"
                                            value={formData.accountHolderName}
                                            onChange={handleChange}
                                            required
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="accountNumber">Account Number</Label>
                                          <Input
                                            id="accountNumber"
                                            name="accountNumber"
                                            placeholder="Enter your account number"
                                            value={formData.accountNumber}
                                            onChange={handleChange}
                                            required
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor="ifscCode">IFSC Code</Label>
                                          <Input
                                            id="ifscCode"
                                            name="ifscCode"
                                            placeholder="Enter IFSC code"
                                            value={formData.ifscCode}
                                            onChange={handleChange}
                                            required
                                          />
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
                                  {step < 3 ? (
                                    <Button onClick={nextStep}>Continue</Button>
                                  ) : (
                                    <Button type="submit" onClick={handleSubmit}>
                                      Complete Registration
                                    </Button>
                                  )}
                                </CardFooter>
                              </Card>


                              <div className="mt-8">
                                <h3 className="text-xl font-bold mb-4">Benefits of Registering as a Farmer</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Direct Market Access</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <p className="text-sm text-muted-foreground">
                                        Sell your produce directly to buyers without middlemen, ensuring you get the best prices for your
                                        crops.
                                      </p>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Expert Advisory</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <p className="text-sm text-muted-foreground">
                                        Get personalized crop advisory services from agricultural experts to maximize your yield.
                                      </p>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Market Intelligence</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <p className="text-sm text-muted-foreground">
                                        Access real-time market prices and trends to make informed decisions about when to sell your
                                        produce.
                                      </p>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Quality Inputs</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <p className="text-sm text-muted-foreground">
                                        Purchase high-quality seeds, fertilizers, and pesticides at special member prices.
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