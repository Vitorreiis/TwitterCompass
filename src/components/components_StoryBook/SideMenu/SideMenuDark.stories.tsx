import {Meta, StoryObj} from '@storybook/react';
import { SideMenus } from './SideMenuWhite';
import { SideMenusDark } from './SideMenuDark';

export default {
    title: 'Feed/SideMenu',
    component: SideMenusDark,
}

export const SideMenuDark = {
    args: {
        color: 'dark',
    },
}