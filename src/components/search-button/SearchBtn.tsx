import React from 'react';

interface SearchBtnProps{
  setBtnClicked: (newValue: boolean) => void;
}

const SearchBtn: React.FC<SearchBtnProps> = ({ setBtnClicked }) =>
{
  const onClickHandler = () =>
  {
     setBtnClicked(true);
  }
    return (
        <>
          <button 
            className='
             rounded -[10px]
             bg-blueCommon
             md:p-[13.5px]
             md:px-[24px]
             p-[12.5px]
             px-[16px]
             text-whiteSecond
             capitalize
             font-bold
             sm:text-base
             text-sm
             leading-normal
             hover:bg-btnHover
             transition-all
             duration-150
             '
             onClick={() => onClickHandler()}
             >search</button>
        </>
    )
}

export default SearchBtn; 