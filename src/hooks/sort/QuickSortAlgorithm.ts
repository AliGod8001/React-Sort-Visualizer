let sortSteps: number[][] = [];
let sortColors: number[][] = [];

const swap = (arr: number[], a: number, b: number) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

const partition = (arr: number[], l: number, h: number) => {
    const pivot = arr[h]
    let i = l -1
    
    for (let j = l; j <= h; j++) {
        if ( arr[j] < pivot ) {
            i++
            swap(arr, i, j)
            sortColors.push([i, j])
            sortSteps.push([...arr])
        }
    }
    
    swap(arr, i+1, h)
    sortColors.push([i+1, h])
    sortSteps.push([...arr])
    return i + 1
}

const QuickSort = (arr: number[], l: number, h:number) => {
    if (l < h) {
        const p = partition(arr, l, h)
        QuickSort(arr, l, p-1)
        QuickSort(arr, p+1, h)
    }
}

const QuickSortAlgorithm = (arr: number[]) => {
    sortSteps = []
    sortColors = []
    sortSteps.push([...arr])
    sortColors.push([])
    QuickSort(arr, 0, arr.length - 1)
    
    sortColors.push([])
    return { arr, sortSteps, sortColors }
}

export default QuickSortAlgorithm;