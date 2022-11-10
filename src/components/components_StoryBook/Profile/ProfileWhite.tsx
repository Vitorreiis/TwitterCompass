import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './Profile.module.css'
import AvatarPerfil from '../Avatar/AvatarSm';

export interface ProfileProps {
    asChild?: boolean;
    color: 'dark' | 'white',
}

export function ProfilesWhite({ asChild, color }: ProfileProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={clsx(styles.container_profile)}>
            <AvatarPerfil size='sm'/>
            <div className={clsx(styles.container_texto)}>
                <h1 className={clsx(styles.textoPreto)}>David Biscuso</h1>
                <h2>@biscuttu</h2>
            </div>
            <div>
                <button className={clsx(
                    styles.button,
                    
                )}><i className="fa-solid fa-ellipsis"></i>
                </button>
            </div>

        </Comp>
    )
}