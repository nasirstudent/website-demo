
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const categories = [
    { name: 'বাংলাদেশ সম্পর্কে', path: '/about' },
    { name: 'সংস্কৃতি ও ঐতিহ্য', path: '/culture' },
    { name: 'পর্যটন', path: '/tourism' },
    { name: 'ব্যবসা', path: '/business' },
    { name: 'শিক্ষা', path: '/education' },
    { name: 'সরকার', path: '/government' },
    { name: 'অংশগ্রহণ করুন', path: '/get-involved' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect py-2 shadow-sm' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-news-dark dark:text-white' : 'text-news-dark dark:text-white'}`}>
              <span className="text-news-red">বাংলাদেশ</span> আজ
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link 
                key={category.name}
                to={category.path}
                className={`text-sm font-medium transition-colors duration-200 
                  ${isScrolled ? 'text-gray-700 hover:text-news-red dark:text-gray-200 dark:hover:text-white' : 'text-gray-700 hover:text-news-red dark:text-gray-200 dark:hover:text-white'}`}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 dark:text-gray-200"
              onClick={() => console.log('Search')}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">অনুসন্ধান</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 dark:text-gray-200"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">থিম পরিবর্তন</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 dark:text-gray-200 md:mr-2"
              onClick={() => console.log('User profile')}
            >
              <User className="h-5 w-5" />
              <span className="sr-only">প্রোফাইল</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 dark:text-gray-200 md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">মেনু</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>
                <span className="text-news-red">বাংলাদেশ</span> আজ
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 dark:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">মেনু বন্ধ করুন</span>
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-6">
              {categories.map((category) => (
                <Link 
                  key={category.name}
                  to={category.path}
                  className="text-xl font-medium py-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pt-8 flex items-center space-x-6">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => {
                  console.log('Sign in');
                  setIsMenuOpen(false);
                }}
              >
                সাইন ইন
              </Button>
              <Button 
                variant="default" 
                className="flex-1 bg-news-red hover:bg-red-800"
                onClick={() => {
                  console.log('Subscribe');
                  setIsMenuOpen(false);
                }}
              >
                সাবস্ক্রাইব
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
