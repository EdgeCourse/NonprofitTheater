import React, { useState } from 'react';
import { BookOpen, Music, Theater, Sparkles, Search, BookMarked, Users, GraduationCap, Film, Youtube, Tv, Library, Heart, Award } from 'lucide-react';

export function NewToGSPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const lexiconTerms = [
    {
      term: 'D\'Oyly Carte Opera Company',
      definition: 'The theatrical company founded by Richard D\'Oyly Carte in 1875 to produce Gilbert and Sullivan operas. It held performance rights to the Savoy operas until 1961 and continued performing until 1982, then reformed in 1988.',
      category: 'History',
    },
    {
      term: 'Savoy Opera',
      definition: 'A style of comic opera that refers to the 14 operas written by Gilbert and Sullivan, named after the Savoy Theatre in London where many premiered.',
      category: 'General',
    },
    {
      term: 'Patter Song',
      definition: 'A fast-paced comic song with rapid-fire lyrics, often featuring tongue-twisting verses. Famous examples include "I Am the Very Model of a Modern Major-General" and "I\'ve Got a Little List."',
      category: 'Music',
    },
    {
      term: 'Topsy-Turvy',
      definition: 'A signature Gilbert & Sullivan technique where social norms and hierarchies are humorously inverted. Also the title of the 1999 film about their partnership.',
      category: 'General',
    },
    {
      term: 'Gilbert, W.S.',
      definition: 'Sir William Schwenck Gilbert (1836-1911), the librettist who wrote the words and dialogue. Known for his witty satire of Victorian institutions and absurdist humor.',
      category: 'History',
    },
    {
      term: 'Sullivan, Arthur',
      definition: 'Sir Arthur Seymour Sullivan (1842-1900), the composer who wrote the music. A classically trained musician who elevated comic opera with sophisticated melodies and orchestrations.',
      category: 'History',
    },
    {
      term: 'Carte, Richard D\'Oyly',
      definition: 'The theatrical impresario (1844-1901) who brought Gilbert and Sullivan together and produced their operas. Built the Savoy Theatre specifically for their works.',
      category: 'History',
    },
    {
      term: 'The Mikado',
      definition: 'One of the most popular G&S operas, set in a fictional Japanese town. Features "Three Little Maids," "I\'ve Got a Little List," and "The Flowers That Bloom in the Spring."',
      category: 'Shows',
    },
    {
      term: 'Pirates of Penzance',
      definition: 'Perhaps the most famous G&S opera, featuring the Pirate King, Major-General Stanley, and the "paradox" of Frederic\'s leap-year birthday.',
      category: 'Shows',
    },
    {
      term: 'H.M.S. Pinafore',
      definition: 'A nautical comedy satirizing class distinctions and nepotism in the Royal Navy. Features "I Am the Captain of the Pinafore" and "Modern Major-General."',
      category: 'Shows',
    },
    {
      term: 'The Gondoliers',
      definition: 'Set in Venice, this opera tells the story of two gondoliers who discover one of them is the King of Barataria. Known for "Take a Pair of Sparkling Eyes."',
      category: 'Shows',
    },
    {
      term: 'Iolanthe',
      definition: 'A fantasy opera featuring fairies and peers, satirizing the House of Lords and British politics. Features the iconic "Nightmare Song."',
      category: 'Shows',
    },
    {
      term: 'Trial by Jury',
      definition: 'G&S\'s first collaboration, a one-act operetta satirizing the British legal system. Notable for having no spoken dialogue—entirely sung.',
      category: 'Shows',
    },
    {
      term: 'The Yeomen of the Guard',
      definition: 'The most serious G&S opera, set in the Tower of London. A dramatic story with deeper emotional content than their usual fare.',
      category: 'Shows',
    },
    {
      term: 'Patience',
      definition: 'A satire of the Aesthetic Movement and Victorian obsession with art and poetry. Features Reginald Bunthorne, a "fleshly poet."',
      category: 'Shows',
    },
    {
      term: 'Principal',
      definition: 'A leading role or main character in an opera. Gilbert & Sullivan operas typically have multiple principal roles.',
      category: 'Theater',
    },
    {
      term: 'Chorus',
      definition: 'The ensemble of singers who perform together, often representing groups like sailors, fairies, peers, or villagers.',
      category: 'Theater',
    },
    {
      term: 'Recitative',
      definition: 'A style of vocal delivery that imitates natural speech patterns, used in opera to advance the plot between songs.',
      category: 'Music',
    },
    {
      term: 'Encore',
      definition: 'A piece repeated at the audience\'s request. Many G&S numbers were (and still are) encored due to their popularity.',
      category: 'Theater',
    },
    {
      term: 'Proscenium',
      definition: 'The arch that frames the stage opening. Victorian theaters featured elaborate prosceniums that G&S works were designed for.',
      category: 'Theater',
    },
    {
      term: 'Operetta',
      definition: 'A light opera with spoken dialogue, typically featuring comedy and romance. G&S perfected this form in English.',
      category: 'General',
    },
    {
      term: 'Madrigal',
      definition: 'A type of secular vocal music composition. Sullivan often incorporated madrigal-style harmonies in his choruses.',
      category: 'Music',
    },
    {
      term: 'Contralto',
      definition: 'The lowest female voice type. G&S often featured strong contralto roles (e.g., Little Buttercup, Katisha).',
      category: 'Music',
    },
    {
      term: 'Baritone',
      definition: 'A male voice between tenor and bass. Many G&S leading men are baritones (e.g., Ko-Ko, Jack Point).',
      category: 'Music',
    },
    {
      term: 'Soprano',
      definition: 'The highest female voice type. G&S sopranos often play romantic leads (e.g., Mabel, Yum-Yum, Elsie Maynard).',
      category: 'Music',
    },
    {
      term: 'Patter Baritone',
      definition: 'A specialist role requiring rapid diction and comic timing. Iconic roles include the Major-General and Ko-Ko.',
      category: 'Music',
    },
    {
      term: 'Lord Chancellor',
      definition: 'The highest judicial officer in England, satirized in "Iolanthe" with the famous "Nightmare Song."',
      category: 'Shows',
    },
    {
      term: 'Three Little Maids',
      definition: 'Yum-Yum, Pitti-Sing, and Peep-Bo from "The Mikado," known for their charming trio "Three Little Maids from School."',
      category: 'Shows',
    },
  ];

  const filteredTerms = lexiconTerms
    .filter(item => 
      searchTerm === '' || 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.term.localeCompare(b.term));

  const categories = ['All', 'General', 'History', 'Shows', 'Music', 'Theater'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryFilteredTerms = selectedCategory === 'All' 
    ? filteredTerms 
    : filteredTerms.filter(item => item.category === selectedCategory);

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
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <GraduationCap className="w-12 h-12 text-[#C9A961]" />
              <h1 className="text-5xl md:text-6xl font-serif">New to Gilbert & Sullivan?</h1>
            </div>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed">
              Welcome to the wonderful world of Victorian comic opera! Let us be your guide.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#C9A961]">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#1E4D8B] rounded-full p-3 flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-[#C9A961]" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif text-[#1E4D8B] mb-4">Who Were Gilbert & Sullivan?</h2>
                  <div className="space-y-4 text-[#1B365D] leading-relaxed">
                    <p>
                      <strong>W.S. Gilbert</strong> (1836-1911) and <strong>Arthur Sullivan</strong> (1842-1900) were the 
                      Victorian era's most celebrated theatrical partnership. Together, they created 14 comic operas that 
                      revolutionized English theater and continue to delight audiences worldwide.
                    </p>
                    <p>
                      Gilbert brought razor-sharp wit, absurdist humor, and satirical genius. Sullivan contributed 
                      sophisticated melodies, rich orchestrations, and an ability to blend comic and serious music seamlessly. 
                      Their collaboration, facilitated by impresario Richard D'Oyly Carte, produced timeless works that 
                      defined "Savoy Opera" as a genre.
                    </p>
                    <p>
                      Their operas satirize Victorian society—the military, the legal system, the House of Lords, and 
                      social pretensions—while celebrating romance, honor, and the triumph of common sense over pomposity. 
                      The result? Entertainment that's as fresh and funny today as it was 150 years ago, complete with 
                      beautiful melodies and a great many patter songs that showcase verbal dexterity and wit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patron Testimonial */}
            <div className="mt-8 bg-gradient-to-br from-[#8B5A8E]/10 to-[#1E4D8B]/10 rounded-3xl shadow-lg p-8 md:p-10 border-2 border-[#8B5A8E]/20">
              <div className="flex items-start gap-4">
                <div className="text-6xl text-[#C9A961] leading-none">"</div>
                <div>
                  <p className="text-lg text-[#1B365D] italic leading-relaxed mb-4">
                    I'd never seen a Gilbert & Sullivan show before, and I honestly didn't know what to expect. 
                    Within five minutes, I was laughing out loud. The wordplay is brilliant, the songs are catchy, 
                    and the performances are so full of energy. My teenage daughter and I had the best time—we've 
                    been back three times since! It's become our favorite Austin tradition.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#1B365D]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1E4D8B]">Sarah M.</div>
                      <div className="text-sm text-[#1B365D]/70">First-time patron, now a season subscriber</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#1E4D8B] mb-4">What to Expect at a Show</h2>
            <p className="text-lg text-[#1B365D]/80">Your guide to enjoying a G&S performance</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-2xl p-8 shadow-lg border-2 border-[#C9A961]/30">
              <div className="flex items-start gap-4">
                <div className="bg-[#8B5A8E] rounded-full p-3 flex-shrink-0">
                  <Theater className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#1E4D8B] mb-3">The Performance</h3>
                  <ul className="space-y-2 text-[#1B365D]">
                    <li>• <strong>Length:</strong> Most shows run 2-2.5 hours with one intermission</li>
                    <li>• <strong>Style:</strong> Comic opera with singing, dialogue, and physical comedy</li>
                    <li>• <strong>Music:</strong> Live orchestra, beautiful melodies, witty lyrics</li>
                    <li>• <strong>Humor:</strong> Wordplay, satire, absurdist situations, and clever rhymes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-2xl p-8 shadow-lg border-2 border-[#C9A961]/30">
              <div className="flex items-start gap-4">
                <div className="bg-[#0D9488] rounded-full p-3 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#1E4D8B] mb-3">Audience Etiquette</h3>
                  <ul className="space-y-2 text-[#1B365D]">
                    <li>• <strong>Applause:</strong> Feel free to applaud after songs!</li>
                    <li>• <strong>Laughter:</strong> Absolutely encouraged—it's a comedy!</li>
                    <li>• <strong>Encore:</strong> Popular numbers may be repeated by audience request</li>
                    <li>• <strong>Dress:</strong> Come as you are—no formal attire required</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-2xl p-8 shadow-lg border-2 border-[#C9A961]/30">
              <div className="flex items-start gap-4">
                <div className="bg-[#C9A961] rounded-full p-3 flex-shrink-0">
                  <Music className="w-6 h-6 text-[#1B365D]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#1E4D8B] mb-3">Famous Songs You'll Know</h3>
                  <ul className="space-y-2 text-[#1B365D]">
                    <li>• "I Am the Very Model of a Modern Major-General"</li>
                    <li>• "Three Little Maids from School"</li>
                    <li>• "A Wandering Minstrel I"</li>
                    <li>• "I've Got a Little List"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-2xl p-8 shadow-lg border-2 border-[#C9A961]/30">
              <div className="flex items-start gap-4">
                <div className="bg-[#8B5A8E] rounded-full p-3 flex-shrink-0">
                  <BookMarked className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#1E4D8B] mb-3">First-Timer Tips</h3>
                  <ul className="space-y-2 text-[#1B365D]">
                    <li>• Read the plot synopsis in your program</li>
                    <li>• Don't worry if you miss a joke—there are hundreds!</li>
                    <li>• Pay attention to the patter songs (fast, witty lyrics)</li>
                    <li>• Enjoy the Victorian costumes and sets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gilbert & Sullivan Lexicon */}
      <section className="py-20 bg-gradient-to-br from-[#F8F3E6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-[#8B5A8E]" />
              <h2 className="text-4xl font-serif text-[#1E4D8B]">Gilbert & Sullivan Lexicon</h2>
            </div>
            <p className="text-lg text-[#1B365D]/80 max-w-3xl mx-auto">
              Your comprehensive guide to G&S terminology, characters, and cultural references
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Search and Filter Controls */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-2 border-[#C9A961]/30">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1B365D]/40 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search terms and definitions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#C9A961]/30 rounded-xl focus:outline-none focus:border-[#8B5A8E] transition-colors"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-[#1E4D8B] to-[#8B5A8E] text-white shadow-lg'
                          : 'bg-[#F8F3E6] text-[#1B365D] hover:bg-[#C9A961]/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-sm text-[#1B365D]/60">
                Showing {categoryFilteredTerms.length} of {lexiconTerms.length} terms
              </div>
            </div>

            {/* Lexicon Terms Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {categoryFilteredTerms.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border-l-4 hover:shadow-xl transition-all hover:-translate-y-1"
                  style={{
                    borderLeftColor:
                      item.category === 'History'
                        ? '#1E4D8B'
                        : item.category === 'Shows'
                        ? '#8B5A8E'
                        : item.category === 'Music'
                        ? '#C9A961'
                        : item.category === 'Theater'
                        ? '#0D9488'
                        : '#1B365D',
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-serif text-[#1E4D8B] font-bold">{item.term}</h3>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor:
                          item.category === 'History'
                            ? '#1E4D8B20'
                            : item.category === 'Shows'
                            ? '#8B5A8E20'
                            : item.category === 'Music'
                            ? '#C9A96120'
                            : item.category === 'Theater'
                            ? '#0D948820'
                            : '#1B365D20',
                        color:
                          item.category === 'History'
                            ? '#1E4D8B'
                            : item.category === 'Shows'
                            ? '#8B5A8E'
                            : item.category === 'Music'
                            ? '#C9A961'
                            : item.category === 'Theater'
                            ? '#0D9488'
                            : '#1B365D',
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[#1B365D] leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>

            {categoryFilteredTerms.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-[#1B365D]/20 mx-auto mb-4" />
                <p className="text-lg text-[#1B365D]/60">No terms found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Learning Pathways Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#1E4D8B] mb-4">Choose Your Journey</h2>
            <p className="text-lg text-[#1B365D]/80">
              Whether you're just curious or already a devoted fan, there's always more to discover
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* New to G&S - Pop Culture & Videos */}
            <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-3xl p-8 shadow-xl border-2 border-[#C9A961]/30 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-gradient-to-br from-[#1E4D8B] to-[#8B5A8E] rounded-full p-4 mb-4">
                  <Film className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#1E4D8B] mb-2">Just Starting Out?</h3>
                <p className="text-sm text-[#1B365D]/70 mb-4">Explore G&S in popular culture</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <a
                  href="https://www.youtube.com/c/GilbertSullivanAustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#1E4D8B]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Watch Our Performances</div>
                    <div className="text-xs text-[#1B365D]/60">Clips & full shows on YouTube</div>
                  </div>
                </a>

                <a
                  href="https://www.imdb.com/title/tt0191342/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#1E4D8B]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-[#8B5A8E] rounded-full p-2 flex-shrink-0">
                    <Tv className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Topsy-Turvy (1999)</div>
                    <div className="text-xs text-[#1B365D]/60">Film about Gilbert & Sullivan</div>
                  </div>
                </a>

                <div className="p-4 bg-[#C9A961]/10 rounded-xl border border-[#C9A961]/30">
                  <div className="font-semibold text-[#1E4D8B] mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C9A961]" />
                    Pop Culture Moments
                  </div>
                  <ul className="text-sm text-[#1B365D] space-y-1">
                    <li>• The Simpsons "Cape Feare" episode</li>
                    <li>• The Major-General in Pirates!</li>
                    <li>• Star Trek: Insurrection references</li>
                    <li>• Arrested Development's GOB</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ready for a Deeper Dive */}
            <div className="bg-gradient-to-br from-[#8B5A8E]/10 to-white rounded-3xl p-8 shadow-xl border-2 border-[#8B5A8E]/30 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-gradient-to-br from-[#C9A961] to-[#8B5A8E] rounded-full p-4 mb-4">
                  <Library className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#1E4D8B] mb-2">Ready to Dive Deeper?</h3>
                <p className="text-sm text-[#1B365D]/70 mb-4">Study the craft & history</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-white rounded-xl border border-[#C9A961]/20">
                  <div className="font-semibold text-[#1E4D8B] mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#8B5A8E]" />
                    G&S Lexicon (Above)
                  </div>
                  <p className="text-sm text-[#1B365D]/80">Master the terminology and references</p>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#8B5A8E]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-[#C9A961] rounded-full p-2 flex-shrink-0">
                    <BookMarked className="w-5 h-5 text-[#1B365D]" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Recommended Books</div>
                    <div className="text-xs text-[#1B365D]/60">View our curated reading list</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#8B5A8E]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-[#0D9488] rounded-full p-2 flex-shrink-0">
                    <Theater className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Mikado Resources</div>
                    <div className="text-xs text-[#1B365D]/60">Deep dive into our most-performed show</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#8B5A8E]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-[#1E4D8B] rounded-full p-2 flex-shrink-0">
                    <Award className="w-5 h-5 text-[#C9A961]" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">50-Year Archive</div>
                    <div className="text-xs text-[#1B365D]/60">Browse our production history</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Lifelong Fan */}
            <div className="bg-gradient-to-br from-[#1E4D8B]/10 to-white rounded-3xl p-8 shadow-xl border-2 border-[#1E4D8B]/30 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="bg-gradient-to-br from-[#8B5A8E] to-[#1E4D8B] rounded-full p-4 mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-[#1E4D8B] mb-2">Lifelong Fan?</h3>
                <p className="text-sm text-[#1B365D]/70 mb-4">Join our community</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <a
                  href="mailto:membership@gilbertsullivan.org"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#1E4D8B]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-gradient-to-r from-[#9B8FC7] to-[#B8A8D9] rounded-full p-2 flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Become a Member</div>
                    <div className="text-xs text-[#1B365D]/60">Support our mission</div>
                  </div>
                </a>

                <a
                  href="mailto:news@gilbertsullivan.org"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#1E4D8B]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-[#C9A961] rounded-full p-2 flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-[#1B365D]" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Share Member News</div>
                    <div className="text-xs text-[#1B365D]/60">Tell us your updates</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#1E4D8B]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-[#8B5A8E] rounded-full p-2 flex-shrink-0">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Audition for a Show</div>
                    <div className="text-xs text-[#1B365D]/60">Perform with us</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#1E4D8B]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-[#0D9488] rounded-full p-2 flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Volunteer</div>
                    <div className="text-xs text-[#1B365D]/60">Join our production teams</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-[#1E4D8B]/5 transition-colors border border-[#C9A961]/20 group"
                >
                  <div className="bg-[#C9A961] rounded-full p-2 flex-shrink-0">
                    <Theater className="w-5 h-5 text-[#1B365D]" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-[#1E4D8B] group-hover:text-[#8B5A8E] transition-colors">Wand'ring Minstrels</div>
                    <div className="text-xs text-[#1B365D]/60">Our outreach troupe</div>
                  </div>
                </a>

                <div className="p-4 bg-[#1E4D8B]/5 rounded-xl border border-[#1E4D8B]/20">
                  <div className="font-semibold text-[#1E4D8B] mb-2">Connect With Us</div>
                  <div className="flex gap-3 justify-center">
                    <a href="https://www.facebook.com/gilbertsullivanaustin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-sm font-bold">f</span>
                    </a>
                    <a href="https://www.instagram.com/gilbertsullivanaustin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-[#E4405F] to-[#C13584] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-sm font-bold">📷</span>
                    </a>
                    <a href="https://x.com/GandSofAustin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-sm font-bold">𝕏</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="relative bg-gradient-to-br from-[#1E4D8B] to-[#8B5A8E] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Theater className="w-16 h-16 text-[#C9A961] mx-auto mb-6" />
          <h2 className="text-4xl font-serif mb-4">Ready to Experience the Magic?</h2>
          <p className="text-xl text-[#F8F3E6]/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Now that you know what to expect, join us for a performance! Check out our current season 
            and discover why audiences have been laughing, singing, and applauding for 150 years.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-[#C9A961] text-[#1E4D8B] px-10 py-4 rounded-full hover:bg-white transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Current Season
            </a>
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full hover:bg-white hover:text-[#1E4D8B] transition-all font-semibold text-lg"
            >
              Explore Show Archive
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}