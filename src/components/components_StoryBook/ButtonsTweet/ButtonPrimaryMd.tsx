import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './ButtonTweet.module.css';
import { error404 } from '../../../Js/app';

 
export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
    size: 'big' | 'md',
}

export function ButtonPrimaryMdContainer({asChild }: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp onClick={error404}
        className= {clsx(
            styles.buttonTweetMedium
        )}
        >
            Tweet
            </Comp>
    )
}