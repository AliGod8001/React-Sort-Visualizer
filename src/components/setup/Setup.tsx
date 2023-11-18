/* ant design imports */
import { Slider, Select } from 'antd'

/* data imports */
import _algorithms from '../../data/ALGORITHM.json'

/* other imports */
import styles from './Setup.module.css'

const Setup = ({
    setupData,
    onChangeSetup,
} : {
    setupData: SetupData,
    onChangeSetup: (action: string, value: string) => void,
}) => {

  const algorithmChangeHandler = (value: string) => {
    if ( setupData.disabled ) return;

    onChangeSetup("algorithm", value)
  };

  const lengthChangeHandler = (value: number) => {
    if ( setupData.disabled ) return;

    onChangeSetup("length", value.toString())
  }

  const rangeChangeHandler = (value: number) => {
    if ( setupData.disabled ) return;

    onChangeSetup("range", value.toString())
  }

  const speedChangeHandler = (value: number) => {
    if ( setupData.disabled ) return;

    onChangeSetup("speed", value.toString())
  }

  return <div className={styles.wrapper}>
    <Select
      defaultValue={setupData.algorithm}
      style={{ width: 120 }}
      onChange={algorithmChangeHandler}
      options={_algorithms}
      disabled={setupData.disabled}
    />
    <Slider
      min={5}
      max={35}
      defaultValue={setupData.length}
      style={{ width: 150 }}
      onChange={lengthChangeHandler}
      disabled={setupData.disabled}
    />
    <Slider
      min={10}
      max={200}
      defaultValue={setupData.range}
      style={{ width: 150 }}
      onChange={rangeChangeHandler}
      disabled={setupData.disabled}
    />
    <Slider 
      min={0.2} 
      max={4} 
      step={0.1}
      defaultValue={setupData.speed}
      style={{ width: 150}}
      onChange={speedChangeHandler}
      disabled={setupData.disabled}
    />
  </div>
}

export default Setup;