import './UserLinks.css';
import React from 'react';
import { UserLinkDiv } from '../main';

import locationIcon from '../../assets/location-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import gitBlogIcon from '../../assets/github-icon.svg';
import gitHubIcon from '../../assets/github-icon-2.svg';

interface UserLinksProps{

}

const UserLinks: React.FC<UserLinksProps> = ({}) =>

{
    return (
        <>
         <div className='
          w-full
          grid
          grid-cols-2
          gap-y-5
          gap-x-16
          mt-10

         '>
            <UserLinkDiv 
             imgSource={locationIcon}
             linkText='san francisco'
            />
            <UserLinkDiv 
             imgSource={twitterIcon}
             linkText='Not availabe'
            />
            <UserLinkDiv 
             imgSource={gitBlogIcon}
             linkText='https://github.blog'
            />
            <UserLinkDiv 
             imgSource={gitHubIcon}
             linkText='@github'
            />
         </div>       
        </>
    )
}

export default UserLinks; 