import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Image as ImageIcon, Award, Mail, Phone, Globe } from 'lucide-react';

export function PressKitPage() {
  const mediaContacts = [
    { icon: Mail, label: 'Press Email', value: 'press@gilbertsullivanaustin.org' },
    { icon: Phone, label: 'Media Inquiries', value: '(512) 472-1150' },
    { icon: Globe, label: 'Website', value: 'www.gilbertsullivanaustin.org' },
  ];

  const downloadSections = [
    {
      title: 'Organization Information',
      items: [
        { name: 'Full Press Kit (PDF)', size: '2.4 MB', icon: FileText },
        { name: 'About GSA - Short (50 words)', size: '12 KB', icon: FileText },
        { name: 'About GSA - Long (250 words)', size: '24 KB', icon: FileText },
        { name: 'Fact Sheet', size: '156 KB', icon: FileText },
        { name: 'Mission Statement', size: '8 KB', icon: FileText },
      ],
    },
    {
      title: 'Logos & Brand Assets',
      items: [
        { name: 'GSA Logo (Gold - PNG)', size: '245 KB', icon: ImageIcon },
        { name: 'GSA Logo (Black - PNG)', size: '198 KB', icon: ImageIcon },
        { name: 'GSA Logo (White - PNG)', size: '186 KB', icon: ImageIcon },
        { name: 'GSA Logo (SVG)', size: '12 KB', icon: ImageIcon },
        { name: 'Brand Color Guide', size: '89 KB', icon: FileText },
      ],
    },
    {
      title: 'Production Photos',
      items: [
        { name: 'H.M.S. Pinafore (2025) - Gallery (ZIP)', size: '45 MB', icon: ImageIcon },
        { name: 'The Yeomen (2024) - Gallery (ZIP)', size: '52 MB', icon: ImageIcon },
        { name: 'The McAdo (2023) - Gallery (ZIP)', size: '38 MB', icon: ImageIcon },
        { name: 'The McAdo (2022) - Gallery (ZIP)', size: '41 MB', icon: ImageIcon },
        { name: 'Historical Archive Photos (ZIP)', size: '125 MB', icon: ImageIcon },
      ],
    },
    {
      title: 'Press Releases',
      items: [
        { name: '50th Anniversary Season Announcement', size: '145 KB', icon: FileText },
        { name: 'H.M.S. Pinafore Production Announcement', size: '128 KB', icon: FileText },
        { name: 'Scholarship Winners 2025', size: '76 KB', icon: FileText },
        { name: '50th Gala Event Announcement', size: '92 KB', icon: FileText },
      ],
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#4A1F2C] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
              Press Kit & Media Resources
            </h1>
            <p className="text-xl text-[#F8F3E6]/80 leading-relaxed mb-8">
              For journalists, reviewers, partners, and the Austin arts community
            </p>
            <button className="bg-[#F1D28A] text-[#0D1B2A] px-8 py-4 rounded-lg hover:bg-[#DCC48E] transition-all font-medium inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Full Press Kit (PDF)
            </button>
          </motion.div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-12 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-[#0D1B2A] mb-6 font-serif text-center">Press Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mediaContacts.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <div className="w-12 h-12 bg-[#F1D28A] rounded-full flex items-center justify-center mx-auto mb-3">
                    <contact.icon className="w-6 h-6 text-[#0D1B2A]" />
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{contact.label}</div>
                  <div className="text-gray-800 font-medium">{contact.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About GSA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-8 font-serif">About Gilbert & Sullivan Austin</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F8F3E6] p-8 rounded-xl"
              >
                <h3 className="text-xl text-[#0D1B2A] mb-4 font-serif">Short Version (50 words)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gilbert & Sullivan Austin is a 50-year-old nonprofit dedicated to producing high-quality performances of the Savoy operas. Through grand productions, concerts, educational programs, and community outreach, GSA brings Victorian operetta to life for modern audiences with exceptional artistry, inclusivity, and a deep commitment to Austin's musical heritage.
                </p>
                <button className="text-[#4A1F2C] hover:text-[#0D1B2A] inline-flex items-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  Download as TXT
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F8F3E6] p-8 rounded-xl"
              >
                <h3 className="text-xl text-[#0D1B2A] mb-4 font-serif">Long Version (250 words)</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  For five decades, Gilbert & Sullivan Austin has enriched Central Texas with imaginative, fully staged productions of the comic operas of W.S. Gilbert and Arthur Sullivan. Founded in 1976 by a passionate group of musicians and theatre lovers, GSA has grown into one of Austin's most enduring performing arts organizations, known for its artistic excellence, handcrafted Victorian design, and vibrant community spirit.
                  <br /><br />
                  Each season features a grand summer production with full orchestra, elaborate sets, original costumes, and casts of local and regional performers. In addition, GSA presents concerts, educational lectures, youth scholarships, and special events that celebrate the legacy and relevance of the Gilbert & Sullivan canon.
                  <br /><br />
                  As a volunteer-powered nonprofit, GSA relies on the dedication of its artists, donors, board members, and audiences to keep this timeless music alive.
                </p>
                <button className="text-[#4A1F2C] hover:text-[#0D1B2A] inline-flex items-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  Download as TXT
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-12 font-serif text-center">Downloadable Resources</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {downloadSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-[#0D1B2A] to-[#4A1F2C] p-6">
                    <h3 className="text-xl text-white font-serif">{section.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-[#F8F3E6] transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 text-[#F1D28A]" />
                            <span className="text-gray-700 group-hover:text-[#0D1B2A]">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500">{item.size}</span>
                            <Download className="w-4 h-4 text-gray-400 group-hover:text-[#F1D28A]" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fact Sheet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-[#0D1B2A] mb-8 font-serif">Fact Sheet</h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#F8F3E6] to-white p-8 rounded-xl border-2 border-[#F1D28A]"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg text-[#4A1F2C] mb-4 font-serif">Organization</h3>
                  <div className="space-y-2 text-gray-700">
                    <div><span className="font-medium">Founded:</span> 1976</div>
                    <div><span className="font-medium">Location:</span> Austin, Texas</div>
                    <div><span className="font-medium">Type:</span> 501(c)(3) Non-Profit</div>
                    <div><span className="font-medium">Website:</span> gilbertsullivanaustin.org</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-[#4A1F2C] mb-4 font-serif">Impact</h3>
                  <div className="space-y-2 text-gray-700">
                    <div><span className="font-medium">Productions:</span> 250+</div>
                    <div><span className="font-medium">Performers:</span> 12,000+</div>
                    <div><span className="font-medium">Annual Scholarships:</span> $6,000</div>
                    <div><span className="font-medium">Awards:</span> 37+ Nominations/Wins</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-[#4A1F2C] mb-4 font-serif">Programming</h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div>• Grand summer production with full orchestra</div>
                    <div>• Salon concerts and special events</div>
                    <div>• Educational programs and dramaturgy</div>
                    <div>• Youth scholarships</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-[#4A1F2C] mb-4 font-serif">Recognition</h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div>• Multiple B. Iden Payne Awards</div>
                    <div>• Global Mikado resource provider</div>
                    <div>• Austin cultural landmark</div>
                    <div>• Volunteer-powered excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-[#F8F3E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-10 h-10 text-[#F1D28A]" />
              <h2 className="text-3xl text-[#0D1B2A] font-serif">Awards & Recognition</h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="space-y-4 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Gilbert & Sullivan Austin has earned extensive recognition from the B. Iden Payne Awards, Austin's premier theatre honors, with notable wins and nominations throughout the organization's history.
                </p>
                <div className="bg-gradient-to-r from-[#F8F3E6] to-white p-6 rounded-lg border-l-4 border-[#C9A961]">
                  <h3 className="text-lg font-semibold text-[#0D1B2A] mb-3">Recent Recognition (2016-2019):</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>The Gondoliers (2016)</strong> – Won Outstanding Production and Outstanding Direction</li>
                    <li>• <strong>Pirates of Penzance (2017)</strong> – 4 nominations including Lead Actress and Music Direction</li>
                    <li>• <strong>Ruddigore (2018)</strong> – Won Lead Actress; 5 total nominations including Outstanding Production</li>
                    <li>• <strong>Iolanthe (2019)</strong> – 2 nominations for Lead and Featured Actor performances</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">
                  GSA's award-winning legacy spans multiple decades, with consistent recognition for artistic excellence, musical direction, performance, and production values. A comprehensive awards history is available for download.
                </p>
              </div>
              <button className="text-[#4A1F2C] hover:text-[#0D1B2A] inline-flex items-center gap-2 font-medium">
                <Download className="w-5 h-5" />
                Download Full Awards List (1993-2019)
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Requirements */}
      <section className="py-12 bg-white border-t-2 border-[#0D1B2A]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm text-gray-600 mb-2">
              All materials © Gilbert & Sullivan Austin. Photos may be used with attribution.
            </p>
            <p className="text-xs text-gray-500">
              Supported in part by the Texas Commission on the Arts and the Cultural Arts Division of the City of Austin Economic Development Department.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}