function isCurrentlyAscending (itemA, itemB) {
    return itemA > itemB;
}

export function sortObjListByStr (list, sortKey) {
    const IsFirstItemsAscending = isCurrentlyAscending(list[1][sortKey], list[0][sortKey]);
    return list.sort((a, b) => {
        if (IsFirstItemsAscending) {
            if (a[sortKey] > b[sortKey]) return -1;
            else if (a[sortKey] < b[sortKey]) return 1;
            else return 0;
        } else {
            if (a[sortKey] > b[sortKey]) return 1;
            else if (a[sortKey] < b[sortKey]) return -1;
            else return 0;
        }
    })
}

export function sortObjListByInt (list, sortKey) {
    const IsFirstItemsAscending = isCurrentlyAscending(list[1][sortKey], list[0][sortKey]);
    return list.sort((a, b) => {
        if (IsFirstItemsAscending) return b[sortKey] - a[sortKey];
        else return a[sortKey] - b[sortKey];
    })
}