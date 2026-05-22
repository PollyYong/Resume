"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const reset = () => {
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formUrlEntries = new URLSearchParams();
    formUrlEntries.append("entry.927399612", form.name);
    formUrlEntries.append("entry.95167746", form.number);
    formUrlEntries.append("entry.1384109903", form.email);
    formUrlEntries.append("entry.860400273", form.message);

    const googleFormUrl = "https://docs.google.com/forms/u/0/d/1ntitB62HQLxqOHOEYSMj4eDS61veo5lLGJhcWj1yRig/formResponse";

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formUrlEntries.toString(),
      });

      setSubmitted(true);
      reset();
    } catch (error: any) {
      alert('Something went wrong. Please try again.');
      console.error("Form submission error:", error.message);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label">
                      Name *
                    </label>
                    <input
                      required
                      className="input"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="label">
                      Phone *
                    </label>
                    <input
                      required
                      className="input"
                      id="number"
                      type="number"
                      name="number"
                      value={form.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Email *
                  </label>
                  <input
                    required
                    className="input"
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label">
                    Message *
                  </label>
                  <textarea
                    required
                    className="input"
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
                {submitted && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={getImgPath("/images/icon/success-icon.svg")}
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-secondary">
                      Email has been Successfully Sent.
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    Send Now
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;