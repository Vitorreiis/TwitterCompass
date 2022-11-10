import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './PostContainer.module.css'
import AvatarPerfil from '../Avatar/AvatarSm';
import { ButtonTwitterPost } from '../ButtonsTweet/ButtonTweetPost';
import React from 'react';

export interface PostContainerProps {
    asChild?: boolean;
    color: 'dark' | 'white',
}

class Form extends React.Component<{
    setTweets: React.Dispatch<React.SetStateAction<{
        textoTweet: string;
        tempo: string;
        img: string;
        usuario: string;
        tag: string;
    }[]>>
}> {
    state = {
        textoTweet: '',
        tempo: '',
        img: '',
        usuario: 'Vitao',
        tag: '@Vitao',
    }

    adicionarTweet(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault(),
        this.props.setTweets(tweetsAntigos => [...tweetsAntigos, {...this.state}])
        console.log('state: ', this.state)
    }

    render() {
        return (
            <form className={clsx(styles.container_PostContainer)} onSubmit={this.adicionarTweet.bind(this)}>
                <AvatarPerfil />
                <div className={styles.container_textIcon}>
                    <input
                        type="text"
                        name="Text"
                        placeholder='What’s happening?'
                        id='textInput'
                        value={this.state.textoTweet}
                        onChange={evento => this.setState({ ...this.state, textoTweet: evento.target.value })}
                        required
                    />
                    <div className={styles.containerIconButton}>
                        <div className={styles.containerIcons}>
                            <button><img src="/src/assets/media.svg" alt="" /></button>
                            <button><img src="/src/assets/gif.svg" alt="" /></button>
                            <button><img src="/src/assets/poll.svg" alt="" /></button>
                            <button><img src="/src/assets/emoji.svg" alt="" /></button>
                            <button><img src="/src/assets/Schedule.svg" alt="" /></button>
                        </div>
                        <div>
                            <ButtonTwitterPost children='Tweet' />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;