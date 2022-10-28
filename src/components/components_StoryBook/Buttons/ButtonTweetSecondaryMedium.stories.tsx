import {Meta, StoryObj} from '@storybook/react';
import { ButtonMedium, ButtonProps } from './ButtonTweetSecondaryMedium';

export default {
    title: 'Components/ButtonTweet',
    component: ButtonMedium,
    args: {
        children: 'Tweet',
    },
    argTypes: {
    }
} as Meta<ButtonProps>


export const ButtonSecondaryMedium: StoryObj<ButtonProps> = {}