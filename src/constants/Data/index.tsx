import {
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

interface ItemList {
  title: string;
  subTitle?: string;
  time: string;
  description?: string;
}
[];
const ExperienceList: ItemList[] = [
  {
    title: "Software Engineering Intern",
    subTitle: "Maqsad Pvt Ltd",
    time: "Aug 2022–Jul 2023, June–Aug 2024",
    description:
      "Built responsive web designs and completed tasks under team leads.",
  },
  {
    title: "Lead Finance",
    subTitle: "MLSA MUET",
    time: " Mar–Dec 2023",
    description: "Managed sponsorships and event budgets.",
  },
];
const EducationList: ItemList[] = [
  {
    title: "Mehran University of Engineering & Technology",
    time: "Software Engineering (2021–Present)",
  },
  {
    title: "The City Higher Secondary School",
    time: "2019–2021",
  },
];

interface ProjectDetails {
  title: string;
  subTitle: string;
  link: string;
  languages: string[];
}
[];

const ProjectDetails: ProjectDetails[] = [
  {
    title: "Netflix Clone",
    subTitle:
      "A responsive Netflix clone built with modern web technologies, featuring movie browsing, search functionality, and dynamic content loading.",
    languages: ["React", "CSS", "JavaScript"],
    link: "https://github.com/MuhammadHarisBaloch/Netflix-Clone",
  },
  {
    title: "Scoot App",
    subTitle:
      "A modern scooter rental application with user authentication, booking system, and location tracking features.",
    languages: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://github.com/MuhammadHarisBaloch/Scoot-App",
  },
  {
    title: "Dwello Web",
    subTitle:
      "A real estate platform with property listings, search filters, and user dashboard for property management.",
    languages: ["React", " Node.js", "MongoDB"],
    link: "https://github.com/MuhammadHarisBaloch/Dwello-Web",
  },
  {
    title: "Bella Olonje",
    subTitle:
      "A beautiful food delivery application with modern UI design, menu browsing, and order management system.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/MuhammadHarisBaloch/Bella-Olonje",
  },
];

const SocialLink = [
  {
    icon: <IconBrandGithub className="cyan-color-tilt" size={25} />,
    link: "https://github.com/MuhammadHarisBaloch",
  },
  {
    icon: <IconMail className="cyan-color-tilt" size={25} />,
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    icon: <IconBrandLinkedin className="cyan-color-tilt" size={25} />,
    link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
];
const HeaderList = ["Home", "About", "Projects", "Contact"];

const ContactInfo = [
  {
    icon: <IconPhone size={24} color="#06B6D4" />,
    title: "Phone",
    subTitle: "0309 3185997",
  },
  {
    icon: <IconMail size={24} color="#06B6D4" />,
    title: "Email",
    subTitle: "mrharsi502@gmail.com",
  },
  {
    icon: <IconMapPin size={24} color="#06B6D4" />,
    title: "Location",
    subTitle: "DHA, Karachi, Pakistan",
  },
];

const SkillsList = [
  {
    name: "React",
    percentage: 95,
  },
  {
    name: "Next.js",
    percentage: 95,
  },
  {
    name: "TypeScript",
    percentage: 95,
  },
  {
    name: "JavaScript",
    percentage: 95,
  },
  {
    name: "Java",
    percentage: 80,
  },
  {
    name: "HTML",
    percentage: 100,
  },
  {
    name: "CSS",
    percentage: 100,
  },
  {
    name: "UI/UX",
    percentage: 85,
  },
];

export const Data = {
  HeaderSection: {
    HeaderItems: HeaderList,
  },
  AboutSection: {
    EducationCard: EducationList,
    ExperienceCard: ExperienceList,
    Skills: SkillsList,
  },
  ProjectSection: {
    ProjectCard: ProjectDetails,
  },
  ContactSection: {
    SocialMediaLinks: SocialLink,
    ContactInformationList: ContactInfo,
  },
};
