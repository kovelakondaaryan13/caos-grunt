import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  firmName: z.string().trim().min(1, "Firm name is required").max(200),
  partnerName: z.string().trim().min(1, "Partner name is required").max(100),
  firmSize: z.string().min(1, "Please select firm size"),
  practiceArea: z.string().min(1, "Please select practice area"),
  clientVolume: z.string().trim().min(1, "Monthly client volume is required").max(50),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
});

type FormValues = z.infer<typeof schema>;

const EarlyAccess = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firmName: "", partnerName: "", firmSize: "", practiceArea: "",
      clientVolume: "", email: "", phone: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("early_access_submissions").insert({
        firm_name: data.firmName,
        partner_name: data.partnerName,
        firm_size: data.firmSize,
        practice_area: data.practiceArea,
        client_volume: data.clientVolume,
        email: data.email,
        phone: data.phone,
      });
      if (error) throw error;
      toast({
        title: "Application Submitted",
        description: "Thank you for applying. We'll review your application and be in touch shortly.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access" className="py-24 lg:py-36 section-lavender">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
                Founding <span className="text-primary">Firm Access</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                150 firms selected from 2,000+ applicants. Apply to join the founding cohort.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "30-day free early access",
                "Dedicated onboarding support",
                "Workflow customization consultation",
                "Direct product feedback channel",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground/60 italic">
              Applications reviewed manually. Only qualified CA firms selected.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card shadow-xl border border-border/30">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="firmName" render={({ field }) => (
                    <FormItem><FormLabel>Firm Name</FormLabel><FormControl><Input placeholder="ABC & Associates" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="partnerName" render={({ field }) => (
                    <FormItem><FormLabel>Partner Name</FormLabel><FormControl><Input placeholder="CA. Name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="firmSize" render={({ field }) => (
                    <FormItem><FormLabel>Firm Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="solo">Solo Practitioner</SelectItem>
                          <SelectItem value="2-5">2–5 Members</SelectItem>
                          <SelectItem value="6-15">6–15 Members</SelectItem>
                          <SelectItem value="16-50">16–50 Members</SelectItem>
                          <SelectItem value="50+">50+ Members</SelectItem>
                        </SelectContent>
                      </Select><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="practiceArea" render={({ field }) => (
                    <FormItem><FormLabel>Practice Area</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select area" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="audit">Audit & Assurance</SelectItem>
                          <SelectItem value="tax">Taxation</SelectItem>
                          <SelectItem value="gst">GST</SelectItem>
                          <SelectItem value="advisory">Advisory</SelectItem>
                          <SelectItem value="multi">Multi-Practice</SelectItem>
                        </SelectContent>
                      </Select><FormMessage /></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="clientVolume" render={({ field }) => (
                  <FormItem><FormLabel>Monthly Client Volume</FormLabel><FormControl><Input placeholder="e.g. 50–100 clients" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="partner@firm.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone</FormLabel><FormControl><Input type="tel" placeholder="+91 98765 43210" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-full mt-2 h-12 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90">
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  {isSubmitting ? "Submitting..." : "Apply for Early Access"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
