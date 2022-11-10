import {Meta, StoryObj} from '@storybook/react';
import { SideMenus } from './SideMenuWhite';

export default {
    title: 'Feed/SideMenu',
    component: SideMenus,
    args: {
        color: 'white',
    },
    argTypes: {
        color: {
            options: ['white', 'dark'],
            control: {
                type: 'inline-radio'
            }
        }
    }
}

export const SideMenuWhite = {
    args: {
        color: 'white',
    },
}