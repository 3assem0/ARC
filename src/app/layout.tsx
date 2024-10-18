import NavBar from "@/_components/NavBar/NavBar";
import "./globals.css";
import Home from "./(Pages)/page";
import Banner from "@/_components/Banner/Banner";
import Footer from "@/_components/Footer/Footer";

export default function RootLayout({ children }: any) {
  return (
    <html>
    <body className="dark:bg-black bg-white">
      <NavBar />
      <Banner/>
        <div className="container ">
        {children}
        </div>
        <div className="dark:bg-black bg-white"><Footer /></div>
    </body>
    </html>
  )
}
