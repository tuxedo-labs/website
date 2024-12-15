import HeroLayout from "@/components/layouts/HeroLayout";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import GridLayout from '@/components/layouts/GridLayout'
import { navItems } from "@/data";
import ClientLayout from "@/components/layouts/ClientLayout";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
          <HeroLayout />
          <GridLayout/>
          {/* <ClientLayout/> */}
        </div>
      </main>
    </>
  );
}
