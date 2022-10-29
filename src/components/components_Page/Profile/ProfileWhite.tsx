import { ClassValue, clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import AvatarSmComp from '../AvatarSm';
import styles from '../../components_StoryBook/Profile/Profile.module.css'
import { ReactNode } from 'react';

export interface ProfileWhiteProps {
    asChild?: boolean;
    color: ClassValue;
}

export function ProfilesWhiteComp({ asChild, color}: ProfileWhiteProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={clsx(styles.container_profile)}>
            <AvatarSmComp />
            <div className={clsx(styles.container_texto)}>
                <h1 className={clsx(
                        {
                            color,
                        }
                    )}>David Biscuso</h1>
                <h2>@biscuttu</h2>
            </div>
            <div>
                <button className={clsx(
                        {
                            color,
                        }
                    )}>Ponto</button>
            </div>
        </Comp>
    )
}