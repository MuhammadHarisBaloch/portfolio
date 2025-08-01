"use client";
import BasicUI from "@/components/BasicUI";
import ContactSection from "@/components/ContactSection";
import EducationExperienceCard from "@/components/EducationExperienceCard";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsCard from "@/components/SkillsCard";
import { Data } from "@/constants/Data";
import {
  Stack,
  Title,
  Text,
  Flex,
  SimpleGrid,
  Divider,
  Box,
} from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import Link from "next/link";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

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
                itemList={Data.AboutSection.EducationCard}
              />
              <EducationExperienceCard
                icon={<IconBriefcase size={24} color="#74E8F9" />}
                title={"Experience"}
                itemList={Data.AboutSection.ExperienceCard}
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
              {Data.ProjectSection.ProjectCard.map((data, index) => {
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
              {Data.ContactSection.SocialMediaLinks.map((data, index) => {
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
