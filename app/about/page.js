import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo/logo.jpeg';

export default function AboutPage() {
  return (
    <div>
      <Image alt="" src={logo} />
    </div>
  );
}
