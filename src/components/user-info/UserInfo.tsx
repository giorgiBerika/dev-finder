import './UserInfo.css';
import React from 'react';

interface UserInfoProps{

}

const UserInfo: React.FC<UserInfoProps> = ({}) =>
{
    return (
        <>
         <div className='
          w-full
          mb-8
         '>
           <div className='
            w-full
            flex
            justify-between
            items-start
           '>  
             <div className='
              flex
              flex-col
              items-start
              gap-0.5
             '>
                 <h2 className='
                  text-blackFirst
                  text-2xl
                  font-bold
                  capitalize
                  cursor-pointer
                 '>the octocat</h2>
                 <span className='
                  text-blueCommon
                  text-base
                  font-normal
                  leading-normal
                  cursor-pointer
                 '>@octocat</span>
             </div>
             <span className='
              text-greyFirst
              text-base
              font-normal
              leading-normal
              capitalize
             '>Joined 25 Jan 2011</span>
           </div>
          <p className='
           text-darkBlueFirst
           text-sm
           font-normal
           leading-6
           w-full
           max-h-[50px]
           mt-5
          '>
            Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit. 
            Donec odio. Quisque volutpat mattis 
            eros.
           </p> 
         </div>      
        </>
    )
}

export default UserInfo; 