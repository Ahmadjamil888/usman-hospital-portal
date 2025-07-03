
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">U</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Usman Hospital</h3>
                <p className="text-blue-200 text-sm">Excellence in Healthcare</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Providing comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/medical-care" className="text-blue-200 hover:text-white transition-colors">Medical Care</Link></li>
              <li><Link to="/services/gynecology" className="text-blue-200 hover:text-white transition-colors">Gynecology</Link></li>
              <li><Link to="/services/laboratory-tests" className="text-blue-200 hover:text-white transition-colors">Laboratory Tests</Link></li>
              <li><Link to="/services/surgery" className="text-blue-200 hover:text-white transition-colors">Surgery</Link></li>
              <li><Link to="/services/blood-tests" className="text-blue-200 hover:text-white transition-colors">Blood Tests</Link></li>
              <li><Link to="/services/vaccines" className="text-blue-200 hover:text-white transition-colors">Vaccines</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-200">
                  <p>Satellite Town, Block C</p>
                  <p>Gujranwala, Punjab</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-sm text-blue-200">0333 4270800</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-sm text-blue-200">info@usmanhospital.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-200">
                  <p>24/7 Emergency Services</p>
                  <p>Mon-Sat: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2025 Usman Hospital. All rights reserved. | Providing quality healthcare since 1995.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
