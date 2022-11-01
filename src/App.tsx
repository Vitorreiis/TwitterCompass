import './styles/global.css';
import { SideMenus } from './components/components_StoryBook/SideMenu/SideMenu';
import styles from './styles/main.module.css'
import { NewsCont } from './components/components_StoryBook/News/News';
import { FollowCont } from './components/components_StoryBook/Follow/Follow';
import { PostContainer } from './components/components_StoryBook/Post/PostContainer';
import { FeedTweet } from './components/components_StoryBook/FeedTweet/FeedTweet';


export function App() {

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerMenu}>
      <SideMenus color='white'/>
      </div>
      <div className={styles.containerFeed}>
        <PostContainer color='white'/>
        <FeedTweet img='/src/assets/Post-1.svg' tag='@johndue' texto='Tom is in a big hurry.' usuario='Devon Lane'/>
        <FeedTweet img='/src/assets/Post-2.svg' tag='@johndue' texto='Tom is in a big hurry.' usuario='Darlene Robertson'/>

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
