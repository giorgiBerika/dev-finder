import { Header, SearchDiv, Result } from './app-body/main';
import React,  { useState } from 'react';
function App()  {

  const [btnClicked, setBtnClicked] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>('');
 
  
  const [foundUser, setFoundUser] = useState<boolean>(true);
  return (
    <>
   <div className="w-screen 
                  h-screen 
                  bg-greySecond 
                  font-custom
                  font-normal
                  flex
                  flex-col
                  items-center
                  justify-center
                  "> 
      <Header 
       />
      <SearchDiv 
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
        
        setInputVal={setInputVal}
        inputVal={inputVal}

        foundUser={foundUser}
        />
      <Result 
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}

        setInputVal={setInputVal}
        inputVal={inputVal}

        setFoundUser={setFoundUser}
      />
   </div>
   </> 
  )
}

export default App;
