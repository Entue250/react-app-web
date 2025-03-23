import React, { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaChevronDown,
} from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import emailjs from "@emailjs/browser";

// Spinner Component
const Spinner = () => (
  <div
    className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Loading...
    </span>
  </div>
);

const Contact = ({ darkMode, setDarkMode }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "Select a reason",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // EmailJS credentials from .env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
    const { name, value } = e.target;
    // Update both the form element and our state
    if (name === "user_name") {
      setFormData({ ...formData, name: value });
    } else if (name === "user_email") {
      setFormData({ ...formData, email: value });
    } else if (name === "contact_reason") {
      setFormData({ ...formData, reason: value });
    } else if (name === "message") {
      setFormData({ ...formData, message: value });
    }
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
    setStatus(""); // Clear any previous status while loading

    // Create a formatted date/time string
    const now = new Date();
    const formattedTime = now.toLocaleString(); // e.g., "3/23/2025, 2:30:45 PM"

    try {
      // Add the time parameter to the form or create a template parameters object
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        contact_reason: formData.reason,
        message: formData.message,
        time: formattedTime, // Add the time parameter here
      };

      // Using EmailJS to send the email with template parameters
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email successfully sent!", result.text);
      setStatus("Your message was sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        reason: "Select a reason",
        message: "",
      });

      // Clear success message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle contact info clicks
  const handleEmailClick = () => {
    window.location.href = "mailto:entue250@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+250788402197";
  };

  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/@-1.9347045,30.1333798,3a,75y,275.19h,90t/data=!3m7!1e1!3m5!1s4WbAi_BPA4WsbY1W276ABg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D4WbAi_BPA4WsbY1W276ABg%26yaw%3D275.19!7i16384!8i8192!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
      "_blank"
    );
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
                {/* Email - Clickable */}
                <a
                  href="mailto:entue250@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEmailClick();
                  }}
                  className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } transition-all duration-300`}
                  aria-label="Send email"
                >
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-blue-50"
                    } p-3 rounded-full mr-5 ${
                      darkMode
                        ? "group-hover:bg-gray-600"
                        : "group-hover:bg-blue-100"
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
                      } `}
                    >
                      entue250@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone - Clickable */}
                <a
                  href="tel:+250788402197"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePhoneClick();
                  }}
                  className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } transition-all duration-300`}
                  aria-label="Call phone number"
                >
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-blue-50"
                    } p-3 rounded-full mr-5 ${
                      darkMode
                        ? "group-hover:bg-gray-600"
                        : "group-hover:bg-blue-100"
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
                      } `}
                    >
                      (+250) 788 402 197
                    </p>
                  </div>
                </a>

                {/* Location - Clickable */}
                <a
                  href="https://www.google.com/maps/@-1.9347045,30.1333798,3a,75y,275.19h,90t/data=!3m7!1e1!3m5!1s4WbAi_BPA4WsbY1W276ABg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D4WbAi_BPA4WsbY1W276ABg%26yaw%3D275.19!7i16384!8i8192!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLocationClick();
                  }}
                  className={`flex items-center text-left p-2 rounded-lg cursor-pointer group ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } transition-all duration-300`}
                  aria-label="View location on map"
                >
                  <div
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-blue-50"
                    } p-3 rounded-full mr-5 ${
                      darkMode
                        ? "group-hover:bg-gray-600"
                        : "group-hover:bg-blue-100"
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
                      } `}
                    >
                      Kigali, Rwanda
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form Card */}
            <form
              ref={form}
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
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "border border-gray-200 text-gray-900"
                  }`}
                  disabled={loading}
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
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "border border-gray-200 text-gray-900"
                  }`}
                  disabled={loading}
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
                    name="contact_reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 appearance-none ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border border-gray-200 bg-white text-gray-900"
                    }`}
                    disabled={loading}
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
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 disabled:hover:scale-100`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <Spinner />
                    <span className="ml-2">Sending...</span>
                  </span>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Send Message
                  </>
                )}
              </button>
              {status && (
                <div
                  className={`mt-4 p-3 rounded-md text-center font-medium transition-all duration-300 ${
                    status.includes("success")
                      ? darkMode
                        ? "bg-green-900/30 text-green-400"
                        : "bg-green-100 text-green-700"
                      : darkMode
                      ? "bg-red-900/30 text-red-400"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status}
                </div>
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
