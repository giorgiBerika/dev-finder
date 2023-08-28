import './GithubInfoDiv.css';
import React from 'react';

interface GithubInfoDivProps{
    divTitle: string;
    divNumber: number;
}

const GithubInfoDiv: React.FC<GithubInfoDivProps> = ({ divTitle, divNumber}) =>
{
    return (
        <>
         <div className='
          flex
          flex-col
          items-start
         '>
            <span className='
             text-darkBlueFirst
             text-xs
             font-normal
             leading-normal
             capitalize
            '>{divTitle}</span>
            <h3 className='
             text-blackFirst
             text-1g
             font-bold
             leading-normal
             uppercase
            '>{divNumber}</h3>  
         </div>       
        </>
    )
}

export default GithubInfoDiv; 