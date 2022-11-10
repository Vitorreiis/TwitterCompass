import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './SideMenu.module.css'
import { Button } from '../ButtonsTweet/ButtonTweetPrimaryBig';
import { Profiles } from '../Profile/Profile';

export interface SideMenuProps {
    asChild?: boolean;
    color: 'dark' | 'white',
}

export function SideMenusDark({ asChild }: SideMenuProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={clsx(styles.container_SideMenu)}>
            <div>
            <img src="/src/assets/logoTwitter.svg" alt="" className={styles.imgContainer}/>
            <ul className={styles.container_ul}>
                <li className={styles.checked}>
                <i className={clsx(
                    "fa-solid fa-house", styles.iconCor
                )}></i>
                    <a href="" className={clsx(
                        styles.aCheckedHome,

                    )}>Home</a>
                </li>
                <li>
                <i className="fa-light fa-hashtag"></i>
                    <a href="" className={clsx(
                        styles.aCheckedDark,

                    )}>Explore</a>
                </li>
                <li>
                <i className="fa-solid fa-bell"></i>
                    <a href="" className={clsx(
                        styles.aCheckedDark,

                    )}>Notifications</a>
                </li>
                <li>
                <i className="fa-solid fa-envelope"></i>
                    <a href="" className={clsx(
                        styles.aCheckedDark,

                    )}>Messages</a>
                </li>
                <li>
                <i className="fa-regular fa-bookmark"></i>
                    <a href="" className={clsx(
                        styles.aCheckedDark,

                    )}>Bookmarks</a>
                </li>
                <li>
                <i className="fa-regular fa-rectangle-list"></i>
                    <a href="" className={clsx(
                        styles.aCheckedDark,

                    )}>Lists</a>
                </li>
                <li>
                <i className="fa-regular fa-user"></i>
                    <a href="" className={clsx(
                        styles.aCheckedDark,

                    )}>Profiles</a>
                </li>
                <li>
                <i className="fa-solid fa-ellipsis"></i>
                    <a href="" className={clsx(
                        styles.aCheckedDark,

                    )}>More</a>
                </li>
            </ul>
            <Button children='Tweet' size='big'/>
            </div>
            <Profiles color='dark'/>
        </Comp>
    )
}



