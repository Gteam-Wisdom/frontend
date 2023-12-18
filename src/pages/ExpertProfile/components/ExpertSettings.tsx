import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ExpertSettings.module.css";
import Modal from "../../../components/modal/Modal";
import CountrySelect from "../../../components/country-select/CountrySelect";
import Input from "../../../components/input/Input";
import Layout from "../../../components/layout/Layout";

const ExpertSettings: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    email: "",
    errors: false,
  });

  const { phone, email, name, password, errors } = formData;

  const handleChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = !name || !phone || !email;
    if (!errors) {
      navigate("/become-a-learner/verify-email");
    }
  };

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedCountry: event.target.value,
    }));
  };

  return (
    <div className={styles.personal}>
      <div className={styles.section}>
        <Modal>
          <Layout>
            <h2 className={styles.sectionTitle}>Security settings</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <CountrySelect onChange={handleCountryChange} />
              <Input
                type="text"
                name="name"
                label="Your answer"
                placeholder="Create answer"
                className={styles.input}
                value={name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                label="Alternate email address"
                placeholder="Add email"
                value={email}
                errors={errors}
                onChange={handleChange}
              />
              <Input
                type="tel"
                name="phone"
                label="Alternate phone number"
                placeholder="Add number"
                value={phone}
                onChange={handleChange}
              />
            </form>
          </Layout>
        </Modal>
      </div>
      <div className={styles.section}>
        <Modal>
          <Layout>
            <h2 className={styles.sectionTitle}>Change password</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <Input
                type="password"
                name="password"
                label="Current password"
                placeholder="***********"
                value={password}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                label="New password"
                placeholder="Create new password"
                value={password}
                onChange={handleChange}
              />
            </form>
          </Layout>
        </Modal>
      </div>
    </div>
  );
};

export default ExpertSettings;
