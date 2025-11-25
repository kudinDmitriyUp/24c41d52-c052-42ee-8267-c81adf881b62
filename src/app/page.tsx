"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Flame } from 'lucide-react';

export default function FireGuardPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="FireGuard"
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "metrics" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Advanced Fire Safety at Your Fingertips"
          description="Real-time detection, instant alerts, and comprehensive compliance monitoring. Protect your property with intelligent fire safety technology designed for modern enterprises."
          tag="Fire Safety SaaS"
          tagIcon={Flame}
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Schedule Demo", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108339147-6p2gnag9.jpg"
          imageAlt="Fire safety monitoring dashboard"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Core Features"
          description="Comprehensive fire safety management with intelligent automation and real-time monitoring"
          tag="Platform Capabilities"
          features={[
            {
              id: "01",
              title: "Intelligent Detection",
              description: "Advanced sensors and AI-powered algorithms detect smoke and heat anomalies with 99.9% accuracy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108339863-a6j7vbfe.jpg",
              imageAlt: "Fire detection sensors"
            },
            {
              id: "02",
              title: "Instant Response",
              description: "Multi-channel alerts notify occupants and emergency services simultaneously within milliseconds",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108340684-k633znik.jpg",
              imageAlt: "Alert notification system"
            },
            {
              id: "03",
              title: "Compliance Management",
              description: "Automated compliance tracking, audit trails, and certification documentation for all regulations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108341382-sb608mpl.jpg",
              imageAlt: "Compliance documentation"
            },
            {
              id: "04",
              title: "Seamless Integration",
              description: "Integrates with existing building management systems and third-party emergency protocols",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108342039-zb6pxc8z.jpg",
              imageAlt: "System integration interface"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Impact & Trust"
          description="FireGuard protects thousands of buildings worldwide with proven results"
          tag="Statistics"
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Buildings Protected Globally"
            },
            {
              id: "2",
              value: "99.9%",
              description: "Detection Accuracy Rate"
            },
            {
              id: "3",
              value: "<100ms",
              description: "Average Alert Response Time"
            },
            {
              id: "4",
              value: "24/7",
              description: "Continuous Monitoring"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Customer Success Stories"
          description="See how leading organizations trust FireGuard for comprehensive fire safety"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Michelle Anderson",
              role: "Facilities Director",
              testimonial: "FireGuard transformed our safety management. The real-time alerts and compliance automation have given our team complete peace of mind.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108342800-9cnb2j2o.jpg",
              imageAlt: "Michelle Anderson"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Operations Manager",
              testimonial: "In a healthcare setting, safety is non-negotiable. FireGuard's accuracy and speed are exactly what we needed for patient protection.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108343449-z1eu9u9f.jpg",
              imageAlt: "James Rodriguez"
            },
            {
              id: "3",
              name: "Sarah Chen",
              role: "Chief Safety Officer",
              testimonial: "The integration with our existing systems was seamless. FireGuard reduced our compliance burden significantly while improving response times.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108344017-wxrfkoaa.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Property Manager",
              testimonial: "Our tenants appreciate the enhanced safety. FireGuard is the best investment we've made in building security and compliance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108345027-hcjoo8g3.png",
              imageAlt: "David Thompson"
            },
            {
              id: "5",
              name: "Lisa Martinez",
              role: "Risk Management Director",
              testimonial: "FireGuard has proven its value time and again. The system's reliability translated to lower insurance premiums for our clients.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108345783-rx9b7tpb.jpg",
              imageAlt: "Lisa Martinez"
            },
            {
              id: "6",
              name: "Robert Kim",
              role: "Emergency Services Coordinator",
              testimonial: "Coordinating with FireGuard-equipped buildings has streamlined our emergency response protocols significantly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108346527-faf6sel6.jpg",
              imageAlt: "Robert Kim"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about FireGuard and our fire safety solutions"
          tag="Help & Support"
          faqs={[
            {
              id: "1",
              title: "How does FireGuard ensure 99.9% detection accuracy?",
              content: "FireGuard uses advanced multi-sensor technology combined with machine learning algorithms. We analyze smoke density, heat signatures, and environmental factors in real-time to eliminate false alarms while ensuring rapid threat detection. Our system is continuously trained on millions of data points from deployed installations."
            },
            {
              id: "2",
              title: "Is FireGuard compliant with international fire safety standards?",
              content: "Yes, FireGuard meets and exceeds all major fire safety standards including NFPA 72, EN 54, UL 2572, and ISO 7240. Our platform automatically maintains compliance documentation and helps with regular audits. We stay updated with changing regulations across all regions where we operate."
            },
            {
              id: "3",
              title: "What is the typical alert response time?",
              content: "FireGuard delivers alerts in under 100 milliseconds from detection. This includes processing sensor data, analyzing patterns, sending notifications to occupants, and alerting emergency services simultaneously. Our infrastructure is distributed globally to ensure minimal latency."
            },
            {
              id: "4",
              title: "Can FireGuard integrate with existing building systems?",
              content: "Absolutely. FireGuard integrates with most modern building management systems, emergency protocols, and IoT platforms via APIs and standard protocols. Our technical team works with your IT department to ensure seamless integration with your existing infrastructure."
            },
            {
              id: "5",
              title: "How is data security and privacy handled?",
              content: "All data is encrypted using military-grade AES-256 encryption both in transit and at rest. We comply with GDPR, CCPA, and other privacy regulations. Regular security audits, penetration testing, and SOC 2 compliance ensure your data is protected against threats."
            },
            {
              id: "6",
              title: "What support and training do you provide?",
              content: "FireGuard includes 24/7 technical support, comprehensive onboarding training, and ongoing system optimization. We provide documentation, video tutorials, and dedicated account managers for enterprise clients. Regular webinars keep your team updated on new features."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Started with FireGuard Today"
          description="Join thousands of organizations protecting their buildings with intelligent fire safety technology. Fill out the form to schedule a demo or start your free trial."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Business Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your fire safety needs...",
            rows: 5,
            required: true
          }}
          buttonText="Request Demo"
          onSubmit={(data) => console.log('Form submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "How It Works", href: "metrics" },
                { label: "Pricing", href: "#" },
                { label: "Security", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Compliance", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 FireGuard. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}