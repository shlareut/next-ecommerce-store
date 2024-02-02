import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo/logo.jpeg';
import styles from './page.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.contentWrapper}>
      <Image alt="" src={logo} width={300} />
      <div className={styles.textBlock}>
        <p className={styles.text}>
          Junkyard stands for the finest quality junk you can shop online. Dive
          into an eclectic selection of discarded odds and ends, where "out with
          the old" takes on a whole new meaning. Our online store is the go-to
          destination for those who appreciate the beauty in the banal and find
          charm in the discarded.
        </p>

        <p className={styles.text}>
          At Junkyard, we've mastered the art of turning trash into treasure,
          and our inventory boasts a fascinating array of items that others may
          overlook. From battered appliances to tattered textiles, we offer a
          shopping experience that embraces the unglamorous side of life with a
          touch of humor and irony.
        </p>

        <p className={styles.text}>
          Unleash your inner scavenger as you browse through our virtual aisles,
          discovering the allure of items that have seen better days. Our
          collection is a testament to the extraordinary potential found in the
          most ordinary of objects. Every piece comes with a history – a journey
          from functionality to fabulousness.
        </p>
      </div>
    </div>
  );
}
