import { useCallback, useEffect, useState } from "react";
import WisdomTable from "./components/Table";
import styles from "./Wisdom.module.css";
import NavBar from "./components/NavBar";
import Collection from "./components/Collection";
import axios from "axios";
import { CollectionItem, CollectionsList } from "./utils/collection";
import { Outlet } from "react-router";
import { useHeaderText } from "../Layout/HeaderContext";
import WisdomUpload from "./WisdomUpload";

const Wisdom = () => {
  const [page, setPage] = useState("1");
  const [files, setFiles] = useState<CollectionItem[]>([]);
  const [collections, setCollections] = useState<CollectionsList[]>([]);
  const { setHeaderText } = useHeaderText();
  setHeaderText("Wisdom");

  const pageClickHandle = useCallback((pageNum: string) => {
    setPage(pageNum);
  }, []);

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
    const getCollections = async () => {
      try {
        const response = await axios.get(
          "https://wisdocity-dev.mydbsync.com/collections/get-collections-list/test_user"
        );
        setCollections(response.data.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    getFiles();
    getCollections();
  }, [page]);

  return (
    <div className={styles.wrapper}>
      {files ? (
        <>
          <NavBar pageClickHandle={pageClickHandle} />
          {page === "1" ? (
            <WisdomTable data={files} />
          ) : (
            <Collection collections={collections} />
          )}
        </>
      ) : (
        <WisdomUpload />
      )}
    </div>
  );
};

export default Wisdom;
