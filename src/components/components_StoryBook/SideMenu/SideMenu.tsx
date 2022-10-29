import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './SideMenu.module.css'
import { ButtonBig } from '../../components_Page/ButtonTweet/ButtonTweetBig';
import { ProfilesWhiteComp } from '../../components_Page/Profile/ProfileWhite';

export interface SideMenuProps {
    asChild?: boolean;
    color: 'dark' | 'white',
}

export function SideMenus({ asChild, color }: SideMenuProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={clsx(styles.container_SideMenu)}>
            <div>
            <h1>Icon</h1>
            <ul className={styles.container_ul}>
                <li>
                    <p>Icon</p>
                    <a href="" className={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )}>Home</a>
                </li>
                <li>
                    <p>Icon</p>
                    <a href="" className={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )}>Explore</a>
                </li>
                <li>
                    <p>Icon</p>
                    <a href="" className={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )}>Notifications</a>
                </li>
                <li>
                    <p>Icon</p>
                    <a href="" className={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )}>Messages</a>
                </li>
                <li>
                    <p>Icon</p>
                    <a href="" className={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )}>Bookmarks</a>
                </li>
                <li>
                    <p>Icon</p>
                    <a href="" className={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )}>Lists</a>
                </li>
                <li>
                    <p>Icon</p>
                    <a href="" className={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )}>Profiles</a>
                </li>
                <li>
                    <p>Icon</p>
                    <a href="" className={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )}>More</a>
                </li>
            </ul>
            <ButtonBig />
            </div>
            <ProfilesWhiteComp color={clsx(
                        {
                            'text-Black': color === 'white',
                            'text-White': color === 'dark'
                        }
                    )} />
        </Comp>
    )
}



