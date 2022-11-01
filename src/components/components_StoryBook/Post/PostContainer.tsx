import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './PostContainer.module.css'
import AvatarPerfil from '../Avatar/Avatar';
import { ButtonTwitterPost } from '../ButtonsTweet/ButtonTweetPost';

export interface PostContainerProps {
    asChild?: boolean;
    color: 'dark' | 'white',
}

export function PostContainer({ asChild, color }: PostContainerProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={clsx(styles.container_PostContainer)}>
            <AvatarPerfil />
            <div className={styles.container_textIcon}>
                <input type="text" name="Text" placeholder='What’s happening?' id='textInput' required/>
                <div className={styles.containerIconButton}>
                    <div className={styles.containerIcons}>
                        <button><img src="/src/assets/media.svg" alt="" /></button>
                        <button><img src="/src/assets/gif.svg" alt="" /></button>
                        <button><img src="/src/assets/poll.svg" alt="" /></button>
                        <button><img src="/src/assets/emoji.svg" alt="" /></button>
                        <button><img src="/src/assets/Schedule.svg" alt="" /></button>                        
                    </div>
                    <div>
                        <ButtonTwitterPost children='Tweet' />
                    </div>
                </div>
            </div>
        </Comp>
    )
}



