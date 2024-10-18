import NavBar from "@/_components/NavBar/NavBar";
import "./globals.css";
import Banner from "@/_components/Banner/Banner";
import Footer from "@/_components/Footer/Footer";
import { ReactNode } from "react"; // Import ReactNode

// Specify the type for props
interface RootLayoutProps {
  children: ReactNode; // Use ReactNode for children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your App Title</title>
        {/* Additional head elements like meta tags, favicons, etc. */}
      </head>
      <body className="dark:bg-black bg-white">
        <NavBar />
        <Banner />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
