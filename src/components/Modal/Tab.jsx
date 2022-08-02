import { useEffect, useRef, useState } from "react";
import { TabList, DonorTab, RecepientTab } from "../Tab";
import ReCAPTCHA from "react-google-recaptcha";
// import reCAPTCHA from "react-recaptcha";

// const TabList = [
//   {
//     label: "Sign up as donor",
//   },
//   {
//     label: "Sign up as recipient",
//   },
// ];

export default function Tabs({ closeModal }) {
  // const [captchaRef, setCaptchaRef] = useState(true);
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
            {TabList.map((tab, idx) => {
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
        <div>
          <DonorTab
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />
        </div>
        <div>
          <RecepientTab activeTabIndex={activeTabIndex} />
        </div>
      </div>
    </div>
  );
}
