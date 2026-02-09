import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket, Theater, ChevronRight } from 'lucide-react';
import { Page } from '../App';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { upcomingProductions } from '../data/productions';

interface ProductionsPageProps {
  onNavigate: (page: Page) => void;
}

export function ProductionsPage({ onNavigate }: ProductionsPageProps) {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E4D8B] via-[#0D9488] to-[#1E4D8B] py-24 overflow-hidden">
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
            <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
              Current Season
            </h1>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed">
              Experience the wit, satire, and beautiful music of Gilbert & Sullivan brought to life by talented local performers and full orchestra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Production */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[400px] lg:h-auto bg-gradient-to-br from-[#1E4D8B] to-[#8B2F39] flex items-center justify-center">
                <div className="absolute top-4 right-4 bg-[#C9A961] text-white px-4 py-2 rounded-full text-sm font-medium">
                  50th Anniversary Production
                </div>
                <Theater className="w-40 h-40 text-white/20" />
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-4xl text-[#0D1B2A] mb-4 font-serif">Patience</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-[#F1D28A]" />
                    <span>June 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-[#F1D28A]" />
                    <span>The Long Center, Austin, TX</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Gilbert and Sullivan's witty satire of the aesthetic movement comes to life in our grand 50th anniversary summer production. Featuring full orchestra, elaborate Victorian sets, and handcrafted period costumes, this beloved operetta showcases the timeless humor and beautiful melodies that have delighted audiences for generations.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Director: Carol Brown
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#F1D28A] text-[#0D1B2A] px-8 py-3 rounded-lg hover:bg-[#DCC48E] transition-all flex items-center justify-center gap-2 font-medium">
                    <Ticket className="w-5 h-5" />
                    Buy Tickets
                  </button>
                  <button 
                    onClick={() => onNavigate({ type: 'show-detail', productionId: 'patience-2026' })}
                    className="border-2 border-[#4A1F2C] text-[#4A1F2C] px-8 py-3 rounded-lg hover:bg-[#4A1F2C] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Full Details
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">
            Upcoming Events & Performances
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingProductions.slice(1).map((production, index) => (
              <motion.div
                key={production.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-[#0D1B2A]/10 rounded-xl overflow-hidden hover:border-[#F1D28A] hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C] h-48 flex items-center justify-center">
                  <Theater className="w-20 h-20 text-[#F1D28A]/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#0D1B2A] mb-2 font-serif">{production.title}</h3>
                  <div className="flex items-center gap-2 text-[#4A1F2C] mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{production.dates}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{production.description}</p>
                  {production.id.includes('patience-picnic') && (
                    <div className="bg-[#F8F3E6] px-4 py-2 rounded-lg text-sm text-[#4A1F2C] font-medium text-center">
                      FREE Event
                    </div>
                  )}
                  {production.id.includes('annual-meeting') && (
                    <div className="bg-[#F8F3E6] px-4 py-2 rounded-lg text-sm text-[#4A1F2C] font-medium text-center">
                      Members Only
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0D1B2A] to-[#4A1F2C] rounded-2xl p-12 text-center">
              <h2 className="text-3xl text-white mb-4 font-serif">
                Don't Miss a Performance
              </h2>
              <p className="text-[#F8F3E6]/80 mb-8 text-lg">
                Join our email list to be notified when tickets go on sale and receive exclusive updates.
              </p>
              <button className="bg-[#F1D28A] text-[#0D1B2A] px-8 py-4 rounded-lg hover:bg-[#DCC48E] transition-all font-medium">
                Join Email List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Past Productions Link */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">Interested in our history?</p>
          <button
            onClick={() => onNavigate('archive')}
            className="text-[#4A1F2C] hover:text-[#0D1B2A] inline-flex items-center gap-2 font-medium text-lg group"
          >
            Explore 50 Years of Productions
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Recent Past Productions */}
      <section className="py-20 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-[#0D1B2A] mb-4 font-serif">Past Productions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recent productions from our 50-year legacy of bringing Gilbert & Sullivan to Austin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: 'The Grand Duke in Concert', year: '2025', id: 'grand-duke-2025' },
              { title: 'H.M.S. Pinafore', year: '2025', id: 'pinafore-2025' },
              { title: 'Esther the Clever Queen', year: '2024', id: 'esther-2024' },
              { title: 'The Yeomen of the Guard', year: '2024', id: 'yeomen-2024' },
              { title: 'Trial by Jury', year: '2024', id: 'trial-by-jury-2024' },
              { title: 'Salon of the Roses', year: '2023', id: 'salon-roses-2023' },
              { title: 'The McAdo', year: '2023', id: 'mcado-2023' },
              { title: 'G&S and Sondheim', year: '2023', id: 'gs-sondheim-2023' },
              { title: 'A Victorian Musical Salon', year: '2022', id: 'victorian-salon-2022' },
              { title: 'The McAdo', year: '2022', id: 'mcado-2022' },
              { title: 'The Sorcerer in Concert', year: '2022', id: 'sorcerer-concert-2022' },
              { title: 'Back on the Boards', year: '2021', subtitle: 'Virtual', id: 'back-on-boards-2021' },
              { title: 'Fresh Takes', year: '2021', subtitle: 'Virtual', id: 'fresh-takes-2021' },
              { title: 'A Day at the Savoy Theatre', year: '2020', id: 'savoy-2020' },
              { title: 'Princess Ida in Concert', year: '2019', id: 'princess-ida-2019' },
              { title: 'Iolanthe', year: '2019', id: 'iolanthe-2019' },
              { title: 'H.M.S. Pinafore', year: '2019', id: 'pinafore-2019' },
              { title: 'Ruddigore', year: '2018', id: 'ruddigore-2018' },
              { title: 'The Pirates of Penzance', year: '2017', id: 'pirates-2017' },
              { title: 'The Gondoliers', year: '2016', id: 'gondoliers-2016' },
              { title: 'The Sorcerer', year: '2015', id: 'sorcerer-2015' },
              { title: 'H.M.S. Pinafore', year: '2014', id: 'pinafore-2014' },
              { title: 'Princess Ida', year: '2013', id: 'princess-ida-2013' },
              { title: 'Patience', year: '2012', id: 'patience-2012' },
              { title: 'The Mikado', year: '2011', id: 'mikado-2011' },
              { title: 'The Yeomen of the Guard', year: '2010', id: 'yeomen-2010' },
              { title: 'Iolanthe', year: '2009', id: 'iolanthe-2009' },
              { title: 'The Pirates of Penzance', year: '2008', id: 'pirates-2008' },
              { title: 'Ruddigore', year: '2007', id: 'ruddigore-2007' },
            ].map((production, index) => (
              <motion.div
                key={production.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer border border-[#C9A961]/20"
                onClick={() => onNavigate('archive')}
              >
                <div className="bg-gradient-to-br from-[#1E4D8B] to-[#8B2F39] h-32 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 left-2 w-16 h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-12 h-12 border-2 border-white rounded-full"></div>
                  </div>
                  <Theater className="w-12 h-12 text-white/40 group-hover:text-white/60 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-serif text-[#0D1B2A] mb-1 line-clamp-2 min-h-[3rem]">
                    {production.title}
                  </h3>
                  {production.subtitle && (
                    <p className="text-xs text-[#8B2F39] italic mb-1">{production.subtitle}</p>
                  )}
                  <div className="flex items-center gap-2 text-[#0D9488]">
                    <Calendar className="w-3 h-3" />
                    <span className="text-sm">{production.year}</span>
                  </div>
                  <div className="mt-3 text-xs text-[#1E4D8B] group-hover:text-[#0D9488] transition-colors font-medium flex items-center gap-1">
                    Learn more
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Archive CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('archive')}
              className="bg-[#1E4D8B] text-white px-8 py-4 rounded-lg hover:bg-[#1E4D8B]/90 transition-all inline-flex items-center gap-2 font-medium text-lg shadow-lg"
            >
              <Theater className="w-5 h-5" />
              Full Performance History
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Search our complete archive of 50 years of productions with photos, playbills, and cast details
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}