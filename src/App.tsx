import './styles/global.css';
import { SideMenus } from './components/components_StoryBook/SideMenu/SideMenu';
import styles from './styles/main.module.css'
import { NewsCont } from './components/components_StoryBook/News/News';
import { FollowCont } from './components/components_StoryBook/Follow/Follow';
import { Lista } from './components/components_StoryBook/FeedTweet/FeedTweet';
import Form from './components/components_StoryBook/Post/PostContainer';
import React, {useState} from 'react';
import { ProfileScreen } from './pages/screenProfile/profile';

export function App() {

  const [tweets, setTweets] =  useState([
    {
        textoTweet: 'Teste 1',
        tempo: '20',
        img: '/src/assets/Post-1.svg',
        usuario: 'vitor',
        tag: '@johndue',
    },
    {
        textoTweet: 'Teste 2',
        tempo: '21',
        img: '/src/assets/Post-2.svg',
        usuario: 'vitao',
        tag: '@vitao',
    }]);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerMenu}>
      <SideMenus color='white'/>
      </div>
      <div className={styles.containerFeed}>
        <div className={styles.header}>
          <h1>Home</h1>
          <button className={styles.star}><img src="/src/assets/star.svg" alt="" /></button>
        </div>
        <Form setTweets= {setTweets}/>
        <Lista tweetsLista= {tweets}/>
      </div>
      <div className={styles.containerNews}>
        <NewsCont color='white'/>
        <FollowCont color='white'/>
        <p className={styles.textoSide}>Terms of Service Privacy Policy Cookie Policy
        Ads info More © 2021 Twitter, Inc.</p>
      </div>
    </div>
  )
}
