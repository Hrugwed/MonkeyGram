import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuItemsData } from '../assets/assets'

const MenuItems = ({ setSidebarOpen }) => {
  return (
    <div className='w-full px-4 text-gray-600 space-y-2 font-medium'>
      {menuItemsData.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          onClick={() => setSidebarOpen(false)}
          className={({ isActive }) => 
            `w-full px-4 py-3 flex items-center gap-3 rounded-xl transition 
            ${isActive ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`
          }
        >
          <Icon className="w-5 h-5" />
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default MenuItems
