import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiTwitter, FiFacebook } from "react-icons/fi";

export default function MyModal({
  isModalOpen,
  closeModalFunc,
  openModalFunc,
}) {
  //   let [isOpen, setIsOpen] = useState(isModalOpen);

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   //   function openModal() {
  //   //     setIsOpen(true);
  //   //   }

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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full px-10 md:px-28 max-w-3xl transform overflow-hidden rounded-2xl py-9 bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className=" w-full my-5 flex md:text-3xl text-xl justify-between font-extrabold text-gray-900"
                  >
                    <span>Sign In to Continue </span>
                    <button
                      type="button"
                      className=" justify-center text-[20px] md:-mr-20  rounded-md border border-transparent  px-4 pb-2  font-medium  hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModalFunc}
                    >
                      X
                    </button>
                  </Dialog.Title>
                  <div className="mb-5">
                    <h2>
                      Not a member yet?{" "}
                      <span className="text-red-600">Sign up now</span>
                    </h2>
                  </div>
                  <div className="mt-2">
                    <form>
                      <div class="relative z-0 mb-6 w-full group">
                        <input
                          type="email"
                          name="floating_email"
                          id="floating_email"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_email"
                          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email address
                        </label>
                      </div>
                      <div class="relative z-0 mb-6 w-full group">
                        <input
                          type="password"
                          name="floating_password"
                          id="floating_password"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_password"
                          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Password
                        </label>
                      </div>
                      <div class="flex items-center justify-between my-10">
                        <div className="flex items-center ">
                          <input
                            id="checkbox-1"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-red-600 accent-red-500 bg-gray-100 rounded border-gray-300 focus:ring-black-500  "
                          />
                          <label
                            for="checkbox-1"
                            class="ml-2 text-sm font-medium text-black dark:text-black-300"
                          >
                            <span className=" text-bold">
                              Keep me logged in
                            </span>
                          </label>
                        </div>
                        <div>
                          <h3 className="text-sm">Forgot your password?</h3>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="text-white px-7 transform uppercase text-lg bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-lg  w-full  py-5 text-center"
                      >
                        Login
                      </button>
                      <div class="relative my-12">
                        <div class="absolute inset-0 flex items-center">
                          <div class="w-full border-b border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center">
                          <span class="bg-white px-4 text-sm text-black">
                            Or sign in with
                          </span>
                        </div>
                      </div>
                    </form>
                    <div className="flex justify-between px-auto w-full mb-7 items-center">
                      <div>
                        <button class="text-white sm:px-12 px-7 text-sm sm:text-md  bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none  focus:ring-gray-300 font-medium rounded-md    py-5 text-center">
                          <div className="flex items-center space-between">
                            <FiTwitter /> <span className="pl-2">Google</span>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button
                          type="submit"
                          class="text-white sm:px-12 px-7 text-sm sm:text-md bg-blue-700 hover:bg-lue-900 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-md    py-5 text-center"
                        >
                          <div className="flex items-center space-between">
                            <FiFacebook />{" "}
                            <span className="pl-2">Facebook</span>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button class="text-white sm:px-12 px-7 text-sm sm:text-md bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-md    py-5 text-center">
                          <div className="flex items-center space-between">
                            <FiTwitter /> <span className="pl-2">Twitter</span>
                          </div>
                        </button>
                      </div>
                    </div>
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
