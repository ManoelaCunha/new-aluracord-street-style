import { Button } from "@skynexui/components";
import appConfig from "../../../config.json";

export const ButtonSendMessage = (props) => {
  return (
    <Button
      type="button"
      iconName="arrowUp"
      buttonColors={{
        contrastColor: appConfig.theme.colors.neutrals["000"],
        mainColor: appConfig.theme.colors.primary[500],
        mainColorLight: appConfig.theme.colors.primary[400],
        mainColorStrong: appConfig.theme.colors.primary[600],
      }}
      onClick={(e) => {
        e.preventDefault();
        props.handleNewMessage(props.message);
      }}
      styleSheet={{
        borderRadius: "50%",
        padding: "0 3px 0 0",
        minWidth: "50px",
        minHeight: "50px",
        fontSize: "20px",
        marginBottom: "8px",
        lineHeight: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: "5px",
      }}
      disabled={props.message ? false : true}
    />
  );
};
