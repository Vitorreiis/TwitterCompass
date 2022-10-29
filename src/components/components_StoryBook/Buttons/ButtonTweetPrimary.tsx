import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './ButtonTweet.module.css';

 
export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
    size: 'big' | 'md',
}

export function Button({children, asChild, size }: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp 
        className= {clsx(
            styles.buttonTweetBig,
            {
                'h-h-big': size === 'big',
                'h-h-Med': size === 'md',
            }
        )}
        >
            {children}
            </Comp>
    )
}