
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Mail, Clock, Calendar, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const services = [
    'Medical Care',
    'Gynecology',
    'Laboratory Tests',
    'Surgery',
    'Blood Tests',
    'Vaccines'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('appointments')
        .insert({
          patient_name: formData.patientName,
          patient_email: formData.patientEmail,
          patient_phone: formData.patientPhone,
          service: formData.service,
          preferred_date: formData.preferredDate,
          preferred_time: formData.preferredTime,
          message: formData.message || null,
          status: 'pending'
        });

      if (error) {
        console.error('Error booking appointment:', error);
        toast({
          title: "Error",
          description: "Failed to book appointment. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Appointment Booked!",
          description: "Your appointment has been successfully booked. We will contact you soon to confirm.",
        });
        
        // Reset form
        setFormData({
          patientName: '',
          patientEmail: '',
          patientPhone: '',
          service: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Schedule your visit with our expert medical team at Usman Hospital
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                  <p className="text-gray-600">Satellite Town, Block C<br />Gujranwala, Punjab</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                  <p className="text-gray-600">0333 4270800</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">info@usmanhospital.com</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Emergency</h4>
                  <p className="text-gray-600">24/7 Available</p>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Booking Form */}
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-center text-2xl flex items-center justify-center space-x-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <span>Book Your Appointment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                        <User className="h-5 w-5 text-blue-600" />
                        <span>Personal Information</span>
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="patientName">Full Name *</Label>
                          <Input
                            id="patientName"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.patientName}
                            onChange={(e) => handleInputChange('patientName', e.target.value)}
                            required
                            className="focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="patientPhone">Phone Number *</Label>
                          <Input
                            id="patientPhone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.patientPhone}
                            onChange={(e) => handleInputChange('patientPhone', e.target.value)}
                            required
                            className="focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="patientEmail">Email Address *</Label>
                        <Input
                          id="patientEmail"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.patientEmail}
                          onChange={(e) => handleInputChange('patientEmail', e.target.value)}
                          required
                          className="focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span>Appointment Details</span>
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Required *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">Preferred Date *</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            required
                            className="focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="preferredTime">Preferred Time *</Label>
                          <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                            <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Notes (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Please describe your symptoms or any specific concerns..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          rows={4}
                          className="focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">What happens next?</h3>
                <p className="text-blue-700">
                  After booking, our staff will contact you within 24 hours to confirm your appointment 
                  and provide any additional instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
