import type { Metadata } from "next";
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
        <nav className="navbar navbar-expand-lg" style={{ background: "#ececec", borderRadius: "4px" }}>
          <div className="container-fluid">
            <div className="navbar-nav" > 
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Projects</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
        </nav>
        {children}          
      </body>
      {/* todo footer */}
    </html>
  );
}
