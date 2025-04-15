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
  ],
  coleads: [
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
      linkedin: "https://www.linkedin.com/in/abbbdullah/",
      github: "https://github.com/abdullahazharkhan",
    },
    {
      name: "Raahim Irfan",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Raahim",
      linkedin: "https://linkedin.com/in/raahimirfan100",
      github: "https://github.com/raahimirfan100",
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
      name: "Asim Ali",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Asim",
      linkedin: "https://www.linkedin.com/in/masimali100/",
      github: "https://github.com/exit100",
    },
    {
      name: "Abdul Basit",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Basit",
      linkedin: "https://www.linkedin.com/in/connect-abdulbasit/",
      github: "https://github.com/connect-abdulbasit",
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
      name: "Syed Sibtain Haider",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sibtain",
      linkedin:
        "https://www.linkedin.com/in/syed-sibtain-haider-gardezi-701b0931b",
      github: "https://github.com/SHtheGreat",
    },
    {
      name: "Muhammad Hammad",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hammad",
      linkedin: "https://www.linkedin.com/in/muhammad-hammad-bhatti-b6b782296",
      github: "https://github.com/muhamad-hammad",
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
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=tariq",
      linkedin: "https://linkedin.com/in/abdulrafaytariq",
      github: "https://github.com/abdulrafaytariq",
    },
    {
      name: "Danish Ahmed",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Danish",
      linkedin: "https://www.linkedin.com/in/danish-ahmed-6b46b4343",
      github: "https://github.com/Danish-Ahmed24",
    },
    {
      name: "Khadija Abbasi",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Khadija",
      linkedin: "https://www.linkedin.com/in/khadija-abbasi-574a69262",
      github: "https://github.com/khadija3096",
    },
    {
      name: "Hatim Mustafa",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hatim",
      linkedin: "https://linkedin.com/in/hatimmustafa",
      github: "https://github.com/hatimmustafa",
    },
    {
      name: "Muhammad Musab Ali Khan",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=MusabAli",
      linkedin: "https://www.linkedin.com/in/musab-ali-91958124b",
      github: "https://github.com/musab285",
    },
    {
      name: "Kinza Afzal",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=KinzaA",
      linkedin: "https://www.linkedin.com/in/kinza-afzal-15660a2a3",
      github: "https://github.com/kinza7124",
    },
  ],
};

// Category data with ordering information
export const categoryOrder: CategoryType[] = [
  {
    id: "leads",
    title: "Lead",
    level: 1, // Highest level
  },
  {
    id: "coleads",
    title: "Co-Leads",
    level: 2,
  },
  {
    id: "executives",
    title: "Executives",
    level: 3,
  },
  {
    id: "deputies",
    title: "Deputies",
    level: 3,
  },
  {
    id: "members",
    title: "Members",
    level: 4, // Lowest level
  },
];
