/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { ViewListIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const solutions = [
  {
    name: "Donate Blood",
    slug: "#",
    href: "/",
  },
  {
    name: "Request Blood",
    slug: "#",
    href: "/",
  },
];

const resources = [
  {
    name: "How to Donate",
    link: "/",
    href: "/",
  },
  {
    name: "Eligibilty Requirement",
    link: "/who-can-donate",
    href: "/who-can-donate",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  let [SignUpOpen, setSignUpOpen] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function closeSignUpModal() {
    setSignUpOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function openSignUpModal() {
    setSignUpOpen(true);
  }

  return (
    <>
      <SignIn
        isModalOpen={isOpen}
        openModalFunc={openModal}
        closeModalFunc={closeModal}
      />
      <SignUp
        isModalOpen={SignUpOpen}
        openModalFunc={openSignUpModal}
        closeModalFunc={closeSignUpModal}
      />
      <Popover className="relative bg-primarybg h-full md:overflow-visible overflow-x-clip text-white text-[14px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6  md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img className="h-10 w-auto" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-primarybg rounded-md p-2 inline-flex items-center justify-center text-white-400 hover:text-white-500 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                <span className="sr-only">Open menu</span>
                <ViewListIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group
              as="nav"
              className="hidden md:flex md:items-center space-x-10"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-[#F00530]" : "text-white-500",
                        "group bg-transparent outline-none inline-flex items-center text-base hover:text-white-900"
                      )}
                    >
                      <span className="text-[12px] lg:text-base font-[400]">
                        Make an appointment
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white-600" : "text-white-400",
                          "ml-1 lg:ml-2 h-5 w-5 group-hover:text-white-500"
                        )}
                        aria-hidden="true"
                      />
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
                      <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-full max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-2 py-6 sm:gap-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.link}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-200"
                              >
                                <div className="">
                                  <p className="text-[12px] lg:text-base text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-[#F00530]" : "text-white-500",
                        "group bg-transparent outline-none inline-flex items-center text-base hover:text-white-900"
                      )}
                    >
                      <span className="text-[12px] lg:text-base font-[400]">
                        Who can donate blood
                      </span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white-600" : "text-white-400",
                          "ml-1 lg:ml-2 h-5 w-5 group-hover:text-white-500"
                        )}
                        aria-hidden="true"
                      />
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
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.link}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="ml-1">
                                  <p className="text-[12px] lg:text-base text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link
                to="/aboutus"
                className="text-[12px] lg:text-base text-white-500 hover:text-white-900"
              >
                About Us
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                onClick={openSignUpModal}
                className="whitespace-nowrap text-white-500 hover:text-white-900 text-[12px] lg:text-base"
              >
                Sign up
              </button>
              <button
                onClick={openModal}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border border-transparent rounded-sm shadow-sm text-[12px] lg:text-base font-normal text-white bg-red-600 hover:bg-red-700"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="-translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
        >
          {/* <Transition
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="-translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
        > */}
          <Popover.Panel
            focus
            className="absolute top-0 right-0  w-[70%] transition overflow-hidden z-20  md:hidden"
          >
            <div className=" ">
              <div className="  shadow-lg ring-1 h-screen  ring-black ring-opacity-5 bg-white">
                <div className="pt-5 pb-6  ">
                  <div className="flex mt-10 px-5 mb-5 items-center justify-between">
                    <div className="">
                      <h3 className="font-mod-light text-2xl text-black font-semibold">
                        Menu
                      </h3>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#575757]  hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <hr className="" />
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#F00530] hover:bg-red-700"
                    >
                      Sign up
                    </Link>
                  </div>
                  <div></div>
                  <div>
                    <Link
                      to="/"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#F00530] hover:bg-red-700"
                    >
                      Sign up
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing Donor?{" "}
                      <Link to="/" className="text-red-600 hover:text-red-500">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
          {/* </Transition.Child> */}
        </Transition>
      </Popover>
    </>
  );
}
