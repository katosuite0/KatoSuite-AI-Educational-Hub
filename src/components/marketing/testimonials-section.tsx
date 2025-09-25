export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Educator Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="p-6 bg-white dark:bg-gray-800 rounded shadow">
            <p className="mb-2">"KatoSuite AI Education Hub transformed my lesson planning! Voice AI is a game changer."</p>
            <footer className="text-sm text-gray-500">— ECE, Toronto</footer>
          </blockquote>
          <blockquote className="p-6 bg-white dark:bg-gray-800 rounded shadow">
            <p className="mb-2">"Compliant, bilingual, and so easy to use. Highly recommend for Canadian educators."</p>
            <footer className="text-sm text-gray-500">— ECE, Montreal</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
