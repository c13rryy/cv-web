import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ModalForm from "@/components/Form/ModalForm";
import { ModalContextProvider } from "@/store";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ivan Kurylenak | Front-end Developer",
  description:
    "Welcome to my developer portfolio! Explore a collection of my projects and web applications showcasing my expertise in building dynamic and interactive user interfaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ModalContextProvider>
        <body className={manrope.className}>
          <div id="modal" />
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="overflow-hidden">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" />
          <ModalForm />
        </body>
      </ModalContextProvider>
    </html>
  );
}
