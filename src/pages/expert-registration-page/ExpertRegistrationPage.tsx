import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AvatarUpload from "../../components/avatar-upload/AvatarUpload";
import MultiStepProgressBar from "../../components/multi-step-progress-bar/MultiStepProgressBar";
import MultiSelect, { Option } from "../../components/multi-select/MultiSelect";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";

import styles from "./ExpertRegistrationPage.module.css";

interface ExpertRegistrationPageProps {
  currentPage?: number;
  setCurrentPage?: any;
  nextPageNumber?: (pageNumber: string) => void;
  totalSteps?: number;
  isExpert?: boolean;
  addData: (e: any) => void;
}

const ExpertRegistrationPage: FunctionComponent<
  ExpertRegistrationPageProps
> = ({
  currentPage = 0,
  nextPageNumber = () => {},
  totalSteps = 0,
  setCurrentPage,
  isExpert,
  addData,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    password: "",
  });

  const { fullname, password } = formData;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangePass = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      password: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = !fullname || !optionSelected;

    if (errors) {
      return;
    }
    const nextPageIndex =
      currentPage < totalSteps ? currentPage + 1 : totalSteps;
    addData(formData);
    setCurrentPage(nextPageIndex);
    return navigate("/become-an-expert/verify-email");
  };

  const handleUpload = (file: File) => {
    console.log("Uploading file:", file);
  };

  const options = [
    { value: 0, label: "Goranboy" },
    { value: 1, label: "Safikurd" },
    { value: 2, label: "Baku" },
    { value: 3, label: "Ganja" },
    { value: 4, label: "Shusha" },
    { value: 5, label: "Agdam" },
  ];

  const [optionSelected, setSelected] = useState<Option[] | null>();
  const handleChangeSelect = (selected: Option[]) => {
    setSelected(selected);
  };

  return (
    <Layout>
      <ModalHeader title={"Become an expert"} />
      <MultiStepProgressBar
        page={currentPage}
        onPageNumberClick={nextPageNumber}
        totalSteps={totalSteps}
      />
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <Input
          required
          type="text"
          name="fullname"
          label="Full name"
          placeholder="Jenny Wilson"
          className={styles.input}
          value={fullname}
          onChange={handleChange}
        />
        <AvatarUpload onUpload={handleUpload} />
        {/*<CountrySelect onChange={handleCountryChange}/>*/}
        <Input
          label="Password"
          showPasswordToggle
          required
          type="password"
          name="fullname"
          className={styles.input}
          value={password}
          onChange={handleChangePass}
        />
        <MultiSelect
          required
          key="example_id"
          label="Your Category"
          placeholder="Jenny Wilson"
          helperMessage="Use commas between words to add a list of tags."
          options={options}
          onChange={handleChangeSelect}
          value={optionSelected}
          isSelectAll={true}
          menuPlacement={"bottom"}
        />
        {/*<Input*/}
        {/*    type="phone"*/}
        {/*    name="phone"*/}
        {/*    label="Phone number"*/}
        {/*    placeholder="908 082 35 67"*/}
        {/*    value={password}*/}
        {/*    onChange={handleChange}*/}
        {/*/>*/}
        {/*<Input*/}
        {/*    required*/}
        {/*    type="bio"*/}
        {/*    name="bio"*/}
        {/*    label="Bio"*/}
        {/*    placeholder="Add bio"*/}
        {/*    value={password}*/}
        {/*    onChange={handleChange}*/}
        {/*/>*/}
        {/*<Input*/}
        {/*    required*/}
        {/*    type="password"*/}
        {/*    name="password"*/}
        {/*    label="Password"*/}
        {/*    placeholder="Create password"*/}
        {/*    helperMessage="8 or more characters"*/}
        {/*    value={password}*/}
        {/*    onChange={handleChange}*/}
        {/*/>*/}
        <Buttons>
          <Button isWide hasBorder>
            Cancel
          </Button>
          <Button type="submit" isAccent isWide>
            Next
          </Button>
        </Buttons>
      </form>
    </Layout>
  );
};

export default ExpertRegistrationPage;
