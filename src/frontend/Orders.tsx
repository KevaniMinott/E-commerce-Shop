import { Bars3Icon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import { useState } from 'react';
export interface Items {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  tags: string[];
  images: string[];
  quantity: number;
}
interface OrdersProp {
  setHideNav: (hideNav: boolean) => void;
  orders: Items[];
  removeOrder: (id: number) => void;
}
export function Orders({ setHideNav, orders, removeOrder }: OrdersProp) {
  const date = dayjs().format('YYYY-MM-DD');
  const [removeMsg, setRemoveMsg] = useState<boolean>(false);

  return (
    <div className="w-full h-full bg-[#111] relative ">
      <div className="w-full flex justify-end lg:landscape:h-[70px] sm:landscape:h-[50px] h-[70px] items-center border-b-[2px] border-[#333] mb-[16px] pr-[10px]">
        <Bars3Icon
          onClick={() => setHideNav(false)}
          className=" w-[40px] md:hidden absolute z-10 left-[20px] text-white "
        />
        <p className="text-white text-[25px] ">Orders: {orders.length}</p>
      </div>
      <div className="flex items-center justify-center w-full">
        <div
          className={`${removeMsg ? 'block absolute top-[90px] z-10' : 'hidden'} bg-red-500 border-[2px] border-[#2a2a2a] w-full h-[70px] flex items-center justify-center`}
        >
          <p className="text-white font-bold font-sans flex">order canceled.</p>
        </div>
      </div>
      <div className="flex flex-col fade gap-[12px] overflow-y-scroll no-scrollbar w-full h-full pl-[20px] pr-[20px]   sm:landscape:pb-[200px] pb-[200px]">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[200px] gap-[8px]">
            <p className="text-[#555] text-[16px]">You have no orders.</p>
          </div>
        ) : (
          ''
        )}
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border-[1px] border-[#2a2a2a] rounded-[10px] md:p-[16px] p-[12px] flex flex-col md:flex-row items-center gap-[20px]"
          >
            <img
              src={order.images[0]}
              className=" lg:landscape:w-[100px] lg:landscape:h-[100px] w-[100px] h-[100px] rounded-[8px] flex-shrink-0"
            />

            <div className="flex-1 sm:landscape:grid-cols-2 grid grid-cols-2 gap-x-[40px] gap-y-[4px]">
              {[
                ['Item', order.title],
                ['Order ID', '000000'],
                ['Ordered on', date],
                ['Arrives', '2055-5-2'],
                ['Price', `$${order.price}`],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[#666] text-[11px] uppercase tracking-wider m-0">
                    {label}
                  </p>
                  <p className="text-white lg:landscape:text-[15px] sm:landscape:text-[10px] text-[14px] font-bold mb-[10px]">
                    {value}
                  </p>
                </div>
              ))}

              <div>
                <p className="text-[#666] sm:landscape:text-[10px] text-[11px] uppercase tracking-wider m-0">
                  Status
                </p>
                <span className="inline-block mt-[4px] px-[10px] py-[2px] rounded-full text-[11px] font-bold bg-[#2a2a2a] text-amber-400 border border-[#3a3a1a]">
                  {'pending'}
                </span>
              </div>

              <div className="col-span-2">
                <p className="text-[#666] sm:landscape:text-[10px] text-[11px] uppercase tracking-wider m-0">
                  Description
                </p>
                <p className="text-[#aaa]  lg:landscape:text-[13px]  sm:landscape:text-[10px] text-[14px] mb-[10px]">
                  {order.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] flex-shrink-0">
              <button
                onClick={() => {
                  removeOrder(order.id);
                  if (removeMsg === true) {
                    return;
                  }
                  setRemoveMsg(true);

                  setTimeout(() => {
                    setRemoveMsg(false);
                  }, 1000);
                }}
                className="hover:bg-red-600
                   z-70 font-sans font-bold text-white border-[2px] border-[#2a2a2a] cursor-pointer hover:text-white rounded-[10px] text-[15px] md:text-[13px] w-[120px] md:w-[120px] md:py-[10px] py-[9px] mb-[10px] mt-[10px] transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
