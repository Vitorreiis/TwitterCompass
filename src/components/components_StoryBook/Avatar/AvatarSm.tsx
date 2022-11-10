import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';
import Avatar from '../../../assets/Avatar.svg';
import styles from './Avatar.module.css'

 
export interface AvatarProps {
    asChild?: boolean;
    size?: 'sm' | 'md';
}

export function AvatarSmContainer({asChild, size }: AvatarProps) {

    const Comp = asChild ? Slot : 'img'

    return (
            <Comp src={Avatar} alt="Avatar" className={clsx(
                styles.avatarPerfil,
                styles.avatarSm
            )}/>
    )
}

export default AvatarSmContainer;