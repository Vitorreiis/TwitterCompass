import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';
import Avatar from '../../assets/Avatar.svg';
import styles from '../components_StoryBook/Avatar/Avatar.module.css'

 
export interface AvatarSmProps {
    asChild?: boolean;
    size?: 'sm' | 'md';
}

export function AvatarSmComp({asChild, size }: AvatarSmProps) {

    const Comp = asChild ? Slot : 'img'

    return (
            <Comp src={Avatar} alt="Avatar" className={clsx(
                styles.avatarPerfil,
                styles.avatarSm
            )}/>
    )
}

export default AvatarSmComp