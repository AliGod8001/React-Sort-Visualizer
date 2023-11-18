import BarsItem from './BarsItem'
import sytles from './BarsList.module.css'


const BarsList = ({
    array,
    colors, 
    speed
} : {
    array: number[], 
    colors?: number[], 
    speed: number
}) => {
    const maxNumberInArray = Math.max(...array)

    return <ul className={sytles.list}>
        {array.map((num, index) => <BarsItem key={`2-${index}`} num={num} maxNum={maxNumberInArray} className={`${colors && colors.includes(index) ? sytles.select : ""}`} trSpeed={speed-(Math.floor(speed*0.25))} />)}
    </ul>
}

export default BarsList;