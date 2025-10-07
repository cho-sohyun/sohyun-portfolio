import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  );
}
