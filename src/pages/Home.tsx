import { Link } from "react-router"
import { Footer } from "../shared/Footer"
import { Header } from "../shared/Header"

export const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 relative overflow-hidden flex items-center justify-center">
      
      <div className="relative z-10 w-full max-w-[600px] mx-auto px-6">
        <Header title="ВХОД" description="ЭТО НУЖНО ЧТОБЫ СОХРАНИТЬ ВАШИ КАРТИНКИ"/>

        <div className="space-y-6 max-w-[350px] mx-auto">
          <div className="text-center flex flex-col gap-4">
            <Link to={`/login`}>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 transition-colors shadow-lg">
                ВОЙТИ
              </button>
            </Link>

            <Link to={`/signup`}>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 transition-colors shadow-lg">
                Создать аккаунт
              </button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}