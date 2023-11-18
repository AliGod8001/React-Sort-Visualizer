import styles from './BarsItem.module.css'


const BarsItem = ({
    num,
    maxNum,
    className,
    trSpeed,
} : {
    num: number,
    maxNum: number,
    trSpeed: number,
    className?: string
} ) => {
    const fillPrecent = Math.floor(num / maxNum * 100)
    const classes = `${className ? className : ""} ${styles.item}`

    return <li className={classes}>
        <div>{num}</div>
        <span style={{height: `${fillPrecent}%`, transition: `all ${trSpeed}ms ease`}}></span>
    </li>
}

export default BarsItem;