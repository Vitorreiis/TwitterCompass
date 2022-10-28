import {Meta, StoryObj} from '@storybook/react';
import { ButtonSmall, ButtonProps } from './ButtonTweetSmall';

export default {
    title: 'Components/ButtonTweet',
    component: ButtonSmall,
    args: {
        children: 'Tweet',
    },
    argTypes: {
    }
} as Meta<ButtonProps>


export const ButtonSecondarySmall: StoryObj<ButtonProps> = {}