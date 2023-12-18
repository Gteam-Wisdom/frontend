import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/layout/Layout';
import Button from '../../components/button/Button';
import Already from "../../components/already/Already";
import ModalHeader from "../../components/modal-header/ModalHeader";

import styles from './JoinPage.module.css';

interface JoinPageProps {
    isExpert: boolean;
}

const JoinPage: React.FC<JoinPageProps> = ({ isExpert }) => {
    const navigate = useNavigate();
    const [isChecked, setChecked] = useState(isExpert);

    const handleJoin = () => {
        if (isChecked) {
            return navigate('/become-an-expert/registration');
        }
        return navigate('/become-a-learner/registration');
    };

    const handleRadioChange = () => {
        setChecked(!isChecked);
    };

    return (
        <Layout>
            <ModalHeader title={"Join as a learner or an expert"}/>
            <form onSubmit={handleJoin}>
                <div className={styles.row}>
                    <div
                        className={`${styles.radio} ${isChecked ? styles.checked : ''}`}
                        onClick={handleRadioChange}
                    >
                        <input type="radio" name="join-as" checked={isChecked} />
                        <span>I'm an expert, want to...</span>
                    </div>
                    <div
                        className={`${styles.radio} ${!isChecked ? styles.checked : ''}`}
                        onClick={handleRadioChange}
                    >
                        <input type="radio" name="join-as" checked={!isChecked} />
                        <span>I'm a learner, want to...</span>
                    </div>
                </div>
                <Button
                    className={styles.buttonJoin}
                    type="submit"
                    isAccent
                    isWide
                    isCenter
                >Join</Button>
            </form>
            <Already/>
        </Layout>
    );
};

export default JoinPage;
