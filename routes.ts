import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // In a real application, you would save this to a database
      // For now, we'll just log it and return success
      console.log("Contact form submission:", validatedData);
      
      res.json({ 
        message: "Message sent successfully", 
        success: true 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid form data",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          message: "Internal server error",
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    // Check if resume file exists in attached_assets
    const resumePath = path.join(process.cwd(), "attached_assets", "_VISHAL SINGH THAKUR_ _1753379524605.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "Vishal_Thakur_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(500).json({ message: "Error downloading resume" });
        }
      });
    } else {
      res.status(404).json({ message: "Resume not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
