import React, { FunctionComponent, useState } from "react";
import Typography from "../../../components/Typography";
import Button from "../../../components/button/Button";
import styles from "./Collection.module.css";
import Starred from "../assets/starred.svg";
import { useNavigate } from "react-router";
import Tag from "./Tag";
import EditMenu from "./EditMainCollection";
import Stack from "../../../components/Stack";
import Input from "../../../components/input/Input";
import Sort from "./Sort";
import AddNewCollection from "./AddNewCollection";
import UploadNewFile from "./dialogs/UploadNewFile";
import UploadNewLink from "./dialogs/UploadNewLink";
import { CollectionsList } from "../utils/collection";

interface Props {
  collections: CollectionsList[];
}

const Collection: FunctionComponent<Props> = ({ collections }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCollections = collections.filter((collection) =>
    collection.collection_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
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
            onChange={(e) => setSearchQuery(e.target.value)}
          ></Input>
          <Sort onSort={() => {}} />
        </Stack>
        <Stack
          direction="row"
          align="center"
          className={styles.findSortWrapper}
        >
          <AddNewCollection />
          <Button className={styles.button} hasBorder isWide>
            Chat with collection
          </Button>
        </Stack>
      </div>
      {filteredCollections.map((collection: any) => (
        <div className={styles.card} key={collection.collection_id}>
          <div className={styles.header}>
            <Typography className={styles.headerText}>
              {collection.collection_name}
            </Typography>
            <Stack direction="row" align="center">
              <img src={Starred} alt="favorite"></img>
              <EditMenu>
                <UploadNewFile collectionId={collection.collection_name} />
                <UploadNewLink />
              </EditMenu>
            </Stack>
          </div>
          <Button
            className={styles.button}
            hasBorder
            isLong
            isWide
            onClick={() => {
              navigate(`/expert/${collection.collection_name}`);
            }}
          >
            Open
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Collection;
