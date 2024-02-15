'use client';
import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  return (
    <button
      data-test-id={props.dataTestId}
      className={styles.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
