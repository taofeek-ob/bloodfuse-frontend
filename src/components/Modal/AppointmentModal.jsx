import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { XIcon } from "@heroicons/react/outline";

export default function AppointmentModal({ isModalOpen, closeModalFunc }) {
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalFunc}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-auto sm:min-h-full items-center justify-center md:p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full sm:w-[80%] sm:mx-auto h-full sm:h-auto px-5 md:px-16 max-w-2xl transform overflow-hidden sm:rounded-[4px] py-2 bg-white  text-left align-middle shadow-xl">
                  <Dialog.Title
                    as="h2"
                    className=" w-full my-5  flex md:text-3xl text-xl justify-between font-extrabold text-gray-900"
                  >
                    <span className="pl-7">Book Appointment</span>
                    <button
                      type="button"
                      className="justify-center"
                      onClick={() => {
                        closeModalFunc();
                      }}
                    >
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </Dialog.Title>
                  <div className="flex flex-col gap-2 items-center h-full py-8 px-6 md:px-8">
                    <form className="flex flex-col gap-4 items-center w-full">
                      <input
                        className="appearance-none rounded w-full p-4 bg-[#F2F2F2] placeholder-[#BFBFBF] mb-3 leading-tight focus:outline-none focus:shadow-outline border-none focus:ring-0"
                        type="text"
                        placeholder="Full Name"
                        required
                      />
                      <input
                        className="appearance-none rounded w-full p-4 bg-[#F2F2F2] placeholder-[#BFBFBF] mb-3 leading-tight focus:outline-none focus:shadow-outline border-none focus:ring-0"
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone Number"
                        required
                      />

                      <input
                        className="appearance-none rounded w-full p-4 bg-[#F2F2F2] placeholder-[#BFBFBF] mb-3 leading-tight focus:outline-none focus:shadow-outline border-none focus:ring-0"
                        type="date"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="MM/DD/YY"
                        required
                      />
                      <input
                        className="appearance-none rounded w-full p-4 bg-[#F2F2F2] placeholder-[#BFBFBF] mb-3 leading-tight focus:outline-none focus:shadow-outline border-none focus:ring-0"
                        type="time"
                        placeholder="00:00"
                        required
                      />
                      <button
                        type="submit"
                        className="text-white px-4 transform sm:uppercase text-md bg-[#F00530] hover:bg-red-800 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-2 text-center"
                      >
                        Book Appointment
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
