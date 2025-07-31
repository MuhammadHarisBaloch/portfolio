import {
  Grid,
  GridCol,
  Stack,
  Card,
  Flex,
  Input,
  Textarea,
  Button,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import { isMobile } from "react-device-detect";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
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
export default function ContactSection() {
  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        "service_tm5rtqe",
        "template_v17fak9",
        formRef.current!,
        "dp0EyRD3_tjsj-F_a"
      );
      console.log("Email sent:", result.text);
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Grid w="100%" pt="3xl" gutter="3xl" align="center">
      <GridCol w="100%" p={0} span={{ sm: 6, base: 12 }}>
        <Stack
          h="100%"
          gap="lg"
          align={isMobile ? "center" : "flex-end"}
          justify="space-between"
        >
          {ContactInfo.map((info, index) => {
            return (
              <Card
                className="expand-card"
                key={index}
                w={{ sm: "80%", base: "90%" }}
                bg="gray.9"
                radius="md"
                py="xl"
                px="xxl"
                style={{ border: "1px solid #7b7b7b51" }}
              >
                <Flex align="center" gap="lg">
                  {info.icon}
                  <Stack gap="xxs">
                    <Text c="white" fw={500}>
                      {info.title}
                    </Text>
                    <Text c="gray">{info.subTitle}</Text>
                  </Stack>
                </Flex>
              </Card>
            );
          })}
        </Stack>
      </GridCol>
      <GridCol span={{ sm: 6, base: 12 }}>
        <Card
          className="expand-card"
          mt={{ sm: "", base: "lg" }}
          w={{ sm: "80%", base: "100%" }}
          bg="gray.9"
          radius="md"
          py="xl"
          px={{ sm: "xxl", base: "xl" }}
          style={{ border: "1px solid #7b7b7b51" }}
        >
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              sendEmail();
              notifications.show({
                title: "Message Sent!",
                message:
                  "Thank you for your message. I'll get back to you soon.",
                color: "green",
              });
              form.reset();
            }}
          >
            <Stack gap="lg">
              <Text fz="lg" c="white">
                Send a Message
              </Text>
              <Input
                required
                name="user_name"
                placeholder="Your Name"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    border: "1px solid #7b7b7b51",
                    color: "white",
                    fontSize: "14px",
                  },
                }}
                key={form.key("name")}
                {...form.getInputProps("name")}
              />
              <Input
                required
                name="user_email"
                placeholder="Your Email"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    border: "1px solid #7b7b7b51",
                    color: "white",
                    fontSize: "14px",
                  },
                }}
                key={form.key("email")}
                {...form.getInputProps("email")}
              />
              <Textarea
                required
                name="message"
                placeholder="Your Message"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    border: "1px solid #7b7b7b51",
                    color: "white",
                    fontSize: "14px",
                  },
                }}
                rows={4}
                key={form.key("message")}
                {...form.getInputProps("message")}
              />
              <Button
                className="hover-expand "
                variant="filled"
                color="cyan.8"
                fz="xs"
                c="black"
                type="submit"
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Card>
      </GridCol>
    </Grid>
  );
}
