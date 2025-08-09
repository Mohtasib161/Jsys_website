"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaPrint, FaTiktok, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          access_key: "440796ce-f6d3-4079-876c-7f6c7ba3b3ce",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
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
    <section className="bg-[#1A1A1A] relative " id="contact">
      <footer className="bg-navy-900 py-6 px-6 lg:px-8 container mx-auto ">
         <img
                  src="/assets/images/logo white png.png"
                  alt="JSYS Technologies Logo"
                  className="absolute bottom-0 right-0 w-32 lg:w-80 h-auto opacity-10"
                 
                />
        <div className="grid grid-cols-1 gap-6 md:gap-0 lg:grid-cols-2 items-center justify-around">
           <div>
            <div className="mb-8"> {/* Added margin-bottom for spacing */}
              <div className="py-4">
                <img
                  src="/assets/images/jsyslogowhite.png"
                  alt="JSYS Technologies Logo"
                  width={120}
                  height={120}
                 
                />
                
              </div>
              <p className="text-sm text-white max-w-sm ">
                {t("footcontent.description")}
              </p>
            </div>
            <div className="mt-8"> {/* Adjusted margin-top for spacing */}
              <h3 className="text-white text-xl font-semibold mb-4 pb-2 border-b border-gray-700">
                {t("footcontent.subtitle")}
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
                    <Phone size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t("footcontent.footerContactinfo.Phone")}</p>
                    <span className="text-gray-400 block">{t("footcontent.footerContactinfo.PhoneNumber")}</span>
                    <span className="text-gray-400 block">{t("footcontent.footerContactinfo.Phone Number2")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
                    <Mail size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t("footcontent.footeremiladdress.email")}</p>
                    <span className="text-gray-400 block">{t("footcontent.footeremiladdress.emailaddress")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t("footcontent.addressjapane.japadress")}</p>
                    <p className="text-gray-400">
                      {t("footcontent.addressjapane.address")}
                      <br />
                       {t("footcontent.addressjapane.address2")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t("footcontent.addresspakistan.pakadress")})</p>
                    <p className="text-gray-400">
                      {t("footcontent.addresspakistan.address")}
                      <br />
                      {t("footcontent.addresspakistan.address2")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-sm md:max-w-md mx-auto bg-[#f3f5fc] shadow-md rounded-sm">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-center text-[#1f3059] mb-2">
                {t("footcontent.subtitle")}
              </h2>
              <p className="text-center text-gray-600 mb-6">
                {t("footcontent.contactDec")}
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t("footcontent.formcontent.title.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t("footcontent.formcontent.placeholder.name")}
                    onChange={handleChange}
                    value={formData.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t("footcontent.formcontent.title.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("footcontent.formcontent.placeholder.email")}
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t("footcontent.formcontent.title.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t(
                      "footcontent.formcontent.placeholder.message"
                    )}
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                 <button
                  type="submit"
                  disabled={loading}
                  className={` inline-flex items-center justify-center px-6 py-2 text-black rounded-sm font-medium transition-colors duration-200 text-base ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500"
                  }`}
                >
                  {loading ? t("footcontent.formcontent.button.sending")  : t("footcontent.formcontent.button.send") }
                  {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                </button>
              </form>
              {submitted && (
                <p className="text-center text-green-500 mt-4">
                  {t("footcontent.successMessage")}
                </p>
              )}
            </div>
          </div>
          
        </div>
        <div className="max-w-6xl mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
          <p className="mb-4 sm:mb-0">
            {t("footcontent.copyrighttext")}
          </p>
          <div className="flex space-x-4">
            <a href="https://www.tiktok.com/@jsystechnologies" aria-label="Twitter" className="hover:text-white transition-colors">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578189938785" aria-label="Facebook" className="hover:text-white transition-colors">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/jsystechnologies?igsh=Y25icXlyanNobHE0" aria-label="Instagram" className="hover:text-white transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/105711858/admin/dashboard/" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
             <a href="https://jp.pinterest.com/jsystech/" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <FaPinterest className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
