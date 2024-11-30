import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to submit the form.");
      }
    } catch (err) {
      console.error("Error submitting the form:", err);
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white dark:from-gray-100 dark:via-gray-300 dark:to-gray-200 dark:text-black"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-8">Contact Me</h2>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 mb-8">
          <a href="mailto:your-email@example.com" className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition">
            <FaEnvelope className="text-xl sm:text-2xl" />
            <span>Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/basedshrewd/" className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition">
            <FaLinkedin className="text-xl sm:text-2xl" />
            <span>LinkedIn</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition">
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
            className="w-full p-3 sm:p-4 bg-gray-800 rounded-lg text-white dark:bg-gray-200 dark:text-black"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 sm:p-4 bg-gray-800 rounded-lg text-white dark:bg-gray-200 dark:text-black"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 sm:p-4 bg-gray-800 rounded-lg text-white dark:bg-gray-200 dark:text-black"
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-4 ${
              isLoading ? "bg-gray-400" : "bg-green-400"
            } text-gray-900 rounded-lg shadow-lg hover:bg-green-300 transition`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && <p className="mt-4 text-green-400">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
