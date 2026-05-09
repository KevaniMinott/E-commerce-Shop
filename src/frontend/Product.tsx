import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
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
interface ProductProp {
  setOrders: (orders: {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    category: string;
    tags: string[];
    rating: number;
    quantity: number;
  }) => void;
  setShowItem: (showItem: boolean) => void;
  viewItem: Items[];
  orders: Items[];
}

export function Product({
  setShowItem,
  setOrders,
  orders,
  viewItem,
}: ProductProp) {
  const [orderMsg, setOrderMsg] = useState<boolean>(false);

  return (
    <div className="w-full h-full bg-[#111]">
      <div className="w-full flex justify-start lg:landscape:h-[70px] sm:landscape:h-[50px] h-[70px] items-center z-50 bg-[#111] fixed border-b-[2px] border-[#333] mb-[16px]">
        <ArrowLeftIcon
          onClick={() => setShowItem(false)}
          className="w-[40px] text-white ml-[20px] cursor-pointer"
        />
      </div>

      <div className="flex flex-col fade gap-[12px] overflow-y-scroll no-scrollbar w-full h-full pl-[20px] pr-[20px] sm:landscape:pb-[200px] pb-[200px]">
        <div className="flex items-center justify-center w-full">
          <div
            className={`${orderMsg ? 'block absolute top-[90px] z-10' : 'hidden'} bg-green-500 border-[2px] border-[#2a2a2a] w-full h-[70px] flex items-center justify-center`}
          >
            <p className="text-black font-bold font-sans flex">
              item ordered. <CheckCircleIcon className="text-black w-[30px]" />
            </p>
          </div>
        </div>

        {viewItem.map((item) => (
          <div
            key={item.id}
            className="bg-[#1e1e1e] sm:landscape:h-[280px] border-[1px] border-[#2a2a2a] rounded-[10px] mt-[90px] p-[16px] flex flex-col sm:landscape:flex-row items-center gap-[20px]"
          >
            <img
              src={item.images[0]}
              className="lg:landscape:w-[100px] lg:landscape:h-[100px] w-[100px] h-[100px] rounded-[8px] flex-shrink-0"
            />

            <div className="flex-1 grid grid-cols-2 gap-x-[40px] gap-y-[4px]">
              {[
                ['Item', item.title],
                ['Price', `$${item.price}`],
                ['Stock', item.stock],
                ['Rating', item.rating],
                ['Quantity', item.quantity],
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

              <div className="col-span-2">
                <p className="text-[#666] sm:landscape:text-[10px] text-[11px] uppercase tracking-wider m-0">
                  Description
                </p>
                <p className="text-[#aaa] lg:landscape:text-[13px] sm:landscape:text-[10px] text-[14px] mb-[10px]">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="flex gap-[10px] items-center sm:landscape:flex-col justify-center">
              <button
                onClick={() => {
                  if (orders.some((cart) => cart.title === item.title)) return;
                  if (orderMsg === true) return;
                  setOrderMsg(true);
                  setTimeout(() => setOrderMsg(false), 1000);
                  setOrders({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    stock: item.stock,
                    images: item.images,
                    category: item.category,
                    tags: item.tags,
                    rating: item.rating,
                    quantity: item.quantity,
                  });
                }}
                className="hover:bg-white z-70 font-sans font-bold text-white border-[2px] border-[#2a2a2a] cursor-pointer hover:text-black rounded-[10px] text-[15px] md:text-[13px] w-[120px] md:py-[10px] py-[9px] mb-[10px] mt-[10px] transition-all duration-300"
              >
                Order
              </button>
              <button
                onClick={() => setShowItem(false)}
                className="hover:bg-red-600 z-70 font-sans font-bold text-white border-[2px] border-[#2a2a2a] cursor-pointer hover:text-white rounded-[10px] text-[15px] md:text-[13px] w-[120px] md:py-[10px] py-[9px] mb-[10px] mt-[10px] transition-all duration-300"
              >
                Back
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
