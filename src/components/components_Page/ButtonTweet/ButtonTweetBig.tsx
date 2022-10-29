import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import styles from '../../components_StoryBook/Buttons/ButtonTweet.module.css'
import stylesButtonBig from './ButtonTweetBig.module.css'

 
export interface ButtonBigProps {
    asChild?: boolean;
}

export function ButtonBig({ asChild,  }: ButtonBigProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className={clsx(
            styles.buttonTweetBig,
            stylesButtonBig.TweetBig
        )}>
            tweet
        </Comp>
    )
}