import Head from 'next/head';
import styles from '../styles/index.module.css';
import CustomLink from './CustomLink';

const MainContainer = ({ children,keywords,title }) => {
    const items=[
        {
            label:'Главная',
            key:'home',
        },
        {
            label:'Пользователи'
            
        }
    ]
    return (
        <>
            <Head>
                <meta keywords={"nextjs" +keywords} ></meta>
                <title>{title}</title>
            </Head>
        
            <div className={styles.navbar}>
                <CustomLink href="/" text='Главная' />
                <CustomLink href="/users" text='Пользователи' />
            </div>
            <div>
                {children}
            </div>
        </>

    );
}

export default MainContainer;