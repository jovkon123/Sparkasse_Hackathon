
import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/603ccb1d0d.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <body className="antialiased min-h-screen">
        <main className="">
          {" "}
          {/* Adjust this margin-top as needed */}
          <Main />
          <Footer />
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
