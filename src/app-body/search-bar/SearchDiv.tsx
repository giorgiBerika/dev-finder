import './SearchDiv.css';
import React from 'react';

import { SearchBtn  } from '../../components/main';

import SearchLogo from '../../assets/search-icon.png';

interface SearchDivProps{

}

const SearchDiv: React.FC<SearchDivProps> = ({}) =>
{
    return (
        <>
         <div className='
          rounded-[15px]
          bg-whiteFirst
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
         '>
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
                 className='
                  text-base
                  text-darkBlueFirst
                  font-normal
                  leading-6
                  min-w-[254px]
                  border-none
                  outline-none
                 ' 
                 placeholder='Search GitHub username…'/>
            </div>
            <div className='
             flex
             item-center
             justify-center
             space-x-6
            '>
              {/* <span className='
               text-red-600
               text-1g
               font-semibold
              '>No results</span> */}
              <SearchBtn /> 
            </div>
         </div>       
        </>
    )
}

export default SearchDiv; 