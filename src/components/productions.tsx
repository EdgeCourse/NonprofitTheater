import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Productions() {
  const [activeTab, setActiveTab] = useState<'current' | 'upcoming'>('current');

  const productions = {
    current: [
      {
        id: 1,
        title: 'The Odyssey Reimagined',
        description: 'A modern adaptation of Homer\'s epic, exploring themes of migration and belonging.',
        location: 'London, UK',
        dates: 'Dec 15 - Jan 30',
        image: 'https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjU0MjgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        featured: true,
      },
      {
        id: 2,
        title: 'Voices of Tomorrow',
        description: 'An anthology of short plays by emerging playwrights from around the world.',
        location: 'New York, USA',
        dates: 'Dec 10 - Dec 28',
        image: 'https://images.unsplash.com/photo-1603647200798-9cb3b85bf1a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcmVoZWFyc2FsfGVufDF8fHx8MTc2NTQ0MTg2MHww&ixlib=rb-4.1.0&q=80&w=1080',
        featured: false,
      },
      {
        id: 3,
        title: 'Digital Dreams',
        description: 'An immersive theatrical experience blending live performance with digital art.',
        location: 'Tokyo, Japan',
        dates: 'Dec 5 - Jan 15',
        image: 'https://images.unsplash.com/photo-1764763185675-4351f1c71cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMHN0YWdlJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1NDQxODYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        featured: false,
      },
    ],
    upcoming: [
      {
        id: 4,
        title: 'Revolution & Roses',
        description: 'A powerful drama about activism, love, and sacrifice in turbulent times.',
        location: 'Berlin, Germany',
        dates: 'Feb 12 - Mar 20',
        image: 'https://images.unsplash.com/photo-1761502479994-3a5e07ec243e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0aGVhdGVyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NDQxODYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        featured: true,
      },
      {
        id: 5,
        title: 'Songs of the Earth',
        description: 'A musical journey celebrating indigenous cultures and environmental stewardship.',
        location: 'Sydney, Australia',
        dates: 'Mar 5 - Apr 18',
        image: 'https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYXVkaWVuY2V8ZW58MXx8fHwxNzY1NDQxODU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        featured: false,
      },
    ],
  };

  return (
    <section id="productions" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-600 uppercase tracking-wider">Our Productions</span>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mt-4 mb-6">
              Experience World-Class Theatre
            </h2>
            <p className="text-lg text-gray-700">
              From classic adaptations to groundbreaking new works, discover performances
              that inspire, challenge, and transform.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-8 py-3 rounded-full transition-all ${
                activeTab === 'current'
                  ? 'bg-white text-purple-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Current Shows
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-white text-purple-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Productions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productions[activeTab].map((production, index) => (
            <motion.div
              key={production.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer ${
                production.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={production.image}
                    alt={production.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      production.featured ? 'h-[400px]' : 'h-[300px]'
                    }`}
                  />
                  {production.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {production.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{production.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">{production.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">{production.dates}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn">
                    <Ticket className="w-5 h-5" />
                    Book Tickets
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
