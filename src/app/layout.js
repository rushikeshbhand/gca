import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/page.js";
import Footer from "./components/footer/page.js";

const gilroySemiBold = localFont({
  src: "../../public/fonts/Gilroy-SemiBold.ttf",
  variable: "--font-gilroy-semibold",
  weight: "600", // Corrected to an array
});

export const metadata = {
  title: "Genius Champs Academy",
  description: "Established in March 2016, Genius Champs Academy Pvt. Ltd. is a premier educational institute based in Nagpur, Maharashtra, India. With over 20 years of experience in education, our academy provides specialized courses including ABACUS with Zhusuan Methodology, Midbrain Activation, Calligraphy, Handwriting Improvement, and National Level Competitions. Our goal is to enhance children's cognitive abilities, fostering creativity, time management, and efficient learning techniques. At Genius Champs Academy, our dedicated team of experienced educators is committed to nurturing each child's potential, making learning a fulfilling and enjoyable journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gilroySemiBold.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
