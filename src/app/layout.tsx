import "./globals.css";
import {Inter} from 'next/font/google'
import Header from "@/widgets/header/Header";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
