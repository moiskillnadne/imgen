
type Props = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export const TextInput = ({
  type,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  disabled = false
}: Props) => {

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-4 text-center text-lg font-medium text-gray-800 bg-white/80 backdrop-blur-sm border-2 border-pink-300 rounded-full focus:outline-none focus:border-pink-500 transition-colors ${className}`}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  )
}