import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styles from "../Wisdom.module.css";
import RenderItemOnStatus from "./RenderItemOnStatus";
import Input from "../../../components/input/Input";
import Sort from "./Sort";
import Stack from "../../../components/Stack";
import Add from "./Add";
import { CollectionItem } from "../utils/collection";
import EditMenu from "./EditMainCollection";
import UploadNewFile from "./dialogs/UploadNewFile";
import UploadNewLink from "./dialogs/UploadNewLink";

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
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_118_2477)">
                        <path
                          d="M6.14751 0.5H14.1777L20.9753 7.59195V21.3779C20.9753 23.1023 19.5776 24.5 17.8531 24.5H6.14751C4.42305 24.5 3.02539 23.1023 3.02539 21.3779V3.62212C3.02539 1.89769 4.42305 0.5 6.14751 0.5Z"
                          fill="#007AE0"
                        />
                        <path
                          opacity="0.302"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.168 0.5V7.5337H20.9752L14.168 0.5Z"
                          fill="white"
                        />
                        <path
                          d="M5.92383 17.6248V13.6517H7.33122C7.61269 13.6517 7.87478 13.6938 8.11743 13.7715C8.36008 13.8523 8.58008 13.9688 8.77746 14.1241C8.97481 14.2794 9.13013 14.4865 9.24336 14.7453C9.35659 15.0041 9.41484 15.3018 9.41484 15.6383C9.41484 15.9747 9.35659 16.2724 9.24336 16.5312C9.13013 16.79 8.97481 16.9971 8.77746 17.1524C8.58011 17.3077 8.36008 17.4242 8.11743 17.5051C7.87478 17.5827 7.61272 17.6248 7.33122 17.6248H5.92383ZM6.91709 16.761H7.2115C7.37004 16.761 7.51887 16.7415 7.6515 16.7059C7.78739 16.6671 7.91032 16.6057 8.02679 16.5248C8.14327 16.4439 8.23384 16.3274 8.29856 16.1753C8.36651 16.0265 8.39884 15.8453 8.39884 15.6383C8.39884 15.4312 8.36648 15.25 8.29856 15.098C8.23384 14.9491 8.14327 14.8327 8.02679 14.7518C7.91032 14.6677 7.78739 14.6094 7.6515 14.5706C7.51887 14.535 7.37004 14.5156 7.2115 14.5156H6.91709V16.761ZM11.8252 17.6701C11.2266 17.6701 10.7316 17.476 10.3401 17.091C9.94866 16.7059 9.75453 16.2206 9.75453 15.6383C9.75453 15.0559 9.94866 14.5706 10.3401 14.1856C10.7316 13.8006 11.2266 13.6065 11.8252 13.6065C12.414 13.6065 12.9025 13.8006 13.294 14.1856C13.6823 14.5707 13.8764 15.056 13.8764 15.6383C13.8764 16.2206 13.6823 16.706 13.294 17.091C12.9025 17.476 12.414 17.6701 11.8252 17.6701ZM11.0616 16.4762C11.259 16.6962 11.5113 16.8063 11.8187 16.8063C12.126 16.8063 12.3752 16.6962 12.5725 16.4762C12.7699 16.253 12.8669 15.9747 12.8669 15.6383C12.8669 15.3018 12.7699 15.0235 12.5725 14.8003C12.3752 14.5803 12.126 14.4703 11.8187 14.4703C11.5113 14.4703 11.259 14.5803 11.0616 14.8003C10.8643 15.0235 10.764 15.3018 10.764 15.6383C10.764 15.9747 10.8643 16.253 11.0616 16.4762ZM16.2382 17.6701C15.6591 17.6701 15.177 17.4889 14.7952 17.133C14.4102 16.7739 14.2194 16.2756 14.2194 15.6383C14.2194 15.0041 14.4135 14.5059 14.8017 14.1468C15.1932 13.7876 15.6688 13.6064 16.2382 13.6064C16.7527 13.6064 17.1733 13.7326 17.5065 13.9882C17.8365 14.2406 18.0274 14.5771 18.0759 14.9976L17.073 15.2015C17.0309 14.9815 16.9306 14.8035 16.7753 14.6709C16.62 14.5382 16.4388 14.4703 16.2318 14.4703C15.947 14.4703 15.7108 14.5706 15.52 14.7744C15.3291 14.9815 15.232 15.2662 15.232 15.6382C15.232 16.0103 15.3291 16.295 15.5167 16.4989C15.7076 16.7059 15.9438 16.8062 16.2317 16.8062C16.4388 16.8062 16.6167 16.748 16.7623 16.6315C16.9079 16.5151 16.9985 16.3598 17.0373 16.1656L18.063 16.3986C17.9691 16.7998 17.762 17.1104 17.4385 17.3336C17.1182 17.5569 16.7171 17.6701 16.2382 17.6701Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_118_2477">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

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
                  <Stack
                    direction="row"
                    gap={"20px"}
                    justify="space-between"
                    align="center"
                  >
                    <Stack direction="row" gap={"10"}>
                      <div className={styles.tag}>hello</div>
                      <div className={styles.tag}>world</div>
                    </Stack>
                    <EditMenu>
                      <UploadNewFile />
                      <UploadNewLink />
                    </EditMenu>
                  </Stack>
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
