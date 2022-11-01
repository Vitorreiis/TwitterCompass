import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './ButtonTweet.module.css';

export interface ButtonTwitterPostProps {
    children: ReactNode;
    asChild?: boolean;
}

export function ButtonTwitterPost({children, asChild }: ButtonTwitterPostProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp type='submit' id='buttonTwittar'
        className= {clsx(
            styles.ButtonTwitterPost,
        )}
        >
            {children}
            </Comp>
    )
}