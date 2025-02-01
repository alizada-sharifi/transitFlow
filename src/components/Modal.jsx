import { Close } from "./icons";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-2/3 p-6 rounded-lg shadow-lg">
        <div className="flex justify-end mb-2">
          <button
            className="p-2 hover:bg-red-500 rounded-sm group"
            onClick={onClose}
          >
            <Close className="fill-black group-hover:fill-white" />
          </button>
        </div>
        <div className="body">
          <iframe
            src="https://www.youtube.com/embed/p10x4nxuA-s"
            className="w-full h-64 md:h-96"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
