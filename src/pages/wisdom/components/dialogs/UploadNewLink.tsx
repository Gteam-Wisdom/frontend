import { useState } from "react";
import DialogCard from "./DialogCard";
import Stack from "../../../../components/Stack";
import Typography from "../../../../components/Typography";
import styles from "./UploadNewLink.module.css";
import Delete from "../../assets/add.svg";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import Buttons from "../../../../components/buttons/Buttons";
import item from "./DropdownItem.module.css";
import AddRounded from "../../assets/addRounded.svg";

const UploadNewLink = ({ open }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(open);
  const [links, setLinks] = useState<string[]>([]);
  const [link, setLink] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteLink = (i: number) => {
    // Create a new array that includes all elements except the one at index 'i'
    const newArray = links.filter((_, index) => index !== i);

    // Update the state with the new array, effectively removing the link at index 'i'
    setLinks(newArray);
  };

  const handleInputChange = (event: { target: { value: any } }) => {
    setLink(event.target.value); // Update the link state when the input value changes
  };
  const onAddLink = () => {
    setLinks((old) => {
      // Create a new array with the updated link
      const newArray = [...old, link];

      // Clear the input field after adding the link
      setLink("");

      // Return the new array to trigger the state update
      return newArray;
    });
  };

  const handleSubmitModal = () => {
    // Handle the submission logic here with uploadedFiles
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal} className={item.item}>
        <img src={AddRounded} alt="add link" />
        New link
      </button>
      <DialogCard
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        name="Upload new link"
      >
        <Stack className={styles.dropzoneWrapper}>
          <Typography bold>Links</Typography>
          <Stack direction="row" className={styles.filesWrapper}>
            {links.length > 0 &&
              links.map((link: string, i: number) => {
                return (
                  <div key={link} className={styles.file}>
                    {link}
                    <button
                      className={styles.close}
                      onClick={() => {
                        handleDeleteLink(i);
                      }}
                    >
                      <Typography variant="secondary">
                        <img
                          src={Delete}
                          className={styles.delete}
                          alt="Delete link"
                        />
                      </Typography>
                    </button>
                  </div>
                );
              })}
            <Stack direction="row" align="center" justify="flex-end">
              <Input
                value={link}
                label="Add new link"
                placeholder="Add link"
                onChange={handleInputChange}
                container={{
                  margin: 0,
                }}
              ></Input>
              <Buttons>
                <Button className={styles.button} onClick={onAddLink}>
                  Add
                </Button>
              </Buttons>
            </Stack>
          </Stack>
        </Stack>
      </DialogCard>
    </div>
  );
};

export default UploadNewLink;
