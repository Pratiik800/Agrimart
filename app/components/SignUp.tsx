import { useState } from 'react';

export default function SignUp() {
    const [formData, setFormData] = useState({
        first_name: '', last_name: '', email: '', phone_number: '', password: '', id_type: '', id_number: '', role: 'farmer',
        farm_name: '', farm_size: '', state: '', district: '', farm_address: '', pin_code: '', crops_grown: '',
        bank_name: '', account_holder_name: '', account_number: '', ifsc_code: '', profile_image: ''
    });

   const handleSignUp = async (e) => {
           e.preventDefault(); // Prevent page refresh
           console.log("Sending data:", formData); // Debugging

           try {
               const response = await fetch('/api/signup', {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify(formData),
               });

               const data = await response.json();
               console.log("Server response:", data); // Debugging

               if (response.ok) {
                   alert("User registered successfully!");
               } else {
                   alert("Error: " + data.error);
               }
           } catch (error) {
               console.error("Signup Error:", error);
           }
       };

       return (
           <form onSubmit={handleSignUp}>
               <input type="text" placeholder="First Name" onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
               <input type="text" placeholder="Last Name" onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
               <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
               <input type="text" placeholder="Phone Number" onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} />
               <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
               <button type="submit">Complete Registration</button>
           </form>
       );
   }