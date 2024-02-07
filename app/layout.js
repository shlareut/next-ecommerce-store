import './globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// import CartProvider from './context/CartContext';

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
    // <CartProvider>
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
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          pauseOnHover={false}
        />
      </body>
    </html>
    // </CartProvider>
  );
}
