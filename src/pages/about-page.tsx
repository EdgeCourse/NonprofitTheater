import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Artistic Excellence',
      description: 'Commitment to high-quality performances with full orchestra and professional standards.',
    },
    {
      icon: Heart,
      title: 'Community Spirit',
      description: 'Passionate organization bringing together performers, musicians, and theatre lovers.',
    },
    {
      icon: Globe,
      title: 'Educational Mission',
      description: 'Scholarships, workshops, and resources that support the next generation of artists.',
    },
  ];

  const boardMembers = [
    {
      name: 'Diane Radin',
      position: 'President & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
    },
    {
      name: 'Leann Fryer',
      position: 'Vice President & Musicale Coordinator',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
    },
    {
      name: 'Dave Wieckowski',
      position: 'Treasurer & CFO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
    },
    {
      name: 'Aletha Read',
      position: 'Secretary and Technology Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    },
    {
      name: 'Sue Caldwell',
      position: 'Publications & Historian',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
    },
    {
      name: 'Janette Jones',
      position: 'School Outreach & Musicale Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80',
    },
    {
      name: 'Monica Kurtz',
      position: 'Office Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80',
    },
    {
      name: 'Michael Meigs',
      position: 'Production Committee Chair & Bursar',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80',
    },
    {
      name: 'Hannah Neuhauser',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Janet Forman',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&q=80',
    },
    {
      name: 'Bill Hatcher',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&q=80',
    },
    {
      name: 'Linda Johnson',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&q=80',
    },
    {
      name: 'June Julian',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1542190891-2093d38760f2?w=500&q=80',
    },
    {
      name: 'Loel Graber',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80',
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
            <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
              About Gilbert & Sullivan Austin
            </h1>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed">
              Five decades of bringing Victorian operetta to life in Central Texas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-12 rounded-2xl shadow-lg border-2 border-[#F1D28A]"
            >
              <h2 className="text-3xl text-[#0D1B2A] mb-6 font-serif text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
                To produce high-quality performances of the works of Gilbert & Sullivan and to foster appreciation of Victorian operetta through performance, education, and community engagement.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F1D28A] to-transparent mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#0D1B2A] mb-6 font-serif">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 1976 by a passionate group of musicians and theatre lovers, Gilbert & Sullivan Austin began as a small gathering determined to bring the wit, satire, and beauty of the Savoy operas to Central Texas.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Led by early founders and supported by a passionate community, our company grew from informal concerts into fully staged productions with orchestra, elaborate sets, and handcrafted Victorian costumes.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Over five decades, thousands of performers and volunteers have contributed to the legacy of bringing G&S to Austin year after year. We are honored to be one of Austin's most enduring performing arts organizations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F8F3E6] p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#4A1F2C] mb-2 font-serif">2,000+</div>
                  <div className="text-sm text-gray-600">Performers</div>
                </div>
                <div className="bg-[#F8F3E6] p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#4A1F2C] mb-2 font-serif">150,000+</div>
                  <div className="text-sm text-gray-600">Audience Members</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761173084851-1e5302e931fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBwaXQlMjB0aGVhdGVyfGVufDF8fHx8MTc2NTQ1NTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Orchestra performance"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0D1B2A] mb-4 font-serif">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide our work and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#F1D28A] to-[#DCC48E] rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[#0D1B2A]" />
                </div>
                <h3 className="text-xl text-[#0D1B2A] mb-3 font-serif">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0D1B2A] mb-4 font-serif">Our Impact</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '50', label: 'Years of Excellence', sublabel: 'Since 1976' },
              { number: '250+', label: 'Productions', sublabel: 'Across five decades' },
              { number: '$6,000', label: 'Annual Scholarships', sublabel: 'Supporting young artists' },
              { number: '37', label: 'Awards & Nominations', sublabel: 'B. Iden Payne recognition' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C] rounded-xl"
              >
                <div className="text-5xl font-bold text-[#F1D28A] mb-2 font-serif">{stat.number}</div>
                <div className="text-lg text-white mb-1">{stat.label}</div>
                <div className="text-sm text-[#F8F3E6]/70">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
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
              <h2 className="text-3xl text-[#0D1B2A] mb-6 font-serif">Scholarships</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Gilbert & Sullivan Austin awards approximately $6,000 annually in scholarships to support young singers, musicians, and students of the performing arts across Central Texas.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our scholarship program reflects our commitment to nurturing the next generation of artists and making theatre education accessible to all.
              </p>
              <div className="bg-[#F8F3E6] p-6 rounded-lg border-l-4 border-[#F1D28A]">
                <p className="text-gray-700 italic">
                  "The GSA scholarship helped me pursue my dreams and connected me with a supportive community of artists. I'm forever grateful."
                </p>
                <p className="text-sm text-[#4A1F2C] mt-2">— Past Scholarship Recipient</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creative Directors */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0D1B2A] mb-4 font-serif">Creative Directors</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our artistic leadership brings decades of expertise and passion to every production
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Carol Brown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-[#C9A961] to-[#8B2F39] flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-white/40" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-[#1E4D8B] mb-2 font-serif">Carol Brown</h3>
                <p className="text-[#8B2F39] font-semibold mb-4">Stage Director</p>
                <p className="text-gray-700 leading-relaxed">
                  Information coming soon.
                </p>
              </div>
            </motion.div>

            {/* Jeffrey Jones-Ragona */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-[#1E4D8B] to-[#0D9488] flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-white/40" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-[#1E4D8B] mb-2 font-serif">Jeffrey Jones-Ragona</h3>
                <p className="text-[#8B2F39] font-semibold mb-4">Music Director</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Jones-Ragona maintains a full performance schedule at home and abroad. Jeffrey has been associated with GSA productions since 1994, and was named our Music Director in 2005.
                </p>
                <button className="text-[#1E4D8B] hover:text-[#0D9488] font-medium transition-colors">
                  More about Jeffrey...
                </button>
              </div>
            </motion.div>

            {/* Janette Jones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-[#8B2F39] to-[#C9A961] flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-white/40" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-[#1E4D8B] mb-2 font-serif">Janette Jones</h3>
                <p className="text-[#8B2F39] font-semibold mb-4">Musicale Director</p>
                <p className="text-gray-700 leading-relaxed">
                  Janette was named to the first Hall of Fame for Gilbert & Sullivan Austin in recognition of her outstanding contributions as an actor and singer to GSA productions since the 1980s. In addition to continued performance, Janette uses her immense creativity to create and direct musicales.
                </p>
              </div>
            </motion.div>

            {/* Ralph MacPhail, Jr. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-[#0D9488] to-[#1E4D8B] flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-white/40" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-[#1E4D8B] mb-2 font-serif">Ralph MacPhail, Jr.</h3>
                <p className="text-[#8B2F39] font-semibold mb-4">Artistic Director Emeritus</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mr. MacPhail is Professor of Theatre Emeritus, Bridgewater College in Virginia, where he taught and directed for 33 years. "Rafe" began directing for GSA in 1998 and was named our first Artistic Director in 2005. He was appointed Artistic Director Emeritus on January 1, 2021.
                </p>
                <button className="text-[#1E4D8B] hover:text-[#0D9488] font-medium transition-colors">
                  More about Rafe...
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board & Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0D1B2A] mb-4 font-serif">Board of Directors & Leadership</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              GSA is guided by a dedicated Board of Directors and artistic leadership committed to excellence in Victorian operetta.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F3E6] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#1E4D8B] to-[#8B4049]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#1E4D8B] mb-1 font-serif">{member.name}</h3>
                  <p className="text-sm text-[#8B4049] font-medium mb-3">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}