export default function Action() {
    return  <section className="bg-indigo-600 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-3xl font-bold">Ready to Launch?</h3>
      <p className="mt-4 text-lg">
        Sign in now and start deploying your tokens and NFTs in minutes.
      </p>
      <div className="mt-8">
        <a
          href="/signin"
          className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Sign In to Get Started
        </a>
      </div>
    </div>
  </section>
}