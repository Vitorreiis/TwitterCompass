import {Meta, StoryObj} from '@storybook/react';
import { TextMdstyle } from './Text';

export default {
    title: 'Text/TextSizes',
    component: TextMdstyle,
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

export const TextMd: StoryObj = {}