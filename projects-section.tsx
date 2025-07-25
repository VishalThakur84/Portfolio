import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Bitla Software Transport Solutions",
      subtitle: "TicketSimply, Trackingo, CargoSimply, AgentConnect",
      description:
        "Currently developing scalable backend APIs for SaaS-based transport solutions including TicketSimply, Trackingo, CargoSimply, and AgentConnect. Serving 2500+ bus operators globally with microservices architecture.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Ruby on Rails", "Microservices", "Docker", "AWS"],
      links: [
        { label: "View Company", url: "https://www.bitlasoft.com", icon: Globe },
      ],
      current: true,
    },
    {
      title: "Cigna Healthcare Platform",
      subtitle: "Healthcare Management System",
      description:
        "Designed scalable Rails services with secure access using Devise and CanCanCan. Handled API authentication, database performance tuning, and maintained robust version control workflows.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Ruby on Rails", "Devise", "CanCanCan", "PostgreSQL"],
      links: [],
    },
    {
      title: "Alpha Omega Finance Dashboard",
      subtitle: "Financial Analytics Platform",
      description:
        "Built and maintained automated test suites using RSpec. Monitored live performance and debugged API bottlenecks using New Relic for enhanced system reliability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Ruby on Rails", "RSpec", "New Relic", "Performance"],
      links: [],
    },
    {
      title: "Qliqsoft Messaging & Monitoring Tool",
      subtitle: "Real-time Communication Platform",
      description:
        "Integrated Protobuf for efficient service-to-service messaging and tuned SQL queries for faster response times under high load conditions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Ruby on Rails", "Protobuf", "SQL Optimization", "High Performance"],
      links: [],
    },
    {
      title: "Spiral-Firmstudio",
      subtitle: "Income Tax Form Automation",
      description:
        "Created dynamic form processing systems aligned with real-world tax filing logic for automated tax form generation and processing.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Ruby on Rails", "Form Processing", "Tax Logic", "Automation"],
      links: [],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted dark:bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Showcasing impactful solutions across various industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:transform hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white font-bold text-xl">
                        {project.subtitle}
                      </div>
                      {project.current && (
                        <Badge className="mt-1">Current Project</Badge>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.links.length > 0 && (
                      <div className="flex gap-4">
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <link.icon className="h-4 w-4" />
                              {link.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
