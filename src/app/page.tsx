import Services from "@/app/components/Services";
import Header from "./components/header";
import CompanyValues from "@/app/components/CompanyValues";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter} flex min-h-screen flex-col`}>
      <div className="items-center mx-auto">
        <Header />
        <Services />
        <CompanyValues />
      </div>
    </main>
  );
}
