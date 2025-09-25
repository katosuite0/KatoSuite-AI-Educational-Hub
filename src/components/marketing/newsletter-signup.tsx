export default function NewsletterSignup() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input type="email" placeholder="Your email" className="border p-2 rounded w-full md:w-auto" required />
        <button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded">Sign Up</button>
      </form>
    </section>
  );
}
