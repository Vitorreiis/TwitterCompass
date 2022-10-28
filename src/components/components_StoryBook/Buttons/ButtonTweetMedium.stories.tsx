import {Meta, StoryObj} from '@storybook/react';
import { ButtonMedium, ButtonProps } from './ButtonTweetMedium';

export default {
    title: 'Components/ButtonTweet',
    component: ButtonMedium,
    args: {
        children: 'Tweet',
    },
    argTypes: {
    }
} as Meta<ButtonProps>


export const ButtonPrimaryMedium: StoryObj<ButtonProps> = {}