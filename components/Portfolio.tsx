import Image from "next/image";
import web1 from "../public/images/web1.png";
import web2 from "../public/images/web2.png";
import web3 from "../public/images/web3.png";
import web4 from "../public/images/web4.png";
import web5 from "../public/images/web5.png";
import web6 from "../public/images/web6.png";

const Portfolio = () => {
  return (
    <section className="md:px-20 lg:px-40">
      <div className="mx-4">
        <h3 className="text-3xl py-1 font-bold">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Desde o início da nossa jornada como freelancers e desenvolvedores, já
          fizemos trabalho remoto para
          <span className="text-teal-500"> agências e pequenos negócios </span>e
          colaboramos com pessoas talentosas para criar produtos digitais tanto
          para uso comercial quanto para o consumidor.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Ofereçemos uma ampla gama de serviços, incluindo criação de sites,
          banco de dados e APIs.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100"}
            height={"100"}
            layout="responsive"
            src={web1}
            alt="image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100"}
            height={"100"}
            layout="responsive"
            src={web2}
            alt="image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100"}
            height={"100"}
            layout="responsive"
            src={web3}
            alt="image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100"}
            height={"100"}
            layout="responsive"
            src={web4}
            alt="image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100"}
            height={"100"}
            layout="responsive"
            src={web5}
            alt="image"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100"}
            height={"100"}
            layout="responsive"
            src={web6}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
