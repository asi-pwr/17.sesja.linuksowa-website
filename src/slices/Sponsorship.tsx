import DefaultButton from "@/components/DefaultButton";
import { Box, VStack, Center } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Sponsorship = () => {
  const { t } = useTranslation("common");
  return (
    <Box
      as="section"
      position="relative"
      width="100%"
      minHeight="50vh"
      alignItems="center"
      justifyContent="center"
      margin="15"
      zIndex="2"
    >
      <Center>
        <VStack>
          <Link
            _hover={{ textDecorationLine: "none" }}
            href="/17-sesja-oferta-sponsorska.pdf"
          >
            <DefaultButton
              _hover={{ color: "black" }}
              text="Oferta Sponsorska" // Sponsorship offer
            ></DefaultButton>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};

export default Sponsorship;
