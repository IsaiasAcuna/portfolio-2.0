
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import DarkVeil from "@/animations/DarkVeil";

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
