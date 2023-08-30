import './Header.css';
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
        max-w-[730px]
        w-full

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