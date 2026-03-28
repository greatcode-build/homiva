"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      form.reset();
    } else {
      console.error("API error", data);
      toast.error("Something went wrong. Please try again.");
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-4xl mb-2 font-bold text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center mx-auto text-gray-500 mb-12 max-w-80">
        Get in touch to find, visit, or secure your next property.
      </p>
      <form
        className="max-w-2xl text-gray-600 mx-auto pt-8"
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-500 rounded py-3 px-4 mt-2 "
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-500 rounded py-3 px-4 mt-2 "
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            name="Message"
            placeholder="Message"
            className="w-full border border-gray-300 rounded px-4 py-3 mt-2 h-48 resize-none"
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
          disabled={result === "Sending..."}
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export { Contact };
