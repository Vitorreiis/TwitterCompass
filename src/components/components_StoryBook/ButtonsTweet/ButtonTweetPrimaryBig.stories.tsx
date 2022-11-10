import {Meta, StoryObj} from '@storybook/react';
import { Button, ButtonProps } from "./ButtonTweetPrimaryBig";

export default {
    title: 'Buttons/ButtonTweet',
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