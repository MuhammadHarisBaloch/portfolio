import { Stack, Text, Button, Group } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export default function HeroSection({
  scrollToContact,
}: {
  scrollToContact: () => void;
}) {
  return (
    <Stack
      h={{ sm: "calc(100dvh - 80px)", base: "100%" }}
      w="100%"
      align="center"
      justify="center"
      bg="blue.9"
      gap="xl"
      py={{ sm: "", base: "xxl" }}
    >
      <Text
        fw={600}
        lh={{ sm: 0.8, base: 1 }}
        ta={{ sm: "start", base: "center" }}
        c="cyan.9"
        fz={{ sm: "60px", base: "48px" }}
      >
        Muhammad Haris
      </Text>
      <Text c="#74E8F9" fz={{ sm: "xxl", base: "xl" }} fw={500}>
        Web Developer
      </Text>
      <Text ta="center" c="gray" w={{ sm: "60%", base: "90%" }} fz="lg">
        I'm a Software Engineering student at Mehran University passionate about
        building responsive and user-friendly web applications using modern
        technologies like HTML, CSS, JavaScript, React, TypeScript, and Next.js.
      </Text>
      <Group w="100%" justify="center" gap={isMobile ? "md" : "xl"}>
        <Button
          className="hover-expand "
          component={Link}
          href="/Resume.pdf"
          w={{ sm: "20%", base: "90%" }}
          fz="sm"
          leftSection={<IconDownload size={18} />}
          color="cyan.8"
          size="lg"
          c="black"
          download={"/Resume.pdf"}
        >
          Download Resume
        </Button>
        <Button
          className="hover-expand cyan-expand-button"
          w={{ sm: "20%", base: "90%" }}
          variant="outline"
          color="cyan.9 "
          size="lg"
          onClick={scrollToContact}
        >
          Get In Touch
        </Button>
      </Group>
    </Stack>
  );
}
