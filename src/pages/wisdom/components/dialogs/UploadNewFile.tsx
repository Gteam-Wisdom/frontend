import { useState } from "react";
import { useDropzone } from "react-dropzone";
import DialogCard from "./DialogCard"; // Adjust the path accordingly
import Stack from "../../../../components/Stack";
import Typography from "../../../../components/Typography";
import styles from "./UploadNewFile.module.css";
import item from "./DropdownItem.module.css";
import AddRounded from "../../assets/addRounded.svg";
import axios from "axios";

import Upload from "../../assets/upload.svg";
import Delete from "../../assets/add.svg";

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
      const formData = new FormData();

      // Read the content of the File as Uint8Array
      const fileData = await uploadedFiles[0].arrayBuffer();
      const uint8Array = new Uint8Array(fileData);

      // Create a new Blob from the Uint8Array with the type of the original file
      const blob = new Blob([uint8Array], { type: uploadedFiles[0].type });

      // Append the Blob to the formData with the key "files"
      formData.append("tags", "hello");
      formData.append("status", "In progress");
      formData.append("files", blob, uploadedFiles[0].name);
      await axios.post(
        "https://wisdocity-dev.mydbsync.com/collections/upload-files/test_user",
        formData
      );
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
      <DialogCard
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        name="Upload new file"
      >
        <Stack className={styles.dropzoneWrapper}>
          <Typography bold>Files</Typography>
          <Typography>
            Supported file type: JPEG, PNG, PDF, DOC, DOCX, TXT
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
                      <Typography variant="secondary">
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
            <Typography variant="secondary">Maximum file size 10 MB</Typography>
            <img src={Upload} alt="Upload" className={styles.upload} />
          </div>
        </Stack>
      </DialogCard>
    </div>
  );
};

export default UploadNewFile;
