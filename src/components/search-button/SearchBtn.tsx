import './SearchBtn.css';
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
             p-[13.5px]
             px-[24px]
             text-whiteSecond
             capitalize
             font-bold
             text-base
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