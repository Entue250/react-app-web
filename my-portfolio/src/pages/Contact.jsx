// import React, { useState, useEffect } from "react";
// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaPaperPlane,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";
// import { FiChevronUp } from "react-icons/fi";

// const Contact = ({ darkMode, setDarkMode }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     reason: "Select a reason",
//     message: "",
//   });
//   const [status, setStatus] = useState("");
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("YOUR_GOOGLE_SHEETS_WEB_APP_URL", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         setStatus("Your message sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           reason: "Select a reason",
//           message: "",
//         });
//         setTimeout(() => setStatus(""), 2000);
//       } else {
//         setStatus("Failed to send message.");
//       }
//     } catch (error) {
//       setStatus("Error sending message.");
//     }
//   };

//   return (
//     <div
//       className={`pt-16 transition-all duration-300 ${
//         darkMode ? "bg-gray-900" : "bg-white"
//       }`}
//     >
//       <section
//         id="contact"
//         className={`${
//           darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
//         } transition-all duration-300`}
//       >
//         <div className="w-full px-4 sm:px-6 lg:px-8 transition-all text-center relative py-20">
//           <h2 className="text-4xl font-bold mb-2 mt-10">Get In Touch</h2>
//           <p
//             className={`text-lg ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             } mb-12`}
//           >
//             Let's discuss how we can work together to bring your ideas to life.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Contact Info Card */}
//             <div
//               className={`h-100 ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } p-5 rounded-lg shadow-lg transition-all duration-300`}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-left">
//                 Contact Info
//               </h3>
//               <div className="space-y-4">
//                 <div
//                   className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
//                     darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   } transition-all duration-300`}
//                 >
//                   <div
//                     className={`${
//                       darkMode ? "bg-gray-700" : "bg-blue-50"
//                     } p-3 rounded-full mr-5 ${
//                       darkMode
//                         ? "group-hover:bg-gray-700"
//                         : "group-hover:bg-gray-100"
//                     } transition-all duration-300`}
//                   >
//                     <FaEnvelope
//                       className={`${
//                         darkMode ? "text-blue-400" : "text-blue-500"
//                       } text-xl transform group-hover:scale-125 transition-all duration-300`}
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1 text-xl">Email</p>
//                     <p
//                       className={`text-xm ${
//                         darkMode ? "text-gray-400" : "text-gray-600"
//                       }`}
//                     >
//                       entue@gmail.com
//                     </p>
//                   </div>
//                 </div>
//                 <div
//                   className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
//                     darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   } transition-all duration-300`}
//                 >
//                   <div
//                     className={`${
//                       darkMode ? "bg-gray-700" : "bg-blue-50"
//                     } p-3 rounded-full mr-5 ${
//                       darkMode
//                         ? "group-hover:bg-gray-700"
//                         : "group-hover:bg-gray-100"
//                     } transition-all duration-300`}
//                   >
//                     <FaPhone
//                       className={`${
//                         darkMode ? "text-blue-400" : "text-blue-500"
//                       } text-xl transform group-hover:scale-125 transition-all duration-300 rotate-90`}
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1 text-xl">Phone</p>
//                     <p
//                       className={`text-xm ${
//                         darkMode ? "text-gray-400" : "text-gray-600"
//                       }`}
//                     >
//                       (+250) 788 402 197
//                     </p>
//                   </div>
//                 </div>
//                 <div
//                   className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
//                     darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   } transition-all duration-300`}
//                 >
//                   <div
//                     className={`${
//                       darkMode ? "bg-gray-700" : "bg-blue-50"
//                     } p-3 rounded-full mr-5 ${
//                       darkMode
//                         ? "group-hover:bg-gray-700"
//                         : "group-hover:bg-gray-100"
//                     } transition-all duration-300`}
//                   >
//                     <FaMapMarkerAlt
//                       className={`${
//                         darkMode ? "text-blue-400" : "text-blue-500"
//                       } text-xl transform group-hover:scale-125 transition-all duration-300`}
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1 text-xl">Location</p>
//                     <p
//                       className={`text-xm ${
//                         darkMode ? "text-gray-400" : "text-gray-600"
//                       }`}
//                     >
//                       Kigali, Rwanda
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form Card */}
//             <form
//               onSubmit={handleSubmit}
//               className={` ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } p-6 rounded-lg shadow-lg text-left transition-all duration-300`}
//             >
//               <div className="mb-5">
//                 <label
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-200" : ""
//                   }`}
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your full name"
//                   className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     darkMode
//                       ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                       : "border border-gray-200 text-gray-900"
//                   }`}
//                 />
//               </div>
//               <div className="mb-5">
//                 <label
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-200" : ""
//                   }`}
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your email address"
//                   className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     darkMode
//                       ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                       : "border border-gray-200 text-gray-900"
//                   }`}
//                 />
//               </div>
//               <div className="mb-5 relative group">
//                 <label
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-200" : ""
//                   }`}
//                 >
//                   Reason for Contact
//                 </label>
//                 <div className="relative">
//                   <select
//                     name="reason"
//                     value={formData.reason}
//                     onChange={handleChange}
//                     required
//                     className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 appearance-none ${
//                       darkMode
//                         ? "bg-gray-700 border-gray-600 text-white"
//                         : "border border-gray-200 bg-white text-gray-900"
//                     }`}
//                   >
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="Select a reason"
//                     >
//                       Select a reason
//                     </option>
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="Job Opportunity"
//                     >
//                       Job Opportunity
//                     </option>
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="Project Collaboration"
//                     >
//                       Project Collaboration
//                     </option>
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="General Question"
//                     >
//                       General Question
//                     </option>
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="Other"
//                     >
//                       Other
//                     </option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                     <FaChevronDown
//                       className={darkMode ? "text-gray-400" : "text-gray-500"}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-6 mt-8">
//                 <label
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-200" : ""
//                   }`}
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   placeholder="Write your message here..."
//                   className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     darkMode
//                       ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                       : "border border-gray-200 text-gray-900"
//                   }`}
//                   rows="4"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
//               >
//                 <FaPaperPlane className="mr-2" /> Send Message
//               </button>
//               {status && (
//                 <p
//                   className={`mt-4 ${
//                     darkMode ? "text-green-400" : "text-green-500"
//                   } p-2 rounded`}
//                 >
//                   {status}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>

//         {showBackToTop && (
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="fixed bottom-6 right-4 bg-blue-500 hover:bg-blue-600 text-white  p-3 rounded-full shadow-lg transition-all cursor-pointer group absolute"
//           >
//             <FiChevronUp />
//             <span className="absolute -top-8 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//               Back to top
//             </span>
//           </button>
//         )}
//         {/* Back to top button*/}
//         {/* <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all cursor-pointer"
//         >
//           <FaChevronUp className="text-xl" />
//         </button> */}
//       </section>
//     </div>
//   );
// };

// export default Contact;

// import React, { useState, useEffect } from "react";
// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaPaperPlane,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";
// import { FiChevronUp } from "react-icons/fi";

// const Contact = ({ darkMode, setDarkMode }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     reason: "Select a reason",
//     message: "",
//   });
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   // Google Sheets Web App URL - replace with your actual deployed script URL
//   const GOOGLE_SHEETS_WEB_APP_URL =
//     "https://script.google.com/macros/s/AKfycbyIqoL-D9BiAJqBK4pfjvmNFqWMYgRQaFc1a_AQ1jZm2agBQc6gIj-Bbioo0FsUeZPzVg/exec";

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     if (formData.name.trim() === "") {
//       setStatus("Please enter your name");
//       return false;
//     }

//     if (formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email)) {
//       setStatus("Please enter a valid email address");
//       return false;
//     }

//     if (formData.reason === "Select a reason") {
//       setStatus("Please select a reason for contact");
//       return false;
//     }

//     if (formData.message.trim() === "") {
//       setStatus("Please enter your message");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form
//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true);
//     setStatus("Sending your message...");

//     try {
//       const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();

//       if (data.result === "success") {
//         setStatus("Your message was sent successfully!");
//         // Reset form
//         setFormData({
//           name: "",
//           email: "",
//           reason: "Select a reason",
//           message: "",
//         });
//         // Clear success message after 3 seconds
//         setTimeout(() => setStatus(""), 3000);
//       } else {
//         setStatus("Failed to send message. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error sending form data:", error);
//       setStatus("Error sending message. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className={`pt-16 transition-all duration-300 ${
//         darkMode ? "bg-gray-900" : "bg-white"
//       }`}
//     >
//       <section
//         id="contact"
//         className={`${
//           darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
//         } transition-all duration-300`}
//       >
//         <div className="w-full px-4 sm:px-6 lg:px-8 transition-all text-center relative py-20">
//           <h2 className="text-4xl font-bold mb-2 mt-10">Get In Touch</h2>
//           <p
//             className={`text-lg ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             } mb-12`}
//           >
//             Let's discuss how we can work together to bring your ideas to life.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Contact Info Card */}
//             <div
//               className={`h-100 ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } p-5 rounded-lg shadow-lg transition-all duration-300`}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-left">
//                 Contact Info
//               </h3>
//               <div className="space-y-4">
//                 <div
//                   className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
//                     darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   } transition-all duration-300`}
//                 >
//                   <div
//                     className={`${
//                       darkMode ? "bg-gray-700" : "bg-blue-50"
//                     } p-3 rounded-full mr-5 ${
//                       darkMode
//                         ? "group-hover:bg-gray-700"
//                         : "group-hover:bg-gray-100"
//                     } transition-all duration-300`}
//                   >
//                     <FaEnvelope
//                       className={`${
//                         darkMode ? "text-blue-400" : "text-blue-500"
//                       } text-xl transform group-hover:scale-125 transition-all duration-300`}
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1 text-xl">Email</p>
//                     <p
//                       className={`text-xm ${
//                         darkMode ? "text-gray-400" : "text-gray-600"
//                       }`}
//                     >
//                       entue@gmail.com
//                     </p>
//                   </div>
//                 </div>
//                 <div
//                   className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
//                     darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   } transition-all duration-300`}
//                 >
//                   <div
//                     className={`${
//                       darkMode ? "bg-gray-700" : "bg-blue-50"
//                     } p-3 rounded-full mr-5 ${
//                       darkMode
//                         ? "group-hover:bg-gray-700"
//                         : "group-hover:bg-gray-100"
//                     } transition-all duration-300`}
//                   >
//                     <FaPhone
//                       className={`${
//                         darkMode ? "text-blue-400" : "text-blue-500"
//                       } text-xl transform group-hover:scale-125 transition-all duration-300 rotate-90`}
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1 text-xl">Phone</p>
//                     <p
//                       className={`text-xm ${
//                         darkMode ? "text-gray-400" : "text-gray-600"
//                       }`}
//                     >
//                       (+250) 788 402 197
//                     </p>
//                   </div>
//                 </div>
//                 <div
//                   className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
//                     darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                   } transition-all duration-300`}
//                 >
//                   <div
//                     className={`${
//                       darkMode ? "bg-gray-700" : "bg-blue-50"
//                     } p-3 rounded-full mr-5 ${
//                       darkMode
//                         ? "group-hover:bg-gray-700"
//                         : "group-hover:bg-gray-100"
//                     } transition-all duration-300`}
//                   >
//                     <FaMapMarkerAlt
//                       className={`${
//                         darkMode ? "text-blue-400" : "text-blue-500"
//                       } text-xl transform group-hover:scale-125 transition-all duration-300`}
//                     />
//                   </div>
//                   <div>
//                     <p className="font-medium mb-1 text-xl">Location</p>
//                     <p
//                       className={`text-xm ${
//                         darkMode ? "text-gray-400" : "text-gray-600"
//                       }`}
//                     >
//                       Kigali, Rwanda
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form Card */}
//             <form
//               onSubmit={handleSubmit}
//               className={` ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } p-6 rounded-lg shadow-lg text-left transition-all duration-300`}
//             >
//               <div className="mb-5">
//                 <label
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-200" : ""
//                   }`}
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your full name"
//                   className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     darkMode
//                       ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                       : "border border-gray-200 text-gray-900"
//                   }`}
//                 />
//               </div>
//               <div className="mb-5">
//                 <label
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-200" : ""
//                   }`}
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your email address"
//                   className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     darkMode
//                       ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                       : "border border-gray-200 text-gray-900"
//                   }`}
//                 />
//               </div>
//               <div className="mb-5 relative group">
//                 <label
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-200" : ""
//                   }`}
//                 >
//                   Reason for Contact
//                 </label>
//                 <div className="relative">
//                   <select
//                     name="reason"
//                     value={formData.reason}
//                     onChange={handleChange}
//                     required
//                     className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 appearance-none ${
//                       darkMode
//                         ? "bg-gray-700 border-gray-600 text-white"
//                         : "border border-gray-200 bg-white text-gray-900"
//                     }`}
//                   >
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="Select a reason"
//                     >
//                       Select a reason
//                     </option>
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="Job Opportunity"
//                     >
//                       Job Opportunity
//                     </option>
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="Project Collaboration"
//                     >
//                       Project Collaboration
//                     </option>
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="General Question"
//                     >
//                       General Question
//                     </option>
//                     <option
//                       className={
//                         darkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-900"
//                       }
//                       value="Other"
//                     >
//                       Other
//                     </option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                     <FaChevronDown
//                       className={darkMode ? "text-gray-400" : "text-gray-500"}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-6 mt-8">
//                 <label
//                   className={`block mb-2 font-medium ${
//                     darkMode ? "text-gray-200" : ""
//                   }`}
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   placeholder="Write your message here..."
//                   className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                     darkMode
//                       ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                       : "border border-gray-200 text-gray-900"
//                   }`}
//                   rows="4"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full flex items-center justify-center ${
//                   loading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
//                 } text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105`}
//               >
//                 {loading ? (
//                   <>Sending...</>
//                 ) : (
//                   <>
//                     <FaPaperPlane className="mr-2" /> Send Message
//                   </>
//                 )}
//               </button>
//               {status && (
//                 <p
//                   className={`mt-4 text-center ${
//                     status.includes("success")
//                       ? darkMode
//                         ? "text-green-400"
//                         : "text-green-500"
//                       : darkMode
//                       ? "text-red-400"
//                       : "text-red-500"
//                   } p-2 rounded`}
//                 >
//                   {status}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>

//         {showBackToTop && (
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="fixed bottom-6 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all cursor-pointer group absolute"
//           >
//             <FiChevronUp />
//             <span className="absolute -top-8 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//               Back to top
//             </span>
//           </button>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaChevronDown,
} from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

const Contact = ({ darkMode, setDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "Select a reason",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Google Sheets Web App URL - replace with your actual deployed script URL
  const GOOGLE_SHEETS_WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbyrYc6VGCl9Y3hlSBhXEBvYq0iUgBzRMzfbPWHOj0W4y5RywlZic3QtAsJd1xfFpry4oQ/exec";

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.name.trim() === "") {
      setStatus("Please enter your name");
      return false;
    }

    if (formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("Please enter a valid email address");
      return false;
    }

    if (formData.reason === "Select a reason") {
      setStatus("Please select a reason for contact");
      return false;
    }

    if (formData.message.trim() === "") {
      setStatus("Please enter your message");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setStatus("Sending your message...");

    try {
      // Use fetch with no-cors mode as a fallback for CORS issues
      const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // This helps with CORS issues but won't allow reading the response
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Since we're using no-cors, we can't read the response
      // So we'll assume success if no error was thrown
      console.log(
        "Form submitted, response status:",
        response.status || "unknown"
      );

      setStatus("Your message was sent successfully!");
      // Reset form
      setFormData({
        name: "",
        email: "",
        reason: "Select a reason",
        message: "",
      });

      // Clear success message after 3 seconds
      setTimeout(() => setStatus(""), 2000);
    } catch (error) {
      console.error("Error sending form data:", error);
      setStatus("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`pt-16 transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        } transition-all duration-300`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 transition-all text-center relative py-20">
          <h2 className="text-4xl font-bold mb-2 mt-10">Get In Touch</h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } mb-12`}
          >
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info Card */}
            <div
              className={`h-100 ${
                darkMode ? "bg-gray-800" : "bg-white"
              } p-5 rounded-lg shadow-lg transition-all duration-300`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-left">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div
                  className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } transition-all duration-300`}
                >
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-blue-50"
                    } p-3 rounded-full mr-5 ${
                      darkMode
                        ? "group-hover:bg-gray-700"
                        : "group-hover:bg-gray-100"
                    } transition-all duration-300`}
                  >
                    <FaEnvelope
                      className={`${
                        darkMode ? "text-blue-400" : "text-blue-500"
                      } text-xl transform group-hover:scale-125 transition-all duration-300`}
                    />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-xl">Email</p>
                    <p
                      className={`text-xm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      entue@gmail.com
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } transition-all duration-300`}
                >
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-blue-50"
                    } p-3 rounded-full mr-5 ${
                      darkMode
                        ? "group-hover:bg-gray-700"
                        : "group-hover:bg-gray-100"
                    } transition-all duration-300`}
                  >
                    <FaPhone
                      className={`${
                        darkMode ? "text-blue-400" : "text-blue-500"
                      } text-xl transform group-hover:scale-125 transition-all duration-300 rotate-90`}
                    />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-xl">Phone</p>
                    <p
                      className={`text-xm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      (+250) 788 402 197
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } transition-all duration-300`}
                >
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-blue-50"
                    } p-3 rounded-full mr-5 ${
                      darkMode
                        ? "group-hover:bg-gray-700"
                        : "group-hover:bg-gray-100"
                    } transition-all duration-300`}
                  >
                    <FaMapMarkerAlt
                      className={`${
                        darkMode ? "text-blue-400" : "text-blue-500"
                      } text-xl transform group-hover:scale-125 transition-all duration-300`}
                    />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-xl">Location</p>
                    <p
                      className={`text-xm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <form
              onSubmit={handleSubmit}
              className={` ${
                darkMode ? "bg-gray-800" : "bg-white"
              } p-6 rounded-lg shadow-lg text-left transition-all duration-300`}
            >
              <div className="mb-5">
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-200" : ""
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "border border-gray-200 text-gray-900"
                  }`}
                />
              </div>
              <div className="mb-5">
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-200" : ""
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "border border-gray-200 text-gray-900"
                  }`}
                />
              </div>
              <div className="mb-5 relative group">
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-200" : ""
                  }`}
                >
                  Reason for Contact
                </label>
                <div className="relative">
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 appearance-none ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border border-gray-200 bg-white text-gray-900"
                    }`}
                  >
                    <option
                      className={
                        darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-white text-gray-900"
                      }
                      value="Select a reason"
                    >
                      Select a reason
                    </option>
                    <option
                      className={
                        darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-white text-gray-900"
                      }
                      value="Job Opportunity"
                    >
                      Job Opportunity
                    </option>
                    <option
                      className={
                        darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-white text-gray-900"
                      }
                      value="Project Collaboration"
                    >
                      Project Collaboration
                    </option>
                    <option
                      className={
                        darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-white text-gray-900"
                      }
                      value="General Question"
                    >
                      General Question
                    </option>
                    <option
                      className={
                        darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-white text-gray-900"
                      }
                      value="Other"
                    >
                      Other
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <FaChevronDown
                      className={darkMode ? "text-gray-400" : "text-gray-500"}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6 mt-8">
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-200" : ""
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "border border-gray-200 text-gray-900"
                  }`}
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center ${
                  loading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
                } text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105`}
              >
                {loading ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Send Message
                  </>
                )}
              </button>
              {status && (
                <p
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? darkMode
                        ? "text-green-400"
                        : "text-green-500"
                      : darkMode
                      ? "text-red-400"
                      : "text-red-500"
                  } p-2 rounded`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all cursor-pointer group absolute"
          >
            <FiChevronUp />
            <span className="absolute -top-8 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Back to top
            </span>
          </button>
        )}
      </section>
    </div>
  );
};

export default Contact;
