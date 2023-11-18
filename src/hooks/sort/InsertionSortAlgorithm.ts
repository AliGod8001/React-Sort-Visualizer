const InsertionSortAlgorithm = (arr: number[]) => {
	const sortSteps: number[][] = [];
	const sortColors: number[][] = [];
	const n = arr.length
	let i, key, j;
	sortSteps.push([...arr])
	sortColors.push([-1, -1])
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
			sortColors.push([j, j+1])
			sortSteps.push([...arr])
		}
		arr[j + 1] = key;
		sortColors.push([-1, -1])
		sortSteps.push([...arr])
	}

	sortColors.push([])

	return { arr, sortSteps, sortColors}
}

export default InsertionSortAlgorithm;