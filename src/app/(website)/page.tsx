import Image from "next/image";
import zik from "../public/zik.jpeg"
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (

    <main className=" m-4 ">
      <div className="flex flex-col justify-center align-center">
        <Image alt="An image of Ezekiel smilling" src={zik} className="object-contain border  rounded-[40%] shadow-lg" />
        <div className="text-center">
          <p className=" text-[20px]">Jeremiah H. Ezekiel</p>
          <p className=" text-[25px] font-extrabold">Software Engineer</p>
          <p className="">Brigham Young University Idaho</p>
        </div>
        <div>
          <h2>Mission</h2>
          <p className="indent-12">My mission is to put smile on peoples face and help them become betterby empowering them with the opportunity technology offers either by making or helping them use one. </p>
          <p>I believe that by harnessing the power of education combine with hardwork,determination, accountability, honesty and integrity the world will be a better place for everyone.</p>
        </div>

        <Button className="self-end">
          <Link href="/about">
            Learn more about me Here
          </Link>

        </Button>


      </div>

      <section>
        <h2 id="skills">Skills</h2>
      </section>
    </main>
  );
}
