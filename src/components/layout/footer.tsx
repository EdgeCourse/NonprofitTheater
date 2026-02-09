import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Page } from '../../App';
import logo from 'figma:asset/3a8cd1be39b1b6a508a1e841dda37b5a746b9cf4.png';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    About: [
      { label: 'Our Story', page: 'about' as Page },
      { label: '50 Year History', page: 'history' as Page },
      { label: 'Awards & Recognition', page: 'awards' as Page },
      { label: 'Board of Directors', page: 'about' as Page },
    ],
    'Get Involved': [
      { label: 'Audition', page: 'auditions' as Page },
      { label: 'Volunteer', page: 'about' as Page },
      { label: 'Membership', page: 'about' as Page },
      { label: 'Scholarships', page: 'scholarships' as Page },
    ],
    Productions: [
      { label: 'Current Season', page: 'productions' as Page },
      { label: 'Show Archive', page: 'archive' as Page },
      { label: '50th Anniversary Gala', page: 'gala' as Page },
      { label: 'Merchandise', page: 'merchandise' as Page },
    ],
    Resources: [
      { label: 'New to G&S?', page: 'new-to-gs' as Page },
      { label: 'Press Kit', page: 'press-kit' as Page },
      { label: 'The Mikado / The McAdo Resources', page: 'mikado-resources' as Page },
      { label: 'Wand\'ring Minstrels Outreach', page: 'outreach' as Page },
      { label: 'Corporate Sponsors', page: 'sponsors' as Page },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/gilbertsullivanaustin/', label: 'Facebook', color: '#1877F2' },
    { icon: Instagram, href: 'https://www.instagram.com/gilbertsullivanaustin/', label: 'Instagram', color: '#E4405F' },
    { icon: Youtube, href: 'https://www.youtube.com/c/GilbertSullivanAustin', label: 'YouTube', color: '#FF0000' },
    { icon: Twitter, href: 'https://x.com/GandSofAustin', label: 'X (Twitter)', color: '#000000' },
  ];

  return (
    <footer className="bg-[#1B365D] text-[#F8F3E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#C9A961] p-3 rounded-lg">
                <img src={logo} alt="Gilbert & Sullivan Austin Logo" className="w-10 h-10 rounded-md" />
              </div>
              <span className="text-2xl font-bold text-[#C9A961] font-serif">Gilbert & Sullivan Austin</span>
            </div>
            <p className="text-[#F8F3E6]/80 mb-6 leading-relaxed">
              Austin's premier company for Victorian operetta since 1976. Celebrating 50 years of excellence.
            </p>
            {/* Social Media Links */}
            <div className="mb-6">
              <h3 className="text-[#C9A961] text-sm mb-3">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#C9A961]/20 rounded-full flex items-center justify-center hover:bg-[#C9A961] transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-[#C9A961] group-hover:text-[#1B365D] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <div className="text-white">
                  <div>P.O. Box 684542</div>
                  <div>Austin, Texas 78768</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+15124724772" className="text-white hover:text-[#C9A961] transition-colors block mb-2">
                    512-472-4772
                  </a>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Volunteer working board. Please leave a detailed message with our answering service including a good time to reach you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="text-white mb-1">General Information:</div>
                    <a href="mailto:info@gilbertsullivan.org" className="text-[#C9A961] hover:text-white transition-colors break-all">
                      info@gilbertsullivan.org
                    </a>
                  </div>
                  <div>
                    <div className="text-white mb-1">Wand'ring Minstrels:</div>
                    <a href="mailto:minstrels@gilbertsullivan.org" className="text-[#C9A961] hover:text-white transition-colors break-all">
                      minstrels@gilbertsullivan.org
                    </a>
                  </div>
                  <div>
                    <div className="text-white mb-1">Membership:</div>
                    <a href="mailto:membership@gilbertsullivan.org" className="text-[#C9A961] hover:text-white transition-colors break-all">
                      membership@gilbertsullivan.org
                    </a>
                  </div>
                  <div>
                    <div className="text-white mb-1">Member News:</div>
                    <a href="mailto:news@gilbertsullivan.org" className="text-[#C9A961] hover:text-white transition-colors break-all">
                      news@gilbertsullivan.org
                    </a>
                  </div>
                  <div>
                    <div className="text-white mb-1">Media:</div>
                    <a href="mailto:media@gilbertsullivan.org" className="text-[#C9A961] hover:text-white transition-colors break-all">
                      media@gilbertsullivan.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[#C9A961] font-serif mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-[#F8F3E6]/80 hover:text-[#C9A961] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9A961]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[#F8F3E6]/70 text-sm">
              © {new Date().getFullYear()} Gilbert & Sullivan Austin. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-[#F8F3E6]/60 hover:text-[#C9A961] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#F8F3E6]/60 hover:text-[#C9A961] transition-colors">
                Terms
              </a>
            </div>
          </div>

          {/* Funding Acknowledgment */}
          <div className="mt-6 pt-6 border-t border-[#C9A961]/10">
            <p className="text-[#F8F3E6]/50 text-xs text-center">
              Gilbert & Sullivan Austin is supported in part by the Cultural Arts Division of the City of Austin Economic Development Department 
              and by a grant from the Texas Commission on the Arts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}