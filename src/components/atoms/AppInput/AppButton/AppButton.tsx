interface Props {
  onClick?: () => void;
  title: string;
}

export const AppButton = ({ onClick, title }: Props) => {
  return (
    <>
      <button onClick={onClick} title={title}></button>
    </>
  );
};
