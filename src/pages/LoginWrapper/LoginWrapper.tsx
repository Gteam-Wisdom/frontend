import { FunctionComponent, PropsWithChildren } from "react";

import BecomeHeader from "../../components/become-header/BecomeHeader";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Modal from "../../components/modal/Modal";

import styles from "./BecomeALearner.module.css";
import LoginView from "../LoginView";

const LoginWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <BecomeHeader />
      <ModalWrapper>
        <Modal>
          {children}
          <LoginView></LoginView>
        </Modal>
      </ModalWrapper>
    </div>
  );
};

export default LoginWrapper;
