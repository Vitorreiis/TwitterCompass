import {Meta, StoryObj} from '@storybook/react';
import { TextXlstyle } from './Text';

export default {
    title: 'Text/TextSizes',
    component: TextXlstyle,
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

export const TextXl: StoryObj = {}