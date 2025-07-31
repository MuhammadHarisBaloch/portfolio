import { Card, Stack, Flex, Text } from "@mantine/core";
import { JSX } from "react";

interface ExperienceList {
  title: string;
  subTitle?: string;
  time: string;
  description?: string;
}
[];
const ExperienceList: ExperienceList[] = [
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

interface EducationExperienceCardProps {
  icon: JSX.Element;
  title: string;
  itemList: ExperienceList[];
}
export default function EducationExperienceCard({
  icon,
  title,
  itemList,
}: EducationExperienceCardProps) {
  return (
    <Card
      className="expand-card"
      bg="gray.9"
      radius="md"
      px="xxl"
      py="xl"
      style={{ border: "1px solid #7b7b7b51" }}
    >
      <Stack>
        <Flex align="center" gap="md">
          {icon}
          <Text fz="xl" c="cyan.8" fw={600}>
            {title}
          </Text>
        </Flex>
        <Stack gap="xl">
          {itemList.map((data, index) => {
            return (
              <Stack key={index} gap="xs">
                <Text fz="md" fw={500} c="white">
                  {data.title}
                </Text>
                <Text fz="sm">{data.subTitle}</Text>
                <Text fz="sm" c="gray">
                  {data.time}
                </Text>
                <Text fz="sm" c="white">
                  {data.description}
                </Text>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Card>
  );
}
