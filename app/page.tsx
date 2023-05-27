import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import code from "../public/images/code.png";

export default function Home() {
  return (
    <section>
      <div className="text-center p-10 md:px-20 lg:px-40">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          InfotecDevs
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">
          Desenvolvedores Frontend e Backend.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
          Freelancers que prestam serviços para conteúdo de programação e
          design, Contrate-nos abaixo e vamos ARRASAR!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={code} alt="logo" className="bg-cover bg-center mx-auto" />
      </div>
    </section>
  );
}
