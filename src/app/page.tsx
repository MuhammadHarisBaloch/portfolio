"use client";
import BasicUI from "@/components/BasicUI";
import ContactSection from "@/components/ContactSection";
import EducationExperienceCard from "@/components/EducationExperienceCard";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsCard from "@/components/SkillsCard";
import {
  Stack,
  Title,
  Text,
  Flex,
  SimpleGrid,
  Divider,
  Box,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

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
    link: "www.linkedin.com/in/mharisbaig",
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
    link: "",
  },
  {
    title: "Scoot App",
    subTitle:
      "A modern scooter rental application with user authentication, booking system, and location tracking features.",
    languages: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "",
  },
  {
    title: "Dwello Web",
    subTitle:
      "A real estate platform with property listings, search filters, and user dashboard for property management.",
    languages: ["React", " Node.js", "MongoDB"],
    link: "",
  },
  {
    title: "Bella Olonje",
    subTitle:
      "A beautiful food delivery application with modern UI design, menu browsing, and order management system.",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "",
  },
];

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    if (contactRef.current) {
      const offsetTop = contactRef.current.offsetTop;
      const headerHeight = 80;
      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <BasicUI>
      <Stack h="100%" w="100%" bg="black" align="center" gap="xs">
        <section id="Home">
          <HeroSection scrollToContact={scrollToContact} />
        </section>
        <section id="About">
          <Stack
            h="100%"
            w="100%"
            bg="black"
            px={{ sm: "3xl", base: "xl" }}
            align="center"
            py="3xl"
            gap="xs"
          >
            <Title order={isMobile ? 3 : 2} c="cyan.9" fw={600}>
              About Me
            </Title>
            <Text fz="lg" c="gray" ta={{ sm: "start", base: "center" }}>
              Get to know more about my background and expertise
            </Text>
            <SimpleGrid cols={{ sm: 2, base: 1 }} spacing="3xl" pt="3xl">
              <EducationExperienceCard
                icon={<IconBriefcase size={24} color="#74E8F9" />}
                title={"Education"}
                itemList={EducationList}
              />
              <EducationExperienceCard
                icon={<IconBriefcase size={24} color="#74E8F9" />}
                title={"Experience"}
                itemList={ExperienceList}
              />
            </SimpleGrid>
            <SkillsCard />
          </Stack>
        </section>
        <section id="Projects">
          <Stack
            h="100%"
            w="100%"
            bg="black"
            align="center"
            px={{ sm: "3xl", base: "xl" }}
            py="3xl"
            gap="xs"
          >
            <Text fz={{ sm: "48px", base: "36px" }} c="cyan.9" fw={600}>
              Featured Projects
            </Text>
            <Text fz="lg" c="gray" ta={{ sm: "start", base: "center" }}>
              Check out some of my recent work on GitHub
            </Text>
            <SimpleGrid
              w="100%"
              cols={{ sm: 2, base: 1 }}
              spacing="xxl"
              pt="3xl"
            >
              {ProjectDetails.map((data, index) => {
                return <ProjectCard key={index} {...data} />;
              })}
            </SimpleGrid>
          </Stack>
        </section>
        <section id="Contact" ref={contactRef}>
          <Stack
            h="100%"
            w={{ sm: "calc(100dvw - 20px)", base: "100%" }}
            bg="black"
            px={{ sm: "3xl", base: "xl" }}
            align="center"
            py="3xl"
            gap="xs"
          >
            <Text fz={{ sm: "48px", base: "36px" }} c="cyan.9" fw={600}>
              Get In Touch
            </Text>
            <Text fz="lg" c="gray" ta={{ sm: "start", base: "center" }}>
              Let's discuss your next project or opportunity
            </Text>
            <ContactSection />
          </Stack>
          <Stack
            w="100%"
            align="center"
            gap="xl"
            px={{ sm: "3xl", base: "lg" }}
          >
            <Divider size="xs" w={{ sm: "80%", base: "90%" }} color="gray" />
            <Text fz="sm" c="gray" ta={{ sm: "start", base: "center" }}>
              © 2025 Muhammad Haris. All rights reserved.
            </Text>
            <Flex gap="xl">
              {SocialLink.map((data, index) => {
                return (
                  <Box
                    key={index}
                    component={Link}
                    href={data.link}
                    target="_blank"
                  >
                    {data.icon}
                  </Box>
                );
              })}
            </Flex>
          </Stack>
        </section>
      </Stack>
    </BasicUI>
  );
}
