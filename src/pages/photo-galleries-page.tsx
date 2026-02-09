import React from 'react';
import { Camera, Calendar, Search, ChevronRight, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { fullPerformanceHistory } from '../data/full-performance-history';
import { playbillsData } from '../data/playbills-data';
import gondoliers2016 from 'figma:asset/8e2ef7db22de71a2b2aa565243c4cf8b1c958f71.png';
import iolanthe2019 from 'figma:asset/20fe178458974880cf4f04ee888b57900f1bdea0.png';
import ruddigore2018 from 'figma:asset/b267c2f95b6eb5efacaafa155fdffedec098e1fc.png';
import yeomen2010 from 'figma:asset/948bbac536a7728f8a93320b9a08fe614fa7f198.png';
import pinafore2014 from 'figma:asset/5aa97823de99237dee1849afba2717ff5ccd8c22.png';
import pirates2017 from 'figma:asset/7728ed0c33f338ee2b7bd42edd0602ae77148e86.png';

// Map of production images
const productionImages: Record<string, string> = {
  'The Gondoliers-2016': gondoliers2016,
  'Iolanthe-2019': iolanthe2019,
  'Ruddigore-2018': ruddigore2018,
  'The Yeomen of the Guard-2010': yeomen2010,
  'H.M.S. Pinafore-2014': pinafore2014,
  'The Pirates of Penzance-2017': pirates2017,
};

export function PhotoGalleriesPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedDecade, setSelectedDecade] = React.useState<string>('all');

  // Extract all productions with photo galleries
  const allGalleries = fullPerformanceHistory
    .flatMap(season => {
      if (!season.shows) return [];
      return season.shows
        .filter(show => show.links?.some(link => link.type === 'photos'))
        .map(show => {
          // Try to find matching playbill data
          const year = parseInt(season.season.match(/\d{4}/)?.[0] || '0');
          const playbillMatch = playbillsData.find(p => 
            p.year_guess === year && 
            p.title_guess.toLowerCase().includes(show.title.toLowerCase())
          );
          
          return {
            title: show.title,
            subtitle: show.subtitle,
            date: show.date,
            season: season.season,
            photoLink: show.links?.find(link => link.type === 'photos')?.url || '',
            isAwardWinner: show.isAwardWinner || false,
            thumbnail: playbillMatch?.thumbnail,
            playbillSlug: playbillMatch?.slug,
            imageKey: `${show.title}-${year}`,
          };
        });
    })
    .filter(gallery => gallery.photoLink);

  // Get unique decades for filtering
  const decades = Array.from(new Set(
    allGalleries.map(gallery => {
      const year = gallery.season.match(/\d{4}/)?.[0];
      if (!year) return '2020s';
      const decade = Math.floor(parseInt(year) / 10) * 10;
      return `${decade}s`;
    })
  )).sort().reverse();

  // Filter galleries
  const filteredGalleries = allGalleries.filter(gallery => {
    const matchesSearch = gallery.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (gallery.subtitle && gallery.subtitle.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedDecade === 'all') return matchesSearch;
    
    const year = gallery.season.match(/\d{4}/)?.[0];
    if (!year) return matchesSearch;
    const decade = Math.floor(parseInt(year) / 10) * 10;
    return matchesSearch && `${decade}s` === selectedDecade;
  });

  return (
    <div className="min-h-screen bg-[#F8F3E6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E4D8B] to-[#8B5A8E] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#C9A961] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-[#C9A961] rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-[#C9A961] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Camera className="w-10 h-10 text-[#C9A961]" />
              <h1 className="text-5xl md:text-6xl font-serif">Photo Galleries</h1>
            </div>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed">
              50 years of memories captured on stage — explore our complete collection of production photography
            </p>
            <div className="mt-8 inline-block bg-[#C9A961] text-[#1E4D8B] px-8 py-3 rounded-full font-bold text-lg">
              {allGalleries.length} Photo Galleries Available
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b-4 border-[#C9A961]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1E4D8B]/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by production title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-[#1E4D8B]/20 focus:border-[#8B5A8E] focus:outline-none text-lg"
              />
            </div>

            {/* Decade Filter */}
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <button
                onClick={() => setSelectedDecade('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedDecade === 'all'
                    ? 'bg-[#8B5A8E] text-white'
                    : 'bg-white text-[#1E4D8B] border-2 border-[#1E4D8B]/20 hover:border-[#8B5A8E]'
                }`}
              >
                All Years
              </button>
              {decades.map(decade => (
                <button
                  key={decade}
                  onClick={() => setSelectedDecade(decade)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedDecade === decade
                      ? 'bg-[#8B5A8E] text-white'
                      : 'bg-white text-[#1E4D8B] border-2 border-[#1E4D8B]/20 hover:border-[#8B5A8E]'
                  }`}
                >
                  {decade}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-6 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-[#1B365D]">
            Showing <strong>{filteredGalleries.length}</strong> {filteredGalleries.length === 1 ? 'gallery' : 'galleries'}
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedDecade !== 'all' && ` from the ${selectedDecade}`}
          </p>
        </div>
      </section>

      {/* Photo Galleries Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredGalleries.length === 0 ? (
              <div className="text-center py-20">
                <Camera className="w-20 h-20 text-[#1E4D8B]/20 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-[#1E4D8B] mb-2">No galleries found</h3>
                <p className="text-[#1B365D]/70">Try adjusting your search or filter</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGalleries.map((gallery, index) => (
                  <a
                    key={index}
                    href={gallery.photoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                      gallery.isAwardWinner
                        ? 'bg-gradient-to-br from-[#C9A961]/10 via-white to-[#0D9488]/10 border-2 border-[#C9A961]'
                        : 'bg-white border-2 border-[#1E4D8B]/10'
                    }`}
                  >
                    {/* Image */}
                    <div className={`relative aspect-[4/3] overflow-hidden ${
                      gallery.isAwardWinner
                        ? 'bg-gradient-to-br from-[#C9A961] to-[#0D9488]'
                        : 'bg-gradient-to-br from-[#1E4D8B] to-[#8B5A8E]'
                    }`}>
                      {productionImages[gallery.imageKey] ? (
                        <img 
                          src={productionImages[gallery.imageKey]} 
                          alt={`${gallery.title} production photo`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors" />
                        </div>
                      )}
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                        <div className="transform scale-0 group-hover:scale-100 transition-transform">
                          <div className="bg-white/90 backdrop-blur-sm text-[#1E4D8B] px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                            <ImageIcon className="w-5 h-5" />
                            View Gallery
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Award Badge */}
                      {gallery.isAwardWinner && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-[#C9A961] to-[#0D9488] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          🏆 Award Winner
                        </div>
                      )}

                      {/* Date Badge */}
                      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {gallery.season}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-serif text-[#1E4D8B] mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-[#8B5A8E] transition-colors">
                        <em>{gallery.title}</em>
                      </h3>
                      {gallery.subtitle && (
                        <p className="text-sm text-[#8B2F39] font-semibold mb-2">{gallery.subtitle}</p>
                      )}
                      <div className="flex items-center gap-2 text-[#0D9488] text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{gallery.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#1E4D8B] font-semibold text-sm group-hover:text-[#8B5A8E] transition-colors">
                        View Photos
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SmugMug Attribution */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#1E4D8B]/5 to-[#8B5A8E]/5 rounded-2xl p-8 border-2 border-[#C9A961]/30">
              <ImageIcon className="w-12 h-12 text-[#8B5A8E] mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-[#1E4D8B] mb-3">Photo Galleries Hosted on SmugMug</h3>
              <p className="text-[#1B365D] leading-relaxed mb-6">
                Our complete collection of production photography is hosted on SmugMug, where you can browse 
                high-resolution images, view slideshows, and order prints. Each gallery opens in a new window 
                for the best viewing experience.
              </p>
              <a
                href="https://gilbertsullivanaustin.smugmug.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B5A8E] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#8B5A8E]/80 transition-all"
              >
                <Camera className="w-5 h-5" />
                Visit Full SmugMug Gallery
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-gradient-to-br from-[#1E4D8B] to-[#8B5A8E] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Camera className="w-16 h-16 text-[#C9A961] mx-auto mb-6" />
          <h2 className="text-4xl font-serif mb-4">Captured Memories from Five Decades</h2>
          <p className="text-xl text-[#F8F3E6]/90 max-w-3xl mx-auto leading-relaxed mb-8">
            From our first production in 1976 to today, these photos tell the story of Gilbert & Sullivan Austin. 
            Thank you to all the photographers who have documented our journey!
          </p>
          <div className="inline-block bg-[#C9A961] text-[#1E4D8B] px-10 py-4 rounded-full font-bold text-lg">
            50 Years • 150+ Productions • Countless Memories
          </div>
        </div>
      </section>
    </div>
  );
}