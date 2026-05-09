import { TruckIcon } from '@heroicons/react/20/solid';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/20/solid';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';

interface NavProp {
  setDisplay: (display: string) => void;
  setHideNav: (hideNav: boolean) => void;
  hideNav: boolean;
}
export function SideNav({ setDisplay, setHideNav, hideNav }: NavProp) {
  const navButtons = ['Home', 'Shop', 'My Orders', 'Cart', 'log out'];
  const [highlightBut, setHighlightBut] = useState<string>('Home');
  return (
    <div className="lg:landscape:w-[250px] sm:landscape:w-[200px] w-[300px] flex-shrink-0 h-full bg-[#111] px-[10px] flex gap-[20px] z-70 flex-col sm:landscape:pt-[70px] pt-[150px]  lg:landscape:pt-[150px] items-center relative border-r-[2px] border-[#333]">
      <div className="absolute top-[0px] flex items-center justify-center w-full">
        <p className=" text-white mt-[10px] landscape:text-[29px] lg:landscape:text-[45px] text-[30px] font-bold font-sans">
          Shopazon
        </p>
        <XMarkIcon
          onClick={() => setHideNav(true)}
          className={` ${hideNav ? 'hidden' : 'block'} w-[30px] mt-[10px] text-white absolute md:hidden right-[10px]`}
        />
      </div>

      {navButtons.map((button) => (
        <button
          onClick={() => {
            setHighlightBut(button);
            setDisplay(button);
          }}
          className={` ${highlightBut === button ? 'bg-[#1e1e1e] text-white' : 'bg-[#111]'} ${button === 'log out' ? 'md:mt-auto mt-[240px] mb-[10px]' : ''} text-[#aaa]  rounded-[6px] border-[#333] border-[1px] border-solid w-full h-[40px] py-2 flex items-center justify-center hover:bg-[#1e1e1e] font-sans font-bold hover:text-white cursor-pointer transition-all duration-[400ms] hover:transition-all hover:duration-[400ms] `}
        >
          {button}
          {button === 'Home' ? (
            <HomeIcon className="w-[20px]" />
          ) : button === 'Cart' ? (
            <>
              <ShoppingCartIcon className="w-[18px]" />
            </>
          ) : button === 'Shop' ? (
            <ShoppingBagIcon className="w-[18px]" />
          ) : button === 'My Orders' ? (
            <>
              <TruckIcon className="w-[18px]" />
            </>
          ) : (
            <ArrowLeftStartOnRectangleIcon className="w-[18px]" />
          )}
        </button>
      ))}
    </div>
  );
}
