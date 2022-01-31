import Modal from "react-modal";
import appConfig from "../../../config.json";

import { Box } from "@skynexui/components";
import { FaWindowClose } from "react-icons/fa";

const ModalComponent = ({ modalIsOpen, setIsOpen, content }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "80%",
      maxWidth: "500px",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      borderRadius: "15px",
      color: "white",
      backgroundColor: appConfig.theme.colors.neutrals[700],
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      ariaHideApp={false}
    >
      <Box onClick={closeModal}>
        <FaWindowClose
          style={{
            cursor: "pointer",
          }}
        />
      </Box>
      <Box>
        <>{content}</>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
