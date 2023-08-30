import React from 'react';


interface UserLinkDivProps{
    imgSource: string;
    linkText: string;
    switcherOff: boolean;
}

const UserLinkDiv: React.FC<UserLinkDivProps> = ({ imgSource, linkText, switcherOff }) =>

{
    
    return (
        <>
        <div className='
         flex
         items-center
         justify-start
        '>
            <img 
                className={
                `
                    mr-5
                    ${(linkText === 'Not available') ? 'opacity-50' : ''}
                `
                }
                src={imgSource}
                alt='Link icon'/>
            <span className={`
                text-base
                font-normal
                leading-normal
                cursor-pointer
                ${(linkText === 'Not available') ? 'text-opacity-50' : ''}
                ${switcherOff ? 'text-whiteSecond' : 'text-darkBlueFirst'}
            `}
             >{linkText}</span>
        </div>       
        </>
    )
}



export default UserLinkDiv; 