import { Header, SearchDiv, Result } from './app-body/main';
import React,  { useState } from 'react';
function App()  {

  const [btnClicked, setBtnClicked] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>('');

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
        />
      <Result 
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}

        setInputVal={setInputVal}
        inputVal={inputVal}
      />
   </div>
   </> 
  )
}

export default App;
