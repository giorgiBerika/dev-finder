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
    switcherOff: boolean;
}

const UserLinks: React.FC<UserLinksProps> = ({userGitBlog, userGitHub, userLocation, userTwit, switcherOff}) =>

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
             switcherOff={switcherOff}
             />
            <UserLinkDiv 
             imgSource={twitterIcon}
             linkText={userTwit}
             switcherOff={switcherOff}
             />
            <UserLinkDiv 
             imgSource={gitBlogIcon}
             linkText={userGitBlog}
             switcherOff={switcherOff}
             />
            <UserLinkDiv 
             imgSource={gitHubIcon}
             linkText={userGitHub}
             switcherOff={switcherOff}
            />
         </div>       
        </>
    )
}

export default UserLinks; 