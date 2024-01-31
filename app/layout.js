import './globals.scss';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Navbar from './Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'All about junk | Junkyard',
    template: '%s | Junkyard 💩',
  },
  description: 'All about junk.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
