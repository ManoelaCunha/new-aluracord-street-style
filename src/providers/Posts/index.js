import { createContext } from "react";
import { createClient } from "@supabase/supabase-js";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQyOTU4MSwiZXhwIjoxOTU5MDA1NTgxfQ.dqJkT2LB_F-_dmkapReMRfyTYeaIEeAOG-c8uGxyTEo";
  const SUPABASE_URL = "https://ysyxvvjbwvuieoixmjmq.supabase.co";
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const escutaMensagensEmTempoReal = (adicionaMensagem) => {
    return supabaseClient
      .from("mensagens") //Nome da Tabela
      .on("INSERT", (response) => {
        adicionaMensagem(response.new);
      })
      .on("DELETE", (response) => {
        adicionaMensagem(response.old);
      })
      .subscribe();
  };

  const getPost = (setListMessage) => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        setListMessage(data);
      });

    escutaMensagensEmTempoReal((newMessage) => {
      setListMessage((valorAtualDaLista) => {
        if (Object.keys(newMessage).length > 1) {
          return [newMessage, ...valorAtualDaLista];
        } else {
          const newList = valorAtualDaLista.filter(
            (data) => data.id !== newMessage.id
          );
          return newList;
        }
      });
    });
  };

  const insertPost = (currentMessage) => {
    supabaseClient
      .from("mensagens")
      .insert([currentMessage])
      .then(({ data }) => {
        console.log("Criando mensagem: ", data);
      });
  };

  const deletePost = (currentId) => {
    supabaseClient
      .from("mensagens")
      .delete()
      .match({ id: currentId })
      .then(({ data }) => {
        console.log("Deletando mensagem: ", data);
      });
  };

  return (
    <PostContext.Provider value={{ getPost, insertPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
