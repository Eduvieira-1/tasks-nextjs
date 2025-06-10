
import "../app/styles/globals.css";
import Home from '../app/page'
import Header from '../app/components/header/index'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      > 
       <Header/>
       <Home/>
      </body>
    </html>
  );
}
