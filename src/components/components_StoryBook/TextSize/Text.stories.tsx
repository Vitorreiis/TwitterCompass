import {Meta, StoryObj} from '@storybook/react';
import { Text, TextProps } from "./Text";

export default {
    title: 'Components/TextSizes',
    component: Text,
    args: {
        children: 'Text Size',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>


export const TextXS: StoryObj = {
    args: {
        size: 'xs',
    }
}

export const TextSM: StoryObj = {
    args: {
        size: 'sm',
    }
}

export const TextMD: StoryObj = {
    args: {
        size: 'md',
    }
}

export const TextLG: StoryObj = {
    args: {
        size: 'lg',
    }
}

export const TextXL: StoryObj = {
    args: {
        size: 'xl',
    }
}