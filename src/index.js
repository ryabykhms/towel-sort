// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || !Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }
    return matrix.reduce((acc, current, i) => {
        let isAsc = true;
        if ((i + 1) % 2 === 0) {
            isAsc = false;
        }
        current
            .sort((a, b) => (isAsc ? a - b : b - a))
            .forEach((item) => acc.push(item));
        return acc;
    }, []);
};
