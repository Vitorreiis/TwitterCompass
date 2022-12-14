import {Meta, StoryObj} from '@storybook/react';
import { TextXs } from './Text';

export default {
    title: 'Text/TextSizes',
    component: TextXs,
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

export const TextXS: StoryObj = {}