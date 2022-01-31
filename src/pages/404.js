import Image from "next/image";
import appConfig from "../../config.json";
import img from "../assets/images/notfound.gif";

import { Box, Text, Button } from "@skynexui/components";

const NotFound = () => {
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1,
          height: "100%",
          maxWidth: "50%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Text
          tag="h1"
          styleSheet={{
            color: appConfig.theme.colors.neutrals[500],
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Página não encontrada!
        </Text>

        <Image src={img} alt="notfound" />

        <Button
          href="/"
          label="VOLTAR"
          type="button"
          size="md"
          rounded="full"
          buttonColors={{
            contrastColor: appConfig.theme.colors.neutrals["000"],
            mainColor: appConfig.theme.colors.primary[500],
            mainColorLight: appConfig.theme.colors.primary[400],
            mainColorStrong: appConfig.theme.colors.primary[600],
          }}
        />
      </Box>
    </Box>
  );
};

export default NotFound;
