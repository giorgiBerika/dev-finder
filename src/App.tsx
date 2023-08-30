import { Header, SearchDiv, Result } from './app-body/main';
import { useState } from 'react';
function App()  {

  const [switcherOff, setSwitcherOff] = useState<boolean>(false);

  const [btnClicked, setBtnClicked] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>('');
 
  
  const [foundUser, setFoundUser] = useState<boolean>(true);
  return (
    <>
   <div className={`
                   w-screen 
                  min-h-screen
                  font-custom
                  font-normal
                  flex
                  flex-col
                  items-center
                  justify-center
                  ${switcherOff ? `bg-blackSecond`: `bg-greySecond`}
   `}
  
                  > 
      <Header 
        setSwitcherOff={setSwitcherOff}
        switcherOff={switcherOff}
       />
      <SearchDiv 
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
        
        setInputVal={setInputVal}
        inputVal={inputVal}

        foundUser={foundUser}

        switcherOff={switcherOff}
        />
      <Result 
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}

        setInputVal={setInputVal}
        inputVal={inputVal}

        setFoundUser={setFoundUser}

        switcherOff={switcherOff}
        
      />
   </div>
   </> 
  )
}

export default App;
