import { TeamMember, CategoryType } from "../types/team";

// Team member data
export const teamData: Record<string, TeamMember[]> = {
  leads: [
    {
      name: "Asfand Khanzada",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Asfand",
      linkedin: "https://linkedin.com/in/asfandkhanzada",
      github: "https://github.com/asfandkhanzada",
    },
    {
      name: "Munazzar Shahzad",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Munazzar",
      linkedin: "https://linkedin.com/in/munazzarshahzad",
      github: "https://github.com/munazzarshahzad",
    },
    {
      name: "Sarim Ahmed",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sarim",
      linkedin: "https://linkedin.com/in/sarimahmed",
      github: "https://github.com/sarimahmed",
    },
  ],
  coordinators: [
    {
      name: "Raahim Irfan",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Raahim",
      linkedin: "https://linkedin.com/in/raahimirfan",
      github: "https://github.com/raahimirfan",
    },
    {
      name: "Musab Ali Khan",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Musab",
      linkedin: "https://linkedin.com/in/musabalikhan",
      github: "https://github.com/musabalikhan",
    },
    {
      name: "Kinza Afzal",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Kinza",
      linkedin: "https://linkedin.com/in/kinzaafzal",
      github: "https://github.com/kinzaafzal",
    },
  ],
  deputies: [
    {
      name: "Mohammad Anas",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mohammad",
      linkedin: "https://linkedin.com/in/mohammadanas",
      github: "https://github.com/mohammadanas",
    },
    {
      name: "Yousuf Rehan",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Yousuf",
      linkedin: "https://linkedin.com/in/yousufrehan",
      github: "https://github.com/yousufrehan",
    },
    {
      name: "Muhammad Asim",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Muhammad",
      linkedin: "https://linkedin.com/in/muhammadasim",
      github: "https://github.com/muhammadasim",
    },
    {
      name: "Abdul Basit",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Basit",
      linkedin: "https://linkedin.com/in/abdulbasit",
      github: "https://github.com/abdulbasit",
    },
  ],
  executives: [
    {
      name: "Hamza Naeem",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hamza",
      linkedin: "https://linkedin.com/in/hamzanaeem",
      github: "https://github.com/hamzanaeem",
    },
    {
      name: "Abdullah Azhar Khan",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Abdullah",
      linkedin: "https://linkedin.com/in/abdullahazharkhan",
      github: "https://github.com/abdullahazharkhan",
    },
  ],
  members: [
    {
      name: "Krish Kumar",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Krish",
      linkedin: "https://linkedin.com/in/krishkumar",
      github: "https://github.com/krishkumar",
    },
    {
      name: "Sibtain Haider",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sibtain",
      linkedin: "https://linkedin.com/in/sibtainhaider",
      github: "https://github.com/sibtainhaider",
    },
    {
      name: "Hammad Bhatti",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hammad",
      linkedin: "https://linkedin.com/in/hammadbhatti",
      github: "https://github.com/hammadbhatti",
    },
    {
      name: "Aehris",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Aehris",
      linkedin: "https://linkedin.com/in/aehris",
      github: "https://github.com/aehris",
    },
    {
      name: "Arisha Adnan",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Arisha",
      linkedin: "https://linkedin.com/in/arishaadnan",
      github: "https://github.com/arishaadnan",
    },
    {
      name: "Khansa Khalid",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Khansa",
      linkedin: "https://linkedin.com/in/khansakhalid",
      github: "https://github.com/khansakhalid",
    },
    {
      name: "Abdul Rafay Tariq",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rafay",
      linkedin: "https://linkedin.com/in/abdulrafaytariq",
      github: "https://github.com/abdulrafaytariq",
    },
    {
      name: "Danish Ahmed",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Danish",
      linkedin: "https://linkedin.com/in/danishahmed",
      github: "https://github.com/danishahmed",
    },
    {
      name: "Khadija",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Khadija",
      linkedin: "https://linkedin.com/in/khadija",
      github: "https://github.com/khadija",
    },
    {
      name: "Hatim Mustafa",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hatim",
      linkedin: "https://linkedin.com/in/hatimmustafa",
      github: "https://github.com/hatimmustafa",
    },
  ],
};

// Category data with ordering information
export const categoryOrder: CategoryType[] = [
  {
    id: "leads",
    title: "Leads",
    level: 1, // Highest level
  },
  {
    id: "coordinators",
    title: "Coordinators",
    level: 2,
  },
  {
    id: "deputies",
    title: "Deputies",
    level: 2,
  },
  {
    id: "executives",
    title: "Executives",
    level: 3,
  },
  {
    id: "members",
    title: "Members",
    level: 4, // Lowest level
  },
];
