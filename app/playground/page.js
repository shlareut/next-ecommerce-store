import React from 'react';
import InputStepper from '../components/InputStepper';
import HandleNotifyButton from './HandleNotifyButton';
import styles from './page.module.scss';

export default function PlaygroundPage() {
  return (
    <div className={styles.style}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.pieceOne}></div>
          <div className={styles.pieceTwo}></div>
        </div>
      </div>
      <div className={styles.sideBar}></div>
    </div>
  );
}
