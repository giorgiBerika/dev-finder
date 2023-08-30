import './SearchDiv.css';
import React from 'react';

import { SearchBtn  } from '../../components/main';

import SearchLogo from '../../assets/search-icon.png';

interface SearchDivProps{
  btnClicked: boolean;
  setBtnClicked: (newValue: boolean) => void;
  setInputVal: (newValue: string) => void;
  inputVal: string;
  foundUser: boolean;
  switcherOff: boolean;
}

const SearchDiv: React.FC<SearchDivProps> = ({inputVal, setInputVal,  
                                              setBtnClicked, foundUser, 
                                              switcherOff }) =>
{
  const onChangeHandler = (e: any) =>
  {
    const input = e.target;
    setInputVal(input.value);
  }
    return (
        <>
         <div className={`
          rounded-[15px]
          shadow-md
          md:max-w-[730px]
          sm:max-w-[700px]
          
          w-full
          p-[9.5px]
          px-[10px]

          flex
          justify-between
          items-center
          mt-9
          mb-6
          ${switcherOff ? 'bg-darkBlueSecond' : 'bg-whiteFirst'}
         `}
         >
            <div className='
             flex
             items-center
             justify-center
             mx-6
             space-x-6 
             '>
                <img
                 src={SearchLogo}
                 alt='Search loop' />
                <input
                 className={`
                  sm:text-base
                  text-sm
                  font-normal
                  leading-6
                  ms:min-w-[254px]
                  min-w-[150px]
                  border-none
                  outline-none
                  ${switcherOff ? 'bg-darkBlueSecond text-whiteSecond' : 'bg-whiteFirst text-darkBlueFirst'}
                 `}
                 value={inputVal}
                 onChange={(e) => onChangeHandler(e)}
                 placeholder='Search GitHub username…'/>
            </div>
            <div className='
             flex
             sm:flex-row
             flex-col-reverse
             items-center
             justify-center
             sm:space-x-6
             space-x-0
            '>
              {!foundUser && 
              <span className='
               text-red-600
               sm:text-base
               text-xs
               
               font-semibold
              '>No results</span>
              }
              <SearchBtn 
                setBtnClicked={setBtnClicked}
              /> 
            </div>
         </div>       
        </>
    )
}

export default SearchDiv; 