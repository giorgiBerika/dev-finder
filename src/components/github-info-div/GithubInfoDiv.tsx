import React from 'react';

interface GithubInfoDivProps{
    divTitle: string;
    infoNum: number;
    switchState: boolean;
}

const GithubInfoDiv: React.FC<GithubInfoDivProps> = ({ divTitle, infoNum, switchState}) =>
{
    return (
        <>
         <div className='
          flex
          flex-col
          items-start
         '>
            <span className={`
             text-xs
             font-normal
             leading-normal
             capitalize
             ${switchState ? 'text-whiteSecond' : 'text-darkBlueFirst'}
            `}>{divTitle}</span>
            <h3 className={`
             
             sm:text-1g
             text-base
             font-bold
             leading-normal
             uppercase
             ${switchState ? 'text-whiteSecond' : 'text-blackFirst'}
            `}>{infoNum}</h3>  
         </div>       
        </>
    )
}

export default GithubInfoDiv; 