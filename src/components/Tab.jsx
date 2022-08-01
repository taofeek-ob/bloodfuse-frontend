import { useEffect, useRef, useState } from "react";
import SignIn from "./SignIn";
const tabsData = [
  {
    label: "Sign up as donor",
  },
  {
    label: "Sign up as recipient",
  },
];

export default function Tabs({ closeModal }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="flex  space-x-3 ">
          <div className="flex w-full space-x-3 border-b">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  className="pt-2 text-left pb-3 w-full focus:text-red-500"
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            className="  justify-center text-[20px] md:-mr-12  rounded-md border border-transparent  px-4 pb-2  font-medium  hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-red-500 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <p>
          <div className={activeTabIndex === 0 ? "block mt-2" : "hidden"}>
            <h2 className=" w-full my-5 flex md:text-3xl text-xl justify-between font-extrabold text-gray-900">
              <span>Sign up to conitnue </span>
            </h2>
            <div className="mb-5">
              <h2>
                Already a member?{" "}
                <span className="text-red-600">Login now</span>
              </h2>
            </div>
            <form>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>
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
                <select
                  name="blood_group"
                  id="blood_group"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                >
                  <option value=""></option>
                  <option value="">A</option>
                  <option value="">B</option>
                </select>
                <label
                  for="blood_group"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Blood Group
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
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="repeatPassword"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Repeat Password
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
                      I have read and accepted the{" "}
                      <span className="text-red-500 underline">
                        Terms and Conditions
                      </span>{" "}
                      and
                      <span className="text-red-500 underline">
                        {" "}
                        Privacy Policy
                      </span>
                    </span>
                  </label>
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
                    <span className="pl-2">Google</span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  class="text-white sm:px-12 px-7 text-sm sm:text-md bg-blue-700 hover:bg-lue-900 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-md    py-5 text-center"
                >
                  <div className="flex items-center space-between">
                    <span className="pl-2">Facebook</span>
                  </div>
                </button>
              </div>
              <div>
                <button class="text-white sm:px-12 px-7 text-sm sm:text-md bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-md    py-5 text-center">
                  <div className="flex items-center space-between">
                    <span className="pl-2">Twitter</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </p>
        <p>{tabsData[1].content}</p>
      </div>
    </div>
  );
}
