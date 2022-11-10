import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './FeedTweet.module.css'
import AvatarPerfil from '../Avatar/AvatarSm';
import { error404 } from '../../../Js/app';
import {Tweet} from './tweet/tweet';

export interface FeedTweetProps {
    asChild?: boolean;
}

interface Itweet {
    textoTweet: string;
    usuario: string, 
    tag: string, 
    tempo: string, 
    img: string,
}

export function Lista({tweetsLista}: { tweetsLista: Itweet[]}) {

    return (
        <ul className={styles.containerFeedTweet}>
            {tweetsLista.map((tweet, index) => (
                <Tweet 
                {...tweet}
                />
            ))}
        </ul>
    )
}

