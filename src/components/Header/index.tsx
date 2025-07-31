import { Flex, Group, Text, UnstyledButton } from "@mantine/core";
import { Link } from "react-scroll";

const HeaderList = [
  {
    name: "Home",
    Link: "",
  },
  {
    name: "About",
    Link: "",
  },
  {
    name: "Projects",
    Link: "",
  },
  {
    name: "Contact",
    Link: "",
  },
];
export default function HeaderSection() {
  return (
    <Group h="80px" w="100%" bg="black.9" px="3xl" justify="space-between">
      <Text c="cyan.9" fz="lg" fw={600}>
        Muhammad Haris
      </Text>
      <Flex gap="3xl">
        {HeaderList.map((data, index) => {
          return (
            <Link to={data.name} duration={500} smooth={true}>
              <UnstyledButton key={index} c="white" fz="sm" fw={500}>
                {data.name}
              </UnstyledButton>
            </Link>
          );
        })}
      </Flex>
    </Group>
  );
}
