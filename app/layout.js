import './globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
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
        <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          pauseOnHover={false}
          theme="colored"
        />
      </body>
    </html>
  );
}
