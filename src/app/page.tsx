import Services from "@/app/components/Services";
import Header from "./components/header";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-slate-950">
      <Header />
      <div
        className={`${inter} container items-center mt-24 mx-auto py-4 px-12`}
      >
        <Services />
      </div>
    </main>
  );
}
