import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Form submitted (mock). No backend connected.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white dark:bg-gray-100 dark:text-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-400 mb-10">
          Contact Me
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 mb-8">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center justify-center sm:justify-start space-x-2 text-green-400 hover:text-green-300 transition"
          >
            <FaEnvelope className="text-xl sm:text-2xl" />
            <span>Email Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/basedshrewd/"
            className="flex items-center justify-center sm:justify-start space-x-2 text-green-400 hover:text-green-300 transition"
          >
            <FaLinkedin className="text-xl sm:text-2xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center sm:justify-start space-x-2 text-green-400 hover:text-green-300 transition"
          >
            <FaPhone className="text-xl sm:text-2xl" />
            <span>Call Me</span>
          </a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-800 text-white dark:bg-white dark:text-black rounded-lg transition-colors duration-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-800 text-white dark:bg-white dark:text-black rounded-lg transition-colors duration-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 bg-gray-800 text-white dark:bg-white dark:text-black rounded-lg transition-colors duration-300"
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-green-400 text-gray-900 rounded-lg shadow-lg hover:bg-green-300 dark:hover:bg-green-500 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-green-400 dark:text-green-600">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
