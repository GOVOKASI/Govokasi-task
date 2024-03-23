import Services from '@/app/components/Services';
import Header from './components/Header';
import CompanyValues from '@/app/components/CompanyValues';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <div className="items-center mx-auto">
        <Header />
        <Services />
        <CompanyValues />
      </div>
    </main>
  );
}
