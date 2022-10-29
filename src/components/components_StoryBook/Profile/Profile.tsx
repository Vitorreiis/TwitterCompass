import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import AvatarSmComp from '../../components_Page/AvatarSm';
import styles from './Profile.module.css'

export interface ProfileProps {
    asChild?: boolean;
    color: 'dark' | 'white',
}

export function Profiles({ asChild, color }: ProfileProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={clsx(styles.container_profile)}>
            <AvatarSmComp />
            <div className={clsx(styles.container_texto)}>
                <h1 className={clsx({
                    'text-White': color === 'dark',
                    'text-Black': color === 'white',
                })}>David Biscuso</h1>
                <h2>@biscuttu</h2>
            </div>
            <div>
                <button className={clsx(
                    {
                        'text-White': color === 'dark',
                        'text-Black': color === 'white',
                    }
                )}>Ponto</button>
            </div>

        </Comp>
    )
}