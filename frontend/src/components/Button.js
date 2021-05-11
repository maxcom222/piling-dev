import {ImSpinner2} from 'react-icons/im'

const Button = ({
  isLoading = false,
  title,
  className = '',
  color = 'indigo',
  full = false,
  circle = false,
  rounded = false,
  children,
  ...rest
}) => {
  let bgColor = `bg-${color}-600`;
  let bgHoverColor = `bg-${color}-500`;
  let textColor = `text-white`;
  let textHoverColor = `text-white`;
  let borderColor = `border-transparent`;
  let borderHoverColor = `border-transparent`;

  if(color === 'unset'){
    textColor = 'text-gray-500';
    textHoverColor = 'text-gray-700'
    bgColor = 'bg-transparent';
    borderColor = 'border-gray-300';
    borderHoverColor = 'border-gray-400';
  }else if(color === 'gray'){
    textColor = 'text-gray-700';
    textHoverColor = 'text-gray-700';
    bgColor = 'bg-gray-200';
    bgHoverColor = 'bg-gray-300';
  }

  return (
    <button
      className={`
        flex justify-center items-center
        border focus:outline-none text-sm font-semibold
        transition duration-150 ease-in-out
        
        ${rounded ? 'rounded-full' : 'rounded'}
        ${full ? 'w-full' : 'min-w-24'}
        ${circle ? 'w-10 h-10' : ''}
        ${textColor}
        ${bgColor}
        ${borderColor}
        hover:${bgHoverColor} hover:${borderHoverColor} hover:${textHoverColor}
        ${(!circle) ? 'px-3 py-2' : ''}

        ${className}
      `}
      {...rest}
    >
      {isLoading && (
        <ImSpinner2
          width="20"
          className="absolute animate-spin"
        />
      )}
      <span className={isLoading ? 'invisible' : ''}>{children}</span>
    </button>
  )
}

export default Button