import { Card, Stack, Flex, SimpleGrid, Text, Group } from "@mantine/core";
import { IconBulb } from "@tabler/icons-react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 11,
  width: "100%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ffffff1a",
    ...theme.applyStyles("dark", {
      backgroundColor: "#ffffff1a",
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#74E8F9",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));
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

export default function SkillsCard() {
  return (
    <Card
      className="expand-card"
      w="100%"
      bg="gray.9"
      radius="md"
      p="xxl"
      my="3xl"
      style={{ border: "1px solid #7b7b7b51" }}
    >
      <Stack align="center" w="100%" gap="xxl">
        <Flex align="center" gap="lg">
          <IconBulb size={25} color="#74E8F9" />
          <Text
            ta={{ sm: "start", base: "center" }}
            fz="xl"
            c="cyan.8"
            fw={600}
          >
            Skills & Technologies
          </Text>
        </Flex>
        <SimpleGrid
          cols={{ sm: 2, base: 1 }}
          w="100%"
          spacing="6rem"
          verticalSpacing="xxl"
        >
          {SkillsList.map((data, index) => {
            return (
              <Stack key={index} w="100%">
                <Group justify="space-between">
                  <Text c="white" fw={500}>
                    {data.name}
                  </Text>
                  <Text fw={500} c="cyan.8">
                    {data.percentage}%
                  </Text>
                </Group>
                <BorderLinearProgress
                  variant="determinate"
                  value={data.percentage}
                />
              </Stack>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Card>
  );
}
