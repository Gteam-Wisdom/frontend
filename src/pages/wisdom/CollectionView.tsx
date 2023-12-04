import { useEffect, useState } from "react";
import WisdomTable from "./components/Table";
import axios from "axios";
import { CollectionItem } from "./utils/collection";
import { useHeaderText } from "../expert/Layout/HeaderContext";

const CollectionView = () => {
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
    <div>
      <WisdomTable data={files} />
    </div>
  );
};

export default CollectionView;
