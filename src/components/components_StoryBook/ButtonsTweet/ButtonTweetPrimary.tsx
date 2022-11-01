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

export function Button({children, asChild, size }: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp onClick={error404}
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