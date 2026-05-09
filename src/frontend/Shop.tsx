import { CheckCircleIcon, StarIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Product } from './Product';

interface Products {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  tags: string[];
  images: string[];
}
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
interface ShopProp {
  setHideNav: (hideNav: boolean) => void;
  setCartItem: (cartItem: {
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
  viewItem: Items[];
  cartItem: Items[];
  setViewItem: (viewItem: Items[]) => void;
  setQuantity: (quantity: number) => void;
  orders: Items[];
}
export function Shop({
  setHideNav,
  setCartItem,
  setOrders,
  setViewItem,
  viewItem,
  cartItem,
  setQuantity,
  orders,
}: ShopProp) {
  const [addedMsg, setAddedMsg] = useState<boolean>(false);
  const [alreadyMsg, setAlreadyMsg] = useState<boolean>(false);
  const [showItem, setShowItem] = useState<boolean>(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=30')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="w-full h-full bg-[#111] overflow-y-scroll no-scrollbar">
      {showItem ? (
        <Product
          orders={orders}
          setShowItem={setShowItem}
          viewItem={viewItem}
          setOrders={setOrders}
        />
      ) : (
        <>
          <div className="lg:landscape:h-[70px] sm:landscape:h-[40px] h-[70px] flex fadeSearch fixed bg-[#111] top-0 z-30 justify-end w-full items-center border-b-[2px] border-[#2a2a2a] md:pr-[255px]">
            <Bars3Icon
              onClick={() => setHideNav(false)}
              className=" w-[40px] md:hidden absolute z-10 left-[20px] text-white "
            />
          </div>
          <div className="flex items-center justify-center w-full">
            <div
              className={`${addedMsg ? 'block absolute top-[90px] z-10' : 'hidden'} bg-green-500 border-[2px] border-[#2a2a2a] w-full h-[70px] flex items-center justify-center`}
            >
              <p className="text-black font-bold font-sans flex">
                item added to your cart{' '}
                <CheckCircleIcon className="text-black w-[30px]" />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div
              className={`${alreadyMsg ? 'block absolute top-[90px] z-10' : 'hidden'} bg-red-500 border-[2px] border-[#2a2a2a] w-full h-[70px] flex items-center justify-center`}
            >
              <p className="text-white font-bold font-sans flex">
                item already in your cart.
              </p>
            </div>
          </div>

          <div className="w-full h-full bg-[#111] p-[10px] mt-[70px]  lg:landscape:mt-[70px]  sm:landscape:mt-[35px]">
            <div className="w-full p-[10px] bg-[#161616] grid grid-cols-1 sm:landscape:grid-cols-3 lg:landscape:grid-cols-5 gap-[20px]">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="p-[10px] bg-[#1e1e1e] fade border-[#2a2a2a] border-[2px] rounded-[5px] flex flex-col"
                >
                  <img
                    src={product.images[0]}
                    className="w-full object-contain lg:landscape:h-[100px]   sm:landscape:h-[70px] h-[100px] flex-shrink-0"
                  />

                  <p className="text-white font-sans font-bold text-center break-words mt-[10px] h-[60px] lg:landscape:h-[60px] sm:landscape:h-[40px] sm:landscape:text-[10px] lg:landscape:text-[15px]   overflow-hidden line-clamp-3">
                    {product.title}
                  </p>

                  <p className="text-gray-500 mt-[6px] font-sans font-bold text-[12px] h-[20px] overflow-hidden truncate">
                    #
                    {Array.isArray(product.tags)
                      ? product.tags.join(' #')
                      : product.tags}
                  </p>

                  <div className="flex-1" />

                  <div className="flex w-full items-center justify-between mt-[10px]">
                    <div>
                      <p className="text-white lg:landscape:text-[13px]    sm:landscape:text-[10px] font-sans font-bold">
                        ${product.price}
                      </p>
                      <p className="text-white lg:landscape:text-[13px]   sm:landscape:text-[10px] flex items-center font-sans font-bold mt-[4px]">
                        {product.rating}{' '}
                        <StarIcon className="w-[16px] ml-[3px]" />
                      </p>
                    </div>
                    <select
                      value={quantities[product.id] ?? 1}
                      onChange={(e) => {
                        setQuantities((prev) => ({
                          ...prev,
                          [product.id]: Number(e.target.value),
                        }));
                      }}
                      className="text-white lg:landscape:text-[13px]   sm:landscape:text-[10px] cursor-pointer bg-[#1e1e1e] outline-none border border-[#2a2a2a] rounded px-[6px] py-[4px]"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <div className="flex gap-[10px] items-center w-full justify-center mt-[10px]">
                    <button
                      className="hover:bg-white z-70 font-sans font-bold text-white border-[2px] border-[#2a2a2a] cursor-pointer hover:text-black rounded-[10px] text-[15px] md:text-[13px] w-[120px] md:w-[100px] md:py-[3px] lg:landscape:text-[13px]   sm:landscape:text-[10px] py-[9px] transition-all duration-300"
                      onClick={() => {
                        setShowItem(true);
                        setViewItem([
                          {
                            id: product.id,
                            title: product.title,
                            description: product.description,
                            price: product.price,
                            stock: product.stock,
                            images: product.images,
                            category: product.category,
                            tags: product.tags,
                            rating: product.rating,
                            quantity: quantities[product.id] ?? 1,
                          },
                        ]);
                      }}
                    >
                      view
                    </button>
                    <button
                      onClick={() => {
                        if (cartItem.some((item) => item.id === product.id)) {
                          if (alreadyMsg === true) return;
                          setAlreadyMsg(true);
                          setTimeout(() => setAlreadyMsg(false), 1000);
                          return;
                        }
                        setQuantity(quantities[product.id] ?? 1);
                        setCartItem({
                          id: product.id,
                          title: product.title,
                          description: product.description,
                          price: product.price,
                          stock: product.stock,
                          images: product.images,
                          category: product.category,
                          tags: product.tags,
                          rating: product.rating,
                          quantity: quantities[product.id] ?? 1,
                        });
                        if (addedMsg === true) return;
                        setAddedMsg(true);
                        setTimeout(() => setAddedMsg(false), 1000);
                      }}
                      className="hover:bg-white z-70 font-sans font-bold text-white border-[2px] border-[#2a2a2a] cursor-pointer hover:text-black rounded-[10px] text-[15px] md:text-[13px] w-[120px] md:w-[100px] md:py-[3px] py-[9px] sm:landscape:w-[110px] lg:landscape:text-[13px]  sm:landscape:text-[10px]  transition-all duration-300"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
