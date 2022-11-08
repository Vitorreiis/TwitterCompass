import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonFollowCont } from '../ButtonFollow/ButtonFollow';
import styles from './Follow.module.css'

export interface FollowContProps {
    asChild?: boolean;
    color: 'dark' | 'white',
}

export function FollowCont({ asChild, color }: FollowContProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={styles.containerFollow}>
            <ul>
                <h1 className={styles.followTitulo}>Who to follow</h1>
                <li className={styles.li_FollowCount}>
                    <div className={styles.container}>
                    <img src="/src/assets/Profile-picture1.svg" alt="" />
                    <div className={styles.containerText}>
                        <h1>Bessie Cooper</h1>
                        <h2>@alessandroveronezi</h2>
                    </div>
                    </div>
                    <ButtonFollowCont />
                </li>
                <li className={styles.li_FollowCount}>
                    <div className={styles.container}>
                    <img src="/src/assets/Profile-picture2.svg" alt="" />
                    <div className={styles.containerText}>
                        <h1>Jenny Wilsonr</h1>
                        <h2>@gabrielcantarin</h2>
                    </div>
                    </div>
                    <ButtonFollowCont />
                </li>
                <button className={styles.buttonShowMore}>Show more</button>
            </ul>
        </Comp> 
    )
}



