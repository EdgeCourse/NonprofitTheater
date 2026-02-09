import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Theater, Users, Heart, Award, Ticket, Facebook, Instagram, Youtube, Linkedin, BookOpen, FileText, Mail, Phone, MapPin, Twitter, Trophy, Sparkles, Quote, GraduationCap, DollarSign, Music2, Bell, ChevronLeft, ChevronRight } from 'lucide-react';
import { Page } from '../App';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import posterLoveInAir from 'figma:asset/cadb9e77c14e6c9f65483494f0b212c6dfc6835c.png';
import posterMezzoMadness from 'figma:asset/acb11e837e47d58e2f806221936ce40a1d582010.png';
import posterPatiencePicnic from 'figma:asset/9c791bb4019ba95a4fd3ff44d30abd393f1a2477.png';
import posterPatience from 'figma:asset/1a388bd6a87669a7a602daa352bc55cc07efcb50.png';
import heroImage1 from 'figma:asset/27b942e315aa718043ea98a990aa57f9d040ddad.png';
import heroImage2 from 'figma:asset/61f3031c77bf822f05831b9c425361d5297f05db.png';
import ruddigoreImage from 'figma:asset/e1b9e826519a4ef64ee3967d2fdbd259111002f0.png';
import iolantheImage from 'figma:asset/0ff9524a1b607d28d58c81519344068e89ae5496.png';
import mikadoImage from 'figma:asset/3c466b68b376e38dd52388a59506fecbf5bc7c6d.png';
import pinaforeImage from 'figma:asset/5f94cce166eaa75d18bc9905096eccc4667d176e.png';
import mikado2022Image from 'figma:asset/59aac2a7643235f56329cd2e40252e5e7b63afd0.png';
import yeomenImage from 'figma:asset/d27c13da5d3cb2fbf87744eef101080952b78dfe.png';
import gilbertBookCover from 'figma:asset/cab5e0eca02d53b200c0464dde7f63638e07f174.png';
import logo from 'figma:asset/3a8cd1be39b1b6a508a1e841dda37b5a746b9cf4.png';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

// Mock upcoming productions data
const upcomingProductions = [
  {
    id: 'patience-picnic-2026',
    title: 'Patience Picnic',
    dates: 'March 7, 2026',
    venue: 'The Vortex on Manor Road',
    description: 'This fun-filled, family-oriented free event features activities for kids and a chance to meet and greet and hear from the cast and crew of our summer grand production of Patience.',
    featured: true,
    poster: posterPatiencePicnic,
    isFree: true,
    link: 'productions' as Page,
  },
  {
    id: 'mezzo-madness-2026',
    title: 'Mezzo Madness & Other Follies',
    dates: 'Sunday, April 12, 2026',
    venue: 'Private Home - Salon Concert',
    description: 'Our third salon concert will feature a selection of favorite songs showcasing the talents of our mezzo-sopranos. Wine, cheese, desserts and more will deliciously round out that afternoon.',
    featured: true,
    poster: posterMezzoMadness,
    link: 'productions' as Page,
  },
  {
    id: 'patience-2026',
    title: 'Patience',
    subtitle: '2026 Summer Grand Production',
    dates: 'June 12-21, 2026',
    venue: 'MacTheater at McCallum Fine Arts Academy',
    description: 'Last performed by GSA in 2012, Patience is the sixth operatic collaboration of W.S. Gilbert and Arthur Sullivan. A high-spirited send-up of artistic affectation with wit, charm, poetry, and a delightfully complicated love triangle.',
    featured: true,
    poster: posterPatience,
    auditionsOpen: true,
    link: 'productions' as Page,
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentReviewIndex, setCurrentReviewIndex] = React.useState(0);

  // All reviews that cycle in sets of 4
  const allReviews = [
    // Set 1 - START with the laughing pair in the middle
    { quote: "Wonderful music", attribution: "Actual Review" },
    { quote: "I couldn't stop laughing", attribution: "Actual Review" },
    { quote: "The person next to me couldn't stop laughing", attribution: "Another Audience Member from the Same Show" },
    { quote: "Stellar performers", attribution: "Actual Review" },
    // Set 2
    { quote: "Absolutely delightful!", attribution: "Actual Review" },
    { quote: "Best show I've seen all year", attribution: "Actual Review" },
    { quote: "The costumes were stunning", attribution: "Actual Review" },
    { quote: "I brought my whole family and we all loved it", attribution: "Actual Review" },
    // Set 3
    { quote: "Brilliant vocal performances", attribution: "Actual Review" },
    { quote: "Such clever satire", attribution: "Actual Review" },
    { quote: "The orchestra was phenomenal", attribution: "Actual Review" },
    { quote: "Can't wait to come back next season", attribution: "Actual Review" },
  ];

  // Auto-cycle through review sets every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 4) % allReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [allReviews.length]);

  const handlePrevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 4 + allReviews.length) % allReviews.length);
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 4) % allReviews.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Single hero image */}
          <img
            src={heroImage1}
            alt="Gilbert & Sullivan Austin Production"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay that fades in slowly */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute inset-0 bg-black/65"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center h-screen">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-block px-6 py-3 bg-[#1E4D8B]/80 backdrop-blur-md text-[#C9A961] rounded-full border border-[#C9A961]/50">
                <span className="font-serif">Est. 1976 • 50 Years of Excellence</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-5 font-serif leading-tight drop-shadow-2xl">
                Celebrating 50 Years of
                <br />
                <span className="text-[#C9A961] drop-shadow-lg">Gilbert & Sullivan Austin</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Austin's premier company for Victorian operetta, bringing wit, satire, and beautiful music to Central Texas since 1976.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button
                  onClick={() => onNavigate('productions')}
                  className="w-full sm:w-auto bg-[#C9A961] text-[#1E4D8B] px-8 py-4 rounded-lg hover:bg-[#B8985A] transition-all flex items-center justify-center gap-2 group text-lg font-medium shadow-xl"
                >
                  <Ticket className="w-5 h-5" />
                  Buy Tickets
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('gala')}
                  className="w-full sm:w-auto bg-[#8B5A8E] border-2 border-[#8B5A8E] text-white px-8 py-4 rounded-lg hover:bg-[#6D4570] transition-all flex items-center justify-center gap-2 text-lg shadow-xl"
                >
                  50th Anniversary Gala
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { number: '50', label: 'Years' },
                  { number: '250+', label: 'Productions' },
                  { number: '2,000+', label: 'Performers' },
                  { number: '37', label: 'Awards & Noms' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center bg-[#1E4D8B]/85 backdrop-blur-md rounded-xl p-6 border-2 border-[#C9A961]/40 shadow-2xl"
                  >
                    <div className="text-5xl font-bold text-[#C9A961] mb-2 font-serif drop-shadow-lg">{stat.number}</div>
                    <div className="text-sm text-white uppercase tracking-wider drop-shadow-md font-semibold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Productions */}
      <section className="py-24 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1B365D] uppercase tracking-wider font-medium">Upcoming Events</span>
              <h2 className="text-4xl lg:text-5xl text-[#1B365D] mt-4 mb-6">
                Join Us This Season
              </h2>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingProductions.slice(0, 4).map((production, index) => (
              <motion.div
                key={production.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#C9A961]/30"
              >
                {/* Display poster if available, otherwise use icon */}
                {production.poster ? (
                  <div className="relative h-72">
                    <img 
                      src={production.poster} 
                      alt={production.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    {production.isFree && (
                      <div className="absolute top-3 right-3 bg-[#0D9488] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        FREE ADMISSION
                      </div>
                    )}
                    {production.auditionsOpen && (
                      <div className="absolute top-3 left-3 bg-[#8B5A8E] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        AUDITIONS OPEN
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-[#F8F3E6] h-80 flex items-center justify-center border-b-2 border-[#C9A961] rounded-t-lg">
                    <Theater className="w-16 h-16 text-[#1B365D]/20" />
                  </div>
                )}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl text-[#1B365D] mb-2 font-serif line-clamp-2">{production.title}</h3>
                  <div className="min-h-[1.5rem] mb-2">
                    {production.subtitle && (
                      <h4 className="text-sm text-[#8B5A8E] italic line-clamp-1">{production.subtitle}</h4>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[#1B365D] mb-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm line-clamp-1">{production.dates}</span>
                  </div>
                  {production.venue && (
                    <div className="flex items-start gap-2 text-[#8B5A8E] mb-3">
                      <span className="text-sm font-medium line-clamp-2">{production.venue}</span>
                    </div>
                  )}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">{production.description}</p>
                  {production.featured && (
                    <button 
                      onClick={() => onNavigate(production.link)}
                      className="w-full bg-[#C9A961] text-[#1B365D] px-4 py-3 rounded-lg hover:bg-[#B8985A] transition-all font-medium text-base mt-auto"
                    >
                      Learn More
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('productions')}
              className="bg-[#1B365D] text-[#F8F3E6] px-8 py-3 rounded-lg hover:bg-[#1B365D]/90 transition-all inline-flex items-center gap-2 font-medium"
            >
              View Full Season
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Peek Behind the Curtain - Blog Section */}
      <section className="py-24 bg-gradient-to-br from-[#F8F3E6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#8B5A8E] uppercase tracking-wider font-medium">From the GSA Community</span>
              <h2 className="text-4xl lg:text-5xl text-[#1B365D] mt-4 mb-6 font-serif">
                Stories from Our Stage & Beyond
              </h2>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Peek Behind the Curtain - Crew Stories */}
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#C9A961]/30 hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1760543320338-7bde1336eaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYmFja3N0YWdlJTIwc3RhZ2UlMjBjcmV3fGVufDF8fHx8MTc2OTMxNDYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Behind the scenes theater"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <img src={logo} alt="GSA" className="h-10 w-auto opacity-90" />
                </div>
                <div className="absolute top-4 left-4 bg-[#C9A961] text-[#1B365D] px-4 py-2 rounded-full text-sm font-bold">
                  Behind the Scenes
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#1B365D] mb-3">
                  Peek Behind the Curtain: A Stage Manager's Tale
                </h3>
                <p className="text-[#1B365D]/70 mb-4 text-sm uppercase tracking-wide">
                  By Monica Kurtz, Stage Manager
                </p>
                <p className="text-[#1B365D] leading-relaxed mb-6">
                  "The house lights dim. The orchestra strikes up the overture. From my booth at the back of the theater, I call 'Standby, curtain.' This is the moment—after months of rehearsals, technical runs, and last-minute adjustments—when all the pieces come together..."
                </p>
                <button className="inline-flex items-center gap-2 text-[#8B5A8E] font-semibold hover:gap-3 transition-all">
                  Peek More in Newsletter
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.article>

            {/* From the Library - Book Reviews */}
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#C9A961]/30 hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-[#F8F3E6]">
                <img 
                  src={gilbertBookCover}
                  alt="Gilbert of Gilbert & Sullivan: His Life and Character"
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-4 right-4">
                  <img src={logo} alt="GSA" className="h-10 w-auto opacity-90" />
                </div>
                <div className="absolute top-4 left-4 bg-[#C9A961] text-[#1B365D] px-4 py-2 rounded-full text-sm font-bold">
                  From the Library
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#1B365D] mb-3">
                  Gilbert of Gilbert & Sullivan: His Life and Character
                </h3>
                <p className="text-[#1B365D]/70 mb-4 text-sm uppercase tracking-wide">
                  Review by Ralph MacPhail, Jr.
                </p>
                <p className="text-[#1B365D] leading-relaxed mb-6">
                  "Andrew Crowther's latest work on W.S. Gilbert offers fresh insights into the mind behind the wit. Drawing on newly discovered letters and diaries, this biography reveals a man far more complex than the curmudgeonly figure of theatrical legend..."
                </p>
                <button className="inline-flex items-center gap-2 text-[#8B5A8E] font-semibold hover:gap-3 transition-all">
                  Read Full Review in Newsletter
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.article>
          </div>

          {/* View All Stories CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B5A8E] to-[#1E4D8B] text-white px-8 py-4 rounded-full hover:shadow-xl transition-all text-lg font-semibold">
              <FileText className="w-5 h-5" />
              View All Stories & Articles
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Explore Recent Productions - Search Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1B365D] uppercase tracking-wider font-medium">Production Archive</span>
              <h2 className="text-4xl lg:text-5xl text-[#1B365D] mt-4 mb-6 font-serif">
                Explore 50 Years of Performances
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Search our complete production history featuring stunning photos, playbills, and performance details from five decades of Gilbert & Sullivan excellence.
              </p>
              <button
                onClick={() => onNavigate('archive')}
                className="inline-flex items-center gap-3 bg-[#1E4D8B] text-white px-8 py-4 rounded-lg hover:bg-[#1E4D8B]/90 transition-all text-lg font-medium shadow-lg"
              >
                <Theater className="w-6 h-6" />
                Search Production Archive
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Recent Productions Showcase */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl text-[#1B365D] mb-8 font-serif text-center">Recent Productions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'H.M.S. Pinafore',
                  year: '2025',
                  dates: 'June 12-22, 2025',
                  image: pinaforeImage,
                  description: 'A nautical tale of love across social classes with Gilbert\'s signature wit.',
                },
                {
                  title: 'The Yeomen of the Guard',
                  year: '2024',
                  dates: 'June 7-16, 2024',
                  image: yeomenImage,
                  description: 'A darker, more dramatic Gilbert & Sullivan operetta set in the Tower of London.',
                },
                {
                  title: 'The Mikado',
                  year: '2023',
                  dates: 'June 9-18, 2023',
                  image: mikadoImage,
                  description: 'Our Scottish-themed production brought fresh energy to this beloved operetta.',
                },
                {
                  title: 'The Mikado',
                  year: '2022',
                  dates: 'June 10, 2022',
                  image: mikado2022Image,
                  description: 'A triumphant return that was unfortunately cut short due to COVID in the cast.',
                },
                {
                  title: 'Iolanthe',
                  year: '2019',
                  dates: 'June 13-23, 2019',
                  image: iolantheImage,
                  description: 'A magical tale of fairies and peers with spectacular costumes and staging.',
                },
                {
                  title: 'Ruddigore',
                  year: '2018',
                  dates: 'June 14-24, 2018',
                  image: ruddigoreImage,
                  description: 'Gothic melodrama meets Victorian satire in this haunting production.',
                },
              ].map((production, index) => (
                <motion.div
                  key={`${production.title}-${production.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-[#C9A961]/30 group cursor-pointer"
                  onClick={() => onNavigate('archive')}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={production.image}
                      alt={production.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white">
                        <h4 className="text-2xl font-serif mb-1">{production.title}</h4>
                        <p className="text-sm text-white/90">{production.dates}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">{production.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#1E4D8B] font-medium group-hover:gap-3 transition-all">
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Discover performances dating back to 1976</p>
              <button
                onClick={() => onNavigate('archive')}
                className="text-[#1E4D8B] hover:text-[#1E4D8B]/80 inline-flex items-center gap-2 font-medium text-lg group"
              >
                View Complete Archive
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1B365D] uppercase tracking-wider font-medium">About GSA</span>
              <h2 className="text-4xl lg:text-5xl text-[#1B365D] mt-4 mb-6 font-serif">
                Five Decades of Artistic Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For 50 years, Gilbert & Sullivan Austin has enriched Central Texas with imaginative, fully staged productions of the comic operas of W.S. Gilbert and Arthur Sullivan. Founded in 1976 by a passionate group of musicians and theatre lovers, GSA has grown into one of Austin's most enduring performing arts organizations.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Each season features a grand summer production with live orchestra, full staging, elaborate handcrafted sets, and gorgeous original costumes, with casts of local and regional performers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-[#1B365D] text-[#F8F3E6] px-6 py-3 rounded-lg hover:bg-[#1B365D]/90 transition-all inline-flex items-center justify-center gap-2"
                >
                  Our Story
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('history')}
                  className="border-2 border-[#1B365D] text-[#1B365D] px-6 py-3 rounded-lg hover:bg-[#1B365D] hover:text-white transition-all inline-flex items-center justify-center gap-2"
                >
                  50 Year History
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage2}
                  alt="Gilbert & Sullivan Austin Production"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#F8F3E6] text-[#1B365D] p-4 rounded-xl shadow-lg max-w-xs border-2 border-[#C9A961]/30">
                <Award className="w-8 h-8 mb-2 text-[#C9A961]" />
                <p className="font-medium text-sm mb-1">Award-Winning Productions</p>
                <p className="text-xs opacity-75">Multiple B. Iden Payne Awards for excellence in Austin theatre</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audience Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B5A8E]/5 to-[#1E4D8B]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#1B365D] uppercase tracking-wider font-medium">What People Are Saying</span>
            <h2 className="text-4xl lg:text-5xl text-[#1B365D] mt-4 mb-6 font-serif">
              Audience Favorites
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`review-1-${currentReviewIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#C9A961]/20 min-h-[200px] flex flex-col"
                >
                  <div className="text-5xl text-[#C9A961] mb-3 leading-none">"</div>
                  <p className="text-lg text-gray-800 italic mb-4 leading-relaxed flex-grow">
                    {allReviews[currentReviewIndex].quote}
                  </p>
                  <p className="text-xs text-gray-600">— {allReviews[currentReviewIndex].attribution}</p>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`review-2-${currentReviewIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#C9A961]/20 min-h-[200px] flex flex-col"
                >
                  <div className="text-5xl text-[#C9A961] mb-3 leading-none">"</div>
                  <p className="text-lg text-gray-800 italic mb-4 leading-relaxed flex-grow">
                    {allReviews[currentReviewIndex + 1].quote}
                  </p>
                  <p className="text-xs text-gray-600">— {allReviews[currentReviewIndex + 1].attribution}</p>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`review-3-${currentReviewIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#C9A961]/20 min-h-[200px] flex flex-col"
                >
                  <div className="text-5xl text-[#C9A961] mb-3 leading-none">"</div>
                  <p className="text-lg text-gray-800 italic mb-4 leading-relaxed flex-grow">
                    {allReviews[currentReviewIndex + 2].quote}
                  </p>
                  <p className="text-xs text-gray-600">— {allReviews[currentReviewIndex + 2].attribution}</p>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`review-4-${currentReviewIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#C9A961]/20 min-h-[200px] flex flex-col"
                >
                  <div className="text-5xl text-[#C9A961] mb-3 leading-none">"</div>
                  <p className="text-lg text-gray-800 italic mb-4 leading-relaxed flex-grow">
                    {allReviews[currentReviewIndex + 3].quote}
                  </p>
                  <p className="text-xs text-gray-600">— {allReviews[currentReviewIndex + 3].attribution}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrevReview}
                className="bg-[#1B365D] text-[#F8F3E6] p-3 rounded-full hover:bg-[#1B365D]/90 transition-all shadow-lg"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: allReviews.length / 4 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index * 4)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentReviewIndex === index * 4 ? 'bg-[#1B365D] w-8' : 'bg-[#1B365D]/30'
                    }`}
                    aria-label={`Go to review set ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextReview}
                className="bg-[#1B365D] text-[#F8F3E6] p-3 rounded-full hover:bg-[#1B365D]/90 transition-all shadow-lg"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section - Changed to light cream background */}
      <section className="py-24 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1B365D] uppercase tracking-wider font-medium">Get Involved</span>
              <h2 className="text-4xl lg:text-5xl text-[#1B365D] mt-4 mb-6 font-serif">
                Be Part of Our Community
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Whether on stage, behind the scenes, or in the audience, there are many ways to support and participate in GSA.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Audition',
                description: 'Sign up to be contacted for grand production auditions or musicales.',
                action: 'Learn More',
                page: 'auditions' as Page,
              },
              {
                icon: Theater,
                title: 'Volunteer',
                description: 'Help backstage, in the costume shop, or front-of-house.',
                action: 'Get Involved',
                page: 'about' as Page,
              },
              {
                icon: Heart,
                title: 'Support Us',
                description: 'Your donation sustains our mission and supports local artists.',
                action: 'Donate Now',
                page: null,
                link: 'https://www.zeffy.com/ticketing/9b1804e9-3125-45bc-a927-0b7faa841c31',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F3E6] p-8 rounded-xl hover:shadow-lg transition-all border-2 border-[#C9A961]/30 flex flex-col"
              >
                <div className="w-16 h-16 bg-[#C9A961] rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#1B365D]" />
                </div>
                <h3 className="text-2xl text-[#1B365D] mb-3 font-serif">{item.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow line-clamp-2">{item.description}</p>
                {item.page ? (
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-[#1B365D] hover:text-[#1B365D]/80 inline-flex items-center justify-center gap-2 font-medium group w-40 mt-auto"
                  >
                    {item.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B365D] hover:text-[#1B365D]/80 inline-flex items-center gap-2 font-medium group w-40 mt-auto"
                  >
                    {item.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button
                    className="text-[#1B365D] hover:text-[#1B365D]/80 inline-flex items-center gap-2 font-medium group cursor-default mt-auto"
                  >
                    {item.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl text-[#1B365D] mb-4 font-serif">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Be the first to hear about auditions, performances, and special events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-[#1B365D]/20 focus:border-[#C9A961] focus:outline-none bg-white"
              />
              <button
                type="submit"
                className="bg-[#1B365D] text-white px-8 py-4 rounded-lg hover:bg-[#1B365D]/90 transition-all font-medium whitespace-nowrap"
              >
                Join Our List
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-gradient-to-br from-[#1E4D8B] to-[#8B5A8E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-4 font-serif">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for questions, auditions, or partnership opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20"
            >
              <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3 font-serif">Call Us</h3>
              <a
                href="tel:+15124724772"
                className="text-[#C9A961] hover:text-white transition-colors text-lg block mb-3"
              >
                512-472-4772
              </a>
              <p className="text-white/70 text-sm leading-relaxed">
                We are a volunteer working board who employs no office staff. Please leave a message with our answering service giving as much detail as possible including a good time to reach you. We will return your call.
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 flex flex-col"
            >
              <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-4 font-serif">Email Us</h3>
              <div className="space-y-3 text-sm flex-grow">
                <div>
                  <p className="text-white/80 text-xs mb-1">General Information</p>
                  <a
                    href="mailto:info@gilbertsullivan.org"
                    className="text-[#C9A961] hover:text-[#F8F3E6] transition-colors block break-all"
                  >
                    info@gilbertsullivan.org
                  </a>
                </div>
                <div>
                  <p className="text-white/80 text-xs mb-1">Communications, Media, Ads, Sponsorships</p>
                  <a
                    href="mailto:media@gilbertsullivan.org"
                    className="text-[#C9A961] hover:text-[#F8F3E6] transition-colors block break-all"
                  >
                    media@gilbertsullivan.org
                  </a>
                </div>
                <div>
                  <p className="text-white/80 text-xs mb-1">Wand'ring Minstrels</p>
                  <a
                    href="mailto:minstrels@gilbertsullivan.org"
                    className="text-[#C9A961] hover:text-[#F8F3E6] transition-colors block break-all"
                  >
                    minstrels@gilbertsullivan.org
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20"
            >
              <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3 font-serif">Mail Us</h3>
              <div className="text-[#C9A961]">
                <p>P.O. Box 684542</p>
                <p>Austin, TX 78768</p>
              </div>
            </motion.div>
          </div>

          {/* Additional Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-white/80 mb-4">Membership & Member News:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="mailto:membership@gilbertsullivan.org"
                className="text-[#C9A961] hover:text-[#F8F3E6] transition-colors"
              >
                Membership
              </a>
              <span className="text-white/40">•</span>
              <a
                href="mailto:news@gilbertsullivan.org"
                className="text-[#C9A961] hover:text-[#F8F3E6] transition-colors"
              >
                Newsletter
              </a>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-white/80 text-center mb-6">Follow Us</p>
            <div className="flex justify-center items-center gap-4">
              <a
                href="https://facebook.com/gsaustin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#C9A961] backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/20 group"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/gsaustin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#C9A961] backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/20 group"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/gsaustin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#C9A961] backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/20 group"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://youtube.com/@gsaustin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#C9A961] backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/20 group"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://tiktok.com/@gsaustin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#C9A961] backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/20 group"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/gsaustin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#C9A961] backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/20 group"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}