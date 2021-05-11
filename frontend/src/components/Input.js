const Input = ({
  value = '',
  placeholder = '',
  error,
  className,
  onChange = () => false,
  ...textInputProps
}) => {
  return (
    <>
      <input
        type="text"
        className={`
          w-full bg-gray-100 bg-opacity-50 rounded border 
          border-gray-300 focus:border-indigo-500 
          focus:bg-white focus:ring-2 focus:ring-indigo-200 
          text-base outline-none text-gray-700 py-0.5 px-3 
          leading-8 transition-colors duration-200 ease-in-out
          ${className}
        `}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        {...textInputProps}
      />
      {error && (
        <div className="text-red-400 py-2">
          {error.message.charAt(0).toUpperCase() + error.message.slice(1)}
        </div>
      )}
    </>
  );
};

export default Input;
