import './GithubInfo.css';
import React from 'react';
import  { GithubInfoDiv }  from '../main';

interface GithubInfoProps{
    userRepos: number;
    userFollowers: number;
    userFollowing: number;
    switcherOff: boolean;
}

const GithubInfo: React.FC<GithubInfoProps> = ({userRepos, userFollowers, userFollowing, switcherOff}) =>
{
    return (
        <>
         <div className={`
          rounded-[10px]    
          flex
          items-center
          justify-around
          w-full
          py-4
          ${switcherOff ? 'bg-blackSecond' : 'bg-greySecond'}
          `}>
            <GithubInfoDiv 
                divTitle='repos'
                infoNum={userRepos}
                switchState={switcherOff}
                />  
            <GithubInfoDiv 
                divTitle='followers'
                infoNum={userFollowers} 
                switchState={switcherOff}
                />  
            <GithubInfoDiv 
                divTitle='following'
                infoNum={userFollowing} 
                switchState={switcherOff}
                />  
         </div>       
        </>
    )
}

export default GithubInfo; 