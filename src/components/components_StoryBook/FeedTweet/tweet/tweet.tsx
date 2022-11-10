import AvatarPerfil from '../../Avatar/AvatarSm';
import styles from '../FeedTweet.module.css'
import { error404 } from '../../../../Js/app';
import { adiciona } from '../../../../Js/controllers/post-controller';


export function Tweet({ usuario, tag, tempo, textoTweet, img }: { usuario: string, tag: string, tempo: string, textoTweet: string, img: string }) {

    return (
        <li className={styles.container_tweet}>
            <AvatarPerfil />
            <div className={styles.body_tweet}>
                <h2>{usuario} <span>{tag} · {tempo}s</span></h2>
                <p>{textoTweet}</p>
                <img src={img} alt="" className={styles.image_tweet} />
                <div className={styles.contIcons}>
                    <div className={styles.containerIconsTweet}>
                        <i className="fa-regular fa-comment"></i>
                        <h4>0</h4>
                    </div>
                    <div className={styles.containerIconsTweet}>
                        <i className="fa-solid fa-retweet"></i>
                        <h4>0</h4>
                    </div>
                    <div className={styles.containerIconsTweet}>
                        <i className="fa-regular fa-heart"></i>
                        <h4>0</h4>
                    </div>
                    <div className={styles.containerIconsTweet}>
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        <h4>0</h4>
                    </div>
                </div>
                <button className={styles.buttonShowMore} onClick={error404}>Show this thread</button>
                <div className={styles.containerbodyComments}>
                    <label htmlFor="">Adicione um comentário:</label>
                    <input type="text" name="" id="" />

                    <ul>
                        <li className={styles.containerComments}>
                            <div className={styles.container_perfilComment}>
                                <img src="/src/assets/Avatar.svg" alt="" className={styles.commentsAvatar} />
                                <div className={styles.container_comments}>
                                    <h1 className='comments_name'>Vitao <span className='comments_tempo'>Tempo</span></h1>
                                    <p className='comments_texto'>Texto</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.containerComments}>
                            <div className={styles.container_perfilComment}>
                                <img src="/src/assets/Avatar.svg" alt="" className={styles.commentsAvatar} />
                                <div className={styles.container_comments}>
                                    <h1 className='comments_name'>Vitao <span className='comments_tempo'>Tempo</span></h1>
                                    <p className='comments_texto'>Texto</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default Tweet;