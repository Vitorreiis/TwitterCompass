import {Meta, StoryObj} from '@storybook/react';
import { ButtonSmall, ButtonProps } from './ButtonTweetSecondary';

export default {
    title: 'Components/ButtonTweet',
    component: ButtonSmall,
    args: {
        children: 'Tweet',
    },
    argTypes: {
        size: {
            options: ['md', 'sm'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ButtonProps>


export const ButtonSecondaryMedium: StoryObj<ButtonProps> = {
    args: {
        size: 'md',
    }
}


export const ButtonSecondarySmall: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    }
}

