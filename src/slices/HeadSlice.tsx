import { Box, StyleProps, Button, Flex } from "@chakra-ui/react";
import ParticlesBackground from "../components/ParticlesBackground";
import Image from "next/image";
import logo from "../assets/logo-duze-pl.png";
import pinguin from "../assets/bg_pingwin.png";
import { Stack, VStack, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import DefaultButton from "@/components/DefaultButton";
import config from "../config";
import { useTranslation } from "next-export-i18n";
import Lang from "@/components/Lang";

const HeadContainerStyle: StyleProps = {
  height: "100vh",
  width: "100%",
  bg: "#000000",
};

const NavBarStyle: StyleProps = {
  height: "60px",
  bg: "#000000",
  opacity: "90%",
  position: "absolute",
  width: "100%",
  zIndex: "3",
};

const NavBar = () => {
  return (
    <Box {...NavBarStyle}>
      {" "}
      <Flex mt="3" ml="5" height="40px" justifyContent="space-between">
        <Image alt="sesja linuksowa" height="40" src={logo} />
        <Lang />
      </Flex>
    </Box>
  );
};

const Title = () => {
  const theme = useTheme();
  const { t } = useTranslation("common");

  return (
    <VStack>
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "7xl" }}
        textAlign="center"
        fontWeight="semibold"
        color="white"
      >
        {t("title")}
      </Heading>
      <Heading
        as="h2"
        fontSize={{ base: "xl", md: "4xl" }}
        textAlign="center"
        fontWeight="semibold"
        bgColor={theme.colors.primary}
        color="white"
      >
        &nbsp;{t("eventDate")}&nbsp;
      </Heading>
    </VStack>
  );
};

const SpotDescription = () => {
  const { t } = useTranslation("common");

  const spot: string[] = t("eventLocationDetails", {}, { returnObjects: true });
  return (
    <VStack>
      {spot.map((text: string) => (
        <Heading
          key={text}
          as="h3"
          fontSize={{ base: "xl", md: "3xl" }}
          lineHeight={{ base: "1em", lg: "2em" }}
          fontWeight="semibold"
          mt={0}
          color="white"
        >
          {text}
        </Heading>
      ))}
    </VStack>
  );
};

const HeadDescription = () => {
  const { t } = useTranslation("common");
  return (
    <VStack
      height="inherit"
      margin="0"
      width={{ base: "100%", lg: "50%" }}
      justifyContent="space-evenly"
    >
      <Title />
      <SpotDescription />
      {config.SHOW_AGENDA && <DefaultButton text={t("seeAgenda")} />}
    </VStack>
  );
};

const HeadSlice = () => {
  return (
    <Box as="section" {...HeadContainerStyle} m={0}>
      <NavBar />
      <Stack
        height="inherit"
        justifyContent="space-evenly"
        direction={{ base: "column", lg: "row" }}
        position="absolute"
        width="100%"
        top="0"
        zIndex="2"
      >
        <Show below="lg">
          <VStack
            margin="auto"
            marginTop="8rem"
            justifyContent="center"
            maxWidth="700px"
            width="30%"
            height="20%"
          >
            <Image alt="pinguin" src={pinguin} />
          </VStack>
        </Show>
        <HeadDescription />
        <Show above="lg">
          <VStack
            width="50%"
            justifyContent="center"
            maxWidth={1627 / 3}
            marginTop="auto"
            height="100vh"
          >
            <Image alt="pinguin" src={pinguin} />
          </VStack>
        </Show>
      </Stack>
    </Box>
  );
};

export default HeadSlice;
