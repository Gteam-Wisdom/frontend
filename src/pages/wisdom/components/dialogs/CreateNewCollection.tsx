import { FunctionComponent, PropsWithChildren, useState } from "react";
import DialogCard from "./DialogCard";
import Divider from "../../../../components/Divider/Divider";
import Input from "../../../../components/input/Input";
import styles from "./CreateNewCollection.module.css";
import Access from "../Access";
import RadioGroup from "../RadioGroup";

const CreateNewCollection: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = () => {
    // Handle the submission logic here with uploadedFiles
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal} className={styles.button}>
        {children}
      </button>
      <DialogCard
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        name="Create Wisdom collection"
      >
        <div className={styles.wrapper}>
          <Divider />
          <Input
            label="Add collection name"
            container={{ width: "100%" }}
            placeholder="Name"
          ></Input>
          <Input
            label="Add tags"
            container={{ width: "100%" }}
            placeholder="Name"
          ></Input>
          <Access></Access>
          <RadioGroup />
        </div>
      </DialogCard>
    </div>
  );
};

export default CreateNewCollection;
