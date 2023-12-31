import React from 'react'
import { Outlet } from 'react-router-dom'
import CounsellorSidebar from './CounsellorSidebar';
import CounsellorHeader from './CounsellorHeader';

export default function Layout() {
  return (
    <div className='flex flex-row bg-slate-100 h-screen w-screen overflow-hidden'>
      <CounsellorSidebar />
      <div className='flex-1 h-screen flex flex-col'>
        <CounsellorHeader />
        <div className='p-4 min-h-0 overflow-auto'>
          {<Outlet/>}
        </div>
      </div>
    </div>
  )
}
