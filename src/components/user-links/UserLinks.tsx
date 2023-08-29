import './UserLinks.css';
import React from 'react';
import { UserLinkDiv } from '../main';

import locationIcon from '../../assets/location-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import gitBlogIcon from '../../assets/github-icon.svg';
import gitHubIcon from '../../assets/github-icon-2.svg';

interface UserLinksProps{
    userLocation: string;
    userTwit: string;
    userGitBlog: string;
    userGitHub: string;
}

const UserLinks: React.FC<UserLinksProps> = ({userGitBlog, userGitHub, userLocation, userTwit}) =>

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
             linkText={userLocation}
            />
            <UserLinkDiv 
             imgSource={twitterIcon}
             linkText={userTwit}
            />
            <UserLinkDiv 
             imgSource={gitBlogIcon}
             linkText={userGitBlog}
            />
            <UserLinkDiv 
             imgSource={gitHubIcon}
             linkText={userGitHub}
            />
         </div>       
        </>
    )
}

export default UserLinks; 