import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function SubscribeForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl mx-auto bg-background/95 backdrop-blur">
        <CardContent className="p-6">
          <form 
            method="post" 
            action="https://newsletter.dailyai.studio/subscription/form" 
            className="listmonk-form space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name (optional)</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="9660d"
                  name="l"
                  value="9660d990-ace9-425b-a001-83470a8804cd"
                  defaultChecked
                  className="mt-1"
                />
                <div className="space-y-1">
                  <Label htmlFor="9660d" className="font-medium">
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
            >
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}