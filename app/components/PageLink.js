import Link from 'next/link';
import React from 'react';
import styles from './PageLink.module.scss';

export default function PageLink(props) {
  return (
    <Link data-test-id={props.dataTestId} href={props.to}>
      <div className={styles.style}>{props.children}</div>
    </Link>
  );
}
