
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Microscope, Clock, Shield, Award, ChevronRight } from 'lucide-react';

const LaboratoryTests = () => {
  const services = [
    "Complete Blood Count (CBC)",
    "Blood Chemistry Analysis",
    "Urine Analysis",
    "Hormone Testing",
    "Infectious Disease Testing",
    "Diagnostic Imaging Support"
  ];

  const features = [
    {
      icon: <Microscope className="h-8 w-8 text-blue-600" />,
      title: "Advanced Equipment",
      description: "State-of-the-art laboratory equipment for accurate results"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick Results",
      description: "Fast turnaround time for most laboratory tests"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Accurate Testing",
      description: "Precise and reliable diagnostic testing"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Strict quality control measures for all tests"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Microscope className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Laboratory Tests</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Advanced diagnostic testing and medical analysis with state-of-the-art laboratory equipment at Usman Hospital
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Laboratory Services
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Why Choose Our Laboratory Services
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Schedule Your Laboratory Tests
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your diagnostic tests with our advanced laboratory services
          </p>
          <Link to="/book-appointment">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Book Appointment
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaboratoryTests;
