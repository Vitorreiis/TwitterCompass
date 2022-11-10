import {Meta, StoryObj} from '@storybook/react';
import Login from './login';

export default {
    title: 'Pages/login',
    component: Login,
    args: {
        children: 'Text Size',
    },
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: {
                type: 'inline-radio'
            }
        }
    }
}

export const LoginScreen: StoryObj = {}