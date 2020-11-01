export const largestTimeFromDigits = (arr: number[]) => {
    const fullSortArray = (arr: number[], backArray: Array<number[]>) => {
        if (arr.length < 2) {
            backArray.push(arr);
            return backArray;
        }
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            const cloneArray = [...arr.slice(0, i), ...arr.slice(i + 1)];
            const nestArrays = fullSortArray(cloneArray, []);
            nestArrays.forEach(_ => {
                for (let j = 0; j < arr.length; j++) {
                    const distArray = [..._.slice(0, j), item, ..._.slice(j)];
                    backArray.push(distArray);
                }
            });
        }

        return backArray;
    };

    //排列可能性
    const items = fullSortArray(arr, []);
    console.table(items);

    items.push(arr);
    const distItems = items
        .filter((distArray) => {
            return ((distArray[0] * 10 + distArray[1]) < 24)
                && ((distArray[2] * 10 + distArray[3]) < 60);
        });
    if (distItems.length <= 0) {
        // 排除所有,不合适时间规则的元素
        return "";
    }
    distItems.sort((a, b) => {
        return (
            a[0] * 10 * 60 +
            a[1] * 60 +
            a[2] * 10 +
            a[3]) - (
            b[0] * 10 * 60 +
            b[1] * 60 +
            b[2] * 10 +
            b[3]
        );
    });

    console.table(distItems);
    const distItem = distItems[distItems.length - 1];
    return `${distItem[0]}${distItem[1]}:${distItem[2]}${distItem[3]}`;
};
