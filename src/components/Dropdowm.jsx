const Dropdowm = ({ show, children }) => {
  return (
    <div
      className={`hidden lg:block absolute z-50 w-[416px] bg-white dark:bg-zinc-900 p-5 border-t border-t-primary transition rounded-xl -left-2.5 ${
        show
          ? "opacity-100 visible translate-y-3"
          : "opacity-0 invisible translate-y-1/4"
      }`}
    >
      {children}
    </div>
  );
};

export default Dropdowm;
