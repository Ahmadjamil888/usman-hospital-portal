
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Clock, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Compassionate Care",
      description: "We provide healthcare with empathy and understanding"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description: "Highly qualified medical professionals"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality Service",
      description: "Committed to excellence in healthcare delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Usman Hospital</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Dedicated to providing exceptional healthcare services to the community of Gujranwala with compassion and excellence
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                Usman Hospital has been serving the healthcare needs of Gujranwala and surrounding areas with dedication and commitment to excellence. Located in the heart of Satellite Town, Block C, our hospital has become a trusted name in quality healthcare.
              </p>
              <p className="text-lg mb-6">
                We specialize in comprehensive medical services with particular expertise in gynecology, laboratory testing, and general medical care. Our team of experienced healthcare professionals is committed to providing compassionate, patient-centered care using modern medical technology and evidence-based practices.
              </p>
              <p className="text-lg mb-6">
                At Usman Hospital, we believe that quality healthcare should be accessible to everyone. Our mission is to provide exceptional medical services while maintaining the highest standards of care, safety, and patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Hospital Information
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">Satellite Town, Block C<br />Gujranwala, Punjab</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
                  <p className="text-gray-600">0333 4270800</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Emergency</h4>
                  <p className="text-gray-600">24/7 Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
