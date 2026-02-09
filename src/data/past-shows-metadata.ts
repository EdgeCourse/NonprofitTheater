export interface ProductionMetadata {
  id: string;
  show: string;
  year: number;
  is_summer: boolean;
  is_grand_production: boolean;
  key_staff: {
    director?: string[];
    music_director?: string[];
    choreographer?: string[];
  };
}

// Create a map for easy lookup by production ID
export const productionMetadataMap: Record<string, { isSummerShow: boolean; isGrandProduction: boolean }> = {
  "1976-pinafore": { isSummerShow: false, isGrandProduction: true },
  "1978-iolanthe": { isSummerShow: false, isGrandProduction: true },
  "1978-mikado": { isSummerShow: true, isGrandProduction: true },
  "1980-patience": { isSummerShow: false, isGrandProduction: true },
  "1981-evening": { isSummerShow: false, isGrandProduction: false },
  "1982-trial-capcity": { isSummerShow: false, isGrandProduction: false },
  "1982-trial-zstc": { isSummerShow: false, isGrandProduction: false },
  "1983-gondoliers": { isSummerShow: false, isGrandProduction: true },
  "1985-ruddigore": { isSummerShow: false, isGrandProduction: true },
  "1987-sampler": { isSummerShow: false, isGrandProduction: false },
  "1988-trial": { isSummerShow: false, isGrandProduction: false },
  "1989-pinafore": { isSummerShow: false, isGrandProduction: true },
  "1989-sorcerer": { isSummerShow: false, isGrandProduction: true },
  "1990-patience": { isSummerShow: false, isGrandProduction: true },
  "1990-ruddygore": { isSummerShow: false, isGrandProduction: true },
  "1991-pirates": { isSummerShow: false, isGrandProduction: true },
  "1992-mikado": { isSummerShow: true, isGrandProduction: true },
  "1993-iolanthe": { isSummerShow: false, isGrandProduction: true },
  "1994-pinafore": { isSummerShow: false, isGrandProduction: true },
  "1995-gondoliers": { isSummerShow: false, isGrandProduction: true },
  "2001-sorcerer": { isSummerShow: false, isGrandProduction: true },
  "2002-trial": { isSummerShow: false, isGrandProduction: false },
  "2003-pirates": { isSummerShow: false, isGrandProduction: true },
  "2004-gondoliers": { isSummerShow: false, isGrandProduction: true },
  "2005-mikado": { isSummerShow: true, isGrandProduction: true },
  "2006-pinafore": { isSummerShow: true, isGrandProduction: true },
  "2007-ruddigore": { isSummerShow: false, isGrandProduction: true },
  "2008-pirates": { isSummerShow: false, isGrandProduction: true },
  "2009-iolanthe": { isSummerShow: false, isGrandProduction: true },
  "2010-yeomen": { isSummerShow: false, isGrandProduction: true },
  "2011-mikado": { isSummerShow: true, isGrandProduction: true },
  "2013-ida": { isSummerShow: false, isGrandProduction: true },
  "2014-pinafore": { isSummerShow: false, isGrandProduction: true },
  "2015-sorcerer": { isSummerShow: false, isGrandProduction: true },
  "2016-gondoliers": { isSummerShow: false, isGrandProduction: true },
  "2017-pirates": { isSummerShow: false, isGrandProduction: true },
  "2018-ruddigore": { isSummerShow: false, isGrandProduction: true },
  "2019-iolanthe": { isSummerShow: false, isGrandProduction: true },
  "2021-back-on-boards": { isSummerShow: false, isGrandProduction: false },
  "2022-sorcerer-concert": { isSummerShow: false, isGrandProduction: false },
  "2022-mcado": { isSummerShow: true, isGrandProduction: true },
  "2023-mcado": { isSummerShow: true, isGrandProduction: true },
  "2024-yeomen": { isSummerShow: false, isGrandProduction: true },
  "2025-pinafore": { isSummerShow: false, isGrandProduction: true },
};

export const productionMetadata: ProductionMetadata[] = [
  {
    id: "1976-pinafore",
    show: "H.M.S. Pinafore",
    year: 1976,
    is_summer: false,
    is_grand_production: true,
    key_staff: {
      director: [],
      music_director: [],
      choreographer: []
    }
  },
  {
    id: "1978-iolanthe",
    show: "Iolanthe",
    year: 1978,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1978-mikado",
    show: "The Mikado",
    year: 1978,
    is_summer: true,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1980-patience",
    show: "Patience",
    year: 1980,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1981-evening",
    show: "An Evening of Gilbert & Sullivan",
    year: 1981,
    is_summer: false,
    is_grand_production: false,
    key_staff: {}
  },
  {
    id: "1982-trial-capcity",
    show: "Trial by Jury",
    year: 1982,
    is_summer: false,
    is_grand_production: false,
    key_staff: {}
  },
  {
    id: "1982-trial-zstc",
    show: "Trial by Jury",
    year: 1982,
    is_summer: false,
    is_grand_production: false,
    key_staff: {}
  },
  {
    id: "1983-gondoliers",
    show: "The Gondoliers",
    year: 1983,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1985-ruddigore",
    show: "Ruddigore",
    year: 1985,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1987-sampler",
    show: "G&S Sampler",
    year: 1987,
    is_summer: false,
    is_grand_production: false,
    key_staff: {}
  },
  {
    id: "1988-trial",
    show: "Trial by Jury",
    year: 1988,
    is_summer: false,
    is_grand_production: false,
    key_staff: {}
  },
  {
    id: "1989-pinafore",
    show: "H.M.S. Pinafore",
    year: 1989,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1989-sorcerer",
    show: "The Sorcerer",
    year: 1989,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1990-patience",
    show: "Patience",
    year: 1990,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1990-ruddygore",
    show: "Ruddygore",
    year: 1990,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1991-pirates",
    show: "The Pirates of Penzance",
    year: 1991,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1992-mikado",
    show: "The Mikado",
    year: 1992,
    is_summer: true,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1993-iolanthe",
    show: "Iolanthe",
    year: 1993,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1994-pinafore",
    show: "H.M.S. Pinafore",
    year: 1994,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "1995-gondoliers",
    show: "The Gondoliers",
    year: 1995,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2001-sorcerer",
    show: "The Sorcerer",
    year: 2001,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2002-trial",
    show: "Trial by Jury",
    year: 2002,
    is_summer: false,
    is_grand_production: false,
    key_staff: {}
  },
  {
    id: "2003-pirates",
    show: "The Pirates of Penzance",
    year: 2003,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2004-gondoliers",
    show: "The Gondoliers",
    year: 2004,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2005-mikado",
    show: "The Mikado",
    year: 2005,
    is_summer: true,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2006-pinafore",
    show: "H.M.S. Pinafore",
    year: 2006,
    is_summer: true,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2007-ruddigore",
    show: "Ruddigore",
    year: 2007,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2008-pirates",
    show: "The Pirates of Penzance",
    year: 2008,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2009-iolanthe",
    show: "Iolanthe",
    year: 2009,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2010-yeomen",
    show: "The Yeomen of the Guard",
    year: 2010,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2011-mikado",
    show: "The Mikado",
    year: 2011,
    is_summer: true,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2013-ida",
    show: "Princess Ida",
    year: 2013,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2014-pinafore",
    show: "H.M.S. Pinafore",
    year: 2014,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2015-sorcerer",
    show: "The Sorcerer",
    year: 2015,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2016-gondoliers",
    show: "The Gondoliers",
    year: 2016,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2017-pirates",
    show: "The Pirates of Penzance",
    year: 2017,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2018-ruddigore",
    show: "Ruddigore",
    year: 2018,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2019-iolanthe",
    show: "Iolanthe",
    year: 2019,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2021-back-on-boards",
    show: "Back on the Boards",
    year: 2021,
    is_summer: false,
    is_grand_production: false,
    key_staff: {}
  },
  {
    id: "2022-sorcerer-concert",
    show: "The Sorcerer (Concert)",
    year: 2022,
    is_summer: false,
    is_grand_production: false,
    key_staff: {}
  },
  {
    id: "2022-mcado",
    show: "The McAdo",
    year: 2022,
    is_summer: true,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2023-mcado",
    show: "The McAdo",
    year: 2023,
    is_summer: true,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2024-yeomen",
    show: "The Yeomen of the Guard",
    year: 2024,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  },
  {
    id: "2025-pinafore",
    show: "H.M.S. Pinafore",
    year: 2025,
    is_summer: false,
    is_grand_production: true,
    key_staff: {}
  }
];