import './UserInfo.css';
import React, {useEffect, useState} from 'react';

interface UserInfoProps{
  userName: string;
  userLogin: string;
  userBio: string;
  joinDate: string;
}

const UserInfo: React.FC<UserInfoProps> = ({userName, userLogin, userBio, joinDate}) =>
{
  const monthArr: string[] = ['jan','feb','mar','apr',
                              'may','jun','jul','aug',
                              'sep','oct','nov','dec', 
                             ]
  const [joinYear, setJoinYear] = useState<string>('2011');
  const [joinDay, setJoinDay] = useState<string>('25');
  const [joinMonth, setJoinMonth] = useState<string>('jan');
  useEffect (() => {
    let [year, month, day] = joinDate.split('-');
    console.log(year, month, day.slice(0,2));
    setJoinYear(year); 
    setJoinDay(day.slice(0,2));
    setJoinMonth(monthArr[parseInt(month.slice(1,2)) - 1]) 
    
  }, [joinDate])
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
                 '>{userName}</h2>
                 <span className='
                  text-blueCommon
                  text-base
                  font-normal
                  leading-normal
                  cursor-pointer
                 '>@{userLogin}</span>
             </div>
             <span className='
              text-greyFirst
              text-base
              font-normal
              leading-normal
              capitalize
             '>Joined {joinDay} {joinMonth} {joinYear}</span>
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
            {userBio}
           </p> 
         </div>      
        </>
    )
}

export default UserInfo; 