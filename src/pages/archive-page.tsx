import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Calendar, Theater, Award as AwardIcon, X, ChevronDown, ChevronUp, User, Music, MapPin, Camera, FileText, Video } from 'lucide-react';
import { Page } from '../App';
import { productions, pastProductions } from '../data/productions';
import { productionMetadataMap } from '../data/past-shows-metadata';
import { detailedProductionData, performerIndex, crewIndex } from '../data/detailed-production-data';

interface ArchivePageProps {
  onNavigate: (page: Page) => void;
}

export function ArchivePage({ onNavigate }: ArchivePageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedDecade, setSelectedDecade] = useState<string>('all');
  const [selectedProduction, setSelectedProduction] = useState<string>('all');
  const [selectedDirector, setSelectedDirector] = useState<string>('all');
  const [selectedVenue, setSelectedVenue] = useState<string>('all');
  const [selectedMusicDirector, setSelectedMusicDirector] = useState<string>('all');
  const [selectedChoreographer, setSelectedChoreographer] = useState<string>('all');
  const [selectedProductionType, setSelectedProductionType] = useState<string>('all');
  const [performerSearch, setPerformerSearch] = useState('');
  const [awardsOnly, setAwardsOnly] = useState(false);
  const [hasPhotos, setHasPhotos] = useState(false);
  const [hasPlaybill, setHasPlaybill] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [summerShowsOnly, setSummerShowsOnly] = useState(false);
  const [grandProductionsOnly, setGrandProductionsOnly] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'year-desc' | 'year-asc' | 'title'>('year-desc');

  // Get unique values for filters
  const decades = useMemo(() => {
    const decadeSet = new Set(pastProductions.map(p => Math.floor(p.year / 10) * 10));
    return Array.from(decadeSet).sort((a, b) => b - a);
  }, []);

  const years = useMemo(() => {
    const yearSet = new Set(pastProductions.map(p => p.year));
    return Array.from(yearSet).sort((a, b) => b - a);
  }, []);

  const productionNames = useMemo(() => {
    const nameSet = new Set(pastProductions.map(p => p.title));
    return Array.from(nameSet).sort();
  }, []);

  const directors = useMemo(() => {
    const directorSet = new Set(pastProductions.map(p => p.director));
    return Array.from(directorSet).sort();
  }, []);

  const venues = useMemo(() => {
    const venueSet = new Set(pastProductions.map(p => p.venue).filter(Boolean));
    return Array.from(venueSet).sort();
  }, []);

  const musicDirectors = useMemo(() => {
    const mdSet = new Set(pastProductions.map(p => p.musicDirector).filter(Boolean));
    return Array.from(mdSet).sort();
  }, []);

  const choreographers = useMemo(() => {
    const choreoSet = new Set(pastProductions.map(p => p.choreographer).filter(Boolean));
    return Array.from(choreoSet).sort();
  }, []);

  const productionTypes = useMemo(() => {
    const typeSet = new Set(pastProductions.map(p => p.productionType).filter(Boolean));
    return Array.from(typeSet).sort();
  }, []);

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (searchTerm) count++;
    if (selectedYear !== 'all') count++;
    if (selectedDecade !== 'all') count++;
    if (selectedProduction !== 'all') count++;
    if (selectedDirector !== 'all') count++;
    if (selectedVenue !== 'all') count++;
    if (selectedMusicDirector !== 'all') count++;
    if (selectedChoreographer !== 'all') count++;
    if (selectedProductionType !== 'all') count++;
    if (performerSearch) count++;
    if (awardsOnly) count++;
    if (hasPhotos) count++;
    if (hasPlaybill) count++;
    if (hasVideo) count++;
    if (summerShowsOnly) count++;
    if (grandProductionsOnly) count++;
    return count;
  }, [searchTerm, selectedYear, selectedDecade, selectedProduction, selectedDirector, selectedVenue, 
      selectedMusicDirector, selectedChoreographer, selectedProductionType, performerSearch, 
      awardsOnly, hasPhotos, hasPlaybill, hasVideo, summerShowsOnly, grandProductionsOnly]);

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedYear('all');
    setSelectedDecade('all');
    setSelectedProduction('all');
    setSelectedDirector('all');
    setSelectedVenue('all');
    setSelectedMusicDirector('all');
    setSelectedChoreographer('all');
    setSelectedProductionType('all');
    setPerformerSearch('');
    setAwardsOnly(false);
    setHasPhotos(false);
    setHasPlaybill(false);
    setHasVideo(false);
    setSummerShowsOnly(false);
    setGrandProductionsOnly(false);
  };

  // Filter and sort productions
  const filteredProductions = useMemo(() => {
    let filtered = pastProductions.filter(production => {
      // Search term (searches title, director, description)
      const matchesSearch = !searchTerm || 
        production.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        production.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        production.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Year filter
      const matchesYear = selectedYear === 'all' || production.year.toString() === selectedYear;
      
      // Decade filter
      const matchesDecade = selectedDecade === 'all' || 
        Math.floor(production.year / 10) * 10 === parseInt(selectedDecade);
      
      // Production name filter
      const matchesProduction = selectedProduction === 'all' || production.title === selectedProduction;
      
      // Director filter
      const matchesDirector = selectedDirector === 'all' || production.director === selectedDirector;
      
      // Venue filter
      const matchesVenue = selectedVenue === 'all' || production.venue === selectedVenue;
      
      // Music Director filter
      const matchesMusicDirector = selectedMusicDirector === 'all' || production.musicDirector === selectedMusicDirector;
      
      // Choreographer filter
      const matchesChoreographer = selectedChoreographer === 'all' || production.choreographer === selectedChoreographer;
      
      // Production type filter
      const matchesProductionType = selectedProductionType === 'all' || production.productionType === selectedProductionType;
      
      // Performer search (searches cast array)
      const matchesPerformer = !performerSearch || 
        (production.cast && production.cast.some(castMember => 
          castMember.toLowerCase().includes(performerSearch.toLowerCase())
        ));
      
      // Awards filter
      const matchesAwards = !awardsOnly || (production.awards && production.awards.length > 0);
      
      // Media filters
      const matchesPhotos = !hasPhotos || production.hasPhotos;
      const matchesPlaybill = !hasPlaybill || production.hasPlaybill;
      const matchesVideo = !hasVideo || production.hasVideo;

      // Summer shows filter
      const matchesSummerShows = !summerShowsOnly || (productionMetadataMap[production.id]?.isSummerShow ?? false);

      // Grand productions filter
      const matchesGrandProductions = !grandProductionsOnly || (productionMetadataMap[production.id]?.isGrandProduction ?? false);

      return matchesSearch && matchesYear && matchesDecade && matchesProduction && 
             matchesDirector && matchesVenue && matchesMusicDirector && matchesChoreographer &&
             matchesProductionType && matchesPerformer && matchesAwards && 
             matchesPhotos && matchesPlaybill && matchesVideo &&
             matchesSummerShows && matchesGrandProductions;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      return a.title.localeCompare(b.title);
    });

    return filtered;
  }, [searchTerm, selectedYear, selectedDecade, selectedProduction, selectedDirector, selectedVenue,
      selectedMusicDirector, selectedChoreographer, selectedProductionType, performerSearch,
      awardsOnly, hasPhotos, hasPlaybill, hasVideo, sortBy, summerShowsOnly, grandProductionsOnly]);

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
              Production Archive
            </h1>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed">
              Explore 50 years of Gilbert & Sullivan Austin productions, from our founding in 1976 to today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#F8F3E6] sticky top-20 z-40 border-b-2 border-[#1E4D8B]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary Search and Basic Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-4">
            {/* Main Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search productions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white"
              />
            </div>

            <div className="flex gap-3 flex-wrap lg:flex-nowrap">
              {/* Decade Filter */}
              <select
                value={selectedDecade}
                onChange={(e) => setSelectedDecade(e.target.value)}
                className="flex-1 lg:flex-initial appearance-none px-4 py-3 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer min-w-[140px]"
              >
                <option value="all">All Decades</option>
                {decades.map(decade => (
                  <option key={decade} value={decade}>{decade}s</option>
                ))}
              </select>

              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="flex-1 lg:flex-initial appearance-none px-4 py-3 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer min-w-[140px]"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="flex-1 lg:flex-initial appearance-none px-4 py-3 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer min-w-[140px]"
              >
                <option value="year-desc">Newest First</option>
                <option value="year-asc">Oldest First</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="inline-flex items-center gap-2 text-[#1E4D8B] hover:text-[#1E4D8B]/80 font-medium"
            >
              <Filter className="w-5 h-5" />
              Advanced Filters
              {activeFilterCount > 0 && (
                <span className="bg-[#C9A961] text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  {activeFilterCount}
                </span>
              )}
              {showAdvancedFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1E4D8B] text-sm"
              >
                <X className="w-4 h-4" />
                Clear All Filters
              </button>
            )}
          </div>

          {/* Advanced Filters Panel */}
          {showAdvancedFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-lg border-2 border-[#1E4D8B]/20 p-6 mb-4"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Production Name */}
                <div>
                  <label className="block text-sm font-medium text-[#1E4D8B] mb-2">
                    <Theater className="w-4 h-4 inline mr-1" />
                    Production Title
                  </label>
                  <select
                    value={selectedProduction}
                    onChange={(e) => setSelectedProduction(e.target.value)}
                    className="w-full appearance-none px-3 py-2 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer text-sm"
                  >
                    <option value="all">All Productions</option>
                    {productionNames.map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>

                {/* Director */}
                <div>
                  <label className="block text-sm font-medium text-[#1E4D8B] mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Director
                  </label>
                  <select
                    value={selectedDirector}
                    onChange={(e) => setSelectedDirector(e.target.value)}
                    className="w-full appearance-none px-3 py-2 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer text-sm"
                  >
                    <option value="all">All Directors</option>
                    {directors.map(director => (
                      <option key={director} value={director}>{director}</option>
                    ))}
                  </select>
                </div>

                {/* Music Director */}
                <div>
                  <label className="block text-sm font-medium text-[#1E4D8B] mb-2">
                    <Music className="w-4 h-4 inline mr-1" />
                    Music Director
                  </label>
                  <select
                    value={selectedMusicDirector}
                    onChange={(e) => setSelectedMusicDirector(e.target.value)}
                    className="w-full appearance-none px-3 py-2 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer text-sm"
                  >
                    <option value="all">All Music Directors</option>
                    {musicDirectors.map(md => (
                      <option key={md} value={md}>{md}</option>
                    ))}
                  </select>
                </div>

                {/* Choreographer */}
                <div>
                  <label className="block text-sm font-medium text-[#1E4D8B] mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Choreographer
                  </label>
                  <select
                    value={selectedChoreographer}
                    onChange={(e) => setSelectedChoreographer(e.target.value)}
                    className="w-full appearance-none px-3 py-2 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer text-sm"
                  >
                    <option value="all">All Choreographers</option>
                    {choreographers.map(choreo => (
                      <option key={choreo} value={choreo}>{choreo}</option>
                    ))}
                  </select>
                </div>

                {/* Venue */}
                <div>
                  <label className="block text-sm font-medium text-[#1E4D8B] mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Venue
                  </label>
                  <select
                    value={selectedVenue}
                    onChange={(e) => setSelectedVenue(e.target.value)}
                    className="w-full appearance-none px-3 py-2 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer text-sm"
                  >
                    <option value="all">All Venues</option>
                    {venues.map(venue => (
                      <option key={venue} value={venue}>{venue}</option>
                    ))}
                  </select>
                </div>

                {/* Production Type */}
                <div>
                  <label className="block text-sm font-medium text-[#1E4D8B] mb-2">
                    <Theater className="w-4 h-4 inline mr-1" />
                    Production Type
                  </label>
                  <select
                    value={selectedProductionType}
                    onChange={(e) => setSelectedProductionType(e.target.value)}
                    className="w-full appearance-none px-3 py-2 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white cursor-pointer text-sm"
                  >
                    <option value="all">All Types</option>
                    {productionTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Performer Search */}
                <div className="md:col-span-2 lg:col-span-1">
                  <label className="block text-sm font-medium text-[#1E4D8B] mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Cast/Performer Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search by performer name..."
                    value={performerSearch}
                    onChange={(e) => setPerformerSearch(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-[#1E4D8B]/20 rounded-lg focus:border-[#C9A961] focus:outline-none bg-white text-sm"
                  />
                </div>

                {/* Toggles */}
                <div className="md:col-span-2 lg:col-span-3">
                  <label className="block text-sm font-medium text-[#1E4D8B] mb-3">Filters</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={awardsOnly}
                        onChange={(e) => setAwardsOnly(e.target.checked)}
                        className="w-4 h-4 text-[#C9A961] border-[#1E4D8B]/20 rounded focus:ring-[#C9A961]"
                      />
                      <AwardIcon className="w-4 h-4 text-[#C9A961]" />
                      <span className="text-sm text-gray-700">Award Winners Only</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasPhotos}
                        onChange={(e) => setHasPhotos(e.target.checked)}
                        className="w-4 h-4 text-[#C9A961] border-[#1E4D8B]/20 rounded focus:ring-[#C9A961]"
                      />
                      <Camera className="w-4 h-4 text-[#0D9488]" />
                      <span className="text-sm text-gray-700">Has Photos</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasPlaybill}
                        onChange={(e) => setHasPlaybill(e.target.checked)}
                        className="w-4 h-4 text-[#C9A961] border-[#1E4D8B]/20 rounded focus:ring-[#C9A961]"
                      />
                      <FileText className="w-4 h-4 text-[#8B5A8E]" />
                      <span className="text-sm text-gray-700">Has Playbill</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasVideo}
                        onChange={(e) => setHasVideo(e.target.checked)}
                        className="w-4 h-4 text-[#C9A961] border-[#1E4D8B]/20 rounded focus:ring-[#C9A961]"
                      />
                      <Video className="w-4 h-4 text-[#1E4D8B]" />
                      <span className="text-sm text-gray-700">Has Video</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={summerShowsOnly}
                        onChange={(e) => setSummerShowsOnly(e.target.checked)}
                        className="w-4 h-4 text-[#C9A961] border-[#1E4D8B]/20 rounded focus:ring-[#C9A961]"
                      />
                      <Calendar className="w-4 h-4 text-[#0D9488]" />
                      <span className="text-sm text-gray-700">Summer Shows Only</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={grandProductionsOnly}
                        onChange={(e) => setGrandProductionsOnly(e.target.checked)}
                        className="w-4 h-4 text-[#C9A961] border-[#1E4D8B]/20 rounded focus:ring-[#C9A961]"
                      />
                      <Theater className="w-4 h-4 text-[#8B5A8E]" />
                      <span className="text-sm text-gray-700">Grand Productions Only</span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results count */}
          <div className="mt-4 text-center text-gray-600">
            Showing {filteredProductions.length} of {pastProductions.length} productions
          </div>
        </div>
      </section>

      {/* Productions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProductions.length === 0 ? (
            <div className="text-center py-20">
              <Theater className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl text-gray-400 mb-2 font-serif">No productions found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProductions.map((production, index) => (
                <motion.div
                  key={production.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 9) * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => onNavigate({ type: 'show-detail', productionId: production.id })}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all border-2 border-[#0D1B2A]/10 hover:border-[#F1D28A]">
                    <div className="relative bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C] h-64 flex items-center justify-center">
                      <Theater className="w-24 h-24 text-[#F1D28A]/20 group-hover:scale-110 transition-transform" />
                      <div className="absolute top-4 left-4 bg-[#F1D28A] text-[#0D1B2A] px-3 py-1 rounded-full text-sm font-medium">
                        {production.year}
                      </div>
                      {production.awards && production.awards.length > 0 && (
                        <div className="absolute top-4 right-4 bg-white/90 text-[#0D1B2A] p-2 rounded-full" title="Award Winner/Nominee">
                          <AwardIcon className="w-5 h-5 text-[#F1D28A]" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl text-[#0D1B2A] mb-2 font-serif group-hover:text-[#4A1F2C] transition-colors">
                        {production.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{production.description}</p>
                      <div className="flex items-center gap-2 text-sm text-[#4A1F2C]">
                        <Calendar className="w-4 h-4" />
                        <span>{production.dates || `${production.year}`}</span>
                      </div>
                      <div className="mt-3 text-sm text-gray-600">
                        Director: {production.director}
                      </div>
                      {production.awards && production.awards.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {production.awards.slice(0, 2).map((award, i) => (
                            <span
                              key={i}
                              className="text-xs bg-[#F8F3E6] text-[#4A1F2C] px-2 py-1 rounded"
                            >
                              {award.result === 'Won' ? '🏆' : '⭐'} {award.category.replace('Outstanding ', '')}
                            </span>
                          ))}
                          {production.awards.length > 2 && (
                            <span className="text-xs bg-[#F8F3E6] text-[#4A1F2C] px-2 py-1 rounded">
                              +{production.awards.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Timeline View */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#0D1B2A] mb-4 font-serif">Production Timeline</h2>
            <p className="text-gray-600">50 years of bringing Gilbert & Sullivan to Austin</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {years.slice(0, 10).map((year, index) => {
              const yearProductions = pastProductions.filter(p => p.year === year);
              return (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 mb-8"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-[#4A1F2C] font-serif">{year}</div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-4 h-4 bg-[#F1D28A] rounded-full border-4 border-white shadow"></div>
                    {index < 9 && <div className="w-0.5 flex-1 bg-[#0D1B2A]/20 my-2 min-h-[40px]"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    {yearProductions.map(prod => (
                      <button
                        key={prod.id}
                        onClick={() => onNavigate({ type: 'show-detail', productionId: prod.id })}
                        className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-2 w-full text-left"
                      >
                        <div className="font-serif text-lg text-[#0D1B2A] mb-1">{prod.title}</div>
                        <div className="text-sm text-gray-600">Directed by {prod.director}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}