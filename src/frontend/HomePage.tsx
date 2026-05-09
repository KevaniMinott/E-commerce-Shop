import { Bars3Icon } from '@heroicons/react/24/outline';

interface HomePageProp {
  setHideNav: (hideNav: boolean) => void;
}
export function HomePage({ setHideNav }: HomePageProp) {
  return (
    <div className="w-full fade h-full bg-[#111] flex flex-col items-center justify-center">
      <Bars3Icon
        onClick={() => setHideNav(false)}
        className=" w-[40px] md:hidden absolute z-10 top-[20px] left-[20px] text-white "
      />
      <p className="text-xs font-medium tracking-widest text-white uppercase mb-4">
        Welcome to
      </p>

      <h1 className="text-5xl font-medium text-white mb-4 leading-tight">
        Shopazon
      </h1>

      <p className="text-white  text-base max-w-md text-center mb-8 text-[15px] leading-relaxed">
        Your one-stop shop for everything you need. Browse thousands of
        products, add to your cart, and check out in seconds.
      </p>
    </div>
  );
}
