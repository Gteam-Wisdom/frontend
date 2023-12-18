import React from "react";

import Modal from "../modal/Modal";
import Layout from "../layout/Layout";
import Button from "../button/Button";

import iconBasic from './assets/icon-basic.svg'
import iconProfessional from './assets/icon-professional.svg'
import iconUltimate from './assets/icon-ultimate.svg'

import styles from "./Billing.module.css";

const Billing: React.FC = () => {
  return (
    <div className={styles.achievements}>
      {/*<h2 className={styles.achievementsTitle}>Billing</h2>*/}
      <div className={styles.billingPlans}>
        <div className={styles.section}>

          <Modal>
            <Layout>
                <div className={styles.billingPlan}>
                  <img src={iconBasic} alt=""/>
                  <div className={styles.planDetails}>
                    <h3>Basic</h3>
                    <p>$300</p>
                  </div>
                  <div className={styles.mostPopular}>
                    <h4>Most Popular</h4>
                    <p>$80 per month</p>
                  </div>
                  <p className={styles.planDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <ul className={styles.featuresList}>
                    <li>10 Chats</li>
                    <li>Download 20+ files</li>
                    <li>Lorem ipsum per</li>
                    <li>Lorem ipsum per</li>
                  </ul>
                  <Button
                    isAccent
                    isLong
                    isWide
                  >Get started</Button>
                </div>
            </Layout>
          </Modal>
        </div>

        <div className={styles.section}>
          <Modal style={{backgroundColor: '#8726B9'}}>
            <Layout>
              <div className={`${styles.billingPlan} ${styles.professional}`}>
                <img src={iconProfessional} alt=""/>
                <div className={styles.planDetails}>
                  <h3>Professional</h3>
                  <p>$600</p>
                </div>
                <div className={styles.mostPopular}>
                  <h4>Most Popular</h4>
                  <p>$100 per month</p>
                </div>
                <p className={styles.planDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className={styles.featuresList}>
                  <li>10 Chats</li>
                  <li>Download 20+ files</li>
                  <li>Lorem ipsum per</li>
                  <li>Lorem ipsum per</li>
                </ul>
                <Button
                  wrapperStyle={{background:'#FCFCFD', color: '#64108F'}}
                  isAccent
                  isLong
                  isWide
                >Get started</Button>
              </div>
            </Layout>
          </Modal>
        </div>

        <div className={styles.section}>
          <Modal>
            <Layout>
              <div className={styles.billingPlan}>
                <img src={iconBasic} alt=""/>
                <div className={styles.planDetails}>
                  <h3>Basic</h3>
                  <p>$300</p>
                </div>
                <div className={styles.mostPopular}>
                  <h4>Most Popular</h4>
                  <p>$80 per month</p>
                </div>
                <p className={styles.planDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className={styles.featuresList}>
                  <li>10 Chats</li>
                  <li>Download 20+ files</li>
                  <li>Lorem ipsum per</li>
                  <li>Lorem ipsum per</li>
                </ul>
                <Button
                  isAccent
                  isLong
                  isWide
                >Get started</Button>
              </div>
            </Layout>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Billing;
