import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
// import { Link } from "react-router-dom";

const SideBarMobile = () => {
  return (
     <Transition
     as={Fragment}
     enter="transition ease-in-out duration-300 transform"
     enterFrom="translate-x-full"
     enterTo="-translate-x-0"
     leave="transition ease-in-out duration-300 transform"
     leaveFrom="-translate-x-0"
     leaveTo="translate-x-full"
 >
   <Popover.Panel 
   focus 
   className="absolute top-0 right-0 w-[85%] h-screen transition overflow-x-clip z-20 lg:hidden"
   >
     <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-800 trans divide-y divide-gray-50">
       <div className="pt-5 pb-6 px-5">
         <div className="flex items-center justify-between">
           <div>
             <img
               className="h-8 w-auto"
               src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
               alt="FreeChain"
             />
           </div>
           <div className="-mr-2">
             <Popover.Button className="bg-ld rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
               <span className="sr-only">Close menu</span>
               <XIcon className="h-6 w-6" aria-hidden="true" />
             </Popover.Button>
           </div>
         </div>
       </div>
     </div>
   </Popover.Panel>
 </Transition>
  )
}

export default SideBarMobile
