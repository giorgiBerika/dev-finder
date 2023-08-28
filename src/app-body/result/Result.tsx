import './Result.css';
import React from 'react';
import { GithubInfo, UserInfo, UserLinks } from '../../components/main';
import userTestIcon from '../../assets/user-icon-test.png';


interface ResultProps{

}

const Result: React.FC<ResultProps> = ({}) =>
{
    return (
        <>
        <div className='
         flex
         items-start
         bg-whiteFirst
         rounded-[15px]
         gap-9
         max-w-[730px]
         w-full
         pt-11
         pr-12
         pb-12
         pl-12
        '>
            <img 
                src={userTestIcon}
                alt='User Personal Icon'
                className='
                    rounded-[100%]
                    max-w-[117px]
                    w-full
                    max-h-[117px]
                    h-full
                    cursor-pointer
                '
                />
            <div 
             className='
              flex
              flex-col
              items-start
              max-w-[480px]
              w-full
             '
            >
                <UserInfo />
                <GithubInfo />
                <UserLinks />
            </div>
        
        </div>       
        </>
    )
}

export default Result;