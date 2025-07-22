
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReminderForm from "@/components/ReminderForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell, Calendar, Clock, CheckCircle2, Brain, Heart, Smile } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SmartReminders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-accent/30 py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Smart Reminders <span className="text-primary">&</span> Alerts
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Never miss important milestones or healthcare appointments with our intelligent notification system.
              </p>
            </div>
          </div>
        </section>

        {/* Smart Reminders & Alerts Main Content */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Set Reminder Form */}
            <div className="mb-8 md:mb-16">
              <ReminderForm />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
              <div>
                <Card className="shadow-lg border-accent/30 h-full">
                  <CardHeader className="bg-primary/10">
                    <CardTitle className="flex items-center gap-3 text-base md:text-lg">
                      <Bell className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      Development Monitoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 md:pt-6 space-y-4 md:space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-4">
                        <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                        Cognitive Development
                      </h3>

                      <Alert className="bg-red-50 border-red-100">
                        <AlertTitle className="flex items-center gap-2 text-sm md:text-base">
                          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                          Alert: Cognitive Milestone Behind
                        </AlertTitle>
                        <AlertDescription className="text-sm">
                          Your child is behind on problem-solving milestones for their age group. Try our recommended activities.
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-4">
                        <Heart className="h-4 w-4 md:h-5 md:w-5 text-pink-600" />
                        Social-Emotional Development
                      </h3>

                      <Alert className="bg-amber-50 border-amber-100">
                        <AlertTitle className="flex items-center gap-2 text-sm md:text-base">
                          <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                          Warning: Social Interaction
                        </AlertTitle>
                        <AlertDescription className="text-sm">
                          Social interaction skills are developing slower than expected. Consider more group activities.
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-4">
                        <Smile className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        Physical Development
                      </h3>

                      <Alert className="bg-green-50 border-green-100">
                        <AlertTitle className="flex items-center gap-2 text-sm md:text-base">
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                          Achievement: Physical Milestones
                        </AlertTitle>
                        <AlertDescription className="text-sm">
                          Physical development is on track! Your child has reached all expected milestones for their age.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="shadow-lg border-accent/30 h-full">
                  <CardHeader className="bg-primary/10">
                    <CardTitle className="flex items-center gap-3 text-base md:text-lg">
                      <Calendar className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      Healthcare Reminders
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 md:pt-6 space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Vaccination Due</h4>
                          <p className="text-xs md:text-sm text-gray-600">MMR vaccine - Second dose</p>
                        </div>
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-red-500">
                        Due in 5 days
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 md:p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Calendar className="h-4 w-4 md:h-5 md:w-5 text-purple-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Doctor Appointment</h4>
                          <p className="text-xs md:text-sm text-gray-600">Regular checkup with Dr. Khan</p>
                        </div>
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-amber-500">
                        Next month
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 md:p-4 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center gap-2 md:gap-3">
                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Completed</h4>
                          <p className="text-xs md:text-sm text-gray-600">Dental checkup</p>
                        </div>
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-500">
                        3 weeks ago
                      </div>
                    </div>

                    <div className="mt-4 md:mt-6">
                      <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Upcoming Schedule</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                          <span className="font-medium text-sm md:text-base">Polio Vaccination</span>
                          <span className="text-xs md:text-sm">June 15, 2025</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                          <span className="font-medium text-sm md:text-base">Growth Assessment</span>
                          <span className="text-xs md:text-sm">July 3, 2025</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                          <span className="font-medium text-sm md:text-base">Dental Checkup</span>
                          <span className="text-xs md:text-sm">August 22, 2025</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 md:mt-16 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Stay on Top of Your Child's Health</h2>
              <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
                Our smart reminder system keeps you informed about your child's development and ensures you never miss an important healthcare appointment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link to="/milestones" className="w-full sm:w-auto">
                  <Button className="bg-primary hover:bg-primary/90 text-base md:text-lg py-4 md:py-5 px-6 w-full sm:w-auto">
                    Track Development
                  </Button>
                </Link>
                <Button variant="outline" className="border-primary text-primary hover:bg-accent text-base md:text-lg py-4 md:py-5 px-6 w-full sm:w-auto">
                  View All Reminders
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SmartReminders;
