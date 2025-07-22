import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const API_URL = "http://localhost:5000/api/contact";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send message");
      setFormSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 3000);
    } catch (err: any) {
      setError(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-primary">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or want to learn more about TIFL? Get in touch with our team.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-green-800 font-medium text-lg">Thank you for your message!</p>
                  <p className="text-green-700 mt-2">We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-center text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      className="min-h-[150px] w-full"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="bg-accent rounded-lg p-6">
                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-2">Our Address</h3>
                  <p className="text-gray-700">
                    TIFL Head Office<br />
                    Islamabad, Pakistan
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-2">Email Us</h3>
                  <a href="mailto:tifl5617@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                    tifl5617@gmail.com
                  </a>
                </div>
                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-2">Call Us</h3>
                  <p className="text-gray-700">
                    03325890475
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
