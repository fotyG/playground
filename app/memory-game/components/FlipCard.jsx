"use client";

const FlipCard = ({index}) => {
  const handleClick = (e,idx) => {
    console.log(e.target.innerText, idx)
  }

  return (
    <div className="container h-[250px] w-[175px] mt-5" onClick={(e) => handleClick(e, index)}>
      <div className="card h-full w-full relative hover:cursor-pointer">
        <div
          className="
                front 
                h-full 
                w-full 
                bg-[url('/images/1.webp')] 
                bg-contain 
                bg-no-repeat
                bg-center 
                shadow-lg 
                border 
                border-solid
                rounded-xl
                absolute
              "
        ></div>
        <div
          className="
                back 
                h-full 
                w-full 
                absolute 
                border 
                border-solid
                rounded-xl
                flex
                items-center
                justify-center
                flex-col
                text-center
                p-5
              "
        >
          <h1>Back of card</h1>
          <p>Additional info on back of card</p>
        </div>
      </div>
    </div>
  );
}
export default FlipCard