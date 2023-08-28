import './Header.css';
import React from 'react';

import { LightSwitcher  } from '../../components/main';

interface HeaderPorps {

}

const Header: React.FC<HeaderPorps> = ({}) =>
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
            className='
            text-2xl
            font-bold
            leading-normal
            text-gray-700
            '
            >devfinder</h2>
            <LightSwitcher />
        </div>       
        </>
    )
}

export default Header;