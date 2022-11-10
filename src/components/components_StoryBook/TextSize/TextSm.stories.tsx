import {Meta, StoryObj} from '@storybook/react';
import { TextSmstyle } from './Text';

export default {
    title: 'Text/TextSizes',
    component: TextSmstyle,
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

export const TextSm: StoryObj = {}