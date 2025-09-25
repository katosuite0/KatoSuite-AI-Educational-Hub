export default function Pricing() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="mb-4">$19/mo</p>
            <ul className="mb-4 text-left">
              <li>Up to 20 lessons/month</li>
              <li>Voice AI access</li>
              <li>Email support</li>
            </ul>
            <button className="w-full py-2 bg-blue-700 text-white rounded">Choose Starter</button>
          </div>
          <div className="border-2 border-blue-700 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="mb-4">$49/mo</p>
            <ul className="mb-4 text-left">
              <li>Unlimited lessons</li>
              <li>Bilingual support</li>
              <li>Priority support</li>
            </ul>
            <button className="w-full py-2 bg-blue-700 text-white rounded">Choose Pro</button>
          </div>
          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="mb-4">Contact Us</p>
            <ul className="mb-4 text-left">
              <li>Custom integrations</li>
              <li>Team training</li>
              <li>Dedicated support</li>
            </ul>
            <button className="w-full py-2 bg-blue-700 text-white rounded">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
