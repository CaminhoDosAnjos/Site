import Footer from "./sections/footer";
import Header from "./sections/header";
import Logo from "./sections/logo";
import Navigation from "./sections/navigation";
import "./styles/globals.css";

export const metadata = {
  title: "Caminho dos Anjos",
  description: "Caminho dos Anjos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <Logo />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
