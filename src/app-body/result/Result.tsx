import './Result.css';
import React, {useState, useEffect} from 'react';
import { GithubInfo, UserInfo, UserLinks } from '../../components/main';
import userTestIcon from '../../assets/user-icon-test.png';
import axios from 'axios';

interface ResultProps{
    btnClicked: boolean;
    setBtnClicked: (newValue: boolean) => void;
    inputVal: string;
    setInputVal: (newValue: string) => void;
}




const Result: React.FC<ResultProps> = ({ btnClicked, setBtnClicked, inputVal, setInputVal}) =>
{
    const [userName, setUserName] = useState<string>('the octocat');
    const [userLogin, setUserLogin] = useState<string>('octocat');
    const [userBio, setUserBio] = useState<string>('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.')
    const [joinDate, setJoinDate] = useState<string>('2011-01-25');
    const [avatarUrl, setAvatarUrl] = useState<string>('');

    const [userRepos, setUserRepos] = useState<number>(8);
    const [userFollowers, setUserFollowers] = useState<number>(3938);
    const [userFollowing, setUserFollowing] = useState<number>(9);


    useEffect(() => {
        if (btnClicked) {
            axios.get(`https://api.github.com/users/${inputVal}`)
                .then(response => {
                    let user = response.data;
                    setUserName(user.name);
                    setUserLogin(user.login);
                    setUserBio(user.bio || 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.');
                    setJoinDate(user.created_at);
                    
                    setUserRepos(user.public_repos);
                    setUserFollowers(user.followers);
                    setUserFollowing(user.following);
                    
                    setBtnClicked(false);
                    setInputVal('');
                })
                .catch(error => {
                    console.error(error);
                });

        }
    }, [btnClicked]);

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
                <UserInfo 
                 userName={userName}
                 userLogin={userLogin}
                 userBio={userBio}
                 joinDate={joinDate}
                />
                <GithubInfo 
                    userRepos={userRepos}
                    userFollowers={userFollowers}
                    userFollowing={userFollowing}
                />
                <UserLinks />
            </div>
        
        </div>       
        </>
    )
}

export default Result;