import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import styles from './Text.module.css'
 
export interface TextProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
}

export function TextXs({ size = 'md', children, asChild }: TextProps) {

    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={clsx(styles.textoXs)
    }
    >
        {children}
        </Comp>
    )
}

export function TextSmstyle({ size = 'md', children, asChild }: TextProps) {

    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={clsx(styles.textoSm)
    }
    >
        {children}
        </Comp>
    )
}

export function TextMdstyle({ size = 'md', children, asChild }: TextProps) {

    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={clsx(styles.textoMd)
    }
    >
        {children}
        </Comp>
    )
}

export function TextLgstyle({ size = 'md', children, asChild }: TextProps) {

    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={clsx(styles.textoLg)
    }
    >
        {children}
        </Comp>
    )
}

export function TextXlstyle({ size = 'md', children, asChild }: TextProps) {

    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={clsx(styles.textoXl)
    }
    >
        {children}
        </Comp>
    )
}