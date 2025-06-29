
type Props = {
  title: string;
  description: string;
}

export const Header = ({ title, description }: Props) => {

  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-medium">
        {description}
      </p>
    </div>
  )
}