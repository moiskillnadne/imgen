import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router";

export const Header = () => {
  const email = useUserStore((s) => s.email);
  const router = useNavigate()

  return (
    <div className="relative px-10 py-10 pb-5">
      <h1 className="text-6xl font-black bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent mb-3 tracking-tight">
        ВЫБЕРЕТЕ ТЕМУ
      </h1>
      <span 
        className="text-blue-500 text-sm hover:border-b border-blue-500 transition-all duration-300"
      >
        Вы пошли как {email}
      </span>
      
      <div className="absolute top-10 right-10 flex gap-4">
        <button onClick={() => router('/profile')} className="w-10 h-10 border-2 border-pink-500 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-110">
          👤
        </button>
      </div>
    </div>
  )
}