import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './News.module.css'

export interface NewsContProps {
    asChild?: boolean;
    color: 'dark' | 'white',
}

export function NewsCont({ asChild, color }: NewsContProps) {

    const Comp = asChild ? Slot : 'div'

    return (
        <Comp className={styles.container_news}>
            <ul className={clsx(
                styles.lista_news
            )}>
                <h1 className={styles.titulo_news}>What's happening</h1>

                <li>
                    <div className={styles.container_textoNews}>
                        <h3 className='text-Dark-5'>COVID19 · Last night</h3>
                        <p>England's Chief Medical Officer says the UK is at the most dangerous time of the pandemic</p>
                        <h3>Trending with <span>#covid19</span></h3>
                    </div>
                    <img src="/src/assets/News-1.svg" alt="Image News" />
                </li>
                <li>
                    <div className={styles.container_textoNews}>
                        <h3 className='text-Dark-5'>US news · 4h ago</h3>
                        <p>Parler may go offline following suspensions by Amazon, Apple and Google</p>
                        <h3>Trending with <span>#trump</span></h3>
                    </div>
                    <img src="/src/assets/News-2.svg" alt="Image News" />
                </li>
                <li>
                    <div className={styles.container_textoNews}>
                        <h3 className='text-White'>India · 1h ago</h3>
                        <p>India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test</p>
                        <h3>Trending with <span>#sport</span></h3>
                    </div>
                    <img src="/src/assets/News-3.svg" alt="Image News" />
                </li>
            </ul>
            <button className={styles.buttonShowMore}>Show more</button>
        </Comp> 
    )
}



