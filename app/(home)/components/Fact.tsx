import Image from "next/image";

interface FactProps {
  title: string;
  description: string;
  image: string;
}

const Fact: React.FC<FactProps> = ({ title, description, image }) => {
  return (
    <>
      <div className="my-2 flex-1">
        <h2 className="font-bold">{title}</h2>
        <p className="text-justify leading-snug">{description}</p>
      </div>
      <div className="w-full flex-1 flex items-center justify-center aspect-square relative">
        <Image
          src={`/images/${image}`}
          fill
          alt=""
          className="object-cover justify-self-center rounded-md shadow-md shadow-neutral"
        />
      </div>
    </>
  );
};
export default Fact;
