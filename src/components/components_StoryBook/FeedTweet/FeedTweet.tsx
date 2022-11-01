import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './FeedTweet.module.css'
import AvatarPerfil from '../Avatar/Avatar';
import { error404 } from '../../../Js/app';

export interface FeedTweetProps {
    asChild?: boolean;
    img: string;
    usuario: string;
    texto: string;
    tag: string
}

export function FeedTweet({ asChild, img, usuario, texto, tag}: FeedTweetProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={styles.containerFeedTweet}>
            <AvatarPerfil />
            <div className={styles.body_tweet}>
                <h2>{usuario} <span>{tag} · 23s</span></h2>
                <p>{texto}</p>
                <img src={img} alt="" />
                <div className={styles.contIcons}>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-solid fa-retweet"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                <button className={styles.buttonShowMore} onClick={error404}>Show this thread</button>
            </div>
        </Comp> 
    )
}



