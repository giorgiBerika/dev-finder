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
  setSwitcherOff: (newValue: boolean) => void;
}

const SearchDiv: React.FC<SearchDivProps> = ({inputVal,setInputVal,  setBtnClicked, foundUser, switcherOff, setSwitcherOff }) =>
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
          max-w-[730px]
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
                  text-base
                  
                  font-normal
                  leading-6
                  min-w-[254px]
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
             items-center
             justify-center
             space-x-6
            '>
              {!foundUser && 
              <span className='
               text-red-600
               text-1g
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