interface SetupData {
    algorithm: string,
    speed: number,
    defaultSpeed: number,
    range: number,
    length: number,
    disabled: boolean
}

interface stepData {
    array: number[],
    steps: number[][],
    colors: number[][],
    sortedArray: number[]
}

interface Social {
    id: number,
    name: string,
    social_id: string,
    image: string,
    url: string
}