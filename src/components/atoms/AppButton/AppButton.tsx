interface Props {
  onClick?: () => void;
  title: string;
  className?: string,
  appearance?: 'text' | 'outline'
}

export const AppButton = ({ onClick, title, className, appearance }: Props) => {
  const getAppearance = () => {
    switch (appearance) {
      case 'text':
        
        return `text-primary font-bold  rounded`;
    
        case 'outline':
        
        return `text-primary font-bold border border-primary  rounded`;
    
      default:
        return `text-white bg-primary font-bold  rounded`;
    }
  }
  return (
    <>
      <button 
      className={`px-4 py-2 ${getAppearance()} ${
        className ? className : ""
      }`}
      onClick={onClick} 
      >{title}</button>
    </>
  );
};
