import { useState } from "react";
import { motion } from "motion/react";
import lib from "../../lib/lib";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) {
      formData.fullName = "Name is required";
    }
    if (!formData.email.trim()) {
      formData.email = "email is required";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setError(validateErrors);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-gray-900 rounded-3xl p-8 py-12 w-full mt-20 card">
      <h1 className="text-5xl font-semibold text-center mb-8 ">
        Contact{" "}
        <span className="bg-gradient-to-r  to-yellow-200 from-cyan-300 bg-clip-text text-transparent">
          Me
        </span>
      </h1>

      <motion.form
        variants={lib.x_container}
        initial="hidden"
        whileInView="visible"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* name Field */}
        <motion.div variants={lib.x_item}>
          <label
            variants={lib.item}
            className="text-white text-sm font-medium block mb-2"
          >
            Your Full Name
          </label>
          <div variants={lib.container} className="relative">
            <input
              variants={lib.item}
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-3 pr-10 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </motion.div>

        {/* email field */}
        <motion.div variants={lib.x_item}>
          <label className="text-white text-sm font-medium block mb-2">
            Your Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter the Email"
              className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-3 pr-10 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </motion.div>

        {/* Phone Field */}
        <motion.div variants={lib.x_item}>
          <label className="text-white text-sm font-medium block mb-2">
            Your Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-3 focus:outline-none focus:border-white transition-colors"
          />
        </motion.div>

        {/* Message Field */}
        <motion.div variants={lib.x_item}>
          <label className="text-white text-sm font-medium block mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message"
            rows={4}
            className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-3 resize-none focus:outline-none focus:border-white transition-colors"
          />
        </motion.div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-yellow-200 transition-colors cursor-pointer"
          >
            Get Started
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </motion.form>
    </div>
  );
}
