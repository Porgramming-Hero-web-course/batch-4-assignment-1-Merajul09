"use strict";
{
    const sumArray = (numbers) => {
        const result = numbers.reduce((previous, current) => previous + current, 0);
        return result;
    };
    const log = sumArray([1, 2, 3, 4, 8]);
    console.log(log);
}
