// Playbill data extracted from historical GSA playbills
// This provides additional context about each production including cast, directors, and details

export interface PlaybillData {
  slug: string;
  title_guess: string;
  year_guess: number;
  pdf_filename: string;
  pdf_path: string;
  thumbnail: string;
  sections: {
    [key: string]: string[];
  };
  people: {
    directors: string[];
    cast: string[];
    production_team: string[];
    orchestra: string[];
  };
}

export const playbillsData: PlaybillData[] = [
  {
    slug: "1976-pinafore",
    title_guess: "H.M.S. Pinafore",
    year_guess: 1976,
    pdf_filename: "1976_Pinafore_Playbill.pdf",
    pdf_path: "gsa_playbills/1976_Pinafore_Playbill.pdf",
    thumbnail: "site/images/1976-pinafore.png",
    sections: { unsectioned: [] },
    people: { directors: [], cast: [], production_team: [], orchestra: [] }
  },
  {
    slug: "2009-iolanthe",
    title_guess: "Iolanthe",
    year_guess: 2009,
    pdf_filename: "Iolanthe2009_Playbill.pdf",
    pdf_path: "gsa_playbills/Iolanthe2009_Playbill.pdf",
    thumbnail: "site/images/2009-iolanthe.png",
    sections: {
      unsectioned: [
        "This one's for you, Frank",
        "The Gilbert & Sullivan Society of Austin proudly dedicates this production of Iolanthe to the memory of our beloved friend Frank Delvy"
      ]
    },
    people: {
      directors: [
        "Stage Director and Choreographer: Ralph MacPhail, Jr.",
        "Music Director and Conductor: Jeffrey Jones-Ragona",
        "Producer: Allan Longacre"
      ],
      cast: [],
      production_team: [],
      orchestra: []
    }
  },
  // Add more as needed - this is a starter structure
];

// Helper function to get playbill data by year and title
export function getPlaybillByShow(year: number, title: string): PlaybillData | undefined {
  return playbillsData.find(p => 
    p.year_guess === year && 
    p.title_guess.toLowerCase().includes(title.toLowerCase())
  );
}
