import Modal from "../Modal";
import appConfig from "../../../config.json";

import { IoClose } from "react-icons/io5";
import { UserContext } from "../../providers/Users";
import { PostContext } from "../../providers/Posts";
import { useState, useContext, useEffect } from "react";
import { Box, Text, Image, Button } from "@skynexui/components";
import {
  CircularProgress,
  Fade,
  Grid,
  Link,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";

const MessageList = (props) => {
  const [id, setId] = useState();
  const [loading, setLoading] = useState(true);
  const [currentName, setCurrentName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { deletePost, getPost } = useContext(PostContext);
  const { user, getUser } = useContext(UserContext);
  const { name, location, avatar_url, html_url, login } = user;

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClickUserInformation = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  useEffect(() => {
    getUser(currentName);
  }, [currentName]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleResetMessage = () => {
    const resetMessage = props.listMessage.filter(
      (message) => message.id !== id
    );
    props.setListMessage(resetMessage);

    deletePost(id);
  };

  const openAndCloseModal = (id) => {
    setModalIsOpen(!modalIsOpen);
    setId(id);
  };

  return (
    <>
      {loading ? (
        <Box
          styleSheet={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Box
          tag="ul"
          styleSheet={{
            overflow: "scroll",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column-reverse",
            flex: 1,
            color: appConfig.theme.colors.neutrals["000"],
            marginBottom: "16px",
          }}
        >
          {props.listMessage.map((message) => {
            return (
              <Text
                key={message.id}
                tag="li"
                styleSheet={{
                  width: "97%",
                  borderRadius: "5px",
                  padding: "6px",
                  marginBottom: "12px",
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                  },
                }}
              >
                <Box
                  styleSheet={{
                    marginBottom: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    styleSheet={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Visualizar Informação do Usuário */}
                    <Box sx={{ width: 500 }}>
                      <Popper
                        open={open}
                        anchorEl={anchorEl}
                        placement={placement}
                        transition
                      >
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps}>
                            <Paper elevation={2}>
                              <Box
                                styleSheet={{
                                  width: "300px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  textAlign: "center",
                                  borderRadius: "2px",
                                  backgroundColor:
                                    appConfig.theme.colors.neutrals[700],
                                  color: appConfig.theme.colors.neutrals["050"],
                                }}
                              >
                                <Box>
                                  <Image
                                    styleSheet={{
                                      width: "100px",
                                      marginTop: "15px",
                                      borderRadius: "50%",
                                      display: "inline-block",
                                    }}
                                    alt={login}
                                    src={avatar_url}
                                  />
                                </Box>
                                <Box
                                  styleSheet={{
                                    margin: "5px",
                                  }}
                                >
                                  <Typography>{name}</Typography>
                                  <Typography>{location}</Typography>
                                  <Link
                                    target="_blank"
                                    href={html_url}
                                    style={{
                                      fontWeight: "bold",
                                      color:
                                        appConfig.theme.colors.primary[400],
                                    }}
                                  >
                                    GitHub
                                  </Link>
                                </Box>
                              </Box>
                            </Paper>
                          </Fade>
                        )}
                      </Popper>

                      <Grid container justifyContent="center">
                        <Grid
                          item
                          onClick={handleClickUserInformation("bottom")}
                        >
                          <Image
                            styleSheet={{
                              width: "25px",
                              height: "25px",
                              borderRadius: "50%",
                              display: "inline-block",
                              marginRight: "8px",
                              hover: {
                                cursor: "pointer",
                              },
                            }}
                            alt={message.de}
                            src={`https://github.com/${message.de}.png`}
                            onClick={(e) => {
                              setCurrentName(e.target.alt);
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    {/* Visualizar Informação do Usuário */}

                    <Text tag="strong">{message.de}</Text>
                    <Text
                      styleSheet={{
                        fontSize: "10px",
                        marginLeft: "8px",
                        color: appConfig.theme.colors.neutrals[300],
                      }}
                      tag="span"
                    >
                      {new Date().toLocaleDateString()}
                    </Text>
                  </Box>

                  {/* Botão de excluir menssagem --> só aparece na mensagem do usuário logado! */}
                  {message.de === props.userLogged && (
                    <IoClose
                      onClick={() => {
                        openAndCloseModal(message.id);
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                      hover={{ color: "red" }}
                    />
                  )}
                  {/* Botão de excluir mensagem */}
                </Box>

                {message.texto?.startsWith(":sticker:") ? (
                  <Image
                    styleSheet={{
                      width: "150px",
                      height: "150px",
                    }}
                    src={message.texto.replace(":sticker:", "")}
                  />
                ) : (
                  message.texto
                )}
              </Text>
            );
          })}

          <Modal
            modalIsOpen={modalIsOpen}
            setIsOpen={setModalIsOpen}
            onRequestClose={openAndCloseModal}
            content={
              <>
                <Text
                  tag="p"
                  variant="body2"
                  styleSheet={{ margin: "20px", fontSize: "18px" }}
                >
                  Voçê deseja realmente excluir esta mensagem?
                </Text>
                <Button
                  label={"Excluir Mensagem"}
                  onClick={() => {
                    handleResetMessage();
                    openAndCloseModal();
                    getPost(props.setListMessage);
                  }}
                  buttonColors={{
                    contrastColor: appConfig.theme.colors.neutrals["000"],
                    mainColor: appConfig.theme.colors.primary[500],
                    mainColorLight: appConfig.theme.colors.primary[400],
                    mainColorStrong: appConfig.theme.colors.primary[600],
                  }}
                />
              </>
            }
          />
        </Box>
      )}
    </>
  );
};

export default MessageList;
