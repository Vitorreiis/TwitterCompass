import AvatarPerfil from '../../Avatar/Avatar';
import styles from '../FeedTweet.module.css'
import { error404 } from '../../../../Js/app';


export function Tweet({usuario, tag, tempo, textoTweet, img}: {usuario: string, tag: string, tempo: string, textoTweet: string, img: string  }) {

    return (
        <div className={styles.container_tweet}>
            <AvatarPerfil />
            <div className={styles.body_tweet}>
                <h2>{usuario} <span>{tag} · {tempo}s</span></h2>
                <p>{textoTweet}</p>
                <img src={img} alt="" />
                <div className={styles.contIcons}>
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-solid fa-retweet"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                <button className={styles.buttonShowMore} onClick={error404}>Show this thread</button>
            </div>
        </div>
    )
}

export default Tweet;