
import { Figtree } from "next/font/google";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Prism from "@/animations/Prism"

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'], // podés ajustar según tu diseño
  display: 'swap',        // mejora el rendimiento
})


export default function Home() {
  return (
    <> 

    <div className="fixed inset-0 -z-10">
      <Prism
        animationType="rotate"
        timeScale={0.1}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0}
        colorFrequency={1}
        noise={0}
        glow={1}
      />
    </div>

        <Header />
        <HomePage />
    </>
  );
}
