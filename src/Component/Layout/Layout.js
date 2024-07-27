import React from 'react'
import SideBar from '../SideBar'
import TopBar from '../TopBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex bg-neutral-100'>
        <SideBar/>
        <div className='flex flex-col w-screen'>
        <TopBar/>
        <div>{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default Layout