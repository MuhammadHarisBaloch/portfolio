import { Card, Stack, Flex, Title, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subTitle: string;
  link: string;
  languages: string[];
}

export default function ProjectCard({
  title,
  subTitle,
  link,
  languages,
}: ProjectCardProps) {
  return (
    <Card
      className="expand-card"
      w="100%"
      bg="gray.9"
      radius="md"
      p="xxl"
      style={{ border: "1px solid #7b7b7b51" }}
    >
      <Stack gap="lg">
        <Flex align="center" justify="space-between">
          <Title order={4} fw={600} c="white">
            {title}
          </Title>
          <Link href={link}>
            <IconBrandGithub className="cyan-color-tilt" size={24} />
          </Link>
        </Flex>
        <Text fz="sm" c="gray">
          {subTitle}
        </Text>
        <Flex gap="lg">
          {languages.map((language, index) => {
            return (
              <Text key={index} fw={400} fz="xs" c="cyan.9">
                {language}
              </Text>
            );
          })}
        </Flex>
      </Stack>
    </Card>
  );
}
