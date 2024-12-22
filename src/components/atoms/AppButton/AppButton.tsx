interface Props {
  onClick?: () => void;
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
}

export const AppButton = ({
  onClick,
  title,
  className,
  type = "submit",
  disabled = false,
  isLoading = false,
}: Props) => {
  return (
    <>
      <button
        type={type}
        className={`px-4 py-2 text-white bg-black hover:bg-gray-700 font-bold rounded ${
          className ? className : ""
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {isLoading ? "Loading..." : title}
      </button>
    </>
  );
};
