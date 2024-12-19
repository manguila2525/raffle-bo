import {sidebarItems} from '../../../utils/sidebarItems'
export function Sidebar() {
  return (
    <div className="w-64 bg-white h-full shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold m-0">Raffle Dashboard</h1>
      </div>
      <nav className="mt-6">
        {sidebarItems.map(item => <a key={item.name} href={item.url} className="block px-6 py-3 hover:bg-gray-100">
          {item.icon}
          {item.name}
        </a>)}
       
      </nav>
    </div>
  )
}