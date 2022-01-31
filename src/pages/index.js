import appConfig from "../../config.json";
import Title from "../components/Title";

import { useRouter } from "next/router";
import { useState } from "react";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

const HomePage = () => {
  const roteamento = useRouter();

  const [userName, setUserName] = useState("");
  const nameSize = userName && Number(userName.length);

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals[200],
          backgroundImage:
            "url(https://virtualbackgrounds.site/wp-content/uploads/2020/11/colorful-graffiti-wall-1536x864.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              roteamento.push(`/chat?username=${userName}`);
              //window.location.href = "/chat"; Forma Antiga
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                fontWeight: "bold",
                color: appConfig.theme.colors.primary[400],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Digite o username do GitHub..."
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[700],
                },
              }}
              styleSheet={{
                boxShadow: "inset 0 0 0.3em grey",
              }}
            />
            <Button
              type="submit"
              label="ENTRAR"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
              disabled={nameSize > 2 ? false : true}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[700],
              boxShadow: "inset 0 0 0.3em grey",
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[900],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
              hover: { borderColor: appConfig.theme.colors.primary[500] },
            }}
          >
            {nameSize > 2 ? (
              <>
                <Image
                  styleSheet={{
                    borderRadius: "50%",
                    marginBottom: "16px",
                    boxShadow: "0 0 0.4em rgb(57 255 20 / 80%)",
                  }}
                  src={`https://github.com/${userName}.png`}
                />
                <Text
                  tag="a"
                  target="_blank"
                  variant="body4"
                  href={`https://github.com/${userName}`}
                  styleSheet={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: appConfig.theme.colors.neutrals[200],
                    backgroundColor: appConfig.theme.colors.neutrals[900],
                    padding: "3px 10px",
                    borderRadius: "1000px",
                    hover: { color: appConfig.theme.colors.primary[400] },
                  }}
                >
                  {userName}
                </Text>
              </>
            ) : (
              <>
                <Image
                  styleSheet={{
                    borderRadius: "50%",
                    marginBottom: "16px",
                    backgroundColor: appConfig.theme.colors.neutrals["000"],
                    boxShadow: "0 0 0.4em rgb(57 255 20 / 80%)",
                  }}
                  src="https://i.imgur.com/bZKesph.gif?noredirect"
                />
                <Text
                  variant="body4"
                  styleSheet={{
                    fontWeight: "bold",
                    color: appConfig.theme.colors.neutrals[100],
                    backgroundColor: appConfig.theme.colors.neutrals[900],
                    padding: "3px 10px",
                    borderRadius: "1000px",
                  }}
                >
                  GitHub User Link
                </Text>
              </>
            )}
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
