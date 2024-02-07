'use client';
import React from 'react';
import styles from './CrossButton.module.scss';

export default function CrossButton(props) {
  return (
    <button className={styles.style} onClick={props.onClick}>
      ✖️
    </button>
  );
}
