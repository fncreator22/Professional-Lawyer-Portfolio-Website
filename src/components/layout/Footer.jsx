import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Ade Patel</h3>
            <p className="text-gray-400">Attorney at Law</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook Profile" className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter Profile" className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Family Law</li>
              <li className="text-gray-400">Corporate Law</li>
              <li className="text-gray-400">Criminal Defense</li>
              <li className="text-gray-400">Civil Litigation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                123 Legal Street, City, State 12345
              </p>
              <p className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:5551234567" className="hover:text-white">
                  (555) 123-4567
                </a>
              </p>
              <p className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@johndoe.law" className="hover:text-white">
                  contact@johndoe.law
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sagar Mahajan, Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
