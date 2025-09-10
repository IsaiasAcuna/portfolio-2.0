
import { Figtree } from "next/font/google";
import Header from "@/components/Header";
import HomePage from "@/components/Home";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'], // podés ajustar según tu diseño
  display: 'swap',        // mejora el rendimiento
})


export default function Home() {
  return (
    <>  
      <Header />
      <HomePage />
    </>
  );
}
