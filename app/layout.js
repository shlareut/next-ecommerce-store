import './globals.scss';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'All about junk | Junkyard',
    template: '%s | Junkyard 💩',
  },
  description: 'Only the best junk',
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
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
