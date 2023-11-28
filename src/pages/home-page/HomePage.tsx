import { FunctionComponent } from "react";
import styles from "./HomePage.module.css";
import Typography from "../../components/Typography";
import Divider from "../../components/Divider/Divider";
import Stack from "../../components/Stack";
import Category from "./components/Category";
import ExpertCard from "./components/ExpertCard";
import Input from "../../components/input/Input";
import Asking from "./components/Asking";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homeWrapper}>
      <Stack direction="row" spacing={0} align="center" className={styles.menu}>
        <Input
          container={{
            width: "476px",
          }}
          isLocation
          placeholder="Lorem ipsum.."
        ></Input>
        <Typography>Location</Typography>
        <Typography>Category</Typography>
        <Typography>More Filters</Typography>
      </Stack>

      <Typography
        sx={{
          fontWeight: 700,
        }}
      >
        5 most popular categories
      </Typography>
      <Stack direction="row" spacing={0} className="categoryWrapper">
        <Category className={styles.category}>Investment</Category>
        <Category className={styles.category}>Work</Category>
        <Category className={styles.category}>Psychology</Category>
        <Category className={styles.category}>Psychology</Category>
        <Category className={styles.category}>Investment</Category>
      </Stack>
      <Divider />

      <Typography
        sx={{
          fontWeight: 700,
        }}
      >
        Experts near me
      </Typography>
      <Stack direction="row" spacing={0} className={styles.sectionWrapper}>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
      </Stack>

      <Divider />
      <Typography
        sx={{
          fontWeight: 700,
        }}
      >
        Pinned Experts / Experts you chatting with
      </Typography>
      <Stack direction="row" spacing={0} className={styles.sectionWrapper}>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
        <ExpertCard></ExpertCard>
      </Stack>
      <Divider />

      <Typography
        sx={{
          fontWeight: 700,
        }}
      >
        What others are asking experts
      </Typography>
      <Stack direction="row" spacing={0} className={styles.sectionWrapper}>
        <Asking></Asking>
        <Asking></Asking>
        <Asking></Asking>
      </Stack>
    </div>
  );
};

export default HomePage;
