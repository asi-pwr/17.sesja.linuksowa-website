import { Box, Stack } from "@chakra-ui/react";
import cel from "../assets/aboutUs/cel.png";
import coTo from "../assets/aboutUs/coTo.png";
import jakWyglada from "../assets/aboutUs/jakWyglada.png";
import { useTheme } from "@chakra-ui/react";
import ImageItem from "@/components/ImageItem";
import useTranslation from "next-translate/useTranslation";

const AboutUs = () => {
  const theme = useTheme();
  const { t } = useTranslation("common");

  const content = [
    {
      image: coTo,
      text: t("aboutUsWhatIsText"),
      title: t("aboutUsWhatIsTitle"),
    },
    {
      image: jakWyglada,
      text: t("howItLooksLiketext"),
      title: t("howItLooksLikeTitle"),
    },
    {
      image: cel,
      text: t("ourGoalText"),
      title: t("ourGoalTitle"),
    },
  ];
  return (
    <Box
      as="section"
      display="flex"
      justifyContent="center"
      width="100%"
      bg={theme.colors.primary}
      minHeight="70vh"
      opacity="90%"
      position="relative"
      zIndex="2"
    >
      <Stack
        width="95%"
        marginY={{ base: "5%", lg: "auto" }}
        rowGap="20"
        columnGap="5"
        marginX={{ base: "2%", md: "20%", lg: "0" }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", lg: "row" }}
      >
        {content.map(({ image, text, title }) => (
          <ImageItem key={title} title={title} imageSrc={image} text={text} />
        ))}
      </Stack>
    </Box>
  );
};

export default AboutUs;
