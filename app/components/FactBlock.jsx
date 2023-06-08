import Image from "next/image";


const FactBlock = ({ title, description, image, idx }) => {
  
  return (
    <div className="my-10">
      <div className="flex-col gap-8 justify-between sm:flex sm:flex-row lg:text-2xl 2xl:text-3xl">
        <div className={`my-2 flex-1 order-${idx % 2}`}>
          <h2 className="font-bold">{title}</h2>
          <p className="text-justify">{description}</p>
        </div>
        <div className="w-full flex-1 flex items-center justify-center aspect-square relative">
          <Image
            src={`/images/${image}`}
            fill
            alt=""
            className="object-cover justify-self-center rounded-md shadow-md shadow-neutral"
          />
        </div>
      </div>
    </div>
  );
};
export default FactBlock;
