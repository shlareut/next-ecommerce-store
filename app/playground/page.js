import React from 'react';
import InputStepper from '../components/InputStepper';
import HandleNotifyButton from './HandleNotifyButton';
import styles from './page.module.scss';

export default function PlaygroundPage() {
  return (
    <div className={styles.style}>
      <InputStepper />
      <HandleNotifyButton />
    </div>
  );
}
