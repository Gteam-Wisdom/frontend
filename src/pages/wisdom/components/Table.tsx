import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styles from "../Wisdom.module.css";
import RenderItemOnStatus from "./RenderItemOnStatus";
import Input from "../../../components/input/Input";
import Sort from "./Sort";
import Stack from "../../../components/Stack";
import Add from "./Add";
import { CollectionItem } from "../utils/collection";

const findFiles = (searchString: string, data: CollectionItem[]) => {
  return data.filter(
    (e) => e.tags.includes(searchString) || e.file_name.includes(searchString)
  );
};

const WisdomTable: FunctionComponent<{ data: CollectionItem[] }> = ({
  data,
}) => {
  const [wisdomData, setWisdomData] = useState<CollectionItem[]>(data);
  const [findString, setFindString] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("");

  useEffect(() => {
    let sortedData = [...data];

    if (sortColumn) {
      sortedData = sortedData.sort((a, b) =>
        (a[sortColumn as keyof CollectionItem] as string).localeCompare(
          b[sortColumn as keyof CollectionItem] as string
        )
      );
    }
    const filteredData = findFiles(findString, sortedData);
    setWisdomData(filteredData);
  }, [sortColumn, findString, data]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFindString(e.target.value);
    },
    []
  );

  const handleSort = useCallback((column: string) => {
    setSortColumn(column);
  }, []);

  useEffect(() => {
    setWisdomData(data);
  }, [data]);

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
            onChange={handleInputChange}
          ></Input>
          <Sort onSort={handleSort} />
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
            {wisdomData.map((item) => (
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
    </div>
  );
};

export default WisdomTable;
