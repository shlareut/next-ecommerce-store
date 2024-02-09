import React from 'react';
import styles from './page.module.scss';

export default async function PlaygroundPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.firstRow}></div>
        <div className={styles.secondRow}>
          <div className={styles.firstCol}></div>
          <div className={styles.secondCol}></div>
        </div>
        <div className={styles.thirdRow}></div>
        <div className={styles.fourthRow}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.floatBox}></div>
      </div>
    </div>
  );
}
