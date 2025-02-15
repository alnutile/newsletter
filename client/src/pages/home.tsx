import { motion } from "framer-motion";
import { SubscribeForm } from "@/components/subscribe-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-6">
            Join DailyAI.Studio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the art of building powerful solutions with n8n, automation tools, and AI. 
            Learn to architect systems where low-code/no-code is the first choice, 
            and custom code is the last resort.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 gap-8"
        >
          <SubscribeForm />

          <div className="text-center text-sm text-muted-foreground mt-8">
            <p>
              By Alfred Nutile • <a href="https://training.dailyai.studio/" className="text-primary hover:underline">Training</a> • {" "}
              <a href="https://dailyai.studio" className="text-primary hover:underline">AI Automation Consulting</a> • {" "}
              <a href="https://www.youtube.com/@AlfredNutile" className="text-primary hover:underline">YouTube</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
