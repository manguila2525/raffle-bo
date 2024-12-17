interface Props {
  onClick?: () => void;
  title: string;
  className?: string
}

export const AppButton = ({ onClick, title, className }: Props) => {
  return (
    <>
      <button 
      className={`px-4 py-2 text-white bg-black font-bold  rounded ${
        className ? className : ""
      }`}
      onClick={onClick} 
      >{title}</button>
    </>
  );
};
