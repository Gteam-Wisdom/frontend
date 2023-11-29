import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import styles from "../Wisdom.module.css";
import RenderItemOnStatus from "./RenderItemOnStatus";
import Input from "../../../components/input/Input";
import Sort from "./Sort";
import Stack from "../../../components/Stack";
import Typography from "../../../components/Typography";
import Add from "./Add";

interface CollectionItem {
  file_name: string;
  file_type: string;
  date_created: string;
  status: string;
  tags: string;
}

interface WisdomResponse {
  data: CollectionItem[];
  message: string;
  totalCount: number;
  totalPages: number;
}

const WisdomTable: React.FC = () => {
  const [wisdomData, setWisdomData] = useState<WisdomResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, [currentPage]); // Fetch data whenever the currentPage changes

  const fetchData = async () => {
    try {
      const response = await axios.post<WisdomResponse>(
        "https://wisdocity-dev.mydbsync.com/collections/get-files-list/test_user",
        {
          orderBy: "date_created",
          isDescending: true,
          rowPerPage: itemsPerPage,
          pageNumber: currentPage,
        }
      );

      setWisdomData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getLastIndex = () => {
    return currentPage * itemsPerPage;
  };

  const getFirstIndex = () => {
    return getLastIndex() - itemsPerPage;
  };

  const currentItems = wisdomData?.data.slice(getFirstIndex(), getLastIndex());

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.actionsWrapper}>
        <Stack
          direction="row"
          align="center"
          className={styles.findSortWrapper}
        >
          <Input
            isFind
            container={{
              width: "250px",
            }}
            placeholder="Search by name or tags"
          ></Input>
          <Sort></Sort>
        </Stack>
        <Stack
          direction="row"
          align="center"
          className={styles.findSortWrapper}
        >
          <Add></Add>
        </Stack>
      </div>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>File Name</th>
              <th>File Type</th>
              <th>Date Created</th>
              <th>Status</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {wisdomData?.data.map((item) => (
              <tr className={styles.tr} key={item.file_name}>
                <td>
                  <div>
                    <input type="checkbox" className={styles.input} />
                    {item.file_name}
                  </div>
                </td>
                <td>
                  <div>{item.file_type}</div>
                </td>
                <td>
                  <div>{item.date_created}</div>
                </td>
                <td>
                  <div>
                    {<RenderItemOnStatus status={item.status} />}
                    {item.status}
                  </div>
                </td>
                <td>
                  <div>
                    <div className={styles.tag}>hello</div>
                    <div className={styles.tag}>world</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {wisdomData && (
        <Pagination>
          {[...Array(Math.ceil(wisdomData.totalCount / itemsPerPage))].map(
            (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      )} */}
    </div>
  );
};

export default WisdomTable;
