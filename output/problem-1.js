"use strict";
{
    const sumArray = (numbers) => {
        const result = numbers.reduce((previous, current) => previous + current, 0);
        return result;
    };
    sumArray([1, 2, 3, 4, 8]);
}
