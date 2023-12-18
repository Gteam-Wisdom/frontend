import React from 'react';
import {useNavigate} from "react-router-dom";

import Layout from '../../components/layout/Layout';
import Button from "../../components/button/Button";
import ModalHeader from "../../components/modal-header/ModalHeader";

import styles from './ExpertCongratsPage.module.css';

const ExpertCongratsPage: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonStart = () => {
        return navigate('/become-an-expert/registration-two');
    };

    return (
        <Layout>
            <ModalHeader
                title={'Congrats'}
                subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiysmod tempor incididunt ut labore'}
            />
            <Button
                className={styles.buttonStart}
                isAccent
                isWide
                onClick={handleButtonStart}
            >Start</Button>
        </Layout>
    );
};

export default ExpertCongratsPage;