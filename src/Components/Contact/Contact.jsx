import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white text-gray-800 px-6 py-20 md:px-20 lg:px-36"
    >
      <div className="text-center mb-14" data-aos="fade-up">
        <h2 className="text-5xl font-bold mb-4 tracking-tight">Let's Talk</h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Interested in working together? Drop a message and let's connect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14" data-aos="fade-up">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            placeholder="Your Message"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-900 transition duration-300 font-medium shadow-md"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">Souravshakya951@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 7291020224</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Sector 66, Noida, India</p>
          </div>

          <div className="flex space-x-6 pt-4">
            <a
              href="#"
              className="text-gray-500 hover:text-black transition duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black transition duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-3xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black transition duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
