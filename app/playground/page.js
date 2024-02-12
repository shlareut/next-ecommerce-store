import React from 'react';
import styles from './page.module.scss';

export default function PlaygroundPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.firstRow} />
        <div className={styles.secondRow}>
          <div className={styles.firstCol} />
          <div className={styles.secondCol} />
        </div>
        <div className={styles.thirdRow} />
        <div className={styles.fourthRow} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.floatBox} />
      </div>
    </div>
  );
}
