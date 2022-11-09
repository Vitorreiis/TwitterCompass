import React from 'react';
import styles from './login.module.css'

class Login extends React.Component {

    login = {
        usuario: 'admin',
        senha : 'admin',
    }

    state = {
        usuario: '',
        senha: '',
    }

    logar(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        if(this.login.usuario == this.state.usuario && this.login.senha == this.state.senha){
            console.log('entrou')
        }
    }

    render() {
        return(
            <div className={styles.containerMain}>
                <div className={styles.containerForm}>
                    <img src="/src/assets/twitter-logo.svg" alt="" />
                    <h1>Log in to Twitter</h1>
                    <form className={styles.form} onSubmit={this.logar.bind(this)}>
                        <input type="text" placeholder='Phone number, email address' value={this.state.usuario} onChange={evento => this.setState({ ...this.state, usuario: evento.target.value })} required/>
                        <input type="password" name="" id="" placeholder='Password' required/>
                        <button type='submit'>Log In</button>
                    </form>
                    <div className={styles.containerLinks}>
                        <a href="">Forgot password?</a>
                        <a href="">Sign up to Twitter</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;