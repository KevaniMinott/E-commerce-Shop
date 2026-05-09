// import { useState } from 'react';
import './App.css';
import { FrontPage } from './FrontPage';
// import { SignUp } from './SignUp.tsx';
// import { Login } from './Login.tsx';

function App() {
  // const [noAccount, setNoAccount] = useState<boolean>(true);
  return (
    <div className="bg-[#111] select-none flex items-center justify-center w-screen h-screen fixed">
      {/* {noAccount ? (
        <SignUp setNoAccount={setNoAccount} />
      ) : (
        <Login setNoAccount={setNoAccount} />
      )} */}
      <FrontPage />
    </div>
  );
}

export default App;
