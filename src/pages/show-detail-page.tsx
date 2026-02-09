import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, User, Award, Ticket, ChevronLeft, Theater } from 'lucide-react';
import { Page } from '../App';
import { productions } from '../data/productions';

interface ShowDetailPageProps {
  productionId: string;
  onNavigate: (page: Page) => void;
}

export function ShowDetailPage({ productionId, onNavigate }: ShowDetailPageProps) {
  const production = productions.find(p => p.id === productionId);

  if (!production) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-[#0D1B2A] mb-4 font-serif">Production Not Found</h1>
          <button
            onClick={() => onNavigate('productions')}
            className="text-[#4A1F2C] hover:text-[#0D1B2A]"
          >
            Return to Productions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-20">
      {/* Back Button */}
      <section className="py-6 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate(production.status === 'past' ? 'archive' : 'productions')}
            className="inline-flex items-center gap-2 text-[#4A1F2C] hover:text-[#0D1B2A] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to {production.status === 'past' ? 'Archive' : 'Productions'}
          </button>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {production.featured && (
                <div className="text-center mb-6">
                  <span className="inline-block bg-[#F1D28A] text-[#0D1B2A] px-6 py-2 rounded-full font-medium">
                    Featured Production
                  </span>
                </div>
              )}
              <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif text-center">
                {production.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-[#F8F3E6]/80">
                {production.dates && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#F1D28A]" />
                    <span>{production.dates}</span>
                  </div>
                )}
                {production.venue && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#F1D28A]" />
                    <span>{production.venue}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#F1D28A]" />
                  <span>Director: {production.director}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2">
                {/* Synopsis */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl text-[#0D1B2A] mb-6 font-serif">About This Production</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {production.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This production showcases the timeless wit and beautiful melodies of Gilbert & Sullivan, brought to life by talented local performers, full orchestra, and handcrafted Victorian-era costumes and sets.
                  </p>
                </motion.div>

                {/* Director's Note */}
                {production.director && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                  >
                    <h2 className="text-3xl text-[#0D1B2A] mb-6 font-serif">Director's Note</h2>
                    <div className="bg-[#F8F3E6] p-8 rounded-xl border-l-4 border-[#F1D28A]">
                      <p className="text-gray-700 italic leading-relaxed mb-4">
                        "This production celebrates both the humor of Gilbert & Sullivan and the extraordinary community that has kept these works alive in Austin for 50 years."
                      </p>
                      <div className="text-[#4A1F2C] font-medium">— {production.director}, Director</div>
                    </div>
                  </motion.div>
                )}

                {/* Awards */}
                {production.awards && production.awards.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl text-[#0D1B2A] mb-6 font-serif flex items-center gap-3">
                      <Award className="w-8 h-8 text-[#F1D28A]" />
                      Awards & Recognition
                    </h2>
                    <div className="space-y-4">
                      {production.awards.map((award, index) => (
                        <div
                          key={index}
                          className={`p-6 rounded-xl ${
                            award.result === 'Won'
                              ? 'bg-gradient-to-r from-[#F1D28A]/20 to-[#DCC48E]/20 border-2 border-[#F1D28A]'
                              : 'bg-[#F8F3E6]'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            {award.result === 'Won' ? (
                              <Award className="w-6 h-6 text-[#F1D28A] flex-shrink-0 mt-1" />
                            ) : (
                              <Award className="w-6 h-6 text-[#4A1F2C] flex-shrink-0 mt-1" />
                            )}
                            <div>
                              <div className={`font-medium mb-1 ${
                                award.result === 'Won' ? 'text-[#4A1F2C]' : 'text-gray-700'
                              }`}>
                                {award.category}
                              </div>
                              <div className="text-sm text-gray-600 mb-2">{award.nominee}</div>
                              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                award.result === 'Won'
                                  ? 'bg-[#F1D28A] text-[#0D1B2A]'
                                  : 'bg-[#4A1F2C]/10 text-[#4A1F2C]'
                              }`}>
                                {award.result === 'Won' ? '🏆 Winner' : '⭐ Nominated'}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1">
                {/* Poster/Image Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C] rounded-xl aspect-[3/4] flex items-center justify-center sticky top-24">
                    <Theater className="w-32 h-32 text-[#F1D28A]/20" />
                  </div>
                </motion.div>

                {/* Quick Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-[#F8F3E6] p-6 rounded-xl mb-6"
                >
                  <h3 className="text-xl text-[#0D1B2A] mb-4 font-serif">Production Info</h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Year</div>
                      <div className="font-medium">{production.year}</div>
                    </div>
                    {production.dates && (
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Performance Dates</div>
                        <div className="font-medium">{production.dates}</div>
                      </div>
                    )}
                    {production.venue && (
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Venue</div>
                        <div className="font-medium">{production.venue}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Director</div>
                      <div className="font-medium">{production.director}</div>
                    </div>
                  </div>
                </motion.div>

                {/* Tickets CTA */}
                {(production.status === 'current' || production.status === 'upcoming') && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <button className="w-full bg-[#F1D28A] text-[#0D1B2A] px-6 py-4 rounded-lg hover:bg-[#DCC48E] transition-all font-medium flex items-center justify-center gap-2 text-lg">
                      <Ticket className="w-5 h-5" />
                      Buy Tickets
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
