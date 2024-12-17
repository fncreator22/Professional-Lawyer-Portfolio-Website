import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'John Doe - Attorney at Law',
  description: 'Professional legal services with a commitment to justice',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}