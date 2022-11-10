import {Meta, StoryObj} from '@storybook/react';
import { ButtonSmall, ButtonProps } from './ButtonTweetSecondarySmall';

export default {
    title: 'Buttons/ButtonTweet',
    component: ButtonSmall,
    args: {
        children: 'Tweet',
    },
} as Meta<ButtonProps>

export const ButtonSecondarySmall: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    }
}

