const InsertionSortAlgorithm = (arr: number[], desc: boolean) => {
  const sortSteps: number[][] = [];
  const sortColors: number[][] = [];
  const n = arr.length;
  let i, key, j;
  sortSteps.push([...arr]);
  sortColors.push([-1, -1]);
  const compare = desc
    ? (a: number, b: number) => a < b
    : (a: number, b: number) => a > b;

  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && compare(arr[j], key)) {
      arr[j + 1] = arr[j];
      j = j - 1;
      sortColors.push([j, j + 1]);
      sortSteps.push([...arr]);
    }

    arr[j + 1] = key;
    sortColors.push([-1, -1]);
    sortSteps.push([...arr]);
  }

  sortColors.push([]);

  return { arr, sortSteps, sortColors };
};

export default InsertionSortAlgorithm;