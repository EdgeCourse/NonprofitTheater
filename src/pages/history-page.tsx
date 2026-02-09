import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Award, Music } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HistoryPage() {
  const decades = [
    {
      period: '1976-1979',
      title: 'The Founding Years',
      description: 'Gilbert & Sullivan Austin began as a gathering of local musicians and theatre lovers. Early concerts and informal performances laid the groundwork for what would become Austin\'s premier G&S company.',
      highlights: ['First concerts', 'Community building', 'Early volunteers'],
    },
    {
      period: '1980s',
      title: 'Growth & Establishment',
      description: 'The company transitioned to fully staged productions with orchestra. Production values rose significantly as GSA established itself as a serious theatrical organization.',
      highlights: ['Full orchestrations', 'First major venues', 'Expanding casts'],
    },
    {
      period: '1990s',
      title: 'Artistic Maturity',
      description: 'GSA became known for exceptional production values, elaborate Victorian costumes, and professional-quality performances that rivaled much larger companies.',
      highlights: ['Professional standards', 'Costume excellence', 'Set design innovation'],
    },
    {
      period: '2000s',
      title: 'Recognition & Awards',
      description: 'The company earned multiple B. Iden Payne Award nominations, recognizing outstanding achievement in Austin theatre. Educational programs and scholarships launched.',
      highlights: ['B. Iden Payne nominations', 'Scholarship program', 'Digital presence'],
    },
    {
      period: '2010s',
      title: 'Modern Evolution',
      description: 'GSA embraced contemporary values while honoring tradition, developing culturally respectful productions and becoming a global resource for ethical G&S presentations.',
      highlights: ['Mikado revision', 'Educational materials', 'International recognition'],
    },
    {
      period: '2020-Present',
      title: 'The 50th Anniversary',
      description: 'Celebrating five decades of excellence with landmark productions, gala events, and a renewed commitment to community engagement and artistic innovation.',
      highlights: ['50th anniversary season', 'Large-scale productions', 'Community expansion'],
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759851358346-23ae8c50d31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdGhlYXRlciUyMGludGVyaW9yfGVufDF8fHx8MTc2NTQ1MTE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Historic theater"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/90 to-[#4A1F2C]/95"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-6 py-3 bg-[#F1D28A]/20 backdrop-blur-sm text-[#F1D28A] rounded-full mb-8 border border-[#F1D28A]/30">
              <span className="font-serif">1976 - 2026</span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-white mb-8 font-serif leading-tight">
              50 Years of
              <br />
              <span className="text-[#F1D28A]">Gilbert & Sullivan Austin</span>
            </h1>
            <p className="text-xl text-[#F8F3E6]/90 leading-relaxed">
              A Legacy in Performance, Community, and Artistic Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#0D1B2A] mb-8 font-serif text-center">Our Origins</h2>
              <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-[#F1D28A]">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Gilbert & Sullivan Austin began in 1976 as a small gathering of local musicians and theatre lovers who were determined to bring the wit, satire, and beauty of the Savoy operas to Central Texas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Led by early founders and supported by a passionate community, our company grew from informal concerts into fully staged productions with orchestra, elaborate sets, and handcrafted Victorian costumes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Over five decades, thousands of performers and volunteers have contributed to the legacy of bringing Gilbert & Sullivan to Austin year after year.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#0D1B2A] mb-4 font-serif">A Legacy in Performance</h2>
            <p className="text-lg text-gray-600">Five decades of growth, innovation, and community</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {decades.map((decade, index) => (
              <motion.div
                key={decade.period}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 last:mb-0"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className={`lg:col-span-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3'}`}>
                    <div className="bg-gradient-to-br from-[#F1D28A] to-[#DCC48E] p-6 rounded-xl text-center shadow-lg">
                      <div className="text-3xl font-bold text-[#0D1B2A] font-serif">{decade.period}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 lg:order-2">
                    <div className="bg-[#F8F3E6] p-8 rounded-xl">
                      <h3 className="text-2xl text-[#0D1B2A] mb-4 font-serif">{decade.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{decade.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {decade.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="bg-white px-4 py-2 rounded-lg text-sm text-[#4A1F2C] border border-[#F1D28A]/30"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4 font-serif">Our Community Impact</h2>
            <p className="text-[#F8F3E6]/80 text-lg">Five decades of music for everyone</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, number: '12,000+', label: 'Performers', description: 'Have graced our stages' },
              { icon: Users, number: '2M+', label: 'Audience Members', description: 'Entertained and inspired' },
              { icon: Music, number: '250+', label: 'Productions', description: 'Across five decades' },
              { icon: Award, number: '$300K+', label: 'In Scholarships', description: 'Supporting young artists' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center border border-[#F1D28A]/20"
              >
                <div className="w-16 h-16 bg-[#F1D28A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#0D1B2A]" />
                </div>
                <div className="text-4xl font-bold text-[#F1D28A] mb-2 font-serif">{stat.number}</div>
                <div className="text-lg text-white mb-2">{stat.label}</div>
                <div className="text-sm text-[#F8F3E6]/70">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="py-20 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white p-12 rounded-2xl shadow-lg border-l-4 border-[#F1D28A]">
              <div className="text-6xl text-[#F1D28A] mb-6">"</div>
              <p className="text-2xl text-gray-700 italic mb-6 leading-relaxed">
                For 50 years, GSA has kept the timeless music alive — honoring tradition while inspiring new generations of performers and fans.
              </p>
              <div className="text-lg text-[#4A1F2C]">— Gilbert & Sullivan Austin</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
