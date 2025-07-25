import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Bitla Software Pvt Ltd",
      location: "Bangalore, India",
      period: "July 2025 – Present",
      current: true,
      responsibilities: [
        "Developing backend APIs using Ruby on Rails for SaaS-based transport solutions",
        "Working on microservices and containerized systems for high-traffic applications",
        "Collaborating with React frontend and infrastructure teams",
        "Integrating third-party APIs and writing RSpec tests for core features",
        "Actively involved in Agile sprint cycles and CI/CD pipelines with GitHub Actions",
      ],
      impact: [
        { value: "2500+", label: "Bus Operators" },
        { value: "20K+", label: "Buses" },
        { value: "5+", label: "Countries" },
        { value: "30+", label: "OTA Partners" },
      ],
    },
    {
      title: "Software Engineer",
      company: "Webkorps Services India Pvt Ltd",
      location: "Indore, India",
      period: "March 2022 – June 2024",
      current: false,
      responsibilities: [
        "Built scalable Rails applications across healthcare, finance, and forms automation domains",
        "Implemented RESTful APIs and optimized complex SQL queries",
        "Worked on microservice communication with Protocol Buffers (Protobuf)",
        "Improved test coverage using RSpec and integrated performance monitoring via New Relic",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">
            Building scalable solutions for global impact
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`p-8 ${
                  exp.current ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="h-5 w-5 text-muted-foreground" />
                        <h4 className="text-xl font-medium">{exp.company}</h4>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    {exp.current && (
                      <Badge variant="default" className="mt-2 md:mt-0">
                        Current
                      </Badge>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3 text-primary">
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.impact && (
                      <div>
                        <h5 className="font-semibold mb-3 text-primary">
                          Impact & Scale
                        </h5>
                        <div className="grid grid-cols-2 gap-4">
                          {exp.impact.map((stat, idx) => (
                            <div
                              key={idx}
                              className="bg-muted p-4 rounded-lg text-center"
                            >
                              <div className="text-2xl font-bold text-primary">
                                {stat.value}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
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
