/*eslint-env browser*/

//STEP 1
// let x = new Date();
// window.alert(new Date(x.getFullYear(), x.getMonth() + 1, 0).getDate());

//STEP 2
// let x = new Date();
// let monthNames = ["Junuary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// window.alert(monthNames[x.getMonth()]);

//STEP 3
// let userYear = prompt("Enter year:");
// let userMonth = prompt("Enter month number:");
// let userDate = prompt("Enter date:");
// let x = new Date(userYear, userMonth - 1, userDate);
// let y = x.getDay();

// if (y === 0 || y === 6) {
//     window.alert("It's a weekend date!");
// }
// else {
//     window.alert("It\'s a workd date!");
// }

//STEP 4
// let currentDate = new Date();
// let yesterdayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
// let yesterdayDateNumber = yesterdayDate.getDay();
// let days = ["Sunday", "Monday", "Tusday", "Wednesday", "Thurthday", "Friday", "Saturday"];
// window.alert("Yesterday it was " + days[yesterdayDateNumber]);

//STEP 5
// let currentDate = new Date();
// let currentDateNumber = currentDate.getDay();
// let days = ["Sunday", "Monday", "Tusday", "Wednesday", "Thurthday", "Friday", "Saturday"];
// window.alert(days[currentDateNumber].charAt(0));
