
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Image from "next/image";

export default function Home() {
  return (
    <> 

        <div className="w-full opacity-50 mx-auto fixed inset-0 -z-10">


          <Image src='/images/background-2.png'
          alt="pepe"
            layout="fill"
          />

        </div>  

        <Header />
        <HomePage />
    </>
  );
}
