/* component imports */
import SocialsList from '../social/SocialsList'

/* other imports */
import styles from './Wrapper.module.css'


const Wrapper = ({
    children,
} : {
    children: string | JSX.Element | JSX.Element[]
}) => {
    return <>
        <div className={styles.wrapper}>
            <SocialsList />
            {children}
        </div>
    </>
}

export default Wrapper;