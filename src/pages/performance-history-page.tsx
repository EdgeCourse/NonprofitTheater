import React from 'react';
import { Calendar, Award, Image as ImageIcon, FileText, ChevronDown, ChevronUp, Search, Filter, X, User, Music, Theater } from 'lucide-react';
import { fullPerformanceHistory } from '../data/full-performance-history';
import { detailedProductionData, performerIndex, crewIndex } from '../data/detailed-production-data';

export function PerformanceHistoryPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [performerSearch, setPerformerSearch] = React.useState('');
  const [crewSearch, setCrewSearch] = React.useState('');
  const [selectedRole, setSelectedRole] = React.useState<string>('all');
  const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);
  const [expandedSeasons, setExpandedSeasons] = React.useState<Set<string>>(new Set(['2025-2026', '2024-2025']));

  const toggleSeason = (season: string) => {
    const newExpanded = new Set(expandedSeasons);
    if (newExpanded.has(season)) {
      newExpanded.delete(season);
    } else {
      newExpanded.add(season);
    }
    setExpandedSeasons(newExpanded);
  };

  const expandAll = () => {
    const allSeasons = performanceHistory.map(s => s.season);
    setExpandedSeasons(new Set(allSeasons));
  };

  const collapseAll = () => {
    setExpandedSeasons(new Set());
  };

  const performanceHistory = fullPerformanceHistory;

  const filteredHistory = performanceHistory.map(season => ({
    ...season,
    shows: season.shows.filter(show => 
      show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (show.subtitle && show.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(season => season.shows.length > 0);

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
              <Calendar className="w-10 h-10 text-[#C9A961]" />
              <h1 className="text-5xl md:text-6xl font-serif">Full Performance History</h1>
            </div>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed">
              Five decades of bringing Gilbert & Sullivan to life in Austin
            </p>
            <div className="mt-8 inline-block bg-[#C9A961] text-[#1E4D8B] px-8 py-3 rounded-full font-bold text-lg">
              1976 – 2026 • 50 Years of Excellence
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white border-b-4 border-[#C9A961] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-[#8B5A8E] mb-2">150+</div>
              <div className="text-lg text-[#1B365D]">Productions</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#8B5A8E] mb-2">2,000+</div>
              <div className="text-lg text-[#1B365D]">Paid Performers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#8B5A8E] mb-2">150,000+</div>
              <div className="text-lg text-[#1B365D]">Audience Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Controls */}
      <section className="py-8 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1E4D8B]/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search productions by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-[#1E4D8B]/20 focus:border-[#8B5A8E] focus:outline-none text-lg"
              />
            </div>

            {/* Expand/Collapse Controls */}
            <div className="flex justify-center gap-4">
              <button
                onClick={expandAll}
                className="flex items-center gap-2 bg-[#8B5A8E] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#8B5A8E]/80 transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="flex items-center gap-2 bg-[#1E4D8B] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1E4D8B]/80 transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
                Collapse All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance History Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {filteredHistory.map((seasonData) => (
              <div key={seasonData.season} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#C9A961]/30">
                {/* Season Header */}
                <button
                  onClick={() => toggleSeason(seasonData.season)}
                  className="w-full bg-gradient-to-r from-[#1E4D8B] to-[#8B5A8E] text-white p-6 flex items-center justify-between hover:from-[#1E4D8B]/90 hover:to-[#8B5A8E]/90 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-[#C9A961]" />
                    <h2 className="text-2xl md:text-3xl font-serif">{seasonData.season} Season</h2>
                    {seasonData.specialNote && (
                      <span className="bg-[#C9A961] text-[#1E4D8B] px-4 py-1 rounded-full text-sm font-bold">
                        {seasonData.specialNote}
                      </span>
                    )}
                  </div>
                  {expandedSeasons.has(seasonData.season) ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>

                {/* Shows List */}
                {expandedSeasons.has(seasonData.season) && (
                  <div className="p-6 space-y-6">
                    {seasonData.shows.map((show, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-xl border-l-4 ${
                          show.isAwardWinner
                            ? 'bg-gradient-to-r from-[#C9A961]/10 to-[#0D9488]/10 border-[#C9A961]'
                            : 'bg-[#F8F3E6]/50 border-[#8B5A8E]'
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-serif text-[#1E4D8B] mb-1">
                              <em>{show.title}</em>
                            </h3>
                            {show.subtitle && (
                              <p className="text-[#8B2F39] font-semibold mb-2">{show.subtitle}</p>
                            )}
                            <p className="text-[#1B365D] flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {show.date}
                            </p>
                            {show.note && (
                              <p className="text-sm text-[#1B365D]/70 italic mt-2">{show.note}</p>
                            )}
                          </div>
                          {show.isAwardWinner && (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#0D9488] text-white px-4 py-2 rounded-full text-sm font-bold">
                              <Award className="w-4 h-4" />
                              B. Iden Payne Award Winner
                            </div>
                          )}
                        </div>

                        {/* Links */}
                        {show.links && show.links.length > 0 && (
                          <div className="flex flex-wrap gap-3">
                            {show.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 ${
                                  link.type === 'show'
                                    ? 'bg-[#8B5A8E] text-white hover:bg-[#8B5A8E]/80'
                                    : link.type === 'photos'
                                    ? 'bg-[#0D9488] text-white hover:bg-[#0D9488]/80'
                                    : 'bg-[#1E4D8B] text-white hover:bg-[#1E4D8B]/80'
                                }`}
                              >
                                {link.type === 'show' && (
                                  <>
                                    <Calendar className="w-4 h-4" />
                                    Show Page
                                  </>
                                )}
                                {link.type === 'photos' && (
                                  <>
                                    <ImageIcon className="w-4 h-4" />
                                    Photo Gallery
                                  </>
                                )}
                                {link.type === 'playbill' && (
                                  <>
                                    <FileText className="w-4 h-4" />
                                    Playbill
                                  </>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Message */}
      <section className="relative bg-gradient-to-br from-[#1E4D8B] to-[#8B5A8E] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-serif mb-4">A Half-Century of Theatrical Excellence</h2>
          <p className="text-xl text-[#F8F3E6]/90 max-w-3xl mx-auto leading-relaxed mb-8">
            From our first production of H.M.S. Pinafore in 1976 to today, Gilbert & Sullivan Austin 
            has been Austin's home for the wit, whimsy, and wonderful music of the Savoy operas. 
            Thank you to every performer, musician, volunteer, and audience member who has been part of our story.
          </p>
          <div className="inline-block bg-[#C9A961] text-[#1E4D8B] px-10 py-4 rounded-full font-bold text-lg">
            Here's to the Next 50 Years!
          </div>
        </div>
      </section>
    </div>
  );
}