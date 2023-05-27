import Image from "next/image";
import code from "../public/images/code.png";
import design from "../public/images/design.png";
import consulting from "../public/images/consulting.png";

const Work = () => {
  return (
    <section className="md:px-20 lg:px-40">
      <div className="mx-2">
        <h3 className="text-3xl py-1 font-bold">Nossa Missão</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Desde o início da nossa jornada como freelancers e desenvolvedores, já
          fizemos trabalho remoto para
          <span className="text-teal-500"> agências e pequenos negócios </span>e
          colaboramos com pessoas talentosas para criar produtos digitais tanto
          para uso comercial quanto para o consumidor.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800">
          Ofereçemos uma ampla gama de serviços, incluindo criação de sites,
          banco de dados e APIs.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            src={design}
            width={"100"}
            height={"100"}
            alt="imagem"
            className="bg-cover bg-center mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Designs Bonitos</h3>
          <p className="py-2">
            Criando designs elegantes adequados às suas necessidades, seguindo o
            núcleo e a teoria do projeto.
          </p>
          <h4 className="py-4 text-teal-600">Ferramentas que usamos</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">VScode</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            src={code}
            width={"100"}
            height={"100"}
            alt="imagem"
            className="bg-cover bg-center mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Designs Bonitos</h3>
          <p className="py-2">
            Criando designs elegantes adequados às suas necessidades, seguindo o
            núcleo e a teoria do projeto.
          </p>
          <h4 className="py-4 text-teal-600">Ferramentas que usamos</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">VScode</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            src={consulting}
            width={"100"}
            height={"100"}
            alt="imagem"
            className="bg-cover bg-center mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Designs Bonitos</h3>
          <p className="py-2">
            Criando designs elegantes adequados às suas necessidades, seguindo o
            núcleo e a teoria do projeto.
          </p>
          <h4 className="py-4 text-teal-600">Ferramentas que usamos</h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">VScode</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
