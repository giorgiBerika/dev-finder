import './UserLinkDiv.css';
import React from 'react';


interface UserLinkDivProps{
    imgSource: string;
    linkText: string;
}

const UserLinkDiv: React.FC<UserLinkDivProps> = ({ imgSource, linkText }) =>

{
    return (
        <>
        <div className='
         flex
         items-center
         justify-start
        '>
            <img 
                className='
                 mr-5
                '
                src={imgSource}
                alt='Link icon'/>
            <span className='
             text-darkBlueFirst
             text-base
             font-normal
             leading-normal
             cursor-pointer
            ' 
             >{linkText}</span>
        </div>       
        </>
    )
}

export default UserLinkDiv; 