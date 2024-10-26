export default function Footer() {
  const year = new Date().getFullYear()
    return  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm">&copy; {year} Minthub. All rights reserved.</p>
    </div>
  </footer>
}