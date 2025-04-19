import type { Metadata } from "next";
import "./globals.css";
import Cookie from "js-cookie"
 
export const metadata: Metadata = {
  title: 'Notes App Michael',
  description: 'Nextjs Notes app with postgres and prisma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-(--body-background) items-center justify-center m-12 font-[Montserrat]" >
        {children}
      </body>
    </html>
  );
}
