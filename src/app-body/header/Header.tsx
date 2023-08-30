import React from 'react';

import { LightSwitcher  } from '../../components/main';

interface HeaderPorps {
    setSwitcherOff: (newValue: boolean) => void;
    switcherOff: boolean;
}

const Header: React.FC<HeaderPorps> = ({ setSwitcherOff, switcherOff }) =>
{
    return (
        <>
        <div 
        className=' 
        flex
        justify-between
        items-center
        md:max-w-[730px]
        max-w-[700px]
        md:px-0
        px-5
        w-full
        mt-2
        '>
            <h2
            className={`
            text-2xl
            font-bold
            leading-normal
            text-gray-700
            ${switcherOff ? 'text-whiteSecond' : 'text-gray-700'}
            `}
            >devfinder</h2>
            <LightSwitcher 
                setSwitcherOff={setSwitcherOff}
                switcherOff={switcherOff}
            />
        </div>       
        </>
    )
}

export default Header;