import React from 'react';
import PageLink from '../components/PageLink';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'All about junk.',
};

export default function PurchaseCompletedPage() {
  return (
    <>
      <h1 className={styles.title}>Thank you for your order</h1>
      <PageLink to="/">Scavenge some more junk!</PageLink>
    </>
  );
}
