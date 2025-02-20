import type { Metadata } from "next";
import Nav from "./components/nav/nav";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Jack Kennedy Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container"
        style={{ 
            backgroundImage: `url('images/background.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: `100vh` 
          }}>
        <Nav />
        {children}          
      </body>
      {/* todo footer */}
    </html>
  );
}
