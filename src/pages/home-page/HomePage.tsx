import { FunctionComponent } from "react";
import styles from "./HomePage.module.css";
import Typography from "../../components/Typography";
import Divider from "../../components/Divider/Divider";
import Stack from "../../components/Stack";
import Category from "./components/Category";
import ExpertCard from "./components/ExpertCard";
import Input from "../../components/input/Input";
import Asking from "./components/Asking";
import Tag from "../wisdom/components/Tag";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homeWrapper}>
      <Stack direction="row" align="center" className={styles.menu}>
        <Input
          container={{
            width: "476px",
          }}
          isLocation
          placeholder="Lorem ipsum.."
        ></Input>
        <Typography variant="h2">Location</Typography>
        <Typography variant="h2">Category</Typography>
        <Typography variant="h2">More Filters</Typography>
      </Stack>

      <Typography variant="h1" bold>
        5 most popular categories
      </Typography>
      <Stack direction="row" className="categoryWrapper">
        <Tag text={"Investment"}></Tag>
        <Tag text={"Work"}></Tag>
        <Tag text={"Psychology"}></Tag>
        <Tag text={"Investment"}></Tag>
      </Stack>
      <Divider />

      <Typography
        sx={{
          fontWeight: 700,
        }}
      >
        Experts near me
      </Typography>
      <Stack direction="row" className={styles.sectionWrapper}>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
      </Stack>

      <Divider />
      <Typography variant="h1" bold>
        Pinned Experts / Experts you chatting with
      </Typography>
      <Stack direction="row" className={styles.sectionWrapper}>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
      </Stack>
      <Divider />

      <Typography variant="h1" bold>
        What others are asking experts
      </Typography>
      <Stack direction="row" className={styles.sectionWrapper}>
        <Asking></Asking>
        <Asking></Asking>
        <Asking></Asking>
      </Stack>
    </div>
  );
};

export default HomePage;
