import {Meta, StoryObj} from '@storybook/react';
import { Button, ButtonProps } from "./ButtonTweetBig";

export default {
    title: 'Components/ButtonTweet',
    component: Button,
    args: {
        children: 'Tweet',
    },
    argTypes: {
    }
} as Meta<ButtonProps>


export const ButtonPrimaryBig: StoryObj<ButtonProps> = {}