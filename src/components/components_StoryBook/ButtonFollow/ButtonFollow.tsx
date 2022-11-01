import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './ButtonFollow.module.css'
import { error404 } from '../../../Js/app';

export interface ButtonFollowContProps {
    asChild?: boolean;
}

export function ButtonFollowCont ({ asChild }: ButtonFollowContProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp onClick={error404}
        className={styles.buttonFollow}>
            Follow
        </Comp> 
    )
}



