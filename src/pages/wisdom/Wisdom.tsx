import axios from "axios";
import { useEffect, useState } from "react";
import WisdomTable from "./components/Table";
import styles from "./Wisdom.module.css";

// Define TypeScript types
interface CollectionItem {
  collection_name: string;
  collection_path: string;
  date_created: string;
  file_name: string;
  file_path: string;
  file_type: string;
  status: string;
  tags: string;
  user_id: string;
}

interface WisdomResponse {
  data: CollectionItem[];
  message: string;
  totalCount: number;
  totalPages: number;
}

interface WisdomProps {
  // Add any additional props if needed
}

const Wisdom: React.FC<WisdomProps> = () => {
  //   const [setWisdomData] = useState<WisdomResponse | null>(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         // Use axios.post and provide the data in the 'data' property
  //         const response = await axios.post<WisdomResponse>(
  //           "https://wisdocity-dev.mydbsync.com/collections/get-collection-list/test_user",
  // //           {
  // //             orderBy: "date_created",
  // //             isDescending: true,
  // //             rowPerPage: 10,
  // //             pageNumber: 1,
  // //           }
  // //         );

  // //         // Set the data in the state
  // //         setWisdomData(response.data);
  // //       } catch (error) {
  // //         // Handle errors here
  // //         console.error("Error fetching data:", error);
  // //       }
  // //     };

  //     fetchData(); // Call the fetchData function

  //     // Add axios to the dependency array if you use it directly in the useEffect
  //   }, []); // Empty dependency array means this effect runs once after the initial render

  //   // You can now use the 'wisdomData' state in your component

  return (
    <div className={styles.wrapper}>
      <WisdomTable></WisdomTable>
    </div>
  );
};

export default Wisdom;
