/* other imports */
import styles from './SocialsItem.module.css'

const SocialsItem = ({
    data
} : {
    data: Social
}) => { 
    const imagePrefix = import.meta.env.PROD ? import.meta.env.BASE_URL : "/" 

    return <a className={styles.item} href={data.url} target='_blank'>
        <img 
            className={styles.img}
            src={`${imagePrefix}${data.image}`} 
            alt={`${data.name} socail media image`} />
        <span className={styles.id}><bdi>{data.social_id}</bdi></span>
    </a>
}

export default SocialsItem