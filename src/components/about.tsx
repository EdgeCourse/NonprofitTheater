import React from 'react';
import { motion } from 'motion/react';
import { Globe, Heart, Users, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Productions performed in 47 countries, connecting cultures through art.',
    },
    {
      icon: Heart,
      title: 'Inclusive Vision',
      description: 'Celebrating diversity and amplifying underrepresented voices.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Powered by passionate volunteers and dedicated supporters worldwide.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with contemporary storytelling and immersive experiences.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-600 uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mt-4 mb-6">
              Theatre Without Borders
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, Global Stage Theatre is a non-profit organization dedicated to
              making world-class theatrical performances accessible to communities everywhere.
              We believe that powerful stories have the ability to transcend boundaries and
              create meaningful connections.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              From intimate community theaters to grand international stages, we bring together
              artists, audiences, and stories that matter. Every production is crafted with care,
              creativity, and a commitment to excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-300">
              <div>
                <div className="text-4xl text-purple-600 mb-2">250+</div>
                <div className="text-sm text-gray-600">Productions</div>
              </div>
              <div>
                <div className="text-4xl text-purple-600 mb-2">2M+</div>
                <div className="text-sm text-gray-600">Audience Members</div>
              </div>
              <div>
                <div className="text-4xl text-purple-600 mb-2">47</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1577537653888-383504d823ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGhlYXRlciUyMGFjdG9yc3xlbnwxfHx8fDE3NjU0NDE4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Theatre performers"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-lg italic">
                "Art is not what you see, but what you make others see."
              </p>
              <p className="text-sm mt-2 opacity-90">— Edgar Degas</p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
