
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const location = useLocation();

  const services = [
    { name: 'Medical Care', href: '/services/medical-care' },
    { name: 'Gynecology', href: '/services/gynecology' },
    { name: 'Laboratory Tests', href: '/services/laboratory-tests' },
    { name: 'Surgery', href: '/services/surgery' },
    { name: 'Blood Tests', href: '/services/blood-tests' },
    { name: 'Vaccines', href: '/services/vaccines' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>0333 4270800</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Satellite Town, Block C, Gujranwala, Punjab</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span>Welcome, {user.email}</span>
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm" className="text-teal-700 border-white hover:bg-white hover:text-teal-800">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={signOut}
                  className="text-teal-700 border-white hover:bg-white hover:text-teal-800"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm" className="text-teal-700 border-white hover:bg-white hover:text-teal-800">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-slate-700 bg-clip-text text-transparent">
                Usman Hospital
              </h1>
              <p className="text-xs text-slate-600">Excellence in Healthcare</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={`px-4 py-2 font-medium ${location.pathname === '/' ? 'text-teal-700' : 'text-slate-700 hover:text-teal-700'}`}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-teal-700">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 hover:text-teal-700"
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={`px-4 py-2 font-medium ${location.pathname === '/about' ? 'text-teal-700' : 'text-slate-700 hover:text-teal-700'}`}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={`px-4 py-2 font-medium ${location.pathname === '/contact' ? 'text-teal-700' : 'text-slate-700 hover:text-teal-700'}`}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/book-appointment">
              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-2 pt-4">
              <Link to="/" className="py-2 text-slate-700 hover:text-teal-700" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <div className="py-2">
                <span className="text-slate-700 font-medium">Services</span>
                <div className="ml-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block py-1 text-sm text-slate-600 hover:text-teal-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/about" className="py-2 text-slate-700 hover:text-teal-700" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="py-2 text-slate-700 hover:text-teal-700" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link to="/book-appointment" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
