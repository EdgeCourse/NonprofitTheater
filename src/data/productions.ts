export interface Production {
  id: string;
  title: string;
  year: number;
  description: string;
  director: string;
  dates?: string;
  venue?: string;
  poster?: string;
  featured?: boolean;
  castList?: string[];
  creativeTeam?: { role: string; name: string }[];
  awards?: { category: string; nominee: string; result: 'Won' | 'Nominated' }[];
  galleryImages?: string[];
  status: 'past' | 'current' | 'upcoming';
}

export const productions: Production[] = [
  // UPCOMING
  {
    id: 'patience-2026',
    title: 'Patience',
    year: 2026,
    description: 'Our summer grand production featuring Gilbert and Sullivan\'s witty satire of the aesthetic movement.',
    director: 'Carol Brown',
    dates: 'June 2026',
    venue: 'The Long Center',
    status: 'upcoming',
    featured: true,
  },
  {
    id: 'patience-picnic-2026',
    title: 'Patience Picnic',
    year: 2026,
    description: 'Picnic-style Meet and Greet with the cast!',
    director: 'Carol Brown',
    dates: 'April 2026',
    status: 'upcoming',
  },
  {
    id: 'mezzo-madness-2026',
    title: 'Salon Concert: Mezzo Madness',
    year: 2026,
    description: 'Languish aesthetically at our third salon concert - back by popular demand!',
    dates: 'March 2026',
    status: 'upcoming',
  },
  {
    id: 'annual-meeting-2026',
    title: 'Love is in the Air - Annual Meeting',
    year: 2026,
    description: 'Our annual membership meeting with performances.',
    dates: 'February 2026',
    status: 'upcoming',
  },

  // PAST PRODUCTIONS
  {
    id: 'pinafore-2025',
    title: 'H.M.S. Pinafore',
    year: 2025,
    description: 'A delightful nautical romp full of mistaken identities, class commentary, and memorable melodies.',
    director: 'Carol Brown',
    dates: 'June 2025',
    venue: 'The Long Center',
    status: 'past',
    awards: [
      { category: 'Outstanding Musical Direction', nominee: 'Jeffrey Jones-Ragona', result: 'Nominated' },
      { category: 'Outstanding Ensemble Performance', nominee: 'Full Cast', result: 'Nominated' },
    ],
  },
  {
    id: 'yeomen-2024',
    title: 'The Yeomen of the Guard',
    year: 2024,
    description: 'Gilbert & Sullivan\'s most serious opera, a tale of honor, sacrifice, and love set in the Tower of London.',
    director: 'Liz Fisher',
    dates: 'July 2024',
    venue: 'The Long Center',
    status: 'past',
    awards: [
      { category: 'Outstanding Costume Design', nominee: 'Costume Team', result: 'Won' },
      { category: 'Outstanding Musical Direction', nominee: 'Jeffrey Jones-Ragona', result: 'Nominated' },
    ],
  },
  {
    id: 'mikado-2023',
    title: 'The McAdo (The Mikado)',
    year: 2023,
    description: 'GSA\'s culturally respectful revision of Gilbert & Sullivan\'s beloved operetta, now used globally as a resource.',
    director: 'Michelle Haché',
    dates: 'June 2023',
    venue: 'The Long Center',
    status: 'past',
    awards: [
      { category: 'Outstanding Production', nominee: 'Gilbert & Sullivan Austin', result: 'Nominated' },
    ],
  },
  {
    id: 'mikado-2022',
    title: 'The McAdo (The Mikado)',
    year: 2022,
    description: 'The debut of our revised edition that has since become a global resource for ethical G&S productions.',
    director: 'Michelle Haché',
    dates: 'July 2022',
    venue: 'The Long Center',
    status: 'past',
  },
  {
    id: 'pirates-2021',
    title: 'The Pirates of Penzance',
    year: 2021,
    description: 'A rollicking adventure of duty, piracy, and paradoxes.',
    director: 'Michelle Haché',
    dates: 'August 2021',
    venue: 'The Long Center',
    status: 'past',
  },
  {
    id: 'gondoliers-2019',
    title: 'The Gondoliers',
    year: 2019,
    description: 'A Venetian celebration of egalitarianism, romance, and mistaken royal identities.',
    director: 'Ralph MacPhail Jr.',
    dates: 'July 2019',
    venue: 'The Long Center',
    status: 'past',
  },
  {
    id: 'sorcerer-2018',
    title: 'The Sorcerer',
    year: 2018,
    description: 'A magical love potion wreaks havoc in a proper English village.',
    director: 'Ralph MacPhail Jr.',
    dates: 'June 2018',
    venue: 'The Long Center',
    status: 'past',
  },
  {
    id: 'pirates-2017',
    title: 'The Pirates of Penzance',
    year: 2017,
    description: 'An award-winning production of swashbuckling fun.',
    director: 'Michelle Haché',
    dates: 'June 2017',
    venue: 'The Long Center',
    status: 'past',
  },
  {
    id: 'gondoliers-2016',
    title: 'The Gondoliers',
    year: 2016,
    description: 'A Venetian celebration of egalitarianism, romance, and mistaken royal identities.',
    director: 'Michelle Haché',
    dates: 'June 2016',
    venue: 'The Long Center',
    status: 'past',
    awards: [
      { category: 'Outstanding Production Musical Theatre', nominee: 'The Gondoliers', result: 'Won' },
      { category: 'Outstanding Direction Musical Theatre', nominee: 'Michelle Haché', result: 'Won' },
      { category: 'Outstanding Music Direction', nominee: 'Jeffrey Jones-Ragona', result: 'Nominated' },
      { category: 'Outstanding Featured Actor Musical Theatre', nominee: 'Arthur DiBianca', result: 'Nominated' },
      { category: 'Outstanding Featured Actress Musical Theatre', nominee: 'Corinna Browning', result: 'Nominated' },
    ],
  },
];

export const upcomingProductions = productions.filter(p => p.status === 'upcoming');
export const currentProductions = productions.filter(p => p.status === 'current');
export const pastProductions = productions.filter(p => p.status === 'past');
