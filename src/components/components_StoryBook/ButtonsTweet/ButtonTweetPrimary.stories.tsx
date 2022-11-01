import {Meta, StoryObj} from '@storybook/react';
import { Button, ButtonProps } from "./ButtonTweetPrimary";

export default {
    title: 'Components/ButtonTweet',
    component: Button,
    args: {
        children: 'Tweet',
    },
    argTypes: {
        size: {
            options: ['big', 'md'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ButtonProps>


export const ButtonPrimaryBig: StoryObj<ButtonProps> = {
    args: {
        size: 'big',
    }
}

export const ButtonPrimaryMedium: StoryObj<ButtonProps> = {
    args: {
        size: 'md',
    }
}