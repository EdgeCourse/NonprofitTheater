import React from 'react';
import { motion } from 'motion/react';
import { Music, School, Users, Heart, Calendar, DollarSign, Mail, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function OutreachPage() {
  const audiences = [
    {
      icon: School,
      title: 'Schools',
      description: 'Interactive educational performances that bring Victorian operetta to life for students. Many shows available at no cost with fee subsidies.',
      benefits: ['Age-appropriate content', 'Curriculum connections', 'Q&A sessions', 'Priority for subsidies']
    },
    {
      icon: Heart,
      title: 'Retirement Centers',
      description: 'Delightful performances that bring joy and nostalgia to senior communities with beloved Gilbert & Sullivan favorites.',
      benefits: ['Familiar melodies', 'Engaging storytelling', 'Flexible venue setup', 'Interactive elements']
    },
    {
      icon: Users,
      title: 'Civic Clubs & Organizations',
      description: 'Perfect entertainment for meetings, luncheons, and special events with wit, humor, and Victorian charm.',
      benefits: ['Customizable length', 'Professional presentation', 'Audience participation', 'Memorable experience']
    },
    {
      icon: Calendar,
      title: 'Private Events',
      description: 'Add elegance to your party, wedding, or corporate function with live Gilbert & Sullivan performances.',
      benefits: ['Tailored repertoire', 'Flexible scheduling', 'Enhanced options', 'Unique entertainment']
    }
  ];

  const features = [
    {
      icon: Music,
      title: '30-45 Minutes',
      description: 'Perfect length for any event'
    },
    {
      icon: Users,
      title: 'Interactive',
      description: 'Engaging audience participation'
    },
    {
      icon: CheckCircle,
      title: 'Customizable',
      description: 'Tailored to your audience'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E4D8B] via-[#8B5A8E] to-[#0D9488] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <p className="text-[#F8F3E6] font-medium">Educational & Community Outreach</p>
            </div>
            <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
              Wand'ring Minstrels
            </h1>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed mb-8">
              Gilbert & Sullivan ensemble performances at your location!
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              The Wand'ring Minstrels are the educational and community outreach arm of Gilbert & Sullivan Austin, 
              dedicated to spreading the joys of G&S through education and performance of the works of 
              Sir William Gilbert and Sir Arthur Sullivan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-[#0D1B2A] mb-4 font-serif">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We perform at your school, retirement center, civic club, business meeting, or private party. 
                Our interactive performances run between 30 and 45 minutes, and can be customized for your 
                particular audience or occasion.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#F8F3E6] p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1E4D8B] to-[#0D9488] rounded-full mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-[#0D1B2A] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl mb-8"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759426633513-004a68035581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnNlbWJsZSUyMHBlcmZvcm1hbmNlJTIwY2hhbWJlciUyMG11c2ljfGVufDF8fHx8MTc2Nzk0MTc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wand'ring Minstrels ensemble performance"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-[#0D1B2A] mb-4 font-serif">Perfect For</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our performances are tailored to delight audiences of all ages and backgrounds
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {audiences.map((audience, index) => (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8B5A8E] to-[#0D9488] rounded-lg flex items-center justify-center">
                      <audience.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-[#0D1B2A] mb-2">{audience.title}</h3>
                      <p className="text-gray-700 mb-4">{audience.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 ml-16">
                    {audience.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0D9488] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Subsidies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-[#0D1B2A] mb-4 font-serif">Pricing & Subsidies</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#1E4D8B] to-[#0D9488] p-8 rounded-2xl text-white"
              >
                <DollarSign className="w-12 h-12 mb-4 text-[#C9A961]" />
                <h3 className="text-2xl font-serif mb-4">Standard Performance</h3>
                <div className="text-4xl font-bold mb-2">$350</div>
                <p className="text-white/90 mb-4">For a standard show with 3 performers</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm text-white/80">
                    Enhanced shows with additional performers or special programming available at additional cost
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F8F3E6] p-8 rounded-2xl border-2 border-[#C9A961]"
              >
                <School className="w-12 h-12 mb-4 text-[#0D9488]" />
                <h3 className="text-2xl font-serif text-[#0D1B2A] mb-4">Fee Subsidies Available</h3>
                <p className="text-gray-700 mb-4">
                  We believe in making Gilbert & Sullivan accessible to all. Fee subsidies are available in some cases.
                </p>
                <div className="bg-white p-4 rounded-lg border border-[#C9A961]/30">
                  <p className="text-[#0D1B2A] font-medium mb-2">School Performances</p>
                  <p className="text-sm text-gray-600">
                    School performances receive preference for subsidies, with many school shows available at <strong>no cost</strong>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-[#0D1B2A] mb-4 font-serif">In Action</h2>
              <p className="text-lg text-gray-600">
                The Wand'ring Minstrels bring Victorian operetta to life for diverse audiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745183997077-4d2ea4f6069a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3Njc5NDE3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="School performance"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-white p-4">
                  <h4 className="font-serif text-lg text-[#0D1B2A]">School Programs</h4>
                  <p className="text-sm text-gray-600">Engaging students with interactive performances</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691031197-3ce709db9640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwY29tbXVuaXR5JTIwZW50ZXJ0YWlubWVudHxlbnwxfHx8fDE3Njc5NDE3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Senior community performance"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-white p-4">
                  <h4 className="font-serif text-lg text-[#0D1B2A]">Senior Communities</h4>
                  <p className="text-sm text-gray-600">Bringing joy to retirement centers</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1716234204366-d6160290db83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWN0b3JpYW4lMjBjb3N0dW1lJTIwcGVyZm9ybWVyc3xlbnwxfHx8fDE3Njc5NDE3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Victorian costume performers"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-white p-4">
                  <h4 className="font-serif text-lg text-[#0D1B2A]">Special Events</h4>
                  <p className="text-sm text-gray-600">Authentic Victorian entertainment</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1E4D8B] via-[#8B5A8E] to-[#0D9488] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Mail className="w-16 h-16 text-[#C9A961] mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl text-white mb-6 font-serif">
              Book the Wand'ring Minstrels
            </h2>
            <p className="text-xl text-[#F8F3E6]/90 mb-8 max-w-2xl mx-auto">
              For bookings or additional information, please contact us at:
            </p>
            <a
              href="mailto:info@gilbertsullivan.org"
              className="inline-flex items-center gap-3 bg-white text-[#1E4D8B] px-8 py-4 rounded-full font-medium text-lg hover:bg-[#F8F3E6] transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              info@gilbertsullivan.org
            </a>
            <p className="text-white/70 mt-6 text-sm">
              We typically respond within 1-2 business days
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F8F3E6] p-12 rounded-2xl border-2 border-[#C9A961]"
            >
              <h2 className="text-3xl text-[#0D1B2A] mb-6 font-serif text-center">
                Why Choose the Wand'ring Minstrels?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0D9488] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#0D1B2A] mb-1">Professional Excellence</h4>
                    <p className="text-gray-600 text-sm">Experienced performers from our award-winning productions</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0D9488] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#0D1B2A] mb-1">Educational Value</h4>
                    <p className="text-gray-600 text-sm">Enriching cultural experiences that inspire and educate</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0D9488] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#0D1B2A] mb-1">Flexible & Customizable</h4>
                    <p className="text-gray-600 text-sm">Tailored to your audience, venue, and occasion</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0D9488] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#0D1B2A] mb-1">Community Focus</h4>
                    <p className="text-gray-600 text-sm">50 years of bringing G&S to Central Texas communities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
