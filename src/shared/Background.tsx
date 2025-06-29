import { Outlet } from "react-router"

export const Background = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full opacity-30 blur-xl"></div>
      <Outlet />
    </div>
  )
}