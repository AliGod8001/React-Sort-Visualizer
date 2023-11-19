import React, { useState } from 'react';
import styles from './IndexUserArray.module.css'

const isValidArray = (input: string): boolean => {
  const regex = /^[0-9, ]+$/;
  return regex.test(input);
};

const IndexUserArray = ({
  onUserInsertArray
}: {
  onUserInsertArray: (array: number[]) => void,
}) => {
  const [error, setError] = useState<boolean>(false)
  
  const insertUserArrayChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value : string = e.target.value.trim()

    if ( value.length > 3 && !isValidArray(value)) {
      setError(true)
      return;
    }

    if ( error ) setError(false)
    if ( value.lastIndexOf(",") === value.length - 1 ) value = value.slice(0, value.length - 1)
    const array = value.split(",").map(Number)
    if ( array.length > 5) onUserInsertArray(array)
  }

  return <div className={styles.wrapper}>
    {error && <p className={styles.error}>Invalid Array Input</p>}
    <div>
      Enter Your Array Like Example :
      <span>(25, 36, 14, 105)</span>
    </div>
    <textarea rows={6} onChange={insertUserArrayChangeHandler}></textarea>
  </div>
}

export default IndexUserArray;