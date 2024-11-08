"use strict";
const showValue = (value) => {
    console.log("Value:", value);
};
showValue("Hello"); // ok, because it's string
showValue(123); // ok, because it's number
//   showValue(true); // error, because it's boolean
