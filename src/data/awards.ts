export interface Award {
  year: number;
  production: string;
  category: string;
  nominee: string;
  result: 'Won' | 'Nominated';
  awardOrganization?: 'B. Iden Payne Awards' | 'Austin Critics Table' | 'Central Texas Excellence In Theatre Awards';
}

export const bidenPayneAwards: Award[] = [
  // Iolanthe 2019
  {
    year: 2019,
    production: 'Iolanthe',
    category: 'Featured Actress in Musical Theatre',
    nominee: 'Bethany Ammon',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2019,
    production: 'Iolanthe',
    category: 'Lead Actor in Musical Theatre',
    nominee: 'Arthur DiBianca',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // Ruddigore 2018
  {
    year: 2018,
    production: 'Ruddigore',
    category: 'Outstanding Production of Musical Theatre',
    nominee: 'Ruddigore',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2018,
    production: 'Ruddigore',
    category: 'Direction of a Musical',
    nominee: 'Ralph MacPhail, Jr.',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2018,
    production: 'Ruddigore',
    category: 'Lead Actress in Musical Theatre',
    nominee: 'Corinna Browning',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2018,
    production: 'Ruddigore',
    category: 'Featured Actress in Musical Theatre',
    nominee: 'Shelby Schisler',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2018,
    production: 'Ruddigore',
    category: 'Ensemble Performance',
    nominee: 'Professional Bridesmaids (Bethany Ammon, Bonnie Bogovich, Hannah Cooper, Chantal Freeman, Leann Fryer, Rosa Mondragon Harris, Janette Jones, Ellie Mellen, Iona Olive, Alexandra Roubinek, and Amy Selby)',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Pirates of Penzance 2017
  {
    year: 2017,
    production: 'The Pirates of Penzance',
    category: 'Outstanding Musical Direction',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2017,
    production: 'The Pirates of Penzance',
    category: 'Outstanding Lead Actress in a Musical',
    nominee: 'Suzanne Lis',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2017,
    production: 'The Pirates of Penzance',
    category: 'Outstanding Lead Actor in a Musical',
    nominee: 'Sam Johnson',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2017,
    production: 'The Pirates of Penzance',
    category: 'Outstanding Featured Actor in a Musical',
    nominee: 'Arthur DiBianca',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Gondoliers 2016 - B. Iden Payne Awards
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Outstanding Production Musical Theatre',
    nominee: 'The Gondoliers',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Outstanding Direction Musical Theatre',
    nominee: 'Michelle Haché',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Outstanding Music Direction',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Outstanding Featured Actor Musical Theatre',
    nominee: 'Arthur DiBianca',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Outstanding Featured Actress Musical Theatre',
    nominee: 'Corinna Browning',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Gondoliers 2016 - Central Texas Excellence In Theatre Awards
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Best Production of a Musical',
    nominee: 'The Gondoliers',
    result: 'Nominated',
    awardOrganization: 'Central Texas Excellence In Theatre Awards',
  },
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Best Supporting Actor in a Musical',
    nominee: 'Arthur DiBianca',
    result: 'Nominated',
    awardOrganization: 'Central Texas Excellence In Theatre Awards',
  },
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Best Supporting Actress in a Musical',
    nominee: 'Corinna Browning',
    result: 'Nominated',
    awardOrganization: 'Central Texas Excellence In Theatre Awards',
  },
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Best Scenic Design',
    nominee: 'Ann Marie Gordon',
    result: 'Nominated',
    awardOrganization: 'Central Texas Excellence In Theatre Awards',
  },
  {
    year: 2016,
    production: 'The Gondoliers',
    category: 'Best Sound Design',
    nominee: 'Matt M.',
    result: 'Nominated',
    awardOrganization: 'Central Texas Excellence In Theatre Awards',
  },

  // The Sorcerer 2015 - B. Iden Payne Awards
  {
    year: 2015,
    production: 'The Sorcerer',
    category: 'Outstanding Music Direction',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Sorcerer 2015 - Central Texas Excellence In Theatre Awards
  {
    year: 2015,
    production: 'The Sorcerer',
    category: 'Best Direction of a Musical',
    nominee: 'Ralph MacPhail Jr.',
    result: 'Nominated',
    awardOrganization: 'Central Texas Excellence In Theatre Awards',
  },
  {
    year: 2015,
    production: 'The Sorcerer',
    category: 'Best Musical Direction',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'Central Texas Excellence In Theatre Awards',
  },
  {
    year: 2015,
    production: 'The Sorcerer',
    category: 'Best Actress in a Musical',
    nominee: 'Alexandra Reilman',
    result: 'Nominated',
    awardOrganization: 'Central Texas Excellence In Theatre Awards',
  },

  // H.M.S. Pinafore 2014
  {
    year: 2014,
    production: 'H.M.S. Pinafore',
    category: 'Outstanding Music Direction',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2014,
    production: 'H.M.S. Pinafore',
    category: 'Outstanding Lead Actress in Musical Theater',
    nominee: 'Carol Brown',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2014,
    production: 'H.M.S. Pinafore',
    category: 'Outstanding Featured Actor in Musical Theater',
    nominee: 'Russell Gregory',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // Princess Ida 2013
  {
    year: 2013,
    production: 'Princess Ida',
    category: 'Outstanding Music Direction',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2013,
    production: 'Princess Ida',
    category: 'Lead Actress in Music Theater',
    nominee: 'Michelle Haché',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // Patience 2012
  {
    year: 2012,
    production: 'Patience',
    category: 'Production of Music Theater',
    nominee: 'Company',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2012,
    production: 'Patience',
    category: 'Lead Actor in Music Theater',
    nominee: 'Arthur DiBianca',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2012,
    production: 'Patience',
    category: 'Featured Actress in Music Theater',
    nominee: 'Janette Jones',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Mikado 2011
  {
    year: 2011,
    production: 'The Mikado',
    category: 'Lead Actor in Music Theater',
    nominee: 'Arthur DiBianca',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Yeomen of the Guard 2010
  {
    year: 2010,
    production: 'The Yeomen of the Guard',
    category: 'Production of Music Theater',
    nominee: 'Company',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2010,
    production: 'The Yeomen of the Guard',
    category: 'Director of Music Theater',
    nominee: 'Ralph MacPhail, Jr.',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2010,
    production: 'The Yeomen of the Guard',
    category: 'Music Director',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2010,
    production: 'The Yeomen of the Guard',
    category: 'Lead Actress in Music Theater',
    nominee: 'Michelle Haché',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2010,
    production: 'The Yeomen of the Guard',
    category: 'Lead Actress in Music Theater',
    nominee: 'Patricia Combs',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2010,
    production: 'The Yeomen of the Guard',
    category: 'Lead Actor in Music Theater',
    nominee: 'Holton Johnson',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2010,
    production: 'The Yeomen of the Guard',
    category: 'Featured Actor in Music Theater',
    nominee: 'David Fontenot',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // Iolanthe 2009
  {
    year: 2009,
    production: 'Iolanthe',
    category: 'Dance Choreographer',
    nominee: 'Ralph MacPhail, Jr.',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2009,
    production: 'Iolanthe',
    category: 'Featured Actor in Music Theater',
    nominee: 'Arthur DiBianca',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // Ruddigore 2007
  {
    year: 2007,
    production: 'Ruddigore',
    category: 'Music Director',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2007,
    production: 'Ruddigore',
    category: 'Lead Actress in Music Theater',
    nominee: 'Glay Marie Posch',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Pirates of Penzance 2003 - B. Iden Payne Awards
  {
    year: 2003,
    production: 'The Pirates of Penzance',
    category: 'Production of Music Theater',
    nominee: 'Company',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2003,
    production: 'The Pirates of Penzance',
    category: 'Director of Music Theater',
    nominee: 'Ralph MacPhail, Jr.',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2003,
    production: 'The Pirates of Penzance',
    category: 'Music Director',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2003,
    production: 'The Pirates of Penzance',
    category: 'Actress in Music Theater',
    nominee: 'Claire Vangelisti',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2003,
    production: 'The Pirates of Penzance',
    category: 'Actor in Music Theater',
    nominee: 'Holton Johnson',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 2003,
    production: 'The Pirates of Penzance',
    category: 'Actor in Music Theater',
    nominee: 'Russell Gregory',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Pirates of Penzance 2003 - Austin Critics Table
  {
    year: 2003,
    production: 'The Pirates of Penzance',
    category: 'Musical Production',
    nominee: 'Company',
    result: 'Nominated',
    awardOrganization: 'Austin Critics Table',
  },
  {
    year: 2003,
    production: 'The Pirates of Penzance',
    category: 'Actress in a Musical',
    nominee: 'Claire Vangelisti',
    result: 'Nominated',
    awardOrganization: 'Austin Critics Table',
  },

  // H.M.S. Pinafore 2000 - Austin Critics Table
  {
    year: 2000,
    production: 'H.M.S. Pinafore',
    category: 'Actress in a Musical',
    nominee: 'Claire Vangelisti',
    result: 'Nominated',
    awardOrganization: 'Austin Critics Table',
  },
  {
    year: 2000,
    production: 'H.M.S. Pinafore',
    category: 'Actor in a Musical',
    nominee: 'Dan Girardot',
    result: 'Nominated',
    awardOrganization: 'Austin Critics Table',
  },

  // Patience 1999 - Austin Critics Table
  {
    year: 1999,
    production: 'Patience',
    category: 'Director of Music Theater',
    nominee: 'Ralph MacPhail, Jr.',
    result: 'Nominated',
    awardOrganization: 'Austin Critics Table',
  },

  // The Mikado 1998 - B. Iden Payne Awards
  {
    year: 1998,
    production: 'The Mikado',
    category: 'Production of Music Theater',
    nominee: 'Company',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 1998,
    production: 'The Mikado',
    category: 'Director of Music Theater',
    nominee: 'Ralph MacPhail, Jr.',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 1998,
    production: 'The Mikado',
    category: 'Music Director',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 1998,
    production: 'The Mikado',
    category: 'Lead Actress in Music Theater',
    nominee: 'Amy Baker Stinson',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 1998,
    production: 'The Mikado',
    category: 'Lead Actor in Music Theater',
    nominee: 'Dan Girardot',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // The Mikado 1998 - Austin Critics Table
  {
    year: 1998,
    production: 'The Mikado',
    category: 'Musical Production',
    nominee: 'Company',
    result: 'Nominated',
    awardOrganization: 'Austin Critics Table',
  },
  {
    year: 1998,
    production: 'The Mikado',
    category: 'Director of a Musical',
    nominee: 'Ralph MacPhail, Jr.',
    result: 'Nominated',
    awardOrganization: 'Austin Critics Table',
  },
  {
    year: 1998,
    production: 'The Mikado',
    category: 'Actress in a Musical',
    nominee: 'Amy Baker Stinson',
    result: 'Nominated',
    awardOrganization: 'Austin Critics Table',
  },

  // The Gondoliers 1995
  {
    year: 1995,
    production: 'The Gondoliers',
    category: 'Supporting Actor in a Musical',
    nominee: 'Frank Delvy',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },
  {
    year: 1995,
    production: 'The Gondoliers',
    category: 'Supporting Actress in a Musical',
    nominee: 'Janette Jones',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // H.M.S. Pinafore 1994
  {
    year: 1994,
    production: 'H.M.S. Pinafore',
    category: 'Music Director',
    nominee: 'Jeffrey Jones-Ragona',
    result: 'Nominated',
    awardOrganization: 'B. Iden Payne Awards',
  },

  // Iolanthe 1993
  {
    year: 1993,
    production: 'Iolanthe',
    category: 'Lead Actor in Music Theater',
    nominee: 'Frank Delvy',
    result: 'Won',
    awardOrganization: 'B. Iden Payne Awards',
  },
];
