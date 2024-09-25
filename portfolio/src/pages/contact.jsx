import contimg from "../assets/img/contact.png";
import { useState } from "react";

const Contact_page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-white w-full font-serif font-bold text-5xl text-center mt-8">
          Get In <span className="text-cyan-300">Touch!</span>
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap w-full  mt-10 md:mt-16">
          <div className="md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0">
            <img
              src={contimg}
              alt="Contact"
              className="md:w-3/5 md:h-80 w-80 h-auto rounded-3xl"
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </div>

          <div
            className="md:w-1/2 w-full flex flex-col justify-center items-center mt-10 md:mt-0 px-4"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <form
              className="flex flex-col gap-5 w-full text-xl"
              action={`mailto:bharathsivanesh@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`}
              method="POST"
              encType="text/plain"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white text-black placeholder:text-xl italic h-14 rounded-2xl px-4"
                placeholder="Enter Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black placeholder:text-xl italic h-14 rounded-2xl px-4"
                placeholder="Enter Email"
              />
              <textarea
                placeholder="Let's Talk..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white text-black placeholder:text-xl italic h-24 rounded-2xl px-4"
              ></textarea>
              <button
                type="submit"
                className="h-12 w-full bg-cyan-300 text-white text-xl rounded-2xl"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_page;
