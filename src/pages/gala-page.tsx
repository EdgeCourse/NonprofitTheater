import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Music, Utensils, Gift, Ticket, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function GalaPage() {
  const ticketTiers = [
    {
      name: 'Individual Ticket',
      price: '$125',
      benefits: ['Seated dinner', 'Open bar', 'Live performance', 'Silent auction access'],
    },
    {
      name: 'VIP Ticket',
      price: '$150',
      benefits: ['Priority seating', 'Seated dinner', 'Open bar', 'Live performance', 'Silent auction access', 'VIP gift bag'],
      featured: true,
    },
    {
      name: 'Table for 8',
      price: '$600',
      benefits: ['Reserved table for 8', 'Seated dinner', 'Open bar', 'Live performance', 'Silent auction access'],
    },
    {
      name: 'Sponsor Table',
      price: '$1,000',
      benefits: ['Reserved table for 8', 'Premium seating', 'Program recognition', 'Pre-event reception', 'Meet the artists', 'Champagne service'],
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763494893506-cb1971174240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ2FsYSUyMGJhbGxyb29tfGVufDF8fHx8MTc2NTQ1NTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant gala"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E4D8B]/70 via-[#8B5A8E]/60 to-[#1E4D8B]/70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-block px-8 py-3 bg-[#F1D28A] text-[#0D1B2A] rounded-full mb-8 font-serif text-lg">
              50th Anniversary Celebration
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 font-serif leading-tight">
              A Night of Music &
              <br />
              <span className="text-[#F1D28A]">Celebration</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#F8F3E6]/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join us for an unforgettable evening celebrating 50 years of Gilbert & Sullivan Austin
            </p>

            <button className="bg-[#F1D28A] text-[#0D1B2A] px-10 py-4 rounded-lg hover:bg-[#DCC48E] transition-all text-lg font-medium">
              Reserve Your Tickets
            </button>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">Event Details</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Calendar, title: 'Date', info: 'Saturday, May 17, 2026' },
                { icon: Clock, title: 'Time', info: '6:00 PM - 11:00 PM' },
                { icon: MapPin, title: 'Venue', info: 'The Driskill Hotel, Austin, TX' },
              ].map((detail, index) => (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F1D28A] to-[#DCC48E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <detail.icon className="w-8 h-8 text-[#0D1B2A]" />
                  </div>
                  <h3 className="text-xl text-[#0D1B2A] mb-2 font-serif">{detail.title}</h3>
                  <p className="text-gray-700">{detail.info}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl text-[#0D1B2A] mb-4 font-serif">Dress Code</h3>
              <p className="text-lg text-gray-700 mb-4">Black Tie Optional / Victorian Elegance Encouraged</p>
              <p className="text-gray-600">
                We invite you to dress in your finest attire. Victorian-inspired fashion is welcome and encouraged for this special anniversary celebration!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evening Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">Evening Program</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F8F3E6] p-8 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <Utensils className="w-8 h-8 text-[#F1D28A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl text-[#0D1B2A] mb-4 font-serif">Dinner Menu</h3>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <div className="font-medium text-[#4A1F2C]">First Course</div>
                        <div className="text-sm">Victorian-inspired hors d'oeuvres & champagne reception</div>
                      </div>
                      <div>
                        <div className="font-medium text-[#4A1F2C]">Main Course</div>
                        <div className="text-sm">Choice of beef tenderloin, salmon, or vegetarian option</div>
                      </div>
                      <div>
                        <div className="font-medium text-[#4A1F2C]">Dessert</div>
                        <div className="text-sm">Anniversary celebration cake & seasonal delights</div>
                      </div>
                      <div>
                        <div className="font-medium text-[#4A1F2C]">Beverages</div>
                        <div className="text-sm">Open bar with wine, beer, and signature cocktails</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F8F3E6] p-8 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <Music className="w-8 h-8 text-[#F1D28A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl text-[#0D1B2A] mb-4 font-serif">Entertainment</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#F1D28A] mt-1">•</span>
                        <span>Special performance of G&S favorites by GSA artists</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F1D28A] mt-1">•</span>
                        <span>Live orchestra featuring GSA musicians</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F1D28A] mt-1">•</span>
                        <span>50-year retrospective video presentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F1D28A] mt-1">•</span>
                        <span>Dancing to live music</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F1D28A] mt-1">•</span>
                        <span>Special tributes to GSA founders and contributors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Silent Auction */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Gift className="w-16 h-16 text-[#F1D28A] mx-auto mb-4" />
              <h2 className="text-3xl text-[#0D1B2A] mb-4 font-serif">Silent Auction</h2>
              <p className="text-lg text-gray-700">
                Bid on exciting packages and unique experiences to support GSA
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Austin restaurant gift certificates',
                'Weekend getaway packages',
                'Signed G&S memorabilia',
                'Private concert experiences',
                'Theater tickets & entertainment',
                'Fine wine & spirits collections',
                'Art & handcrafted items',
                'Spa & wellness packages',
                'And much more!',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center text-gray-700"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="border-2 border-[#4A1F2C] text-[#4A1F2C] px-6 py-3 rounded-lg hover:bg-[#4A1F2C] hover:text-white transition-all">
                Donate an Auction Item
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">Tickets & Sponsorship</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ticketTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-2xl p-8 flex flex-col ${
                    tier.featured
                      ? 'bg-gradient-to-br from-[#F1D28A] to-[#DCC48E] border-4 border-[#0D1B2A] transform md:scale-105'
                      : 'bg-[#F8F3E6] border-2 border-[#0D1B2A]/20'
                  }`}
                >
                  {tier.featured && (
                    <div className="text-center mb-4">
                      <span className="bg-[#0D1B2A] text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl text-[#0D1B2A] mb-2 font-serif text-center">{tier.name}</h3>
                  <div className="text-4xl font-bold text-[#4A1F2C] mb-6 font-serif text-center">{tier.price}</div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#4A1F2C] mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                    tier.featured
                      ? 'bg-[#0D1B2A] text-white hover:bg-[#0D1B2A]/90'
                      : 'bg-[#4A1F2C] text-white hover:bg-[#4A1F2C]/90'
                  }`}>
                    Reserve Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-[#F1D28A] mx-auto mb-6" />
            <h2 className="text-4xl text-white mb-6 font-serif">
              Be Part of History
            </h2>
            <p className="text-xl text-[#F8F3E6]/80 mb-8 leading-relaxed">
              Your attendance helps support GSA's mission of bringing exceptional Gilbert & Sullivan productions to Central Texas for the next 50 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#F1D28A] text-[#0D1B2A] px-8 py-4 rounded-lg hover:bg-[#DCC48E] transition-all font-medium">
                Buy Tickets
              </button>
              <button className="border-2 border-[#F8F3E6] text-[#F8F3E6] px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}