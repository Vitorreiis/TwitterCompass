import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './ButtonFollow.module.css'

export interface ButtonFollowContProps {
    asChild?: boolean;
}

export function ButtonFollowCont ({ asChild }: ButtonFollowContProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className={styles.buttonFollow}>
            Follow
        </Comp> 
    )
}



