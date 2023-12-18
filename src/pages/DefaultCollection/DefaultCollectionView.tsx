import { useEffect, useState } from "react";
import axios from "axios";
import { useHeaderText } from "../Layout/HeaderContext";
import { CollectionItem } from "../wisdom/utils/collection";
import WisdomTable from "../wisdom/components/Table";
import styles from "./DefaultCollection.module.css";

const DefaultCollectionView = () => {
  const [files, setFiles] = useState<CollectionItem[]>([]);
  const { setHeaderText } = useHeaderText();
  setHeaderText("Wisdom > default_collection");

  useEffect(() => {
    const getFiles = async () => {
      try {
        const response = await axios.post(
          "https://wisdocity-dev.mydbsync.com/collections/get-files-list/test_user",
          {
            orderBy: "date_created",
            isDescending: true,
            rowPerPage: 10,
            pageNumber: 1,
          }
        );
        setFiles(response.data.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    getFiles();
  }, []);
  return (
    <div className={styles.wrapper}>
      <WisdomTable data={files} />
    </div>
  );
};

export default DefaultCollectionView;
