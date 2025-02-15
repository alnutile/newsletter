import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
  listId: z.string()
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export function SubscribeForm() {
  const { toast } = useToast();
  const form = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
      name: "",
      listId: "9660d990-ace9-425b-a001-83470a8804cd"
    }
  });

  const onSubmit = async (data: SubscribeFormData) => {
    try {
      const params = new URLSearchParams();
      params.append('email', data.email);
      if (data.name) params.append('name', data.name);
      params.append('l', data.listId);

      const response = await fetch('https://newsletter.dailyai.studio/subscription/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Subscription failed');
      }

      toast({
        title: "Success!",
        description: "You've been subscribed to the newsletter.",
      });
      form.reset();
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl mx-auto bg-background/95 backdrop-blur">
        <CardContent className="p-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="Enter your email"
                {...form.register("email")}
                className="w-full"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name (optional)</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...form.register("name")}
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="newsletter"
                  checked
                  {...form.register("listId")}
                  className="mt-1"
                />
                <div className="space-y-1">
                  <Label htmlFor="newsletter" className="font-medium">
                    NoCode LowCode AI Automation Newsletter!
                  </Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This newsletter has evolved to focus on technologies that impact both my work as a developer and the businesses I help build solutions for.
                    You'll receive updates about AI, automation tools, YouTube videos, and curated articles that matter for your business and development work.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}