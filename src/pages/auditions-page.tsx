import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Music, Users, HelpCircle, Mail, UserPlus, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AuditionsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    voiceType: '',
    experience: '',
    interests: '',
    availability: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - this would normally send to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll contact you when auditions open.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const auditionDetails = [
    {
      icon: Calendar,
      title: 'Dates',
      info: 'Spring 2026 - Specific dates TBA',
    },
    {
      icon: Clock,
      title: 'Time',
      info: 'Afternoons & Evenings',
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Central Austin - Details provided upon registration',
    },
  ];

  const faqs = [
    {
      question: 'Do I need experience to audition?',
      answer: 'Not at all! While we welcome experienced performers, chorus roles require no prior experience. We value enthusiasm and commitment.',
    },
    {
      question: 'What should I prepare?',
      answer: 'Prepare a song from a G&S operetta or a similar classical/theatrical piece. An accompanist will be provided. Bring sheet music in the correct key.',
    },
    {
      question: 'Are there age requirements?',
      answer: 'Principal roles are typically for adults, but we welcome performers of all ages for chorus. Some productions may have youth roles.',
    },
    {
      question: 'What is the time commitment?',
      answer: 'Rehearsals typically run 2-3 evenings per week plus weekends closer to performances. The full rehearsal period is approximately 10-12 weeks.',
    },
    {
      question: 'Is this a paid position?',
      answer: 'Yes! GSA performers, orchestra members, and principal cast are compensated for their work. We value the talent and dedication of our artists.',
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1686216607642-dfc241092ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYXVkaXRpb24lMjBzdGFnZXxlbnwxfHx8fDE3NjU0NTUwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Audition stage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E4D8B]/85 via-[#8B5A8E]/75 to-[#0D9488]/80"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-6 py-3 bg-[#F1D28A]/20 backdrop-blur-sm text-[#F1D28A] rounded-full mb-8 border border-[#F1D28A]/30">
              <span className="font-serif">Auditions Opening Soon</span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-white mb-8 font-serif leading-tight">
              Join Our Cast
            </h1>
            <p className="text-xl text-[#F8F3E6]/90 mb-12 leading-relaxed">
              Be part of Austin's premier Gilbert & Sullivan company. Auditions welcome performers of all experience levels for principal roles and chorus.
            </p>
            <button className="bg-[#C9A961] text-[#0D1B2A] px-10 py-4 rounded-lg hover:bg-[#B8985A] transition-all text-lg font-medium">
              Join Audition Email List
            </button>
          </motion.div>
        </div>
      </section>

      {/* Audition Details */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">Audition Details</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {auditionDetails.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="w-14 h-14 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                    <detail.icon className="w-7 h-7 text-[#0D1B2A]" />
                  </div>
                  <h3 className="text-xl text-[#0D1B2A] mb-3 font-serif">{detail.title}</h3>
                  <p className="text-gray-700">{detail.info}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Prepare */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">What to Prepare</h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F8F3E6] p-8 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <Music className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-[#0D1B2A] mb-3 font-serif">For Principal Roles</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Prepare one song from a G&S operetta (or similar classical/theatrical piece)</li>
                      <li>• Bring sheet music in your key - an accompanist will be provided</li>
                      <li>• Be prepared to sing scales and demonstrate vocal range</li>
                      <li>• You may be asked to read from the script</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#F8F3E6] p-8 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-[#0D1B2A] mb-3 font-serif">For Chorus</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• No prior experience necessary!</li>
                      <li>• Bring your enthusiasm and willingness to learn</li>
                      <li>• You may be asked to sing scales to determine vocal range</li>
                      <li>• No prepared song required for chorus-only auditions</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#C9A961]/20 p-8 rounded-xl border-2 border-[#C9A961]"
              >
                <h3 className="text-xl text-[#0D1B2A] mb-3 font-serif">General Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fill out audition form (available at registration)</li>
                  <li>• Be prepared to list any scheduling conflicts during rehearsal period</li>
                  <li>• Bring your calendar to confirm availability</li>
                  <li>• Dress comfortably but professionally</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Introduction */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-full aspect-square bg-gradient-to-br from-[#1E4D8B] to-[#8B5A8E] rounded-xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-[#C9A961]/30" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl text-[#0D1B2A] mb-4 font-serif">From the Director</h3>
                  <div className="bg-[#F8F3E6] p-6 rounded-lg mb-4 border-l-4 border-[#C9A961]">
                    <p className="text-gray-700 italic leading-relaxed">
                      "I'm thrilled to direct Patience for GSA's 50th anniversary season. We're looking for passionate performers who want to be part of something special. Whether you're a seasoned G&S veteran or completely new to operetta, there's a place for you in this production."
                    </p>
                  </div>
                  <div className="text-gray-700">
                    <div className="font-medium text-[#4A1F2C]">Carol Brown</div>
                    <div className="text-sm">Director, Patience (2026)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[#F8F3E6] p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg text-[#0D1B2A] mb-2 font-medium">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Year-Round Registration Form */}
      <section className="py-16 bg-gradient-to-br from-[#1E4D8B] via-[#C9A961] to-[#8B4049]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <UserPlus className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl text-white mb-4 font-serif">Join Our Talent Database</h2>
              <p className="text-xl text-[#F8F3E6]/90 leading-relaxed">
                Register year-round! We'll contact you when auditions open and keep you updated on upcoming opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[#1E4D8B] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[#1E4D8B] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1E4D8B] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1E4D8B] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors"
                      placeholder="(512) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="voiceType" className="block text-sm font-semibold text-[#1E4D8B] mb-2">
                    Voice Type *
                  </label>
                  <select
                    id="voiceType"
                    name="voiceType"
                    required
                    value={formData.voiceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Select your voice type</option>
                    <option value="soprano">Soprano</option>
                    <option value="mezzo-soprano">Mezzo-Soprano</option>
                    <option value="alto">Alto</option>
                    <option value="tenor">Tenor</option>
                    <option value="baritone">Baritone</option>
                    <option value="bass">Bass</option>
                    <option value="unsure">Not Sure / Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-[#1E4D8B] mb-2">
                    Performance Background
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={4}
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors resize-none"
                    placeholder="Tell us about your performance experience (theatre, opera, chorus, etc.)"
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-semibold text-[#1E4D8B] mb-2">
                    Audition Interests
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    rows={3}
                    value={formData.interests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors resize-none"
                    placeholder="What roles or types of performances interest you? (e.g., principal roles, chorus, specific shows)"
                  />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-semibold text-[#1E4D8B] mb-2">
                    General Availability
                  </label>
                  <textarea
                    id="availability"
                    name="availability"
                    rows={3}
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A961] transition-colors resize-none"
                    placeholder="What times/days generally work for you? Any known conflicts for 2026?"
                  />
                </div>

                <div className="bg-[#F8F3E6] p-6 rounded-lg border-l-4 border-[#C9A961]">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8B4049] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      By submitting this form, you'll be added to our performer database. We'll contact you when auditions open and send updates about upcoming productions. You can unsubscribe at any time.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#1E4D8B] to-[#8B4049] text-white px-12 py-4 rounded-full hover:shadow-xl transition-all text-lg font-semibold inline-flex items-center gap-2"
                  >
                    <UserPlus className="w-5 h-5" />
                    Join Our Talent Database
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}