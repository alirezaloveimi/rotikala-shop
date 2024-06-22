import { icons } from "../data/Icons";

const Modal = ({ title, show, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex-center-center z-[60] transition ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* modal overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md -z-10"
      ></div>

      {/* modal content */}
      <div
        className={`bg-main p-4 rounded-xl text-zinc-700 dark:text-white w-[90%] md:w-[500px] transition ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* modal header */}
        <div className="flex-center-between text-xl">
          <h3>{title}</h3>
          <button onClick={onClose} type="button">
            {icons.close}
          </button>
        </div>

        {/* modal body */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
