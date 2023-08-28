import './GithubInfo.css';
import React from 'react';
import  { GithubInfoDiv }  from '../main';
interface GithubInfoProps{

}

const GithubInfo: React.FC<GithubInfoProps> = ({}) =>
{
    return (
        <>
         <div className='
          rounded-[10px]
          bg-greySecond
          flex
          items-center
          justify-around
          w-full
          py-4
         '>
            <GithubInfoDiv 
                divTitle='repos'
                divNumber={8} 
                />  
            <GithubInfoDiv 
                divTitle='followers'
                divNumber={3938} 
                />  
            <GithubInfoDiv 
                divTitle='following'
                divNumber={9} 
                />  
         </div>       
        </>
    )
}

export default GithubInfo; 