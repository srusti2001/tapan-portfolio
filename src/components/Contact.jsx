import React, { useState } from "react";
import { heroData } from "../data";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const contacts = [
  { icon: FiMail, title: "Email", value: heroData.email, link: `mailto:${heroData.email}` },
  { icon: FiPhone, title: "Phone", value: heroData.phone, link: `tel:${heroData.phone}` },
  { icon: FiGithub, title: "GitHub", value: "View Profile", link: heroData.github },
  { icon: FiLinkedin, title: "LinkedIn", value: "View Profile", link: heroData.linkedin }
];

const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 }
  }
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a success message
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 sm:px-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Contact Me</h2>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={i}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-xl transition-shadow cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="text-blue-600 text-3xl" />
              <div className="flex flex-col">
                <span className="font-semibold">{contact.title}</span>
                <span className="text-gray-600">{contact.value}</span>
              </div>
              <FiExternalLink className="ml-auto text-gray-400" />
            </motion.a>
          );
        })}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8"
      >
        <h3 className="text-2xl font-semibold mb-4 text-center">Send a Message</h3>

        {submitted && (
          <div className="bg-green-100 text-green-800 p-3 mb-4 rounded-md text-center">
            Your message has been sent! ✅
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md py-3 hover:bg-blue-700 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Optional note */}
      <div className="mt-8 text-center text-gray-600">
        Or reach out via email or LinkedIn. I usually respond within 24 hours! 📬
      </div>
    </section>
  );
};

export default ContactSection;
