import { useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import Stack from "../../../../components/Stack";
import Typography from "../../../../components/Typography";
import styles from "./UploadNewLink.module.css";
import Delete from "../../assets/add.svg";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import Buttons from "../../../../components/buttons/Buttons";
import item from "./DropdownItem.module.css";
import AddRounded from "../../assets/addRounded.svg";

const UploadNewLink = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [links, setLinks] = useState<string[]>([]);
  const [link, setLink] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDeleteLink = (i: number) => {
    const newArray = links.filter((_, index) => index !== i);
    setLinks(newArray);
  };

  const handleInputChange = (event: { target: { value: any } }) => {
    setLink(event.target.value);
  };

  const onAddLink = () => {
    setLinks((old) => {
      const newArray = [...old, link];
      setLink("");
      return newArray;
    });
  };

  return (
    <div>
      <button onClick={openModal} className={item.item}>
        <img src={AddRounded} alt="add link" />
        New link
      </button>

      <Modal show={modalIsOpen} onHide={closeModal} centered>
        <ModalBody>
          <Typography bold sx={{ fontSize: "24px", alignSelf: "center" }}>
            Upload New Link
          </Typography>
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
                        onClick={() => handleDeleteLink(i)}
                      >
                        <Typography variant="p2">
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
          <Buttons>
            <Button isLong isWide onClick={closeModal} hasBorder>
              Cancel
            </Button>
            <Button isLong isWide onClick={closeModal} hasBorder isAccent>
              Submit
            </Button>
          </Buttons>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UploadNewLink;
