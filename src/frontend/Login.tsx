interface LoginProp {
  setNoAccount: (noAccounnt: boolean) => void;
}
export function Login({ setNoAccount }: LoginProp) {
  return (
    <form className="w-[370px] border-[3px] border-solid border-[#111] h-[430px] bg-[#1e1e1e] rounded-[20px] flex flex-col items-center pl-[20px] pr-[20px]">
      <p className="text-white font-sans font-bold text-[40px] mt-[20px]">
        Login
      </p>
      <div className="w-full mt-[20px] h-full flex flex-col items-center gap-[20px]">
        <input
          className="bg-[#111] w-full h-[40px] border-[1px] placeholder:fony-sans placeholder:font-bold pl-[10px] rounded-[5px]font-bold font-sans placeholder:text-white border-[#1e1e1e] text-white outline-none"
          type="email"
          placeholder="Enter your email."
        />
        <input
          className="bg-[#111] w-full h-[40px] border-[1px] placeholder:fony-sans placeholder:font-bold pl-[10px] rounded-[5px]font-bold font-sans placeholder:text-white border-[#1e1e1e] text-white outline-none"
          type="password"
          placeholder="Enter your password."
        />
        <button
          className="text-white font-bold font-sans border-[2px] py-2 w-[120px] border-[#111] rounded-[30px] cursor-pointer hover:scale-[1.03] flex items-center justify-center hover:transition-all hover:duration-[400ms] hover:text-black hover:bg-white hover:border-[#1e1e1e] transition-all hover:font-sans hover:font-bold duration-[400ms]"
          type="submit"
        >
          login
        </button>
        <p
          onClick={() => setNoAccount(true)}
          className="underline text-[#111] hover:text-white transition-all duration-[300ms] hover:transition-all hover:duration-[300ms] font-sans font-bold cursor-pointer"
        >
          dont have an account?
        </p>
        <p className="underline text-[#111] hover:text-white transition-all duration-[300ms] hover:transition-all hover:duration-[300ms] font-sans font-bold cursor-pointer">
          forget password?
        </p>
      </div>
    </form>
  );
}
