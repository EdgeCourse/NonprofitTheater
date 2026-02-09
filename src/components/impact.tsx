import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Heart, Globe } from 'lucide-react';

export function Impact() {
  const impacts = [
    {
      icon: Award,
      stat: '37',
      label: 'International Awards',
      description: 'Recognition for excellence in theatre arts',
    },
    {
      icon: Users,
      stat: '12,000+',
      label: 'Artists Supported',
      description: 'Providing opportunities to diverse talents',
    },
    {
      icon: Heart,
      stat: '500+',
      label: 'Community Workshops',
      description: 'Free educational programs worldwide',
    },
    {
      icon: Globe,
      stat: '47',
      label: 'Countries Reached',
      description: 'Bringing theatre to new audiences',
    },
  ];

  const testimonials = [
    {
      quote: 'Global Stage Theatre changed my life. Their community program gave me the confidence to pursue my dream of becoming an actor.',
      author: 'Maria Santos',
      role: 'Emerging Artist, Philippines',
    },
    {
      quote: 'The most powerful theatrical experience I\'ve ever witnessed. Every production tells stories that matter.',
      author: 'James Wilson',
      role: 'Theatre Critic, The Guardian',
    },
    {
      quote: 'Supporting GST has been incredibly rewarding. Seeing the impact they make in underserved communities is inspiring.',
      author: 'Dr. Sarah Chen',
      role: 'Board Member & Donor',
    },
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-600 uppercase tracking-wider">Our Impact</span>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mt-4 mb-6">
              Making a Difference Through Art
            </h2>
            <p className="text-lg text-gray-700">
              Every production, workshop, and initiative creates ripples of positive change
              across communities worldwide.
            </p>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <impact.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl text-gray-900 mb-2">{impact.stat}</div>
              <div className="text-lg text-gray-900 mb-2">{impact.label}</div>
              <p className="text-sm text-gray-600">{impact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl text-gray-900 text-center mb-12">Voices from Our Community</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="text-5xl text-purple-600 mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
