import "../app/styles/globals.css";
import Home from "../app/page";
import Header from "../app/components/header/index";
import LoginBtn from "./components/Login/LoginBtn";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LoginBtn />
        <Home />
      </body>
    </html>
  );
}
