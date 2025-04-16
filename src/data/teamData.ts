import { TeamMember, CategoryType } from "../types/team";

// Team member data
export const teamData: Record<string, TeamMember[]> = {
  leads: [
    {
      name: "Asfand Khanzada",
      image: "/images/Asfand-Khanzada.jpeg",
      linkedin: "https://www.linkedin.com/in/asfandyar-khanzada/",
      github: "https://github.com/asfand0007",
    },
  ],
  coleads: [
    {
      name: "Munazzar Shahzad",
      image: "/images/Munazzar-Shahzad.jpg",
      linkedin: "https://www.linkedin.com/in/munnazzar-shahzad/",
      github: "https://github.com/Munnazzar/",
    },
    {
      name: "Sarim Ahmed",
      image: "/images/Sarim-Ahmed.jpg",
      linkedin: "https://www.linkedin.com/in/sarim-ahmed-89412a19a/",
      github: "https://github.com/C41f0N/",
    },
  ],
  executives: [
    {
      name: "Hamza Naeem",
      image: "/images/Hamza-Naeem.jpeg",
      linkedin: "https://linkedin.com/in/hamzanaeem",
      github: "https://github.com/hamzanaeem",
    },
    {
      name: "Abdullah Azhar Khan",
      image: "/images/Abdullah-Azhar-Khan.jpeg",
      linkedin: "https://www.linkedin.com/in/abbbdullah/",
      github: "https://github.com/abdullahazharkhan",
    },
    {
      name: "Raahim Irfan",
      image: "/images/Raahim-Irfan.jpg",
      linkedin: "https://linkedin.com/in/raahimirfan100",
      github: "https://github.com/raahimirfan100",
    },
  ],
  deputies: [
    {
      name: "Mohammad Anas",
      image: "/images/Mohammad-Anas.jpg",
      linkedin: "https://www.linkedin.com/in/mohammad-anas-825aa7286",
      github: "https://github.com/Anas-init",
    },
    {
      name: "Asim Ali",
      image: "/images/Asim-Ali.jpg",
      linkedin: "https://www.linkedin.com/in/masimali100/",
      github: "https://github.com/exit100",
    },
    {
      name: "Abdul Basit",
      image: "/images/Abdul-Basit.jpg",
      linkedin: "https://www.linkedin.com/in/connect-abdulbasit/",
      github: "https://github.com/connect-abdulbasit",
    },
  ],
  members: [
    {
      name: "Syed Sibtain Haider",
      image: "/images/blank-profile-picture.jpeg",
      linkedin:
        "https://www.linkedin.com/in/syed-sibtain-haider-gardezi-701b0931b",
      github: "https://github.com/SHtheGreat",
    },
    {
      name: "Muhammad Hammad",
      image: "/images/Muhammad-Hammad.jpeg",
      linkedin: "https://www.linkedin.com/in/muhammad-hammad-bhatti-b6b782296",
      github: "https://github.com/muhamad-hammad",
    },
    {
      name: "Abdul Rafay Tariq",
      image: "/images/Abdul-Rafay-Tariq.jpg",
      linkedin: "https://www.linkedin.com/in/abdul-rafay-1b983331a",
      github: "https://github.com/Abdul-Rafay-web",
    },
    {
      name: "Danish Ahmed",
      image: "/images/Danish-Ahmed.jpg",
      linkedin: "https://www.linkedin.com/in/danish-ahmed-6b46b4343",
      github: "https://github.com/Danish-Ahmed24",
    },
    {
      name: "Khadija Abbasi",
      image: "/images/blank-profile-picture.jpeg",
      linkedin: "https://www.linkedin.com/in/khadija-abbasi-574a69262",
      github: "https://github.com/khadija3096",
    },
    {
      name: "Hatim Mustafa",
      image: "/images/Hatim-Mustafa.jpg",
      linkedin: "https://www.linkedin.com/in/hatim-mustafa-8116ba277",
      github: "https://github.com/Hatim-Mustafa",
    },
    {
      name: "Muhammad Musab Ali Khan",
      image: "/images/Muhammad-Musab-Ali-Khan.jpeg",
      linkedin: "https://www.linkedin.com/in/musab-ali-91958124b",
      github: "https://github.com/musab285",
    },
    {
      name: "Kinza Afzal",
      image: "/images/Kinza-Afzal.jpg",
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
