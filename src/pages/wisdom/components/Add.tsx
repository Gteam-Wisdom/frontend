import { FunctionComponent, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import AddIcon from "../assets/add.svg";
import styles from "./Add.module.css";
import Typography from "../../../components/Typography";

interface File {
  name: string;
  type: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
}

const Add: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
      "application/msword": [".word"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFiles([]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();

      // Read the content of the File as Uint8Array
      const fileData = await files[0].arrayBuffer();
      const uint8Array = new Uint8Array(fileData);

      // Create a new Blob from the Uint8Array with the type of the original file
      const blob = new Blob([uint8Array], { type: files[0].type });

      // Append the Blob to the formData with the key "files"
      formData.append("tags", "hello");
      formData.append("status", "In progress");
      formData.append("files", blob, files[0].name);
      await axios.post(
        "https://wisdocity-dev.mydbsync.com/collections/upload-files/test_user",
        formData
      );

      console.log("File uploaded successfully");
      closeModal();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <button onClick={openModal}>
        <img src={AddIcon} alt="Add" />
      </button>

      <Modal
        show={isModalOpen}
        onHide={closeModal}
        aria-labelledby="Upload Files"
        contentClassName={styles.dialog}
      >
        <div className={styles.border}>
          <Modal.Header closeButton>
            <Modal.Title>Drag and Drop Files</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div {...getRootProps()} className={styles.dropArea}>
              <input {...getInputProps()} />
              <p>Drag files here or click to select files</p>
              <Typography sx={{ color: "rgba(179, 177, 201, 1)" }}>
                File must be JPEG, PNG, PDF, DOC, DOCX, TXT
              </Typography>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleUpload}>Upload</button>
            <button onClick={closeModal}>Cancel</button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Add;
