import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import styles from './ButtonTweet.module.css';
 
export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild }: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className= {styles.buttonTweetBig}
        >
            {children}
            </Comp>
    )
}