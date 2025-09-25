export default function ContactPage() {
  return (
    <section className="py-16 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full border p-2 rounded" required />
        <textarea name="message" placeholder="Your Message" className="w-full border p-2 rounded" rows={5} required />
        <button type="submit" className="w-full py-2 bg-blue-700 text-white rounded">Send Message</button>
      </form>
    </section>
  );
}
