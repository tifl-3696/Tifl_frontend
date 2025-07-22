import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Brain, Heart, Smile, CheckSquare, UserPlus, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Milestones = () => {
  const { t } = useLanguage();
  const [childAge, setChildAge] = useState<number>(0);
  const [childName, setChildName] = useState<string>("");
  const [childAgeUnit, setChildAgeUnit] = useState("months");
  const [milestones, setMilestones] = useState<Array<{id: number, text: string, completed: boolean, category: string}>>([]);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [categoriesProgress, setCategoriesProgress] = useState({
    motor: 0,
    language: 0,
    cognitive: 0
  });

  // Sample milestone data (in real app, this would come from a database or API)
  const getMilestonesByAge = (age: number, unit: string) => {
    // Convert everything to months for simplicity
    let ageInMonths = age;
    if (unit === "years") {
      ageInMonths = age * 12;
    } else if (unit === "weeks") {
      ageInMonths = age / 4;
    }
    
    // Simple rules for demo - would be more comprehensive in production
    if (ageInMonths <= 3) {
      return [
        { id: 1, text: "Lifts head during tummy time", completed: false, category: "motor" },
        { id: 2, text: "Follows moving objects with eyes", completed: false, category: "cognitive" },
        { id: 3, text: "Responds to loud sounds", completed: false, category: "language" },
        { id: 4, text: "Makes cooing sounds", completed: false, category: "language" },
        { id: 5, text: "Recognizes familiar faces", completed: false, category: "cognitive" },
        { id: 6, text: "Can hold head up briefly", completed: false, category: "motor" }
      ];
    } else if (ageInMonths <= 6) {
      return [
        { id: 7, text: "Rolls over in both directions", completed: false, category: "motor" },
        { id: 8, text: "Begins to sit without support", completed: false, category: "motor" },
        { id: 9, text: "Responds to own name", completed: false, category: "language" },
        { id: 10, text: "Reaches for toys with both hands", completed: false, category: "motor" },
        { id: 11, text: "Babbles with expression", completed: false, category: "language" },
        { id: 12, text: "Shows curiosity about things", completed: false, category: "cognitive" }
      ];
    } else if (ageInMonths <= 12) {
      return [
        { id: 13, text: "Crawls or shuffles", completed: false, category: "motor" },
        { id: 14, text: "Pulls to stand", completed: false, category: "motor" },
        { id: 15, text: "Says 'mama' and 'dada'", completed: false, category: "language" },
        { id: 16, text: "Uses simple gestures like waving", completed: false, category: "language" },
        { id: 17, text: "Explores objects in different ways", completed: false, category: "cognitive" },
        { id: 18, text: "Begins to use objects correctly", completed: false, category: "cognitive" }
      ];
    } else if (ageInMonths <= 24) {
      return [
        { id: 19, text: "Walks alone", completed: false, category: "motor" },
        { id: 20, text: "Speaks at least 15 words", completed: false, category: "language" },
        { id: 21, text: "Follows simple instructions", completed: false, category: "cognitive" },
        { id: 22, text: "Begins to run", completed: false, category: "motor" },
        { id: 23, text: "Points to things when named", completed: false, category: "language" },
        { id: 24, text: "Shows increasing independence", completed: false, category: "cognitive" }
      ];
    } else if (ageInMonths <= 36) {
      return [
        { id: 25, text: "Jumps in place", completed: false, category: "motor" },
        { id: 26, text: "Uses 3-word sentences", completed: false, category: "language" },
        { id: 27, text: "Helps with simple tasks", completed: false, category: "cognitive" },
        { id: 28, text: "Shows interest in interactive games", completed: false, category: "cognitive" },
        { id: 29, text: "Climbs well", completed: false, category: "motor" },
        { id: 30, text: "Names familiar objects", completed: false, category: "language" }
      ];
    } else {
      return [
        { id: 31, text: "Hops and stands on one foot", completed: false, category: "motor" },
        { id: 32, text: "Uses sentences with 4+ words", completed: false, category: "language" },
        { id: 33, text: "Tells stories", completed: false, category: "language" },
        { id: 34, text: "Engages in imaginative play", completed: false, category: "cognitive" },
        { id: 35, text: "Draws recognizable shapes", completed: false, category: "cognitive" },
        { id: 36, text: "Throws ball overhand", completed: false, category: "motor" }
      ];
    }
  };
  
  const handleAgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const milestoneData = getMilestonesByAge(childAge, childAgeUnit);
    setMilestones(milestoneData);
    setProgress(0);
    setShowResults(true);
    updateCategoryProgress(milestoneData);
  };
  
  const toggleMilestone = (id: number) => {
    const updatedMilestones = milestones.map(milestone => {
      if (milestone.id === id) {
        return { ...milestone, completed: !milestone.completed };
      }
      return milestone;
    });
    
    setMilestones(updatedMilestones);
    
    // Calculate new progress
    const completedCount = updatedMilestones.filter(m => m.completed).length;
    const newProgress = (completedCount / updatedMilestones.length) * 100;
    setProgress(newProgress);
    
    updateCategoryProgress(updatedMilestones);
  };

  const updateCategoryProgress = (milestoneList: typeof milestones) => {
    const motorMilestones = milestoneList.filter(m => m.category === "motor");
    const languageMilestones = milestoneList.filter(m => m.category === "language");
    const cognitiveMilestones = milestoneList.filter(m => m.category === "cognitive");
    
    const motorCompleted = motorMilestones.filter(m => m.completed).length;
    const languageCompleted = languageMilestones.filter(m => m.completed).length;
    const cognitiveCompleted = cognitiveMilestones.filter(m => m.completed).length;
    
    setCategoriesProgress({
      motor: motorMilestones.length > 0 ? (motorCompleted / motorMilestones.length) * 100 : 0,
      language: languageMilestones.length > 0 ? (languageCompleted / languageMilestones.length) * 100 : 0,
      cognitive: cognitiveMilestones.length > 0 ? (cognitiveCompleted / cognitiveMilestones.length) * 100 : 0
    });
  };
  
  const chartConfig = {
    motor: {
      label: "Motor Skills",
      theme: {
        light: "hsl(var(--motor-skill))",
        dark: "hsl(var(--motor-skill))"
      }
    },
    language: {
      label: "Language Skills",
      theme: {
        light: "hsl(var(--language-skill))",
        dark: "hsl(var(--language-skill))"
      }
    },
    cognitive: {
      label: "Cognitive Skills",
      theme: {
        light: "hsl(var(--cognitive-skill))",
        dark: "hsl(var(--cognitive-skill))"
      }
    }
  };
  
  const chartData = [
    { name: "motor", value: categoriesProgress.motor, color: "hsl(var(--motor-skill))" },
    { name: "language", value: categoriesProgress.language, color: "hsl(var(--language-skill))" },
    { name: "cognitive", value: categoriesProgress.cognitive, color: "hsl(var(--cognitive-skill))" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Milestone Tracker Introduction Section */}
        <section className="bg-gradient-to-b from-white to-accent/30 pt-10 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive <span className="text-primary">Milestone Tracker</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Our advanced milestone tracking system helps parents and caregivers monitor 
                children's development across essential domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[hsl(var(--cognitive-skill))] rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cognitive Development</h3>
                <p className="text-gray-600">
                  Track learning milestones, problem-solving abilities, and intellectual growth with age-appropriate benchmarks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[hsl(var(--language-skill))] rounded-full flex items-center justify-center mb-4">
                  <Smile className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Social Development</h3>
                <p className="text-gray-600">
                  Monitor social interactions, emotional intelligence, and relationship-building skills as your child grows.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[hsl(var(--motor-skill))] rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Emotional Development</h3>
                <p className="text-gray-600">
                  Observe emotional growth, self-regulation, and expression of feelings through developmental stages.
                </p>
              </div>
            </div>

            {/* Getting Started Guide */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Getting Started with Milestone Tracking</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <LogIn className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Create an Account</h4>
                  <p className="text-gray-600">
                    Register for free to save your child's developmental progress and receive personalized insights.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Add Your Child's Profile</h4>
                  <p className="text-gray-600">
                    Enter your child's name, age, and other details to receive age-appropriate milestone recommendations.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <CheckSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Start Tracking Progress</h4>
                  <p className="text-gray-600">
                    Check off achieved milestones and get insights about your child's developmental journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Tracker Tool Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[hsl(var(--language-skill))/30] to-transparent rounded-3xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-[hsl(var(--primary))] mb-3">Track Progress</h2>
              <p className="text-lg mb-6">Monitor your child's growth and milestones effortlessly.</p>
            
              <Card className="shadow-md border-0">
                <CardHeader>
                  <CardTitle>Enter Your Child's Details</CardTitle>
                  <CardDescription>We'll provide personalized milestones based on your child's age.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAgeSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="childName">Child's Name (Optional)</Label>
                        <Input 
                          id="childName" 
                          placeholder="Enter name" 
                          value={childName} 
                          onChange={(e) => setChildName(e.target.value)} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input 
                          id="age" 
                          type="number" 
                          min="0" 
                          max="60" 
                          placeholder="Enter age" 
                          value={childAge || ''} 
                          onChange={(e) => setChildAge(parseInt(e.target.value) || 0)} 
                          required 
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="ageUnit">Unit</Label>
                      <RadioGroup id="ageUnit" value={childAgeUnit} onValueChange={setChildAgeUnit} className="flex pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weeks" id="weeks" />
                          <Label htmlFor="weeks">Weeks</Label>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <RadioGroupItem value="months" id="months" />
                          <Label htmlFor="months">Months</Label>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <RadioGroupItem value="years" id="years" />
                          <Label htmlFor="years">Years</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <Button type="submit" className="mt-4 bg-[hsl(var(--primary))]">
                      Get Milestones
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {showResults && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-[hsl(var(--primary))]">
                  {childName ? `${childName}'s Milestones` : "Milestone Progress"}
                </h2>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">Overall Milestone Achievement</h3>
                    <span className="text-lg font-bold">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-3 bg-gray-200" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Milestone Categories</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col">
                        {/* Fixed ChartContainer with a single child element */}
                        <ChartContainer className="aspect-square" config={chartConfig}>
                          <PieChart>
                            <Pie
                              data={chartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ChartContainer>
                        {/* Legend moved outside of ChartContainer */}
                        <div className="mt-2 pt-2 border-t">
                          <ChartLegend>
                            <ChartLegendContent />
                          </ChartLegend>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Motor Skills Section */}
                    <Card className="overflow-hidden border-0 shadow-sm">
                      <CardHeader className="p-4 bg-[hsl(var(--motor-skill))]">
                        <CardTitle className="text-[hsl(var(--primary))]">Motor Skills</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="mb-1">
                          <div className="flex justify-between text-sm">
                            <span>{Math.round(categoriesProgress.motor)}%</span>
                            <span>{milestones.filter(m => m.category === "motor" && m.completed).length} out of {milestones.filter(m => m.category === "motor").length} milestones completed</span>
                          </div>
                        </div>
                        <Progress value={categoriesProgress.motor} className="h-2 bg-gray-200" />
                        <div className="mt-4 space-y-2">
                          {milestones.filter(m => m.category === "motor").map((milestone) => (
                            <div key={milestone.id} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`milestone-${milestone.id}`} 
                                checked={milestone.completed}
                                onCheckedChange={() => toggleMilestone(milestone.id)}
                              />
                              <label
                                htmlFor={`milestone-${milestone.id}`}
                                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                                  milestone.completed ? 'line-through text-muted-foreground' : ''
                                }`}
                              >
                                {milestone.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Language Skills Section */}
                    <Card className="overflow-hidden border-0 shadow-sm">
                      <CardHeader className="p-4 bg-[hsl(var(--language-skill))]">
                        <CardTitle className="text-[hsl(var(--primary))]">Language Skills</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="mb-1">
                          <div className="flex justify-between text-sm">
                            <span>{Math.round(categoriesProgress.language)}%</span>
                            <span>{milestones.filter(m => m.category === "language" && m.completed).length} out of {milestones.filter(m => m.category === "language").length} milestones completed</span>
                          </div>
                        </div>
                        <Progress value={categoriesProgress.language} className="h-2 bg-gray-200" />
                        <div className="mt-4 space-y-2">
                          {milestones.filter(m => m.category === "language").map((milestone) => (
                            <div key={milestone.id} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`milestone-${milestone.id}`} 
                                checked={milestone.completed}
                                onCheckedChange={() => toggleMilestone(milestone.id)}
                              />
                              <label
                                htmlFor={`milestone-${milestone.id}`}
                                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                                  milestone.completed ? 'line-through text-muted-foreground' : ''
                                }`}
                              >
                                {milestone.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Cognitive Skills Section */}
                    <Card className="overflow-hidden border-0 shadow-sm">
                      <CardHeader className="p-4 bg-[hsl(var(--cognitive-skill))]">
                        <CardTitle className="text-[hsl(var(--primary))]">Cognitive Skills</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="mb-1">
                          <div className="flex justify-between text-sm">
                            <span>{Math.round(categoriesProgress.cognitive)}%</span>
                            <span>{milestones.filter(m => m.category === "cognitive" && m.completed).length} out of {milestones.filter(m => m.category === "cognitive").length} milestones completed</span>
                          </div>
                        </div>
                        <Progress value={categoriesProgress.cognitive} className="h-2 bg-gray-200" />
                        <div className="mt-4 space-y-2">
                          {milestones.filter(m => m.category === "cognitive").map((milestone) => (
                            <div key={milestone.id} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`milestone-${milestone.id}`} 
                                checked={milestone.completed}
                                onCheckedChange={() => toggleMilestone(milestone.id)}
                              />
                              <label
                                htmlFor={`milestone-${milestone.id}`}
                                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                                  milestone.completed ? 'line-through text-muted-foreground' : ''
                                }`}
                              >
                                {milestone.text}
                              </label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Milestones;
