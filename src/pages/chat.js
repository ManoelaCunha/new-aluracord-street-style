import appConfig from "../../config.json";
import Header from "../components/Header";
import MessageList from "../components/MessageList";

import { useRouter } from "next/router";
//import { PostContext } from "../providers/Posts";
import { Box, TextField } from "@skynexui/components";
import { useState, useContext, useEffect } from "react";

import { ButtonSendSticker } from "../components/ButtonSendSticker";
import { ButtonSendMessage } from "../components/ButtonSendMessage";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);

  //const { getPost, insertPost } = useContext(PostContext);

  const roteamento = useRouter();
  const userLogged = roteamento.query.username;

  /*useEffect(() => {
    getPost(setListMessage);
  }, []);*/

  const handleNewMessage = (newMessage) => {
    const currentMessage = {
      de: userLogged,
      texto: newMessage,
    };

    //insertPost(currentMessage);

    setMessage("");
  };

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.neutrals[200],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/11/colorful-graffiti-wall-1536x864.jpg)`,
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
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header userLogged={userLogged} />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: "rgb(95,95,95,0.7)",
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList
            userLogged={userLogged}
            listMessage={listMessage}
            setListMessage={setListMessage}
          />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (message && e.key === "Enter") {
                  e.preventDefault();
                  handleNewMessage(message);
                }
                if (!message && e.key === "Enter") {
                  e.preventDefault();
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />

            <ButtonSendMessage
              message={message}
              handleNewMessage={handleNewMessage}
            />

            <ButtonSendSticker
              onStickerClick={(sticker) => {
                //console.log("[USANDO O COMPONENTE] Salva esse sticker no banco", sticker);
                handleNewMessage(`:sticker:${sticker}`);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatPage;
