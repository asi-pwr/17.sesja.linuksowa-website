import { Box, Text } from "@chakra-ui/react";
import { LanguageSwitcher } from "next-export-i18n";

const LangItem = ({ text, locale }: { text: string; locale: string }) => (
  <LanguageSwitcher lang={locale}>
    <Text cursor="pointer" as="span" color="whiteAlpha.900">
      {text}
    </Text>
  </LanguageSwitcher>
);

const Lang = () => (
  <Box color="whiteAlpha.900" zIndex="4" width="100px">
    <LangItem text="PL" locale="pl" />
    {" | "}
    <LangItem text="EN" locale="en" />
  </Box>
);

export default Lang;
