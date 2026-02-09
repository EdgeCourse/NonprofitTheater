import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Building2, Award, Mail, CheckCircle, BookOpen } from 'lucide-react';

export function SponsorsPage() {
  const sponsorBenefits = [
    'Recognition on GSA website',
    'Social media acknowledgment',
    'Tax-deductible contribution receipts',
    'Invitations to exclusive events',
    'Logo on marketing materials (higher tiers)',
    'Reserved seating (higher tiers)',
  ];

  const supportWays = [
    {
      icon: Heart,
      title: 'Individual Donation',
      description: 'Your contribution directly supports our productions, scholarships, and community programs.',
      levels: ['$30', '$50 (Most Popular)', '$100', '$250', '$500', '$1,000+'],
    },
    {
      icon: Building2,
      title: 'Corporate Sponsorship',
      description: 'Partner with us to bring transformative theatre to Central Texas audiences.',
      levels: ['Community Partner', 'Season Sponsor', 'Premier Sponsor', 'Principal Sponsor'],
    },
    {
      icon: BookOpen,
      title: 'Playbill Ad',
      description: 'Advertise in our show programs and reach our engaged, loyal audience.',
      levels: ['Quarter Page', 'Half Page', 'Full Page', 'Inside Cover', 'Back Page (Full Color)'],
    },
    {
      icon: Users,
      title: 'Foundation Support',
      description: 'Join foundations investing in arts and culture for our community\'s future.',
      levels: ['Program Support', 'Educational Grant', 'Capital Campaign'],
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0D9488] via-[#8B5A8E] to-[#1E4D8B] py-24 overflow-hidden">
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
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
              Support GSA
            </h1>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed mb-8">
              Your generosity sustains artistic excellence, supports local artists, and keeps Victorian operetta alive for future generations
            </p>
            <a 
              href="https://www.zeffy.com/ticketing/9b1804e9-3125-45bc-a927-0b7faa841c31"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#1E4D8B] px-10 py-4 rounded-full hover:bg-[#F8F3E6] transition-all text-lg font-semibold shadow-lg"
            >
              Make a Donation Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Support GSA */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">Why Partner with Us?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: '50-Year Legacy', desc: 'History of artistic excellence and community impact' },
                { title: 'Large Audience', desc: 'Loyal, educated demographic across Central Texas' },
                { title: 'Community Engagement', desc: 'Family-friendly programming with broad appeal' },
                { title: 'High Visibility', desc: 'Strong brand presence online and in the community' },
                { title: 'Volunteer-Powered', desc: 'Grassroots organization with dedicated supporters' },
                { title: 'Educational Mission', desc: 'Supporting the next generation of artists' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl text-[#0D1B2A] mb-2 font-serif">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">Ways to Support</h2>
            
            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              {supportWays.map((way, index) => (
                <motion.div
                  key={way.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#F8F3E6] p-8 rounded-xl hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#F1D28A] rounded-lg flex items-center justify-center mb-6">
                    <way.icon className="w-8 h-8 text-[#0D1B2A]" />
                  </div>
                  <h3 className="text-2xl text-[#0D1B2A] mb-4 font-serif">{way.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{way.description}</p>
                  <div className="space-y-2">
                    {way.levels.map((level, i) => (
                      <div key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#F1D28A] flex-shrink-0" />
                        {level}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.zeffy.com/ticketing/9b1804e9-3125-45bc-a927-0b7faa841c31"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9B8FC7] to-[#B8A8D9] text-white px-10 py-4 rounded-full hover:shadow-lg transition-all text-lg font-semibold hover:from-[#8B7FB7] hover:to-[#A898C9]"
              >
                <Heart className="w-5 h-5" />
                Donate Now on Zeffy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-4 font-serif text-center">Our Supporters</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              We gratefully acknowledge the businesses, organizations, and institutions whose generosity sustains Gilbert & Sullivan Austin's mission.
            </p>

            <div className="space-y-12">
              {/* Principal Sponsors */}
              <div>
                <h3 className="text-xl text-[#4A1F2C] mb-6 font-serif text-center">Principal Sponsors</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-[#F8F3E6] p-8 rounded-xl flex items-center justify-center h-32">
                      <div className="text-4xl text-[#0D1B2A] font-serif">Sponsor Logo</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Foundation Support */}
              <div>
                <h3 className="text-xl text-[#4A1F2C] mb-6 font-serif text-center">Foundation & Government Support</h3>
                <div className="bg-[#F8F3E6] p-8 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-lg text-[#0D1B2A] font-medium mb-2">Texas Commission on the Arts</div>
                      <p className="text-sm text-gray-600">State Cultural Agency</p>
                    </div>
                    <div>
                      <div className="text-lg text-[#0D1B2A] font-medium mb-2">City of Austin Cultural Arts Division</div>
                      <p className="text-sm text-gray-600">Economic Development Department</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl text-[#0D1B2A] mb-4 font-serif">Interested in Sponsorship?</h3>
            <p className="text-gray-700 mb-6">
              Contact us to learn more about corporate partnerships, program ads, and customized sponsorship packages.
            </p>
            <a
              href="mailto:support@gilbertsullivanaustin.org"
              className="inline-flex items-center gap-2 text-[#4A1F2C] hover:text-[#0D1B2A] text-lg"
            >
              <Mail className="w-5 h-5" />
              support@gilbertsullivanaustin.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}