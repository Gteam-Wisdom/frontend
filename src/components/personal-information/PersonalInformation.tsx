import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../../components/modal/Modal';
import Layout from '../../components/layout/Layout';
import AvatarUpload from '../../components/avatar-upload/AvatarUpload';
import Input from '../../components/input/Input';
import CountrySelect from '../../components/country-select/CountrySelect';

import styles from './PersonalInformation.module.css';

const PersonalInformation: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    email: '',
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
      navigate('/become-a-learner/verify-email');
    }
  };

  const handleUpload = (file: File) => {
    console.log('Uploading file:', file);
  };

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedCountry: event.target.value,
    }));
  };

  return (
    <div className={styles.personalInformation}>
      <div className={styles.section}>
        <Modal>
          <Layout>
            <h2 className={styles.sectionTitle}>Personal info</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <AvatarUpload onUpload={handleUpload} />
              <Input
                type="text"
                name="name"
                label="Name"
                placeholder="Jenny Wilson"
                className={styles.input}
                value={name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                label="Current email"
                placeholder="example@mail.com"
                value={email}
                errors={errors}
                onChange={handleChange}
              />
              <Input
                type="tel"
                name="phone"
                label="Phone number"
                placeholder="908 082 35 67"
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
            <h2 className={styles.sectionTitle}>Address</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <CountrySelect onChange={handleCountryChange}/>
              <CountrySelect onChange={handleCountryChange}/>
              <CountrySelect onChange={handleCountryChange}/>
              <Input
                type="number"
                name="zip"
                label="ZIP code"
                placeholder="Enter"
                className={styles.input}
                value={name}
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

      <div className={styles.section}>
        <Modal>
          <Layout>
            <h2 className={styles.sectionTitle}>Security settings</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <CountrySelect onChange={handleCountryChange}/>
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
    </div>
  );
};

export default PersonalInformation;
