
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Stethoscope, 
  Microscope, 
  Heart, 
  Scissors,
  Droplet,
  Shield,
  ChevronRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: "Medical Care",
      description: "Comprehensive medical consultations and general healthcare services",
      href: "/services/medical-care",
      features: ["General Consultation", "Health Check-ups", "Preventive Care", "Medical Advice"]
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Gynecology",
      description: "Specialized women's health and reproductive care services",
      href: "/services/gynecology",
      features: ["Women's Health", "Pregnancy Care", "Reproductive Health", "Gynecological Exams"]
    },
    {
      icon: <Microscope className="h-12 w-12 text-blue-600" />,
      title: "Laboratory Tests",
      description: "Advanced diagnostic testing and medical analysis",
      href: "/services/laboratory-tests",
      features: ["Blood Analysis", "Urine Tests", "Diagnostic Imaging", "Pathology"]
    },
    {
      icon: <Scissors className="h-12 w-12 text-blue-600" />,
      title: "Surgery",
      description: "Modern surgical procedures with expert medical care",
      href: "/services/surgery",
      features: ["Minor Surgery", "Outpatient Procedures", "Surgical Consultation", "Post-operative Care"]
    },
    {
      icon: <Droplet className="h-12 w-12 text-blue-600" />,
      title: "Blood Tests",
      description: "Comprehensive blood analysis and diagnostic services",
      href: "/services/blood-tests",
      features: ["Complete Blood Count", "Biochemistry", "Hormone Tests", "Disease Screening"]
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Vaccines",
      description: "Immunization services for all age groups",
      href: "/services/vaccines",
      features: ["Child Immunization", "Adult Vaccines", "Travel Vaccines", "Flu Shots"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Medical Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered with excellence and compassion at Usman Hospital, Gujranwala
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border-0 shadow-lg h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                        Learn More →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
