const randomArray = (length: number, max: number) => {
    let arr = Array(length)
    arr = arr as number[]
    
    for (let i = 0; i<=length; i++) {
        arr[i] = Math.floor( Math.random() * max)
    }

    return arr as number[]
}

export default randomArray