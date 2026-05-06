import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-white mt-20">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <Link href={'/'}>
                      <h2 className="text-3xl font-bold mb-4">
                        Tiles Gallery
                    </h2>
                  </Link>
                    <p className="text-gray-400">
                      Transform your space with Tiles Gallery’s premium ceramic, marble, and designer tiles—where quality meets modern design.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">
                     also Available in
                    </h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Bhola</li>
                        <li className="hover:text-white cursor-pointer">Dhaka</li>
                        <li className="hover:text-white cursor-pointer">Rajshahi</li>
                        <li className="hover:text-white cursor-pointer">Khulna</li>
                        <li className="hover:text-white cursor-pointer">Chittagong</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">
                        Contact Us
                    </h2>
                    <p className="text-gray-400 mb-2 hover:text-white cursor-pointer">
                        Email: info@tilesgallery.com
                    </p>
                    <p className="text-gray-400 mb-4 hover:text-white cursor-pointer">
                        Phone: +880 1608763821
                    </p>
                    <p className="text-gray-500 mb-3">
                        Follow us on social media
                    </p>
                    <div className="flex gap-4 text-2xl">
                        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        <FaTwitter className="hover:text-sky-400 cursor-pointer" />
                        <FaYoutube className="hover:text-red-500 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 border-t border-gray-700 py-4 mt-6">
                © {new Date().getFullYear()} Tiles Gallery. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;