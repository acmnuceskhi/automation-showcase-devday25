// Type definitions for team components

// Represents a single team member
export interface TeamMember {
  name: string;
  image: string;
  linkedin: string;
  github: string;
}

// Type for the teamData object - a record of categories with arrays of team members
export type TeamDataType = Record<string, TeamMember[]>;

// Type for a category in the categoryOrder array
export interface CategoryType {
  id: string;
  title: string;
  level: number;
}
