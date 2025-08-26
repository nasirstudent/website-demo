
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Users, Heart, MessageCircle, Calendar, Mail, Phone, MapPin } from 'lucide-react';

const GetInvolved = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const opportunities = [
    {
      title: "Community Correspondent",
      description: "Report on local news and events from your neighborhood. Help us cover stories that matter to your community.",
      icon: MessageCircle,
      commitment: "5-10 hours/week",
      requirements: "Writing skills, local knowledge"
    },
    {
      title: "Event Volunteer",
      description: "Assist with organizing community forums, press conferences, and public discussions.",
      icon: Calendar,
      commitment: "Flexible",
      requirements: "Communication skills, reliability"
    },
    {
      title: "Youth Ambassador",
      description: "Engage with young people in your area to understand their perspectives and concerns.",
      icon: Users,
      commitment: "3-5 hours/week",
      requirements: "Age 18-30, social media savvy"
    },
    {
      title: "Community Outreach",
      description: "Help connect marginalized communities with our newsroom to ensure diverse voices are heard.",
      icon: Heart,
      commitment: "Flexible",
      requirements: "Cultural sensitivity, local connections"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-news-red to-red-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Join us in building a stronger, more informed community. Your voice and participation matter.
            </p>
            <Button className="bg-white text-news-red hover:bg-gray-100 text-lg px-8 py-3">
              Start Contributing Today
            </Button>
          </div>
        </section>

        {/* Why Get Involved */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Your Voice Matters</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dhaka Messenger believes in the power of community journalism. Together, we can ensure every story is told and every voice is heard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-news-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Build Community</h3>
                <p className="text-gray-600">Connect with neighbors and create positive change in your area.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-news-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Stories</h3>
                <p className="text-gray-600">Help tell the stories that mainstream media might miss.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-news-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Make Impact</h3>
                <p className="text-gray-600">Be part of meaningful change in Bangladesh's media landscape.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ways to Get Involved</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from various opportunities that match your skills, interests, and availability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-news-red text-white p-3 rounded-lg">
                        <opportunity.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {opportunity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Time Commitment:</strong> {opportunity.commitment}</p>
                      <p><strong>Requirements:</strong> {opportunity.requirements}</p>
                    </div>
                    <Button className="mt-4 w-full bg-news-red hover:bg-red-700">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-gray-600">
                  Ready to join us? Have questions? We'd love to hear from you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+880 12 3456 789" />
                    </div>
                    
                    <div>
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Input id="interest" placeholder="e.g., Community Reporting, Event Volunteering" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about yourself and why you want to get involved..."
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full bg-news-red hover:bg-red-700">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Contact Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-news-red mt-1" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-gray-600">23-25 Begum Rokeya Sarani<br />Dhaka 1207, Bangladesh</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-news-red mt-1" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">+880 12 3456 789</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-news-red mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">getinvolved@dhakamessenger.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Office Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Sunday - Thursday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday</span>
                          <span>9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetInvolved;
