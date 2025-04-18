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
      <body className="bg-(--body-background) items-center justify-center m-12" >
        {children}
      </body>
    </html>
  );
}
