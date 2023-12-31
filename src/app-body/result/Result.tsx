import React, {useState, useEffect} from 'react';
import { GithubInfo, UserInfo, UserLinks } from '../../components/main';
import userTestIcon from '../../assets/user-icon-test.png';
import axios from 'axios';

interface ResultProps{
    btnClicked: boolean;
    setBtnClicked: (newValue: boolean) => void;
    inputVal: string;
    setInputVal: (newValue: string) => void;
    setFoundUser: (newValue: boolean) => void;
    switcherOff: boolean;
}

const Result: React.FC<ResultProps> = ({ setFoundUser, btnClicked, 
                                        setBtnClicked, inputVal, 
                                        setInputVal, switcherOff}) =>
{
    
    const [userName, setUserName] = useState<string>('the octocat');
    const [userLogin, setUserLogin] = useState<string>('octocat');
    const [userBio, setUserBio] = useState<string>('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.')
    const [joinDate, setJoinDate] = useState<string>('2011-01-25');
    const [avatarUrl, setAvatarUrl] = useState<string>('');

    const [userRepos, setUserRepos] = useState<number>(8);
    const [userFollowers, setUserFollowers] = useState<number>(3938);
    const [userFollowing, setUserFollowing] = useState<number>(9);

    const [userLocation, setUserLocation] = useState<string>('san francisco');
    const [userTwit, setUserTwit] = useState<string>('Not available');
    const [userGitBlog, setUserGitBlog] = useState<string>('https://github.blog');
    const [userGitHub, setUserGitHub] = useState<string>('@github');


    useEffect(() => {
        if (btnClicked) {
            axios.get(`https://api.github.com/users/${inputVal}`)
                .then(response => {
                    let user = response.data;
                    setFoundUser(true)
                    setUserName(user.name);
                    setUserLogin(user.login);
                    setUserBio(user.bio || 'This profile has no bio.');
                    setJoinDate(user.created_at);
                    
                    setUserRepos(user.public_repos);
                    setUserFollowers(user.followers);
                    setUserFollowing(user.following);
                    
                    setUserLocation(user.location || 'Not available');
                    setUserTwit(user.twitter_username || 'Not available')
                    setUserGitBlog(user.blog || 'Not available');
                    setUserGitHub(user.company || 'Not available');

                    setAvatarUrl(user.avatar_url ? user.avatar_url : userTestIcon)
                    
                    setBtnClicked(false);
                    setInputVal('');
                })
                .catch(error => {
                    console.error(error, "No result!");
                    setFoundUser(false);
                    setBtnClicked(false);
                    setInputVal('');
                });

        }
    }, [btnClicked]);

    return (
        <>
        <div className={`
         flex
         md:flex-row
         flex-col 
         md:items-start
         items-center
         rounded-[15px]
         gap-9
         max-w-[730px]
         w-full
         pt-11
         pr-12
         pb-12
         pl-12
        ${switcherOff ? 'bg-darkBlueSecond' : 'bg-whiteFirst'}
        `}>
            <img 
                src={avatarUrl ? avatarUrl : userTestIcon}
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
                <UserInfo 
                 userName={userName}
                 userLogin={userLogin}
                 userBio={userBio}
                 joinDate={joinDate}

                 switcherOff={switcherOff}
                />
                <GithubInfo 
                    userRepos={userRepos}
                    userFollowers={userFollowers}
                    userFollowing={userFollowing}

                    switcherOff={switcherOff}
                />
                <UserLinks 
                    userLocation={userLocation}
                    userTwit={userTwit}
                    userGitBlog={userGitBlog}
                    userGitHub={userGitHub}

                    switcherOff={switcherOff}
                />
            </div>
        
        </div>       
        </>
    )
}

export default Result;