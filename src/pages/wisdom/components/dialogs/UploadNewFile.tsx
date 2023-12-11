import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Stack from "../../../../components/Stack";
import Typography from "../../../../components/Typography";
import styles from "./UploadNewFile.module.css";
import item from "./DropdownItem.module.css";
import AddRounded from "../../assets/addRounded.svg";
import Upload from "../../assets/upload.svg";
import Delete from "../../assets/add.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const UploadNewFile = ({ collectionId }: any) => {
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
    <div>
      <button onClick={handleOpenModal} className={item.item}>
        <img src={AddRounded} alt="add link" />
        New file
      </button>

      {/* Use the Bootstrap Modal */}
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadNewFile;
