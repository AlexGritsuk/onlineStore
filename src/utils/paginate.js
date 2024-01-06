export function paginate(items, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}

export function pagesArray(pagesCount) {
    let array = [];
    for (let i = 1; i <= pagesCount; i++) {
        array.push(i);
    }
    return array;
}