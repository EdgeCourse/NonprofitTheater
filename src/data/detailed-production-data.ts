export interface DetailedProduction {
  id: string;
  show: string;
  year: number;
  cast: Array<{
    performer: string;
    role: string;
  }>;
  crew: {
    director?: string[];
    music_director?: string[];
    choreographer?: string[];
    producer?: string[];
    rehearsal_accompanist?: string[];
    stage_manager?: string[];
    assistant_stage_manager?: string[];
    light_board_operator?: string[];
    set_design?: string[];
    set_construction?: string[];
    properties?: string[];
    lighting_design?: string[];
    costume_design?: string[];
    sound_design?: string[];
    set_dressing?: string[];
    house_manager?: string[];
    Box_office_manager?: string[];
    board_liaison?: string[];
    publicity?: string[];
    graphic_design?: string[];
    photographer?: string[];
  };
}

export const detailedProductionData: DetailedProduction[] = [
  {
    id: "2023-mcado",
    show: "The McAdo (The Mikado)",
    year: 2023,
    cast: [
      // Cast data to be added when available
    ],
    crew: {
      director: ["Michelle Haché"],
      music_director: ["Jeffrey Jones-Ragona"]
    }
  },
  {
    id: "2022-mcado",
    show: "The McAdo (The Mikado)",
    year: 2022,
    cast: [
      // Cast data to be added when available
    ],
    crew: {
      director: ["Michelle Haché"],
      music_director: ["Jeffrey Jones-Ragona"]
    }
  },
  {
    id: "2017-pirates",
    show: "The Pirates of Penzance",
    year: 2017,
    cast: [
      { performer: "Sam Johnson", role: "The Pirate King" },
      { performer: "Arthur DiBianca", role: "Samuel" },
      { performer: "David Fontenot", role: "Frederic" },
      { performer: "Russell Gregory", role: "Major General Stanley" },
      { performer: "Suzanne Lis", role: "Mabel" },
      { performer: "Rosa Mondragon Harris", role: "Edith" },
      { performer: "Bethany Ammon", role: "Kate" },
      { performer: "Janette Jones", role: "Isabel" },
      { performer: "Corinna Browning", role: "Ruth" },
      { performer: "Aron Iannotta", role: "Sergeant of Police" }
    ],
    crew: {
      director: ["Michelle Haché"],
      music_director: ["Jeffrey Jones-Ragona"],
      choreographer: ["Lara Haddock"],
      producer: ["Libby Weed"],
      stage_manager: ["Dana Amor Pressley"],
      assistant_stage_manager: ["Angela Yancey"],
      set_design: ["Ia Enstera"],
      properties: ["Suzanne Haché"],
      lighting_design: ["Don Day"],
      costume_design: ["Chantal Sheryl Freeman"],
      sound_design: ["Matt M."],
      house_manager: ["Linda Marshall"],
      Box_office_manager: ["Ann Marie Gordon"],
      board_liaison: ["Reba Gillman"],
      publicity: ["Reba Gillman"],
      graphic_design: ["Dave Dawson"],
      photographer: ["Steve Rogers"]
    }
  },
  {
    id: "2016-gondoliers",
    show: "The Gondoliers",
    year: 2016,
    cast: [
      // Cast data to be added when available
    ],
    crew: {
      director: ["Michelle Haché"],
      music_director: ["Jeffrey Jones-Ragona"]
    }
  },
  {
    id: "2018-ruddigore",
    show: "Ruddigore",
    year: 2018,
    cast: [
      { performer: "Danny Denichilo", role: "Robin Oakapple" },
      { performer: "Jeffrey Elizondo Guerrero", role: "Richard Dauntless" },
      { performer: "David Fontenot", role: "Sir Despard Murgatroyd" },
      { performer: "Arthur DiBianca", role: "Old Adam Goodheart" },
      { performer: "Corinna Browning", role: "Rose Maybud" },
      { performer: "Shelby Schisler", role: "Mad Margaret" },
      { performer: "Janette Jones", role: "Dame Hannah" },
      { performer: "Russell Gregory", role: "Sir Roderic Murgatroyd" },
      { performer: "LeAnn Fryer", role: "Zorah" },
      { performer: "Bethany Ammon", role: "Professional Bridesmaid" },
      { performer: "Bonnie Bogovich", role: "Professional Bridesmaid" },
      { performer: "Hannah Cooper", role: "Professional Bridesmaid" },
      { performer: "Chantal Freeman", role: "Professional Bridesmaid" },
      { performer: "Rosa Mondragon Harris", role: "Professional Bridesmaid" },
      { performer: "Ellie Mellen", role: "Professional Bridesmaid" },
      { performer: "Iona Olive", role: "Professional Bridesmaid" },
      { performer: "Alexandra Roubinek", role: "Professional Bridesmaid" },
      { performer: "Amy Selby", role: "Professional Bridesmaid" }
    ],
    crew: {
      director: ["Ralph MacPhail Jr."],
      music_director: ["Jeffrey Jones-Ragona"],
      choreographer: ["Lara Haddock"],
      producer: ["Libby Weed"],
      stage_manager: ["Dana Amor Pressley"],
      assistant_stage_manager: ["Jacob Rivera"],
      set_design: ["Ann Marie Gordon"],
      properties: ["Suzanne Haché"],
      lighting_design: ["Don Day"],
      costume_design: ["Chantal Sheryl Freeman"],
      sound_design: ["Matt M."],
      house_manager: ["Linda Marshall"],
      Box_office_manager: ["Ann Marie Gordon"],
      board_liaison: ["Reba Gillman"],
      publicity: ["Reba Gillman"],
      graphic_design: ["Dave Dawson"],
      photographer: ["Steve Rogers"]
    }
  },
  {
    id: "2015-sorcerer",
    show: "The Sorcerer",
    year: 2015,
    cast: [
      { performer: "David Fontenot", role: "Sir Marmaduke Pointdextre" },
      { performer: "Daniel Dolan", role: "Alexis" },
      { performer: "Russell Gregory", role: "Dr. Daly" },
      { performer: "Arthur DiBianca", role: "John Wellington Wells" },
      { performer: "Janette Jones", role: "Lady Sangazure" },
      { performer: "Alexandra Reilman", role: "Aline" },
      { performer: "Rosa Mondragon Harris", role: "Mrs. Partlet" },
      { performer: "Leann Fryer", role: "Constance" }
    ],
    crew: {
      director: ["Ralph MacPhail Jr."],
      music_director: ["Jeffrey Jones-Ragona"],
      choreographer: ["Lara Haddock"],
      producer: ["Libby Weed"],
      stage_manager: ["Michele Gisondo Moody"],
      assistant_stage_manager: ["Angela Yancey"],
      set_design: ["Ann Marie Gordon"],
      properties: ["Suzanne Haché"],
      lighting_design: ["Don Day"],
      costume_design: ["Janette Jones"],
      sound_design: ["Matt M."],
      house_manager: ["Linda Marshall"],
      Box_office_manager: ["Ann Marie Gordon"],
      board_liaison: ["Reba Gillman"],
      publicity: ["Reba Gillman"],
      graphic_design: ["Dave Dawson"],
      photographer: ["Steve Rogers"]
    }
  },
  {
    id: "2011-mikado",
    show: "The Mikado",
    year: 2011,
    cast: [
      { performer: "Arthur DiBianca", role: "The Mikado of Japan" },
      { performer: "David Treadwell", role: "Nanki-Poo" },
      { performer: "Holton Johnson", role: "Ko-Ko" },
      { performer: "David S Yates", role: "Pooh-Bah" },
      { performer: "Russell Gregory", role: "Pish-Tush" },
      { performer: "Lyn Reese", role: "Go-To" },
      { performer: "Michelle Haché", role: "Yum-Yum" },
      { performer: "Heather Mansfield", role: "Pitti-Sing" },
      { performer: "Janette Jones", role: "Peep-Bo" },
      { performer: "Rosa Mondragon Harris", role: "Katisha" }
    ],
    crew: {
      director: ["Ralph MacPhail, Jr."],
      music_director: ["Jeffrey Jones-Ragona"],
      choreographer: ["Lara Toner Haddock"],
      producer: ["Libby Weed"],
      rehearsal_accompanist: ["Jeanne Sasaki"],
      stage_manager: ["Michele Gisondo Moody"],
      assistant_stage_manager: ["Daniel Dolan"],
      light_board_operator: ["Mark Novak"],
      set_design: ["Ann Marie Gordon"],
      set_construction: ["Kenny Haché"],
      properties: ["Suzanne Haché"],
      lighting_design: ["Michelle Haché"],
      costume_design: ["Chantal Sheryl Freeman"],
      sound_design: ["Matt M."],
      set_dressing: ["Ann Marie Gordon"],
      house_manager: ["Linda Marshall"],
      Box_office_manager: ["Lyle Marshall"]
    }
  },
  {
    id: "2022-sorcerer-concert",
    show: "The Sorcerer (Concert)",
    year: 2022,
    cast: [
      { performer: "Patrick Lynch", role: "Sir Marmaduke Pointdextre" },
      { performer: "Daniel Girard", role: "Alexis" },
      { performer: "Joe Landers", role: "Dr. Daly" },
      { performer: "Tony Reck", role: "Notary" },
      { performer: "Arthur DiBianca", role: "John Wellington Wells" },
      { performer: "Janette Jones", role: "Lady Sangazure" },
      { performer: "Becca Hanten", role: "Aline" },
      { performer: "Rosa Mondragon Harris", role: "Mrs. Partlet" },
      { performer: "Megan Sheridan", role: "Constance" }
    ],
    crew: {
      director: ["Rafe MacPhail"],
      music_director: ["Jeffrey Jones-Ragona"],
      producer: ["Libby Weed"],
      stage_manager: ["Dana Pressley"]
    }
  }
];

// Create lookup maps for easy filtering
export const performerIndex: Record<string, string[]> = {};
export const crewIndex: Record<string, string[]> = {};

detailedProductionData.forEach(production => {
  // Index performers
  production.cast.forEach(castMember => {
    if (!performerIndex[castMember.performer]) {
      performerIndex[castMember.performer] = [];
    }
    performerIndex[castMember.performer].push(production.id);
  });

  // Index crew members
  Object.entries(production.crew).forEach(([role, people]) => {
    if (people) {
      people.forEach(person => {
        if (!crewIndex[person]) {
          crewIndex[person] = [];
        }
        crewIndex[person].push(production.id);
      });
    }
  });
});