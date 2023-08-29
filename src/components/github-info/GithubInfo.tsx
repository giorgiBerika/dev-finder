import './GithubInfo.css';
import React from 'react';
import  { GithubInfoDiv }  from '../main';
interface GithubInfoProps{
    userRepos: number;
    userFollowers: number;
    userFollowing: number;
}

const GithubInfo: React.FC<GithubInfoProps> = ({userRepos, userFollowers, userFollowing}) =>
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
                infoNum={userRepos}
                />  
            <GithubInfoDiv 
                divTitle='followers'
                infoNum={userFollowers} 
                />  
            <GithubInfoDiv 
                divTitle='following'
                infoNum={userFollowing} 
                />  
         </div>       
        </>
    )
}

export default GithubInfo; 