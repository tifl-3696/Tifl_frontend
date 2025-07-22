
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ReminderForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date>();
  const [category, setCategory] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !date || !category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically save to a database
    toast({
      title: "Reminder Set!",
      description: `Your reminder "${title}" has been scheduled for ${format(date, "PPP")}.`,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setDate(undefined);
    setCategory('');
  };

  return (
    <Card className="shadow-lg border-accent/30 mx-auto max-w-2xl">
      <CardHeader className="bg-primary/10">
        <CardTitle className="flex items-center gap-3 text-base md:text-lg">
          <Plus className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          Set New Reminder
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 md:pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm md:text-base">Reminder Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Vaccination appointment"
              required
              className="text-sm md:text-base py-3"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm md:text-base">Category *</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger className="text-sm md:text-base py-3">
                <SelectValue placeholder="Select reminder category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vaccination">Vaccination</SelectItem>
                <SelectItem value="checkup">Medical Checkup</SelectItem>
                <SelectItem value="dental">Dental Care</SelectItem>
                <SelectItem value="milestone">Development Milestone</SelectItem>
                <SelectItem value="activity">Activity/Exercise</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm md:text-base">Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal text-sm md:text-base py-3",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm md:text-base">Additional Notes</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Any additional details or notes..."
              rows={3}
              className="text-sm md:text-base"
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base py-3 md:py-4">
            Set Reminder
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReminderForm;
