
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const categories = [
    { name: 'World', path: '/category/world' },
    { name: 'Bangladesh', path: '/category/bangladesh' },
    { name: 'Business', path: '/category/business' },
    { name: 'Technology', path: '/category/technology' },
    { name: 'Sport', path: '/category/sport' },
    { name: 'Culture', path: '/category/culture' }
  ];
  
  const about = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Careers', path: '/careers' },
    { name: 'Advertise', path: '/advertise' },
    { name: 'Terms of Use', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold">
                <span className="text-news-red">Dhaka</span> Messenger
              </h2>
            </Link>
            <p className="text-gray-400 mb-6">
              Delivering trusted news and insightful perspectives from Bangladesh and around the world since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.name}>
                  <Link to={category.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
            <ul className="space-y-2">
              {about.map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>23-25 Begum Rokeya Sarani</p>
              <p>Dhaka 1207, Bangladesh</p>
              <p>Email: <a href="mailto:contact@dhakamessenger.com" className="hover:text-white transition-colors">contact@dhakamessenger.com</a></p>
              <p>Phone: <a href="tel:+880123456789" className="hover:text-white transition-colors">+880 12 3456 789</a></p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 mt-12 mb-6" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {currentYear} Dhaka Messenger. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
