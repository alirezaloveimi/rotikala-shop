const InputBox = (props) => {
  const { error, name, inputValue, changeHandler, label, ...others } = props;

  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-zinc-700 dark:text-white">{label}</label>

      <input
        autoComplete="off"
        value={inputValue}
        name={name}
        onChange={(e) => changeHandler(e.target)}
        className="w-full bg-main text-zinc-700 dark:text-white p-3 rounded-md text-sm placeholder:text-sm"
        {...others}
      />

      {!!error[name]?.length && (
        <span className="text-red-600">{error[name]}</span>
      )}
    </div>
  );
};

export default InputBox;
