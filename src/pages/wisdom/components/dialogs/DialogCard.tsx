import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import Modal from "react-modal";
import styles from "./DialogCard.module.css";
import Typography from "../../../../components/Typography";
import Buttons from "../../../../components/buttons/Buttons";
import Button from "../../../../components/button/Button";

interface ModalDialogProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  name: string;
}

const ModalDialog: FunctionComponent<ModalDialogProps> = ({
  onSubmit,
  onClose,
  open,
  children,
  name,
}) => {
  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={onClose}
        contentLabel={name}
        className={styles.bg}
        overlayClassName={styles.overlay}
        shouldCloseOnOverlayClick={true}
      >
        <Typography bold sx={{ fontSize: "24px", alignSelf: "center" }}>
          {name}
        </Typography>
        {children}
        <Buttons>
          <Button isLong isWide onClick={onClose} hasBorder>
            Cancel
          </Button>
          <Button isLong isWide onClick={onSubmit} hasBorder isAccent>
            Submit
          </Button>
        </Buttons>
      </Modal>
    </>
  );
};

export default ModalDialog;
