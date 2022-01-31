import { Box, Text, Button } from "@skynexui/components";
import appConfig from "../../../config.json";

const Header = (props) => {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          variant="heading5"
          styleSheet={{ color: appConfig.theme.colors.neutrals[300] }}
        >
          Chat - {props.userLogged}
        </Text>
        <Button
          variant="primary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
};

export default Header;
