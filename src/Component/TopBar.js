import React from 'react'
import {Popover,PopoverButton,PopoverPanel} from "@headlessui/react"
import clsx from "clsx"
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const TopBar = () => {
  return (
    <div className='bg-white h-16 px-4 flex items-center justify-between border-b border-gray-200 '>
      <div >
        <input type='text' placeholder='Search...' className='text-sm rounded-lg  px-3 focus:outline-none active:outline-none h-10 w-[290px] p-2 border border-gray-300' />
      </div>
      

<Popover>
      {({ open }) => (
        <>
          <PopoverButton className={`flex items-center outline-none p-1 rounded-md gap-2 ${open && "bg-neutral-200"}`}>
            Profile
            <ChevronDownIcon className={clsx('size-5', open && 'rotate-180 bg-neutral-200')} />
          </PopoverButton>
          <PopoverPanel anchor="bottom" className="flex flex-col px-2 mt-1 w-52 py-2 rounded-sm bg-neutral-200">
            <a className=' hover:bg-neutral-400 rounded px-2 py-1' >SignIn</a>
            <a className=' hover:bg-neutral-400 rounded px-2 py-1'  >Settings</a>
            <a className=' hover:bg-neutral-400 rounded px-2 py-1'>Logout</a>
          </PopoverPanel>
        </>
      )}
    </Popover>
    </div>
  )
}

export default TopBar