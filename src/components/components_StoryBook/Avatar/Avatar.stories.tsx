import Avatar from '../../../assets/Avatar.svg';
import { AvatarPerfil } from './Avatar';


export default {
    title: 'Avatar/Avatar',
    component: AvatarPerfil,
    args: {
        size: 'sm',
    },
    argTypes: {
        size: {
            options: ['sm', 'md'],
            control: {
                type: 'inline-radio'
            }
        }
    }
};

export const AvatarMd = {
    args: {
        size: 'md',
    }
};

export const AvatarSm = {
    args: {
        size: 'sm',
    }
};