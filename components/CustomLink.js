import Link from 'next/link';
import styles from '../styles/CustomLink.module.css';

const CustomLink = ({text,href}) => {
    return ( 
        <Link 
        className={styles.link}
        href={href}>
                {text}
            </Link>
     );
}
 
export default CustomLink;