import React from 'react';
import {useNavigate} from "react-router-dom";

import Layout from '../../components/layout/Layout';
import Button from "../../components/button/Button";
import ModalHeader from "../../components/modal-header/ModalHeader";

// import styles from './LearnerCongratsPage.module.css';

const LearnerCongratsPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <ModalHeader
                title={'Congrats'}
                subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiysmod tempor incididunt ut labore'}
            />
            <Button
                onClick={() => navigate('/become-a-learner/onboarding')}
                isAccent
                isLong
                isWide
            >Start</Button>
        </Layout>
    );
};

export default LearnerCongratsPage;