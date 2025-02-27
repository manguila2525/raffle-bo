
interface Props {
  description: string
  ticketPrice: string
  cover: string
}

export const CardProduct = ({
  description,
  ticketPrice,
  cover,

}: Props) => {



  return (
    <div>
      <div className="bg-white rounded-md shadow drop-shadow-sm shadow-secondary/50  col-span-1 relative md:p-5 flex flex-col justify-between h-300 p-3">
    <div>
    <h1 className="font-bold text-white text-xl md:text-2xl bg-primary border border-white border-1 border-dashed rounded-[100%] px-3 py-3  d-flex md:px-3 md:py-3 absolute right-0">${ticketPrice}</h1>
    <h2 className="text-[16px] md:text-xl text-primary font-bold">{description.substring(0, 20)} </h2>

        <img
          className="h-[200px] md:h-[200px] w-[100%] mb-2 object-contain rounded"
          src={cover}
          alt={description}
        />
 
    </div>
    <div className="flex flex-col md:gap-2">
 
        <div  className={`p-2 rounded-md w-full bg-primary text-center text-white font-bold`} >
        <div className="rounded-md" style={{ border:'none'}} >Ticket  </div></div>
     
      </div>
    </div>
    </div>
  
  );
};

