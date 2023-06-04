import Image from "next/image";

const Facts = () => {
  return (
    <div className="mx-20 my-14 grid grid-cols-2 gap-8">
      <div className="col-span-1">
        <h2 className="font-bold">Did you know..</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          asperiores dolorum sit velit enim consequuntur quasi libero quos,
          doloribus, vel illum veniam quaerat possimus iusto cupiditate
          similique accusantium culpa eaque. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus
          iure nam nostrum, facilis culpa harum labore sunt magnam obcaecati
          corrupti aperiam. Saepe iusto at suscipit reprehenderit vero nemo
          libero.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          officiis officia exercitationem harum excepturi tempora, nobis
          voluptate aliquid animi quaerat natus enim doloremque, asperiores hic.
          Fugit vero optio possimus vel!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non
          reiciendis cum, ut quidem expedita illo soluta iusto ad esse dolorem
          unde ipsam ducimus sit autem quos necessitatibus fugiat
          repudiandae?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          At quae eum modi delectus voluptates dolor reprehenderit harum iusto!
          Rerum nisi labore perferendis minus aperiam perspiciatis velit
          repellendus id reiciendis facilis!
        </p>
      </div>
      <div className="group/chel w-full flex items-center justify-center">
        <Image
          src={"/images/pexels-evgeniy-petkevich-11844131.jpg"}
          width={300}
          height={300}
          alt=""
          className="object-cover justify-self-center rounded-md shadow-2xl group-hover/chel:rotate-180 transition-all"
        />
      </div>
    </div>
  );
}
export default Facts