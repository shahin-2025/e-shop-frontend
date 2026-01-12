import React from 'react'
import DashboardLogo from './DashboardLogo'
import { Link } from 'react-router-dom'
import { House,Settings  } from 'lucide-react';
import { useSelector } from 'react-redux';

const DashboardMenu = ({menuOpen}) => {
    
  return (
    <aside className={`bg-white transition-all duration-200 text-slate-1? p-2 flex flex-col gap-2 ${menuOpen ? 'w-50' : 'w-14'}`}>
        {/* logo cvontainer  */}
        <DashboardLogo menuOpen={menuOpen} />
        {/* menu  */}
        <nav className='w-full flex items-start flex-col gap-3 mt-5'>
            <Link to="/dashboard">
                <div className='flex items-start justify-center gap-2 overflow-hidden'>
                   {menuOpen ?  <><House/>
                    <span>Dashboard</span></> : <House/>}
                </div>
            </Link>
            <Link to="/dashboard/settings">
                <div className='flex items-start justify-center gap-2 overflow-hidden'>
                   {menuOpen ?  <><Settings />
                    <span>Settings</span></> : <Settings />}
                </div>
            </Link>
        </nav>
    </aside>
  )
}

export default DashboardMenu