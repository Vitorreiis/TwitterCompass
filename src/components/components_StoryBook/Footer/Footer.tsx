import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './Footer.module.css'

export function Footer() {

    return (
        <div className={styles.footerContainer}>
           <div className={styles.textContainer}>
                <h1>Don't miss what's happening</h1>
                <h2>People on Twitter are the first to know</h2>
           </div>
           <div>
            <button className={styles.buttonLogIn}>Log In</button>
            <button className={styles.buttonSingUp}>Sing Up</button>
           </div>
        </div> 
    )
}



