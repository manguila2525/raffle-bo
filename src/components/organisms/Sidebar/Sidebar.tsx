import { Link, useLocation } from 'react-router-dom'
import {sidebarItems} from '../../../utils/sidebarItems'
import { useAuth } from '../../../hooks/useAuth'
import logo from '../../../assets/logo-white.png'
export function Sidebar() {
  const {logoutAuth} = useAuth()
  const {pathname} = useLocation()
  return (
    <div className="w-64 bg-primary h-full shadow-md">
      <div className=" py-6  flex justify-center items-center">
        <img src={logo} alt="Raffle" />
      </div>
      <nav className="mt-6 text-white px-6 flex flex-col gap-2 ">
        {sidebarItems.map(item => <Link key={item.name} to={item.url} className={`flex items-center px-3  rounded py-3 hover:bg-gray-100 hover:text-black ${item.url === pathname ? 'font-bold bg-gray-100 text-black' : 'font-bold '}`}>
          {item.icon}
          {item.name}
        </Link>)}
        <button className={`block px-6 py-3 hover:font-bold w-100 text-start`} onClick={logoutAuth}> Cerrar Sesion</button>
      </nav>
    </div>
  )
}