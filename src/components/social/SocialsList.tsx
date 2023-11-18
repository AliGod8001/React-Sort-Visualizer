/* component imports */
import SocialsItem from './SocialsItem'

/* other imports */
import _socials from '../../data/socials.json'
import styles from './SocialsList.module.css'

const SocialsList = () => {
    // const [socialActive, setSocialActive] = useState<boolean>(false)
    const socials = _socials as Social[]

    return <ul 
                className={`${styles.wrapper}`}>
        {
            socials.map(social => (
                <SocialsItem key={social.id} data={social} />
            ))
        }
    </ul>
}

export default SocialsList