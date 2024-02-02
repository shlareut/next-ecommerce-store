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
          Junkyard stands for the finest quality junk you could shop on the
          internet. Dig into a variety of scrapped stuff, and immerse yourself
          in the world of quirky treasures that redefine the concept of hidden
          gems. At Junkyard, we celebrate the art of repurposing, turning
          discarded items into unique and fascinating finds that add character
          to your space.
        </p>

        <p className={styles.text}>
          Our collection is a curated assortment of eclectic oddities, each with
          its own story waiting to be discovered. From vintage knick-knacks to
          rustic relics, Junkyard embraces the beauty of imperfection, offering
          you a shopping experience like no other. Whether you're a connoisseur
          of curiosities or a seeker of the extraordinary, our online store is a
          haven for those who appreciate the charm found in the unlikeliest of
          places.
        </p>

        <p className={styles.text}>
          At Junkyard, we believe that junk isn't just about what it once was;
          it's about what it can become. Our team of scavenger enthusiasts
          scours the depths of forgotten spaces to unearth the extraordinary
          potential hidden within discarded items. Every piece in our inventory
          has been carefully selected to bring a touch of nostalgia, humor, or
          whimsy to your life.
        </p>

        <p className={styles.text}>
          Join us on a journey where the ordinary transforms into the
          extraordinary. Embrace the uniqueness of each piece, knowing that your
          purchase not only adds character to your surroundings but also
          contributes to the art of sustainable living. At Junkyard, we don't
          just sell junk; we redefine it, turning forgotten relics into
          conversation starters and mundane objects into cherished finds.
        </p>

        <p className={styles.text}>
          Indulge in the thrill of the hunt as you navigate our virtual aisles,
          discovering treasures that resonate with your sense of style and
          adventure. Junkyard – where every piece tells a story, and every
          purchase is a step towards a more creatively enriched and
          environmentally conscious lifestyle. Welcome to our world of
          unconventional charm, where the allure of junk is anything but
          ordinary.
        </p>
      </div>
    </div>
  );
}
