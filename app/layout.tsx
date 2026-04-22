import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

export const metadata = {
  title: 'Your Title',
  description: 'Your Description',
};

export default function RootLayout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}