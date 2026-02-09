import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, BookOpen, FileText, Video, Mail, Download, CheckCircle } from 'lucide-react';

export function MikadoResourcesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const resources = [
    {
      icon: FileText,
      title: 'Revised Libretto (GSA Edition)',
      description: 'A respectful, modernized interpretation retaining the humor, musicality, and satirical power of the original Savoy opera.',
    },
    {
      icon: BookOpen,
      title: 'Director\'s Guide',
      description: 'Notes on staging, dramaturgy, design, character reinterpretations, and intended tone.',
    },
    {
      icon: FileText,
      title: 'Dramaturgical Slide Deck',
      description: 'Educational slides explaining history, context, why revisions were made, and how to present G&S respectfully today.',
    },
    {
      icon: Video,
      title: 'Production Photos',
      description: 'Images illustrating costuming, staging, and aesthetic choices from our productions.',
    },
    {
      icon: BookOpen,
      title: 'Program Notes & Essays',
      description: 'In-depth scholarship suitable for universities, opera companies, and educational use.',
    },
    {
      icon: Mail,
      title: 'Optional Consultation',
      description: 'We\'re happy to discuss our process with companies considering a Mikado production.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Globe className="w-16 h-16 text-[#F1D28A] mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
              The Mikado Resource Library
            </h1>
            <p className="text-xl text-[#F8F3E6]/80 leading-relaxed mb-4">
              A global resource for ethical, modern productions of the Savoy operetta
            </p>
            <p className="text-lg text-[#F8F3E6]/70">
              Free for companies, students, teachers, and directors worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Revised */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-8 font-serif text-center">Why We Revised The Mikado</h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Mikado is a brilliant, witty, musically rich operetta — but its original 1885 conception reflects Victorian misunderstandings of Japan and contains material that can cause harm when presented today.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Gilbert's satire was aimed at British politics and bureaucracy, not at Japanese culture. Yet the use of faux-Japanese names, costumes, and stereotypes has created real barriers for modern audiences and performers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a contemporary arts organization, we believe we have a responsibility to honor cultural respect, artistic integrity, historical awareness, and community values.
              </p>
              
              <div className="bg-[#F8F3E6] p-6 rounded-lg border-l-4 border-[#F1D28A]">
                <h3 className="text-xl text-[#0D1B2A] mb-3 font-serif">Our Goals</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F1D28A] flex-shrink-0 mt-0.5" />
                    <span>Retain the spirit and satire intended by Gilbert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F1D28A] flex-shrink-0 mt-0.5" />
                    <span>Protect performers from portraying stereotypes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F1D28A] flex-shrink-0 mt-0.5" />
                    <span>Welcome all audiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F1D28A] flex-shrink-0 mt-0.5" />
                    <span>Support global, modern productions that treat the material responsibly</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">What We Provide</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#F8F3E6] p-8 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#F1D28A] rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-7 h-7 text-[#0D1B2A]" />
                  </div>
                  <h3 className="text-xl text-[#0D1B2A] mb-3 font-serif">{resource.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-[#0D1B2A] mb-6 font-serif">Global Impact</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Companies, schools, and universities internationally have requested and used our GSA Mikado materials. We are honored to serve as a resource for ethical adaptations of Gilbert & Sullivan works.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
              <p className="text-gray-700 italic">
                "This version has been used by companies around the world, and we gladly share our materials to support responsible, joyful performance of G&S for generations to come."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Access Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-8 font-serif text-center">Request Access</h2>
            
            {!formSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="bg-[#F8F3E6] p-8 rounded-2xl shadow-lg"
              >
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border-2 border-[#0D1B2A]/20 rounded-lg focus:border-[#F1D28A] focus:outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border-2 border-[#0D1B2A]/20 rounded-lg focus:border-[#F1D28A] focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-gray-700 mb-2">Organization *</label>
                      <input
                        type="text"
                        id="organization"
                        required
                        className="w-full px-4 py-3 border-2 border-[#0D1B2A]/20 rounded-lg focus:border-[#F1D28A] focus:outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-gray-700 mb-2">Country *</label>
                      <input
                        type="text"
                        id="country"
                        required
                        className="w-full px-4 py-3 border-2 border-[#0D1B2A]/20 rounded-lg focus:border-[#F1D28A] focus:outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="use" className="block text-gray-700 mb-2">Intended Use *</label>
                    <select
                      id="use"
                      required
                      className="w-full px-4 py-3 border-2 border-[#0D1B2A]/20 rounded-lg focus:border-[#F1D28A] focus:outline-none bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="performance">Performance / Production</option>
                      <option value="education">Education / Teaching</option>
                      <option value="research">Research / Academic Study</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-[#0D1B2A]/20 rounded-lg focus:border-[#F1D28A] focus:outline-none bg-white"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4A1F2C] text-white px-8 py-4 rounded-lg hover:bg-[#4A1F2C]/90 transition-all font-medium"
                  >
                    Request Materials
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    Upon submission, you'll receive an email with access to our resource library.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#F8F3E6] p-12 rounded-2xl shadow-lg text-center"
              >
                <CheckCircle className="w-20 h-20 text-[#F1D28A] mx-auto mb-6" />
                <h3 className="text-2xl text-[#0D1B2A] mb-4 font-serif">Request Submitted!</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Thank you for your interest in our Mikado resources.
                </p>
                <p className="text-gray-600">
                  We'll review your request and send you access information within 24-48 hours.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="py-12 bg-[#F8F3E6] border-t-2 border-[#0D1B2A]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl text-[#0D1B2A] mb-4 font-serif text-center">Terms of Use</h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              These materials are provided for educational and performance use by request. Please credit "Gilbert & Sullivan Austin" when using any portion of them. They may not be posted publicly or redistributed without permission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
