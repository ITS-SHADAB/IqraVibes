export default function Footer() {
  return (
    <footer className="bg-[#fce8d8] text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold">
            Clarity, delivered straight into your inbox, biweekly.
          </h2>
          <div className="mt-4 flex space-x-4">
            <div>
              <span className="font-bold text-lg">2,000hrs</span>
              <p className="text-sm">Video Content</p>
            </div>
            <div>
              <span className="font-bold text-lg">190+</span>
              <p className="text-sm">Countries</p>
            </div>
            <div>
              <span className="font-bold text-lg">100+</span>
              <p className="text-sm">Events</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Products</h3>
          <ul className="mt-2 space-y-1">
            <li>Bayyinah TV</li>
            <li>Events</li>
            <li>Sponsorship</li>
            <li>Books</li>
            <li>Resources</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Information</h3>
          <ul className="mt-2 space-y-1">
            <li>What we do</li>
            <li>Community</li>
            <li>Talent Hub</li>
            <li>ARÖMER 2025</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-2 border border-gray-400 rounded"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Sign up →
          </button>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-xl">
            📷
          </a>
          <a href="#" className="text-xl">
            📘
          </a>
          <a href="#" className="text-xl">
            📌
          </a>
          <a href="#" className="text-xl">
            🎶
          </a>
          <a href="#" className="text-xl">
            💼
          </a>
          <a href="#" className="text-xl">
            📞
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        <p>Copyright © 2025 Bayyinah. All Rights Reserved.</p>
        <p>
          Website by <span className="font-bold">MANZA</span>
        </p>
        <p className="mt-2">
          <a href="#" className="underline">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="underline">
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
}
