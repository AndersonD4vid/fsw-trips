import { NextAuthProvider } from "@/providers/auth";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/toast";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "FSW Trips",
  description: "Sistema de Reserva de Viagens TOP!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body className={poppins.className}>
        <NextAuthProvider>
          <ToastProvider>
            <div className="flex flex-col h-screen">
              <div className="h-[94px]">
                <Header />
              </div>

              <div className="flex-1">{children}</div>

              <Footer />
            </div>
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
