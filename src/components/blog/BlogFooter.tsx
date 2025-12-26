import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, GraduationCap, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <section className="py-16 border-b border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cta/20 text-cta text-sm font-medium mb-6">
              Start Your IT Career Today
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enroll in a Free Demo Class
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Experience our world-class training methodology with no commitment. 
              50+ courses, industry expert trainers, and hands-on projects await you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="cta" size="xl" asChild>
                <a href="https://iattechnologies.com/courses" target="_blank" rel="noopener noreferrer">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Browse Courses
                </a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="https://iattechnologies.com/contact" target="_blank" rel="noopener noreferrer">
                  Book Free Demo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Award className="w-5 h-5 text-cta" />
                <span>100% Placement Support</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Users className="w-5 h-5 text-cta" />
                <span>10,000+ Students Trained</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <GraduationCap className="w-5 h-5 text-cta" />
                <span>0% EMI Options</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 border-b border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
          >
            <div>
              <h3 className="text-xl font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-primary-foreground/60">Get weekly IT insights, career tips, and training updates.</p>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="min-w-[250px] bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="cta">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About */}
            <div>
              <h4 className="text-lg font-bold mb-4">IAT Technology</h4>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
                Chennai's #1 IT Training Institute with 50+ courses, 100% placement support, 
                and industry expert trainers. Transform your career with hands-on training.
              </p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com/iattechnologies`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <span className="text-xs font-bold uppercase">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Courses */}
            <div>
              <h4 className="text-lg font-bold mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-sm">
                {['Data Analytics', 'Full Stack Development', 'Cloud Computing', 'Machine Learning', 'Software Testing', 'RPA Training'].map((course) => (
                  <li key={course}>
                    <a href="https://iattechnologies.com/courses" className="text-primary-foreground/60 hover:text-cta transition-colors">
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Our Trainers', 'Placements', 'Blog', 'Contact Us', 'FAQs'].map((link) => (
                  <li key={link}>
                    <a href="https://iattechnologies.com" className="text-primary-foreground/60 hover:text-cta transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cta mt-0.5" />
                  <span className="text-primary-foreground/60">
                    Chennai, Tamil Nadu, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cta" />
                  <a href="tel:+919876543210" className="text-primary-foreground/60 hover:text-cta transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cta" />
                  <a href="mailto:info@iattechnologies.com" className="text-primary-foreground/60 hover:text-cta transition-colors">
                    info@iattechnologies.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
            <p>
              © {new Date().getFullYear()} IAT Technology. All rights reserved. | 
              <a href="https://iattechnologies.com" className="hover:text-cta ml-1">Privacy Policy</a> | 
              <a href="https://iattechnologies.com" className="hover:text-cta ml-1">Terms of Service</a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default BlogFooter;
