
import { Users, Stethoscope, Calendar, Heart, Instagram, Facebook, MessageCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
      title: "Community Support",
      description: "Connect with a network of parents, caregivers, and professionals dedicated to improving early childhood outcomes across Pakistan.",
      socialLinks: [
        {
          name: "WhatsApp Community",
          url: "https://chat.whatsapp.com/CqHkD6gIAtoFJysWbMBaZa",
          icon: <MessageCircle className="h-4 w-4" />,
          color: "bg-green-500 hover:bg-green-600"
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/_tifl__?igsh=MWR4ZWF5a3ozcHRqcg==",
          icon: <Instagram className="h-4 w-4" />,
          color: "bg-pink-500 hover:bg-pink-600"
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/share/198cizjPDS/",
          icon: <Facebook className="h-4 w-4" />,
          color: "bg-blue-500 hover:bg-blue-600"
        }
      ]
    },
    {
      icon: <Stethoscope className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
      title: "Health Experts",
      description: "Get guidance from qualified pediatricians and child development specialists who understand Pakistani healthcare contexts."
    },
    {
      icon: <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
      title: "Upcoming Programs",
      description: "Join our comprehensive training programs designed for parents, caregivers, and professionals.",
      workshops: [
        {
          title: "Newborn Care Essentials",
          date: "May 18, 2025",
          time: "10:00 AM - 12:00 PM (PKT)",
          type: "Online Workshop"
        },
        {
          title: "Nutritional Guidelines for Toddlers", 
          date: "May 25, 2025",
          time: "3:00 PM - 4:30 PM (PKT)",
          type: "Interactive Session"
        },
        {
          title: "Early Language Development",
          date: "June 2, 2025",
          time: "11:00 AM - 12:30 PM (PKT)",
          type: "Expert Workshop"
        },
        {
          title: "Parenting Techniques for Pakistani Families",
          date: "June 10, 2025",
          time: "2:00 PM - 4:00 PM (PKT)",
          type: "Cultural Workshop"
        }
      ]
    },
    {
      icon: <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
      title: "Advanced Milestone Tracking",
      description: "Comprehensive child development tracking with smart insights and personalized recommendations.",
      milestoneFeatures: [
        "Interactive milestone status tracking (On Track/Needs Improvement/Advanced)",
        "Child profile management with photos and growth tracking",
        "Progress visualization with circular charts and percentages",
        "Age-specific milestone categories (6-12m, 12-24m, 2-3y, 3+y)",
        "Smart alerts and reminder system for milestone management",
        "Motor Skills, Language, Problem Solving & Social-Emotional tracking",
        "Timeline visualization with achievement dates",
        "Personalized development insights and recommendations"
      ]
    },
  ];

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Empowering Early Childhood Development</h2>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform connects families with expert support and innovative tools for better child development outcomes across Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader className="pb-3 md:pb-4">
                <div className="mb-3 md:mb-4 p-2 md:p-3 bg-accent rounded-full inline-block">{feature.icon}</div>
                <CardTitle className="text-lg md:text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm md:text-base mb-4">{feature.description}</p>
                
                {/* Community Support Social Links */}
                {feature.socialLinks && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-gray-900">Join Our Communities:</h4>
                    <div className="flex flex-col gap-2">
                      {feature.socialLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${link.color} text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 justify-center`}
                        >
                          {link.icon}
                          {link.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Upcoming Programs */}
                {feature.workshops && (
                  <div className="space-y-4">
                    <div className="grid gap-3">
                      {feature.workshops.map((workshop, workshopIndex) => (
                        <div key={workshopIndex} className="p-3 bg-accent/50 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-sm text-gray-900">{workshop.title}</h4>
                            <Badge variant="outline" className="text-xs">{workshop.type}</Badge>
                          </div>
                          <p className="text-xs text-gray-600">{workshop.date} • {workshop.time}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Registration Form Space */}
                    <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-2">Registration Form</p>
                      <p className="text-xs text-gray-500">Google Form integration space - Form will be embedded here</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Register Now
                      </Button>
                    </div>
                  </div>
                )}

                {/* Milestone Features */}
                {feature.milestoneFeatures && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-gray-900">Key Features:</h4>
                    <ul className="space-y-1">
                      {feature.milestoneFeatures.map((milestoneFeature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          {milestoneFeature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
