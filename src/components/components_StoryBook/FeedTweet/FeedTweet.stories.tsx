import {Meta, StoryObj} from '@storybook/react';
import { Lista } from './FeedTweet';
import Tweet from './tweet/tweet';

export default {
    title: 'Feed/FeedTweet',
    component: Tweet,
    args: {
        img: '/src/assets/Post-1.svg'
    },
}

export const FeedTweetContainer = {}

