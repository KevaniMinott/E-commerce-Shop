import { HomePage } from './HomePage';
import { Shop } from './Shop';
import { Orders } from './Orders';
import { useState } from 'react';
import { Cart } from './Cart';
import { SideNav } from './SideNav';
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
export function FrontPage() {
  const [display, setDisplay] = useState<string>('Home');
  const [hideNav, setHideNav] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<Items[]>([]);
  const [viewItem, setViewItem] = useState<Items[]>([]);
  const [orders, setOrders] = useState<Items[]>([]);
  const [quantity, setQuantity] = useState<number>(0);
  const addItem = (cartItem: Items) => {
    setCartItem((prev) => [...prev, cartItem]);
  };

  const addOrder = (orders: Items) => {
    setOrders((prev) => [...prev, orders]);
  };

  const removeOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const removeFromCart = (id: number) => {
    setCartItem((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="w-full h-full bg-black flex relative  ">
      {/* add a welcome to app name enjoy your shopping */}
      <div
        className={` ${hideNav === true ? 'hidden' : 'block'} md:block absolute md:relative z-40 h-full`}
      >
        <SideNav
          hideNav={hideNav}
          setHideNav={setHideNav}
          setDisplay={setDisplay}
        />
      </div>

      {display === 'Home' ? (
        <HomePage setHideNav={setHideNav} />
      ) : display === 'Shop' ? (
        <div className="flex-1 min-w-0">
          <Shop
            orders={orders}
            setOrders={addOrder}
            setCartItem={addItem}
            setViewItem={setViewItem}
            viewItem={viewItem}
            cartItem={cartItem}
            setHideNav={setHideNav}
            setQuantity={setQuantity}
          />
        </div>
      ) : display === 'Cart' ? (
        <Cart
          quantity={quantity}
          orders={orders}
          cartItem={cartItem}
          setOrders={addOrder}
          removeFromCart={removeFromCart}
          setHideNav={setHideNav}
        />
      ) : (
        <Orders
          orders={orders}
          removeOrder={removeOrder}
          setHideNav={setHideNav}
        />
      )}
    </div>
  );
}
