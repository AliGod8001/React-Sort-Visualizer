let sortSteps: number[][] = [];
let sortColors: number[][] = [];

const swap = (arr: number[], a: number, b: number) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const partition = (arr: number[], l: number, h: number, desc: boolean) => {
  const pivot = arr[h];
  let i = l - 1;

  const compare = desc ? (a: number, b: number) => a > b : (a: number, b: number) => a < b;

  for (let j = l; j <= h; j++) {
    if (compare(arr[j], pivot)) {
      i++;
      swap(arr, i, j);
      sortColors.push([i, j]);
      sortSteps.push([...arr]);
    }
  }

  swap(arr, i + 1, h);
  sortColors.push([i + 1, h]);
  sortSteps.push([...arr]);
  return i + 1;
};

const QuickSort = (arr: number[], l: number, h: number, desc: boolean) => {
  if (l < h) {
    const p = partition(arr, l, h, desc);
    QuickSort(arr, l, p - 1, desc);
    QuickSort(arr, p + 1, h, desc);
  }
};

const QuickSortAlgorithm = (arr: number[], desc: boolean) => {
  sortSteps = [];
  sortColors = [];
  sortSteps.push([...arr]);
  sortColors.push([]);
  QuickSort(arr, 0, arr.length - 1, desc);

  sortColors.push([]);
  return { arr, sortSteps, sortColors };
};

export default QuickSortAlgorithm;