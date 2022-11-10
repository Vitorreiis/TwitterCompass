import {Meta, StoryObj} from '@storybook/react';
import { TextLgstyle } from './Text';

export default {
    title: 'Text/TextSizes',
    component: TextLgstyle,
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

export const TextLg: StoryObj = {}