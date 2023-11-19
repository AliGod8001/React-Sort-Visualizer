const BubbleSortAlgorithm = (arr: number[], desc: boolean) => {
  const sortSteps: number[][] = [];
  const sortColors: number[][] = [];
  let i, j, temp;
  let swapped;
  const n = arr.length;
  sortSteps.push([...arr]);
  sortColors.push([]);
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (desc) {
        if (arr[j] < arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      } else {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      sortColors.push([j, j + 1]);
      sortSteps.push([...arr]);
    }

    if (swapped == false) break;
  }

  sortColors.push([]);
  return { arr, sortSteps, sortColors };
};

export default BubbleSortAlgorithm;
