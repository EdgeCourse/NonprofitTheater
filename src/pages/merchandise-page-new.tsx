import React from 'react';
import { ShoppingBag, Package, Heart, Sparkles, BookOpen, Play, ChevronDown, ChevronUp } from 'lucide-react';
import toteBagImage from 'figma:asset/28d9b1f5fc868a6a25e136fb2e41d6904d5af5a4.png';
import annotatedBookImage from 'figma:asset/f36d63d05d54b0536f3dfd56b797629ac410d317.png';
import lostHeirsBookImage from 'figma:asset/4a4d32822b28bfe12aa4cf5af8008ef412d83da3.png';
import patienceMugImage from 'figma:asset/a1f8ffb3238f5572a5ccd1498816523abbde661a.png';
import characterMugsImage from 'figma:asset/d7c7ed66a29ab336c689904e32140ae9ece072d2.png';
import bottleOpenerImage from 'figma:asset/3f30e773101d77e857261ab2d872af53145fcd1c.png';

export function MerchandisePage() {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);
  const [showMoreBooks, setShowMoreBooks] = React.useState(false);

  const featuredItems = [
    {
      name: 'This Season\'s Show Tee',
      description: 'Pick up onsite at performances',
      price: 'TBA',
      image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&q=80',
      badge: 'New for 2026',
      shopLink: '#', // No online shop - onsite only
    },
    {
      name: 'Union Mugs',
      description: 'Beautiful illustrated character mugs featuring your favorite G&S roles — sold as a pair',
      price: '$35',
      image: characterMugsImage,
      badge: 'New for 2026',
      shopLink: 'https://www.printify.com', // Replace with actual Printify link
    },
    {
      name: 'A Certain Official\'s Shopping Bag',
      description: 'Carry your essentials in style with this witty Mikado reference. Our famous Yeomen tote bags sold out almost immediately!',
      price: '$18',
      image: toteBagImage,
      badge: '50th Anniversary',
      shopLink: 'https://www.printify.com', // Replace with actual Printify link
    },
    {
      name: 'All out of Patience Mug',
      description: 'Limited edition mug for our 2026 summer production of Patience',
      price: '$15',
      image: patienceMugImage,
      badge: 'New for 2026',
      shopLink: 'https://www.printify.com', // Replace with actual Printify link
    },
  ];

  const additionalItems = [
    {
      name: 'Pour o pour the Pirate Sherry Bottle Opener',
      description: 'Open your favorite beverage with this charming pirate-themed bottle opener',
      price: '$12',
      image: bottleOpenerImage,
      shopLink: 'https://www.printify.com', // Replace with actual Printify link
      badge: '50th Anniversary',
    },
    {
      name: 'GSA Cap',
      description: 'Classic baseball cap with embroidered GSA logo. We just hope both teams win.',
      price: '$20',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      badge: 'Popular',
      shopLink: 'https://www.printify.com', // Replace with actual Printify link
      note: 'One day there was a run on hats. We are so glad they are so popular and are restocking!',
    },
    {
      name: 'G&S Austin Logo Tee',
      description: 'Classic cotton tee with vintage G&S Austin logo',
      price: '$22',
      image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&q=80',
      shopLink: 'https://www.printify.com', // Replace with actual Printify link
    },
    {
      name: 'Retro Show Tees',
      description: 'Vintage designs from past productions — a piece of GSA history!',
      price: '$25',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      shopLink: 'https://www.printify.com', // Replace with actual Printify link
    },
    {
      name: 'G&S Austin Mug',
      description: 'Start your morning with a cup of operetta',
      price: '$15',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
      shopLink: 'https://www.printify.com', // Replace with actual Printify link
    },
    {
      name: 'Video & DVD',
      description: 'Physical copies of past performances — collector\'s editions',
      price: '$20',
      image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80',
      shopLink: '#', // Replace with actual link
    },
  ];

  const digitalVideos = [
    {
      title: 'The Pirates of Penzance',
      year: '2019',
      description: 'Full performance featuring award-winning cast and orchestra',
      price: '$15',
      duration: '2h 15m',
      previewUrl: '#', // Replace with actual preview video URL
      purchaseUrl: '#', // Replace with actual purchase link
      thumbnail: 'https://images.unsplash.com/photo-1574267432644-f610dd5ac38c?w=800&q=80',
      isAwardWinning: true,
      awards: 'Multiple B. Iden Payne Awards',
    },
    {
      title: 'The McAdo',
      year: '2020',
      description: 'Our celebrated production of Gilbert & Sullivan\'s masterpiece',
      price: '$15',
      duration: '2h 10m',
      previewUrl: '#', // Replace with actual preview video URL
      purchaseUrl: '#', // Replace with actual purchase link
      thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80',
      isAwardWinning: true,
      awards: 'B. Iden Payne Award Winner',
    },
    {
      title: 'H.M.S. Pinafore',
      year: '2021',
      description: 'A delightful voyage with romance, comedy, and unforgettable music',
      price: '$15',
      duration: '2h 5m',
      previewUrl: '#', // Replace with actual preview video URL
      purchaseUrl: '#', // Replace with actual purchase link
      thumbnail: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80',
      isAwardWinning: false,
    },
  ];

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
              <Sparkles className="w-10 h-10 text-[#C9A961]" />
              <h1 className="text-5xl md:text-6xl font-serif">Merchandise</h1>
              <Sparkles className="w-10 h-10 text-[#C9A961]" />
            </div>
            <p className="text-xl md:text-2xl text-[#F8F3E6]/90 leading-relaxed">
              Take a bit of Gilbert & Sullivan Austin home with you — from witty references to classic logo pieces, these are favorites loved by our audience.
            </p>
          </div>
        </div>
      </section>

      {/* How to Order - Cute Callout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border-4 border-[#C9A961] p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-[#C9A961] rounded-full p-3 flex-shrink-0">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-[#1E4D8B] mb-3">How to Get Your Goodies</h3>
              <p className="text-[#1B365D] leading-relaxed mb-4">
                <strong>At Performances:</strong> Current show t-shirts and select retro items are available for purchase at our shows—come early to the lobby to browse!
              </p>
              <p className="text-[#1B365D] leading-relaxed mb-4">
                <strong>Online:</strong> Click the "Get Yours!" buttons below to shop via Printify or Amazon.
              </p>
              <p className="text-[#1B365D] leading-relaxed">
                <strong>Special Orders:</strong> Want something specific or prefer pickup/shipping? Email us at{' '}
                <a href="mailto:info@gilbertsullivan.org" className="text-[#0D9488] font-semibold underline hover:text-[#C9A961] transition-colors">
                  info@gilbertsullivan.org
                </a>{' '}
                or call{' '}
                <a href="tel:+15124724772" className="text-[#0D9488] font-semibold underline hover:text-[#C9A961] transition-colors">
                  512-472-4772
                </a>{' '}
                <span className="text-[#1B365D]/70 text-sm">(please leave a detailed message with our answering service including a good time to reach you)</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[#8B4049]" />
              <h2 className="text-4xl font-serif text-[#1E4D8B]">Fan Favorites</h2>
              <Heart className="w-6 h-6 text-[#8B4049]" />
            </div>
            <p className="text-lg text-[#1B365D]/80">Our most-loved items</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredItems.map((item) => (
              <div key={item.name} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F8F3E6] to-[#C9A961]/20">
                  {item.badge && (
                    <div className="absolute top-4 right-4 bg-[#8B4049] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                      {item.badge}
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-[#1E4D8B] mb-3">{item.name}</h3>
                  <p className="text-[#1B365D]/80 mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#8B4049]">{item.price}</span>
                    <a
                      href={item.shopLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8B5A8E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8B5A8E]/80 transition-colors"
                    >
                      Get Yours!
                    </a>
                  </div>
                  {item.note && (
                    <p className="text-sm text-[#1B365D]/70 mt-4">{item.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Items Grid */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#1E4D8B] mb-4">More Treasures</h2>
            <p className="text-lg text-[#1B365D]/80">Discover more ways to show your G&S love</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalItems.map((item) => (
              <div key={item.name} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F8F3E6] to-[#1E4D8B]/10">
                  {item.badge && (
                    <div className="absolute top-4 right-4 bg-[#8B4049] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                      {item.badge}
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1E4D8B] mb-2 min-h-[3.5rem]">{item.name}</h3>
                  <p className="text-sm text-[#1B365D]/70 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#8B4049]">{item.price}</span>
                    <a
                      href={item.shopLink}
                      className="bg-[#8B5A8E] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#8B5A8E]/80 transition-colors cursor-pointer"
                    >
                      Shop
                    </a>
                  </div>
                  {item.note && (
                    <p className="text-xs text-[#1B365D]/70 mt-4 italic">{item.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Videos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Play className="w-6 h-6 text-[#8B2F39]" />
              <h2 className="text-4xl font-serif text-[#1E4D8B]">Digital Videos</h2>
              <Play className="w-6 h-6 text-[#8B2F39]" />
            </div>
            <p className="text-lg text-[#1B365D]/80">Watch and own your favorite GSA productions</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalVideos.map((video) => (
              <div 
                key={video.title} 
                className={`group rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full ${
                  video.isAwardWinning 
                    ? 'bg-gradient-to-br from-[#C9A961]/10 via-white to-[#0D9488]/10' 
                    : 'bg-white'
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <button
                      onClick={() => setSelectedVideo(video.previewUrl)}
                      className="bg-white/90 backdrop-blur-sm text-[#1E4D8B] w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all"
                      aria-label={`Watch preview of ${video.title}`}
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-[#8B2F39] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {video.year}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {video.duration}
                  </div>
                  {video.isAwardWinning && (
                    <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#C9A961] to-[#0D9488] text-white px-3 py-2 rounded-full text-xs font-bold text-center shadow-xl">
                      🏆 Award-Winning Production
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl text-[#1E4D8B] mb-3 font-semibold">{video.title}</h3>
                  {video.isAwardWinning && video.awards && (
                    <div className="mb-3 bg-gradient-to-r from-[#0D9488]/20 to-[#C9A961]/20 border-l-4 border-[#0D9488] px-3 py-2 rounded">
                      <p className="text-xs font-semibold text-[#0D9488] uppercase tracking-wide">
                        {video.awards}
                      </p>
                      <p className="text-xs text-[#1B365D]/70 mt-0.5">
                        For excellence in Austin theatre
                      </p>
                    </div>
                  )}
                  <p className="text-[#1B365D]/80 mb-6 leading-relaxed flex-grow">{video.description}</p>
                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <span className="text-3xl font-bold text-[#8B4049]">{video.price}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedVideo(video.previewUrl)}
                        className="bg-[#F8F3E6] text-[#1E4D8B] px-4 py-2 rounded-full font-semibold hover:bg-[#C9A961]/20 transition-colors text-sm border-2 border-[#1E4D8B]/10"
                      >
                        Preview
                      </button>
                      <a
                        href={video.purchaseUrl}
                        className="bg-[#8B5A8E] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#8B5A8E]/80 transition-colors text-sm"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Preview Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video bg-black">
                <iframe
                  src={selectedVideo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video Preview"
                />
              </div>
              <div className="p-6 bg-[#F8F3E6]">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-full bg-[#1E4D8B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1E4D8B]/90 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Books & Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#8B2F39]" />
              <h2 className="text-4xl font-serif text-[#1E4D8B]">Books & Resources</h2>
              <BookOpen className="w-6 h-6 text-[#8B2F39]" />
            </div>
            <p className="text-lg text-[#1B365D]/80">Dive deeper into the world of Gilbert & Sullivan</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Featured Books */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-serif text-[#8B5A8E] mb-2">Featured Books</h3>
                <p className="text-[#1B365D]/70">Our top recommendations for G&S enthusiasts</p>
              </div>

              {/* Only Idle Chatter */}
              <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#8B5A8E]">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden bg-gradient-to-br from-[#8B5A8E]/10 to-[#C9A961]/10 flex items-center justify-center p-8">
                    <div className="absolute top-4 right-4 bg-[#8B5A8E] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                      Essential Resource
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80"
                      alt="Only Idle Chatter by Ralph MacPhail Jr."
                      className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
                    />
                  </div>
                  
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif text-[#1E4D8B] mb-4">
                      Only Idle Chatter
                    </h3>
                    <p className="text-[#8B2F39] font-semibold mb-4 text-lg">A Compendium of Theatrical Wisdom from Ralph MacPhail Jr.</p>
                    <p className="text-[#1B365D] leading-relaxed mb-6">
                      Dive into the insights and reflections of one of Gilbert & Sullivan's most respected voices. Ralph MacPhail Jr., GSA's Artistic Director Emeritus, shares decades of theatrical wisdom, production insights, and deep knowledge of the Savoy operas in this essential resource for performers and enthusiasts.
                    </p>
                    
                    <div className="bg-[#F8F3E6] p-4 rounded-lg mb-4 border-l-4 border-[#C9A961]">
                      <p className="text-sm text-[#1B365D]/80 italic">
                        By Ralph MacPhail Jr. • GSA Artistic Director Emeritus
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#8B5A8E]/10 to-[#C9A961]/10 p-4 rounded-lg mb-4 border-l-4 border-[#8B5A8E]">
                      <p className="text-sm text-[#1B365D] leading-relaxed italic">
                        From the man who has shaped GSA's artistic vision for decades — invaluable perspectives on bringing Gilbert & Sullivan to life on stage.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-[#9B8FC7] to-[#B8A8D9] p-4 rounded-lg mb-6 border-l-4 border-[#8B5A8E]">
                      <p className="text-sm text-white font-semibold leading-relaxed">
                        💜 All proceeds benefit the Libby Weed Scholarship Fund
                      </p>
                      <p className="text-xs text-white/90 mt-1">
                        Your purchase directly supports aspiring performers
                      </p>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-bold text-[#8B2F39]">$30</span>
                      <div className="text-right text-sm text-[#1B365D]/60">
                        <p>Available on Amazon</p>
                      </div>
                    </div>

                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#8B5A8E] to-[#C9A961] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
                    >
                      Buy on Amazon
                    </a>
                    
                    <p className="text-xs text-[#1B365D]/50 mt-4 text-center">
                      As an Amazon Associate, GSA earns from qualifying purchases
                    </p>
                  </div>
                </div>
              </div>

              {/* Æesthetic Movement Satire */}
              <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#C9A961]">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden bg-gradient-to-br from-[#C9A961]/10 to-[#8B5A8E]/10 flex items-center justify-center p-8">
                    <div className="absolute top-4 right-4 bg-[#C9A961] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                      Dramatic Anthology
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                      alt="Æesthetic Movement Satire: A Dramatic Anthology"
                      className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
                    />
                  </div>
                  
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif text-[#1E4D8B] mb-4">
                      Æesthetic Movement Satire: A Dramatic Anthology
                    </h3>
                    <p className="text-[#8B2F39] font-semibold mb-4 text-lg">Essential Context for <em>Patience</em> Enthusiasts</p>
                    <p className="text-[#1B365D] leading-relaxed mb-6">
                      Explore the cultural phenomenon that inspired Gilbert & Sullivan's <em>Patience</em>. This comprehensive anthology, edited by Devon Cox, brings together the dramatic works that both celebrated and satirized the Aesthetic Movement, providing invaluable context for understanding one of G&S's most culturally significant operas.
                    </p>
                    
                    <div className="bg-[#F8F3E6] p-4 rounded-lg mb-4 border-l-4 border-[#C9A961]">
                      <p className="text-sm text-[#1B365D]/80 italic">
                        Edited by Devon Cox
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#C9A961]/10 to-[#8B5A8E]/10 p-4 rounded-lg mb-6 border-l-4 border-[#C9A961]">
                      <p className="text-sm text-[#1B365D] leading-relaxed italic">
                        Reviewed by <strong>Ralph MacPhail, Jr.</strong>, GSA Artistic Director Emeritus
                      </p>
                      <p className="text-xs text-[#1B365D]/70 mt-1">
                        Sixty-Second Book Reviews, #31
                      </p>
                      <a href="#" className="text-[#C9A961] text-xs font-semibold hover:underline mt-1 inline-block">
                        Read Rafe's full review →
                      </a>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-bold text-[#8B2F39]">$32</span>
                      <div className="text-right text-sm text-[#1B365D]/60">
                        <p>Available on Amazon</p>
                      </div>
                    </div>

                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#C9A961] to-[#8B5A8E] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
                    >
                      Buy on Amazon
                    </a>
                    
                    <p className="text-xs text-[#1B365D]/50 mt-4 text-center">
                      As an Amazon Associate, GSA earns from qualifying purchases
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* More Books - Expandable Section */}
            <div className="space-y-6">
              <div className="text-center">
                <button
                  onClick={() => setShowMoreBooks(!showMoreBooks)}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#1E4D8B] to-[#8B5A8E] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  {showMoreBooks ? (
                    <>
                      <ChevronUp className="w-5 h-5" />
                      Show Fewer Books
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" />
                      Explore More Books
                    </>
                  )}
                </button>
              </div>

              {showMoreBooks && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  {/* The Complete Annotated Gilbert & Sullivan */}
                  <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#C9A961]">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden bg-gradient-to-br from-[#F8F3E6] to-[#C9A961]/20 flex items-center justify-center p-8">
                        <div className="absolute top-4 right-4 bg-[#8B2F39] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                          20th Anniversary
                        </div>
                        <img 
                          src={annotatedBookImage}
                          alt="The Complete Annotated Gilbert & Sullivan"
                          className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
                        />
                      </div>
                      
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-3xl font-serif text-[#1E4D8B] mb-4">
                          The Complete Annotated Gilbert & Sullivan
                        </h3>
                        <p className="text-[#8B2F39] font-semibold mb-4 text-lg">20th Anniversary Edition</p>
                        <p className="text-[#1B365D] leading-relaxed mb-6">
                          The definitive resource for G&S enthusiasts! This comprehensive volume features all 14 operas with detailed annotations, historical context, and beautiful illustrations. A must-have for performers, scholars, and fans alike.
                        </p>
                        
                        <div className="bg-[#F8F3E6] p-4 rounded-lg mb-6 border-l-4 border-[#C9A961]">
                          <p className="text-sm text-[#1B365D]/80 italic">
                            Introduction and notes by Ian Bradley
                          </p>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <span className="text-4xl font-bold text-[#8B2F39]">$45</span>
                          <div className="text-right text-sm text-[#1B365D]/60">
                            <p>Available on Amazon</p>
                          </div>
                        </div>

                        <a
                          href="https://www.amazon.com/Complete-Annotated-Gilbert-Sullivan-Anniversary/dp/0199392420"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-[#C9A961] to-[#1E4D8B] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
                        >
                          Buy on Amazon
                        </a>
                        
                        <p className="text-xs text-[#1B365D]/50 mt-4 text-center">
                          As an Amazon Associate, GSA earns from qualifying purchases
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* The Lost Heirs */}
                  <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#C9A961]">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden bg-gradient-to-br from-[#1E4D8B]/10 to-[#8B5A8E]/10 flex items-center justify-center p-8">
                        <div className="absolute top-4 right-4 bg-[#1E4D8B] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                          New Release
                        </div>
                        <img 
                          src={lostHeirsBookImage}
                          alt="The Lost Heirs"
                          className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
                        />
                      </div>
                      
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-3xl font-serif text-[#1E4D8B] mb-4">
                          The Lost Heirs
                        </h3>
                        <p className="text-[#8B2F39] font-semibold mb-4 text-lg">The Rise and Fall of the D'Oyly Carte Dynasty</p>
                        <p className="text-[#1B365D] leading-relaxed mb-6">
                          A fascinating exploration of the D'Oyly Carte family and their profound influence on Gilbert & Sullivan's legacy. This compelling narrative traces the dynasty that brought these beloved operas to generations of audiences worldwide.
                        </p>
                        
                        <div className="bg-[#F8F3E6] p-4 rounded-lg mb-4 border-l-4 border-[#C9A961]">
                          <p className="text-sm text-[#1B365D]/80 italic">
                            By James W Stebbings • Paperback • April 28, 2025
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#1E4D8B]/10 to-[#8B5A8E]/10 p-4 rounded-lg mb-6 border-l-4 border-[#1E4D8B]">
                          <p className="text-sm text-[#1B365D] leading-relaxed italic">
                            "A remarkable achievement..." — <strong>Ralph MacPhail, Jr.</strong>, GSA Artistic Director Emeritus
                          </p>
                          <a href="#" className="text-[#3B5F5A] text-xs font-semibold hover:underline mt-1 inline-block">
                            Read Rafe's full review →
                          </a>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <span className="text-4xl font-bold text-[#8B2F39]">$25</span>
                          <div className="text-right text-sm text-[#1B365D]/60">
                            <p>Available on Amazon</p>
                          </div>
                        </div>

                        <a
                          href="https://www.amazon.com/Lost-Heirs-James-W-Stebbings/dp/1836286392"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#3B5F5A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3B5F5A]/80 hover:shadow-xl transition-all transform hover:scale-105 text-center"
                        >
                          Buy on Amazon
                        </a>
                        
                        <p className="text-xs text-[#1B365D]/50 mt-4 text-center">
                          As an Amazon Associate, GSA earns from qualifying purchases
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Frederic Sullivan */}
                  <div className="bg-gradient-to-br from-[#F8F3E6] to-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#C9A961]">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden bg-gradient-to-br from-[#1E4D8B]/10 to-[#0D9488]/10 flex items-center justify-center p-8">
                        <div className="absolute top-4 right-4 bg-[#0D9488] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                          Historical Biography
                        </div>
                        <img 
                          src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&q=80"
                          alt="Frederic Sullivan: The Original Learned Judge"
                          className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
                        />
                      </div>
                      
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-3xl font-serif text-[#1E4D8B] mb-4">
                          Frederic Sullivan: The Original Learned Judge
                        </h3>
                        <p className="text-[#8B2F39] font-semibold mb-4 text-lg">A Biography of W.S. Gilbert's Brother-in-Law</p>
                        <p className="text-[#1B365D] leading-relaxed mb-6">
                          Discover the fascinating life of Frederic Sullivan, the original Learned Judge in <em>Trial by Jury</em> and brother to Arthur Sullivan. This meticulously researched biography by Elaine Richardson reveals the story of the man who created one of Gilbert & Sullivan's most iconic roles and his significant influence on the early Savoy operas.
                        </p>
                        
                        <div className="bg-[#F8F3E6] p-4 rounded-lg mb-4 border-l-4 border-[#C9A961]">
                          <p className="text-sm text-[#1B365D]/80 italic">
                            By Elaine Richardson
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#0D9488]/10 to-[#1E4D8B]/10 p-4 rounded-lg mb-6 border-l-4 border-[#0D9488]">
                          <p className="text-sm text-[#1B365D] leading-relaxed italic">
                            Reviewed by <strong>Ralph MacPhail, Jr.</strong>, GSA Artistic Director Emeritus
                          </p>
                          <a href="#" className="text-[#0D9488] text-xs font-semibold hover:underline mt-1 inline-block">
                            Read Rafe's full review →
                          </a>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <span className="text-4xl font-bold text-[#8B2F39]">$28</span>
                          <div className="text-right text-sm text-[#1B365D]/60">
                            <p>Available on Amazon</p>
                          </div>
                        </div>

                        <a
                          href="https://www.amazon.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-[#0D9488] to-[#1E4D8B] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
                        >
                          Buy on Amazon
                        </a>
                        
                        <p className="text-xs text-[#1B365D]/50 mt-4 text-center">
                          As an Amazon Associate, GSA earns from qualifying purchases
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* New to G&S? - Intro Books Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-serif text-[#0D9488] mb-2">New to Gilbert & Sullivan?</h3>
                <p className="text-[#1B365D]/70">Perfect introductions for newcomers</p>
              </div>

              {/* Asimov's Annotated Gilbert & Sullivan */}
              <div className="bg-gradient-to-br from-[#0D9488]/5 to-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#0D9488]">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden bg-gradient-to-br from-[#0D9488]/10 to-[#1E4D8B]/10 flex items-center justify-center p-8">
                    <div className="absolute top-4 right-4 bg-[#0D9488] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                      Beginner-Friendly
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80"
                      alt="Asimov's Annotated Gilbert and Sullivan"
                      className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
                    />
                  </div>
                  
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-serif text-[#1E4D8B] mb-4">
                      Asimov's Annotated Gilbert and Sullivan
                    </h3>
                    <p className="text-[#8B2F39] font-semibold mb-4 text-lg">The Perfect Introduction to the Savoy Operas</p>
                    <p className="text-[#1B365D] leading-relaxed mb-6">
                      Science fiction legend Isaac Asimov brings his trademark wit and encyclopedic knowledge to the world of Gilbert & Sullivan. This accessible, entertaining guide makes the operas come alive with historical context, literary references, and Asimov's delightful commentary—perfect for newcomers and longtime fans alike.
                    </p>
                    
                    <div className="bg-[#F8F3E6] p-4 rounded-lg mb-4 border-l-4 border-[#0D9488]">
                      <p className="text-sm text-[#1B365D]/80 italic">
                        By Isaac Asimov
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#0D9488]/10 to-[#1E4D8B]/10 p-4 rounded-lg mb-6 border-l-4 border-[#0D9488]">
                      <p className="text-sm text-[#1B365D] leading-relaxed">
                        <strong>Why it's great for beginners:</strong> Asimov's conversational style and clear explanations make complex Victorian references easy to understand and enjoyable to discover.
                      </p>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-bold text-[#8B2F39]">$35</span>
                      <div className="text-right text-sm text-[#1B365D]/60">
                        <p>Available on Amazon</p>
                      </div>
                    </div>

                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-[#0D9488] to-[#1E4D8B] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
                    >
                      Buy on Amazon
                    </a>
                    
                    <p className="text-xs text-[#1B365D]/50 mt-4 text-center">
                      As an Amazon Associate, GSA earns from qualifying purchases
                    </p>
                  </div>
                </div>
              </div>
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
          <ShoppingBag className="w-16 h-16 text-[#C9A961] mx-auto mb-6" />
          <h2 className="text-4xl font-serif mb-4">Your Purchase Makes a Difference</h2>
          <p className="text-xl text-[#F8F3E6]/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Every item you buy directly supports our talented performers, funds new productions, 
            and helps us share the joy of Gilbert & Sullivan with Austin for another 50 years!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@gilbertsullivan.org"
              className="bg-[#C9A961] text-[#1E4D8B] px-10 py-4 rounded-full hover:bg-white transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Email to Order
            </a>
            <a
              href="tel:+15124724772"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full hover:bg-white hover:text-[#1E4D8B] transition-all font-semibold text-lg"
            >
              Call 512-472-4772
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}