import React from 'react'
import { useSelector } from 'react-redux';

const DashboardLogo = ({menuOpen}) => {
  const { settings, loading } = useSelector((state) => state.siteSettings);
    console.log(settings)
  return (
    <div className='flex items-center justify-center'>
            {menuOpen ? <h4 className="font-bold text-lg flex items-center justify-center gap-2"><img src={`http://localhost:5000${settings?.site_logo}`} className="h-8 w-auto" /> {settings?.site_name}</h4> : <img src={`http://localhost:5000${settings?.site_logo}`} className="h-8 w-auto" />}
        </div>
  )
}

export default DashboardLogo