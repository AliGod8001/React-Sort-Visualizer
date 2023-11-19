/* main imports */
import { useState, useCallback } from "react"

/* hook imports */
import randomArray from "../../hooks/random-array"
import InsertionSortAlgorithm from "../../hooks/sort/InsertionSortAlgorithm"
import BubbleSortAlgorithm from "../../hooks/sort/BubbleSortAlgorithm"
import QuickSortAlgorithm from "../../hooks/sort/QuickSortAlgorithm"

/* components import */
import Wrapper from "../layout/Wrapper"
import IndexActions from "./IndexActions"
import Setup from "../setup/Setup"
import Bars from "../bars/Bars"
import BarsList from "../bars/BarsList"

/* constant imports */
import { Settings } from "../../constants/SortSettings"
import { Steps } from "antd"

const Index = () => {
  const [stepState, setStepsState] = useState<stepData>({
    array: randomArray(Settings.ARRAY_LENGTH, Settings.ARRAY_RANGE),
    steps: [],
    sortedArray: [],
    colors: []
  })
  const [visualizing, setVisualizing] = useState<boolean>(false)
  const [algorithm, setAlgorithm] = useState<(string)>(Settings.ALGORITHM)
  const [length, setLength] = useState<number>(Settings.ARRAY_LENGTH)
  const [range, setRange] = useState<number>(Settings.ARRAY_RANGE)
  const [speed, setSpeed] = useState<number>(Settings.SPEED)
  const [descending, setDescending] = useState<boolean>(Settings.DESCENDING)  

  const changeSetupHandler = (action: string, value: string) => {
    if ( action === "length" ) {

        setLength(Number(value))
        actionClickHandler("reset-array")
        
    } else if ( action === "range" ) {
      setRange(value > "200" ? 200 : Number(value))
      actionClickHandler("reset-array")

    } else if ( action === "speed" ) {
      setSpeed(value > "4" ? 4 : Number(value))
    } else if ( action === "descending") {
      setDescending(value === "active" ? true : false);
    } else {
      setAlgorithm(value)
      setStepsState(prevState => {
        return {...prevState, array: randomArray(length, range),sortedArray: [], steps: [], colors: []}
      })
    }
  }

  const actionClickHandler = (action: string) => {
    if ( action === 'start' ) {

      let alg = BubbleSortAlgorithm
      switch (algorithm) {
        case "insertion" :
          alg = InsertionSortAlgorithm
          break;

        case "quick" :
          alg = QuickSortAlgorithm
          break;
      
        default :
          alg = BubbleSortAlgorithm
          break;
      }
      const { arr, sortSteps, sortColors } = alg(stepState.array)
      setVisualizing(true)
      setStepsState(prevState => {
        return {...prevState, sortedArray: arr, steps: sortSteps, colors: sortColors}
      })

    } else {
      setStepsState({array: randomArray(length, range), sortedArray: [], steps: [], colors: []})
    }
  }

  const endVisualizingHandler = useCallback(() => {
    setVisualizing(false)
  }, [setVisualizing])

  return (
    <Wrapper>
      <IndexActions 
        onActionClick={actionClickHandler} 
        disabled={visualizing} />
      <Setup 
        onChangeSetup={changeSetupHandler}
        setupData={{
          algorithm,
          defaultSpeed: Settings.DEFAULT_SPEED,
          speed,
          range,
          length,
          descending,
          disabled: visualizing
        }}/>
      {
        visualizing && stepState.steps.length 
        ? <Bars 
          stepState={stepState} 
          speed={Math.floor(speed*Settings.DEFAULT_SPEED)}
          onEndVisualizing={endVisualizingHandler} 
        /> 
        : <BarsList array={stepState.array} colors={stepState.colors[0]} speed={speed} />
      }
    </Wrapper>
  )
}

export default Index;