import { Data } from "@/constants/Data";
import { AppShell, Flex, Text, Group, Burger, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import { Link } from "react-scroll";

export default function BasicUI({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header w="100%">
        <Group h="100%" w="100%" justify="space-between">
          <Group
            w="100%"
            h="100%"
            bg="black.9"
            px={{ sm: "3xl", base: "lg" }}
            justify="space-between"
          >
            <Text c="cyan.9" fz="lg" fw={600}>
              Muhammad Haris
            </Text>
            <Flex gap="3xl" visibleFrom="sm">
              {Data.HeaderSection.HeaderItems.map((data, index) => {
                return (
                  <Link
                    key={index}
                    to={data}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover-cyan-color"
                    activeClass="cyan-color"
                  >
                    {data}
                  </Link>
                );
              })}
            </Flex>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              color="white"
              size="sm"
            />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar bg="black" px="xl" py="lg">
        <Stack>
          {Data.HeaderSection.HeaderItems.map((data, index) => {
            return (
              <Link
                key={index}
                to={data}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover-cyan-color"
                activeClass="cyan-color"
                onClick={() => {
                  if (opened) toggle();
                }}
              >
                {data}
              </Link>
            );
          })}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
