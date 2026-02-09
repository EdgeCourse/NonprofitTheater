import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Star, Download } from 'lucide-react';
import { bidenPayneAwards } from '../data/awards';

export function AwardsPage() {
  const [filter, setFilter] = useState<'all' | 'won' | 'nominated'>('all');

  const filteredAwards = bidenPayneAwards.filter(award => {
    if (filter === 'all') return true;
    if (filter === 'won') return award.result === 'Won';
    if (filter === 'nominated') return award.result === 'Nominated';
    return true;
  });

  const wonCount = bidenPayneAwards.filter(a => a.result === 'Won').length;
  const nominatedCount = bidenPayneAwards.filter(a => a.result === 'Nominated').length;

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
            <div className="inline-flex items-center gap-3 mb-6">
              <Trophy className="w-12 h-12 text-[#F1D28A]" />
            </div>
            <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
              Awards & Recognition
            </h1>
            <p className="text-xl text-[#F8F3E6]/80 leading-relaxed">
              Celebrating excellence in Austin theatre through the B. Iden Payne Awards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-12 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F1D28A] to-[#DCC48E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#0D1B2A]" />
              </div>
              <div className="text-4xl font-bold text-[#0D1B2A] mb-2 font-serif">{bidenPayneAwards.length}</div>
              <div className="text-gray-600">Total Recognitions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F1D28A] to-[#DCC48E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-[#0D1B2A]" />
              </div>
              <div className="text-4xl font-bold text-[#4A1F2C] mb-2 font-serif">{wonCount}</div>
              <div className="text-gray-600">Awards Won</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F1D28A] to-[#DCC48E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#0D1B2A]" />
              </div>
              <div className="text-4xl font-bold text-[#4A1F2C] mb-2 font-serif">{nominatedCount}</div>
              <div className="text-gray-600">Nominations</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About B. Iden Payne Awards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F8F3E6] p-10 rounded-2xl"
            >
              <h2 className="text-3xl text-[#0D1B2A] mb-6 font-serif">About the B. Iden Payne Awards</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Over the years, Gilbert & Sullivan Austin has been honored with numerous nominations from the prestigious B. Iden Payne Awards Council, recognizing excellence in Austin theatre.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                These nominations reflect the artistry, dedication, and talent of our performers, directors, designers, and musicians. We are proud to be recognized among Austin's finest theatrical productions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-[#F8F3E6] sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#0D1B2A] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All ({bidenPayneAwards.length})
            </button>
            <button
              onClick={() => setFilter('won')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'won'
                  ? 'bg-[#F1D28A] text-[#0D1B2A]'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Won ({wonCount})
            </button>
            <button
              onClick={() => setFilter('nominated')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === 'nominated'
                  ? 'bg-[#4A1F2C] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Nominated ({nominatedCount})
            </button>
          </div>
        </div>
      </section>

      {/* Awards Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#0D1B2A]/10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#0D1B2A] to-[#4A1F2C] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-serif">Year</th>
                      <th className="px-6 py-4 text-left font-serif">Production</th>
                      <th className="px-6 py-4 text-left font-serif">Category</th>
                      <th className="px-6 py-4 text-left font-serif">Nominee</th>
                      <th className="px-6 py-4 text-left font-serif">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAwards.map((award, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        className={`border-b border-gray-200 hover:bg-[#F8F3E6] transition-colors ${
                          award.result === 'Won' ? 'bg-[#F1D28A]/10' : ''
                        }`}
                      >
                        <td className="px-6 py-4 text-gray-700 font-medium">{award.year}</td>
                        <td className="px-6 py-4 text-gray-700 italic">{award.production}</td>
                        <td className="px-6 py-4 text-gray-700">{award.category}</td>
                        <td className="px-6 py-4 text-gray-700">{award.nominee}</td>
                        <td className="px-6 py-4">
                          {award.result === 'Won' ? (
                            <span className="inline-flex items-center gap-1 bg-[#F1D28A] text-[#0D1B2A] px-3 py-1 rounded-full text-sm font-medium">
                              <Trophy className="w-4 h-4" />
                              Won
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-[#4A1F2C]/10 text-[#4A1F2C] px-3 py-1 rounded-full text-sm font-medium">
                              <Star className="w-4 h-4" />
                              Nominated
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-8 text-center">
              <button className="inline-flex items-center gap-2 bg-[#0D1B2A] text-white px-8 py-3 rounded-lg hover:bg-[#0D1B2A]/90 transition-all">
                <Download className="w-5 h-5" />
                Download Full Awards List (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Award Winners Highlight */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0D1B2A] mb-4 font-serif">Recent Award Winners</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bidenPayneAwards
              .filter(a => a.result === 'Won')
              .slice(0, 6)
              .map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#F1D28A]"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Trophy className="w-6 h-6 text-[#F1D28A] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-[#4A1F2C] mb-1">{award.year}</div>
                      <h3 className="text-lg text-[#0D1B2A] font-serif mb-2">{award.category}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2 italic">{award.production}</p>
                  <p className="text-gray-600 text-sm">{award.nominee}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
