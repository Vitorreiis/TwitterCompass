import Avatar from '../../../assets/Avatar.svg';
import { Profiles } from './Profile';

export default {
    title: 'Components/Profiles',
    component: Profiles,
    args: {
        color: 'dark',
    },
    argTypes: {
        color: {
            options: ['white', 'dark'],
            control: {
                type: 'inline-radio'
            }
        }
    }
};

export const ProfileDark = {
    args: {
        color: 'dark',
    }
}