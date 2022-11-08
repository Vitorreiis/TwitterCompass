import styles from '../../styles/main.module.css'
import stylesProfile from './screenProfile.module.css'
import { ButtonSmall } from '../../components/components_StoryBook/ButtonsTweet/ButtonTweetSecondary'


export function ProfileScreen() {

    return (
        <div className={stylesProfile.containerProfileScreen}>
            <div className={stylesProfile.containerBackgroundProfile}>
                <img src='/src/assets/backgroundProfile.svg' alt="" />
            </div>
            <div className={stylesProfile.container_conteudoProfile}>
                <div className={stylesProfile.container_perfilButton}>
                    <img src="/src/assets/Avatar.svg" alt="" />
                    <ButtonSmall children='Edit Profile' size='sm' />
                </div>
                <h1>Vitor</h1>
                <h2>@Vitor</h2>
                <h3>Product Designer</h3>
                <div className={stylesProfile.profileLocalização}>
                    <img src="/src/assets/Location.svg" alt="" />
                    <h3>London</h3>
                    <img src="/src/assets/Calendar.svg" alt="" />
                    <h3>Joined September 2011</h3>
                </div>
                <div className={stylesProfile.profileFollow}>
                    <h3><span>569 </span> Following</h3>
                    <h3><span>72</span> Followers</h3>
                </div>

                <div className={stylesProfile.containerButtonsProfile}>
                    <button>Tweets</button>
                    <button>Tweets & replies</button>
                    <button>Media</button>
                    <button>Likes</button>

                </div>
            </div>
        </div>
    )
}
