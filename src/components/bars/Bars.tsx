/* main imports */
import { useEffect, useState } from "react"

/* component imports */
import BarsList from "../bars/BarsList"

const Bars = ({
    stepState, 
    speed, 
    onEndVisualizing,
} : {
    stepState: stepData,
    speed: number,
    onEndVisualizing: () => void,
}) => {
    const [step, setStep] = useState<number>(0)
    const currentArr = stepState.steps[step]

    useEffect(() => {
        let interval : number;
        if (  stepState.steps.length && step < stepState.steps.length - 1 ) {
            interval = setInterval(() => {
                setStep(prevState => prevState + 1)
            }, speed)
        } else {
            onEndVisualizing()
        }

        return () => {
            clearInterval(interval)
        }
    }, [step, speed, stepState.steps, onEndVisualizing])

    // let output = <BarsList array={stepState.array} colors={stepState.colors[step+1]} />

    // if ( stepState.sortedArray.length > 0 ) {
    //     output = <BarsList array={currentArr} colors={stepState.colors[step+1]} />
    // }
    // return output;

    return <>
        {
            stepState.sortedArray.length > 0 
            ? <BarsList array={currentArr} colors={stepState.colors[step+1]} speed={speed} /> 
            : <BarsList array={stepState.array} colors={stepState.colors[step+1]} speed={speed} />
        }
    </>
}

export default Bars;