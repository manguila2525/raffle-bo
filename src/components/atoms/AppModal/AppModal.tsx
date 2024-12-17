interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AppModal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6  relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &#x2715; 
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
