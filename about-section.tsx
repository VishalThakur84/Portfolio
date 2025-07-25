import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const skills = {
    "Languages & Frameworks": ["Ruby", "Ruby on Rails", "JavaScript", "HTML/CSS", "jQuery"],
    "Databases & Tools": ["PostgreSQL", "MySQL", "Redis", "Git"],
    "DevOps & Cloud": ["Docker", "AWS (EC2, S3)", "GitHub Actions", "Heroku"],
    "Testing & Monitoring": ["RSpec", "Cucumber", "New Relic"],
  };

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "2500+", label: "Bus Operators Served" },
    { value: "5+", label: "Countries" },
    { value: "20K+", label: "Buses" },
  ];

  return (
    <section id="about" className="py-20 bg-muted dark:bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Passionate about building clean, scalable systems and delivering
            high-quality user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Professional Summary
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Backend Developer specializing in designing, building, and scaling
              production-ready web applications using Ruby on Rails. Skilled in
              crafting performant APIs, optimizing databases, working with DevOps
              pipelines, and collaborating across teams.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently at <strong className="text-foreground">Bitla Software</strong>,
              I work on microservices and containerized systems supporting
              high-traffic applications that serve thousands of bus operators
              globally.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
