'use client';


import './globals.css';

export const metadata = {
  title: 'Renz',
  description: 'Renz - A chat app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
