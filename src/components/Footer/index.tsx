"use client";

import { Phone, Mail, MapPin } from "lucide-react";

import { useState } from "react";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "727aa155-b303-45cb-a56d-0b446a64c235",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Submission failed:", result.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#1f3059]" id="contact">
      <footer className="bg-navy-900 py-6 px-6 lg:px-8 container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-0 lg:grid-cols-2 items-center justify-around">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/assets/images/logo.png" alt="LOGO" width={80} height={80} />
              <span className="text-2xl font-bold text-white">Jsys Tech</span>
            </div>
            <p className="text-sm text-white">
              Our highly skilled development teams specialize in data analysis.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-white" />
                  <span className="text-white">+92-42-36850051</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-white" />
                  <span className="text-white">info@jsys-tech.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="text-white" />
                  <span className="text-white">
                    77, 4th Lane, Subeydar Colony Zarar Shaheed Road,<br />
                    Lahore Cantt, Lahore, Pakistan
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-sm md:max-w-md mx-auto bg-white shadow-md rounded-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-center text-[#1f3059] mb-2">
                Contact Us
              </h2>
              <p className="text-center text-gray-600 mb-6">
                We would love to hear from you. Send us a message!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    onChange={handleChange}
                    value={formData.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your message"
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-4 py-2 text-white rounded-md transition-colors ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff7858]"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
              {submitted && (
                <p className="text-center text-green-500 mt-4">
                  Your message has been sent successfully!
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
