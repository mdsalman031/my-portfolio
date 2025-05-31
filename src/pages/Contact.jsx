import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nhsbt34",
        "template_h701ne3",
        form.current,
        "Ahe_N9lqNCKcc7Y2D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-black flex justify-center items-center p-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-pink-400 mb-4 text-center">
          Get in Touch
        </h2>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="p-3 rounded bg-gray-800 text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded transition"
        >
          Send
        </button>

        {done && (
          <p className="text-green-400 mt-2 text-center">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
