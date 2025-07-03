
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Stethoscope, 
  Microscope, 
  Heart, 
  Shield, 
  Users, 
  Award,
  ChevronRight,
  Phone,
  MapPin
} from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&q=80",
      title: "Advanced Medical Care",
      subtitle: "State-of-the-art facilities for comprehensive healthcare"
    },
    {
      url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1920&q=80",
      title: "Expert Laboratory Services",
      subtitle: "Accurate diagnostics with modern equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1920&q=80",
      title: "Gynecology Excellence",
      subtitle: "Specialized women's healthcare services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: "Medical Care",
      description: "Comprehensive medical consultations and treatments",
      href: "/services/medical-care"
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Gynecology",
      description: "Specialized women's health and reproductive care",
      href: "/services/gynecology"
    },
    {
      icon: <Microscope className="h-12 w-12 text-blue-600" />,
      title: "Laboratory Tests",
      description: "Advanced diagnostic testing and analysis",
      href: "/services/laboratory-tests"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Surgery",
      description: "Modern surgical procedures with expert care",
      href: "/services/surgery"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 bg-blue-900/60" />
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {image.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  {image.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/book-appointment">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-3">
                      Book Appointment
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/services">
  <Button
    variant="outline"
    size="lg"
    className="bg-transparent border border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3"
  >
    Our Services
  </Button>
</Link>

                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">Emergency: 0333 4270800</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Satellite Town, Block C, Gujranwala</span>
            </div>
            <Link to="/contact">
  <Button
    variant="outline"
    className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-2"
  >
    Book Now
  </Button>
</Link>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Medical Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered with excellence and compassion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 text-blue-600 group-hover:text-blue-700 font-medium">
                      Learn More →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Why Choose Usman Hospital
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence in healthcare with a commitment to patient satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <Users className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Expert Medical Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Highly qualified doctors and medical professionals with years of experience
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <Award className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art medical equipment and modern diagnostic facilities
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <Shield className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">24/7 Emergency Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock emergency services for urgent medical needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards better health. Our medical team is ready to provide you with the best care possible.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Book Appointment Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
