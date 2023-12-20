import Stack from "../../components/Stack";
import Typography from "../../components/Typography";
import Buttons from "../../components/buttons/Buttons";
import Plus from "./assets/plus.svg";
import styles from "./WisdomUpload.module.css";
import Button from "../../components/button/Button";
import Question from "./components/Question";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Upload from "./assets/upload.svg";
import Delete from "./assets/add.svg";

const WisdomUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function handleDeleteFile(i: number) {
    const newArray = uploadedFiles.filter((_, index) => index !== i);
    setUploadedFiles(newArray);
  }

  // Handle the submission logic here with uploadedFiles
  const handleSubmitModal = async () => {
    try {
      // Your submission logic goes here
      handleCloseModal();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Dropzone configuration
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },
    onDrop: (acceptedFiles: File[]) => {
      setUploadedFiles((old) => [...old, ...acceptedFiles]);
    },
  });
  return (
    <div className={styles.wrapper}>
      <Stack align="center" className={styles.content} gap="32">
        <Typography variant="h1">Here Is Your Wisdom Collection</Typography>
        <Typography variant="p2" secondary>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis
        </Typography>
        <Buttons>
          <Button
            isAccent
            isWide
            isCenter
            fit
            onClick={() => setIsModalOpen(true)}
          >
            <Stack direction="row" align="center" gap="12">
              <img src={Plus} alt="plus" /> Upload
            </Stack>
          </Button>
          <Button isWide hasBorder isLong fit>
            Create collection
          </Button>
        </Buttons>
        <Question />
      </Stack>

      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upload New File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack className={styles.dropzoneWrapper}>
            <Typography bold>Files</Typography>
            <Typography>
              Supported file types: JPEG, PNG, PDF, DOC, DOCX, TXT
            </Typography>
            <Stack direction="row" className={styles.filesWrapper}>
              {uploadedFiles.length > 0 &&
                uploadedFiles.map((file: File, i: number) => {
                  return (
                    <div key={file.name} className={styles.file}>
                      {file.name}
                      <button
                        className={styles.close}
                        onClick={() => {
                          handleDeleteFile(i);
                        }}
                      >
                        <Typography variant="p2">
                          <img
                            src={Delete}
                            className={styles.delete}
                            alt="Delete file"
                          />
                        </Typography>
                      </button>
                    </div>
                  );
                })}
            </Stack>

            <div {...getRootProps()} className={styles.dropzone}>
              <input {...getInputProps()} />
              <Typography>
                Drag 'n' drop files here, or
                <span style={{ color: "#006BC5" }}> Browse</span>
              </Typography>
              <Typography variant="p2">Maximum file size 10 MB</Typography>
              <img src={Upload} alt="Upload" className={styles.upload} />
            </div>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleSubmitModal}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WisdomUpload;
