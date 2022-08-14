/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Logo, ProfilePhoto } from "../../assets/images";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user/UserContext";

const LogoutCard = () => {
  return (
    <Popover className="relative">
                {({ open }) => (
                  <>
                  <Popover.Button
                  className={classNames(
                    open ? "text-[#F00530]" : `tex-${textColor}`,
                    "group bg-transparent outline-none inline-flex items-center text-base hover:text-white-900"
                  )}
                >
                  <div
                    className="hidden md:flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      className={`h-6 w-6 rounded-full overflow-hidden relative border border-${textColor}`}
                    >
                      <img
                        className="absolute h-full w-full object-center object-cover"
                        src={ProfilePhoto}
                        alt="menu"
                      />
                    </div>
                    <div className={`hidden md:flex trans`}>
                      {username}
                    </div>
                    <ChevronDownIcon
                        className={classNames(
                          open
                            ? "rotate-180 transform"
                            : " ",
                          "h-5 w-5 transition-all duration-200 ease-in-out"
                        )}
                        aria-hidden="true"
                      />
                  </div>
                  </Popover.Button>
                   <Transition
                   as={Fragment}
                   enter="transition ease-out duration-200"
                   enterFrom="opacity-0 translate-y-1"
                   enterTo="opacity-100 translate-y-0"
                   leave="transition ease-in duration-150"
                   leaveFrom="opacity-100 translate-y-0"
                   leaveTo="opacity-0 translate-y-1"
                 >
                   <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-full max-w-md sm:px-0">
                     <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                       <div className="relative grid gap-6 bg-white px-2 py-6 sm:gap-8">
                          <Link to="/dashboard/main">
                         <div className="text-[12px] lg:text-base text-gray-900">Dashboard</div>
                          </Link>
                         <div className="text-[12px] lg:text-base text-gray-900 cursor-pointer" 
                         onClick={handleLogout}
                         >Sign out</div>
                       </div>
                     </div>
                   </Popover.Panel>
                 </Transition>
                 </>
                )}
              </Popover>
  )
}

export default LogoutCard