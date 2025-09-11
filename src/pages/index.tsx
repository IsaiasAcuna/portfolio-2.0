
import { Figtree } from "next/font/google";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Prism from "@/animations/DarkVeil"
import DarkVeil from "@/animations/DarkVeil";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'], // podés ajustar según tu diseño
  display: 'swap',        // mejora el rendimiento
})


export default function Home() {
  return (
    <> 

        <div className="w-full mx-auto fixed inset-0 -z-10">


          <DarkVeil />

        </div>  

        <Header />
        <HomePage />
    </>
  );
}
