import React, { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

function ContactSection() {
  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "harshmishra37992@gmail.com",
      link: "mailto:harshmishra37992@gmail.com",
    },
    {
      id: 2,
      icon: FaPhone,
      title: "Phone",
      value: "+919570269214",
      link: "tel:+919570269214",
    },
    {
      id: 3,
      icon: FaLinkedin,
      title: "linkedIn",
      value: "linkedin.com",
      link: "#",
    },
    {
      id: 4,
      icon: FaMapMarkedAlt,
      title: "Location",
      value: "Gurugram, Haryana, India, 122022",
      link: "#",
    },
  ];
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !message) {
      toast.error("Please enter your email and message.");
      return;
    }

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    if (!message) {
      toast.error("Please enter your message.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  toast.error("Please enter a valid email address.");
  return;
}
    try {
      setLoading(true);

      const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  {
    email,
    message,
  }
);

      toast.success(response.data.message || "Message sent successfully!");

      setEmail("");
      setMessage("");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to send message. Please try again."
      );

      console.error(error);

    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            Let's Connect
          </h2>
          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborating on exciting projects, or connecting with fellow developers and technology enthusiasts.
              Whether you have a project idea, a job opportunity, or simply want to say hello, feel free to reach out.
              I'll do my best to respond as soon as possible.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.id} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 text-sm hover:text-primary transition-colors"
                          target={
                            info.title === "Location" ? "_self" : "_blank"
                          }
                          rel={
                            info.title === "Location"
                              ? ""
                              : "noopener noreferrer"
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="Email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors "
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Message"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors "
                  placeholder="Your Message..."
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-2.5 rounded-lg font-medium text-white
    ${loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/80"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
console.log(import.meta.env.VITE_API_URL);
export default ContactSection;
