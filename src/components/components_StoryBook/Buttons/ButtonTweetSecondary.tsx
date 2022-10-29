import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './ButtonTweet.module.css';
 
export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
    size: 'md' | 'sm',
}

export function ButtonSmall({children, asChild, size }: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp 
        className= {clsx(
            styles.buttonTweetSmall,
            {
                'h-h-Sec-md': size === 'md',
                'h-h-Sec-sm': size === 'sm',
            }
        )}
        >
            {children}
            </Comp>
    )
}