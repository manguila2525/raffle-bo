import { Home, Gift, PlusCircle, Settings } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-full shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold m-0">Raffle Dashboard</h1>
      </div>
      <nav className="mt-6">
        <a href="/" className="block px-6 py-3 hover:bg-gray-100">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </a>
        <a href="/raffles" className="block px-6 py-3 hover:bg-gray-100">
          <Gift className="inline-block mr-2" size={20} />
          Raffles
        </a>
        <a href="/create" className="block px-6 py-3 hover:bg-gray-100">
          <PlusCircle className="inline-block mr-2" size={20} />
          Create Raffle
        </a>
        <a href="/settings" className="block px-6 py-3 hover:bg-gray-100">
          <Settings className="inline-block mr-2" size={20} />
          Settings
        </a>
      </nav>
    </div>
  )
}