import './LightSwitcher.css';
import React from 'react';

import MoonLogo from '../../assets/moon.svg';
import SunLogo from '../../assets/sun.svg';

interface LightSwitcherProps{
    setSwitcherOff: (newValue: boolean) => void;
    switcherOff: boolean;
}

const LightSwitcher: React.FC<LightSwitcherProps> = ({ setSwitcherOff, switcherOff }) =>
{
    const onClickHandler = () =>
    {
        setSwitcherOff(!switcherOff);
    }
    return (
        <>
        <div className='
         flex
         justify-center
         items-center
         gap-4
         cursor-pointer
        '
        onClick={() => onClickHandler()}
        >
            <span className=
            {`
             text-xs
             font-bold
             leading-normal
             tracking-wider
             uppercase
             ${switcherOff ? 'text-whiteSecond' : 'text-greyFirst'}
            `}
            >{switcherOff ? 'light' : 'dark'}</span>
            <img 
             src={switcherOff ? SunLogo : MoonLogo}
             alt={switcherOff ? 'Sun logo' : 'Half-moon logo'} /> 
        </div>       
        </>
    )
}

export default LightSwitcher; 