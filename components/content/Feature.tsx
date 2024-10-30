import { motion } from "framer-motion";
import Image from "next/image";

export default function Feature() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-gray-800">Why Choose Our Launchpad?</h3>
        <p className="mt-4 text-lg text-gray-600">
          We offer everything you need to launch and manage your tokens/NFTs with ease.
        </p>
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          {/* Feature 1 */}
          <div className="p-8 bg-white shadow-md rounded-lg">
            <Image src="/feature1.png" alt="Feature 1" width={16} height={16} className=" mx-auto" />
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Secure & Reliable</h4>
            <p className="mt-2 text-gray-600">
              Our platform uses top-notch security practices to keep your assets safe.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-8 bg-white shadow-md rounded-lg">
            <Image src="/feature2.png" alt="Feature 2" width={16} height={16} className=" mx-auto" />
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Fast Deployments</h4>
            <p className="mt-2 text-gray-600">
              Deploy your NFTs and tokens quickly without hassle.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-8 bg-white shadow-md rounded-lg">
            <Image src="/feature3.png" alt="Feature 3" width={16} height={16} className=" mx-auto" />
            <h4 className="mt-4 text-xl font-semibold text-gray-800">User-Friendly Interface</h4>
            <p className="mt-2 text-gray-600">
              Our easy-to-use platform ensures a seamless experience for everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
