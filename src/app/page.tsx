import Services from "@/app/components/Services";
import Header from "@/app/components/Header";
import CompanyValues from "@/app/components/CompanyValues";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GOVOKASI",
  icons: {
    icon: "/logo.svg",
  },
};

export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <div className="items-center mx-auto">
        <Header />
        <Services />
        <CompanyValues />
        <Footer />
      </div>
    </main>
  );
}
