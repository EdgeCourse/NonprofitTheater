import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Heart, Award, Users, Mail, CheckCircle, DollarSign } from 'lucide-react';

export function ScholarshipPage() {
  const eligibilityCriteria = [
    'High school senior or current college student',
    'Pursuing studies in music, theatre, or performing arts',
    'Demonstrated passion for vocal performance or musical theatre',
    'Central Texas resident preferred',
    'Strong academic record and community involvement',
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete the online application form with your personal information and academic background.',
    },
    {
      step: 2,
      title: 'Essay & Recommendation',
      description: 'Write a brief essay about your passion for the performing arts and submit one letter of recommendation.',
    },
    {
      step: 3,
      title: 'Audition (Optional)',
      description: 'Prepare a song or monologue to showcase your talent (may be submitted via video).',
    },
    {
      step: 4,
      title: 'Review & Selection',
      description: 'Our scholarship committee reviews all applications and selects recipients based on merit and need.',
    },
  ];

  const pastRecipients = [
    {
      name: 'Emily Rodriguez',
      year: '2023',
      school: 'University of Texas at Austin',
      quote: 'The GSA scholarship helped me pursue my dreams and connected me with a supportive community of artists.',
    },
    {
      name: 'Michael Chen',
      year: '2022',
      school: 'St. Edward\'s University',
      quote: 'This scholarship made it possible for me to focus on my studies and participate in more performances.',
    },
    {
      name: 'Sarah Martinez',
      year: '2021',
      school: 'Texas State University',
      quote: 'I\'m grateful for the GSA community\'s investment in young artists like myself.',
    },
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
            <GraduationCap className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
              Scholarships
            </h1>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed">
              Investing in the next generation of vocal artists and theatre makers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl text-[#1E4D8B] mb-6 font-serif">Our Scholarship Program</h2>
              <div className="bg-[#F8F3E6] p-6 rounded-lg border-l-4 border-[#C9A961] mb-6">
                <p className="text-gray-700 font-medium">
                  Applications for the 2025-2026 academic year are now closed. For any questions regarding the scholarship or application process, please email scholarships@gilbertsullivan.org
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Thank you for your support, and we look forward to announcing our scholarship recipients this summer!
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Gilbert & Sullivan Austin awards approximately <span className="font-semibold text-[#8B4049]">$6,000 annually</span> in scholarships to support young singers, musicians, and students of the performing arts across Central Texas.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our scholarship program reflects our commitment to nurturing the next generation of artists and making theatre education accessible to all. Since the program's inception, we've supported dozens of talented students in pursuing their artistic dreams.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-[#1E4D8B] to-[#8B4049] rounded-xl">
                  <div className="text-4xl font-bold text-white mb-2 font-serif">$6,000</div>
                  <div className="text-sm text-[#F8F3E6]">Annual Awards</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#C9A961] to-[#8B4049] rounded-xl">
                  <div className="text-4xl font-bold text-white mb-2 font-serif">50+</div>
                  <div className="text-sm text-white">Students Supported</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#8B4049] to-[#1E4D8B] rounded-xl">
                  <div className="text-4xl font-bold text-white mb-2 font-serif">15+</div>
                  <div className="text-sm text-[#F8F3E6]">Years Running</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-[#1E4D8B] mb-4 font-serif">Eligibility Criteria</h2>
              <p className="text-lg text-gray-700">
                We welcome applications from passionate students pursuing performing arts education
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F8F3E6] p-8 rounded-2xl"
            >
              <div className="space-y-4">
                {eligibilityCriteria.map((criterion, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{criterion}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-[#1E4D8B] mb-4 font-serif">How to Apply</h2>
              <p className="text-lg text-gray-700">
                Applications typically open in January and close in March each year
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applicationSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E4D8B] to-[#8B4049] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="text-xl text-[#1E4D8B] font-serif">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-[#1E4D8B] to-[#8B4049] text-white px-10 py-4 rounded-full hover:shadow-xl transition-all text-lg font-semibold">
                Apply for 2026 Scholarship
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Application deadline: March 31, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Recipients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-[#1E4D8B] mb-4 font-serif">Meet Our Scholars</h2>
              <p className="text-lg text-gray-700">
                Hear from students whose lives have been impacted by GSA scholarships
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pastRecipients.map((recipient, index) => (
                <motion.div
                  key={recipient.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#F8F3E6] p-8 rounded-xl"
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C9A961] to-[#8B4049] rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl text-[#1E4D8B] font-serif mb-1">{recipient.name}</h3>
                    <p className="text-sm text-[#8B4049] font-medium mb-1">Class of {recipient.year}</p>
                    <p className="text-sm text-gray-600">{recipient.school}</p>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{recipient.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support the Program */}
      <section className="py-16 bg-gradient-to-br from-[#1E4D8B] to-[#8B4049]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl text-white mb-6 font-serif">
              Support Our Scholarship Program
            </h2>
            <p className="text-xl text-[#F8F3E6]/90 mb-8 leading-relaxed">
              Your donation directly supports talented young artists in Central Texas. Help us expand our scholarship program and give more students the opportunity to pursue their dreams.
            </p>
            <a 
              href="https://www.zeffy.com/ticketing/9b1804e9-3125-45bc-a927-0b7faa841c31"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#9B8FC7] to-[#B8A8D9] text-white px-10 py-4 rounded-full hover:from-[#8B7FB7] hover:to-[#A898C9] transition-all text-lg font-semibold shadow-lg"
            >
              Donate to Scholarship Fund
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-4">
              Questions about the scholarship program? Contact us:
            </p>
            <a
              href="mailto:scholarships@gilbertsullivan.org"
              className="inline-flex items-center gap-2 text-[#8B4049] hover:text-[#1E4D8B] text-lg font-medium"
            >
              <Mail className="w-5 h-5" />
              scholarships@gilbertsullivan.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}