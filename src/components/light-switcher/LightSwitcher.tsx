import './LightSwitcher.css';
import React from 'react';

import MoonLogo from '../../assets/moon.svg';

interface LightSwitcherProps{

}

const LightSwitcher: React.FC<LightSwitcherProps> = ({}) =>
{
    return (
        <>
        <div className='
         flex
         justify-center
         items-center
         gap-4
         cursor-pointer
        '>
            <span className='
             text-xs
             font-bold
             leading-normal
             tracking-wider
             text-greyFirst
             uppercase
            '>dark</span>
            <img 
             src={MoonLogo}
             alt='Half-Moon logo' /> 
        </div>       
        </>
    )
}

export default LightSwitcher; 