import { Data } from "@/constants/Data";
import { AppShell, Flex, Text, Group, Burger, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import { Link } from "react-scroll";

export default function BasicUI({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();
  console.log("Navbar opened:", opened);
  return (
    <AppShell header={{ height: 80 }}>
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
      {/* Manual Mobile Navbar */}
      <div className={`mobile-navbar ${opened ? "open" : ""}`}>
        <Stack>
          {Data.HeaderSection.HeaderItems.map((data, index) => (
            <Link
              key={index}
              to={data}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active-link"
              onClick={toggle}
            >
              <span className="nav-link">{data}</span>
            </Link>
          ))}
        </Stack>
      </div>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
