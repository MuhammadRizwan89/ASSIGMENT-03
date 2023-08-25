// ================CHAPTER NO:14,15(Q NO 1)===================

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let studentNames = []

// ================CHAPTER NO:14,15(Q NO 2)===================

// 2. Declare an empty array using JS literal notation to store
// student names in future.

// let studentNames = {
//     students =[]
// }

// ================CHAPTER NO:14,15(Q NO 3)===================

// 3. Declare and initialize a strings array.

// let color = ['red', 'green','blue','yellow']

// ================CHAPTER NO:14,15(Q NO 4)===================

// 4.Declare and initialize a numbers array.

// let numbers = [1,2,3,4,5]

// ================CHAPTER NO:14,15(Q NO 5)===================

//5. Declare and initialize a boolean array.

// let booleanArray = [true,false];

// ================CHAPTER NO:14,15(Q NO 6)===================

// 6. Declare and initialize a mixed array.

// let mixedArray = ['apple',123,true,'banana',false]

// ================CHAPTER NO:14,15(Q NO 7)===================

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let a = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
//  document.write("<h1> Qualifications: </h1>");
//  document.write("<ol><h2><li>" + a[0] + "</li></h2><h2><li>" + a[1] + "</li></h2><h2><li>" + a[2] + "</li></h2><h2><li>" + a[3] + "</li></h2><h2><li>" + a[4] + "</li></h2><h2><li>" + a[5] + "</li></h2><h2><li>" + a[6] + "</li></h2><h2><li>" + a[7] + "</li></h2></ol>");

// ================CHAPTER NO:14,15(Q NO 8)===================

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// let students = ['ali','usama','adil'];
// let score = [350,470,270];
// let totalScore = 500;

// let ali = score[0]/totalScore*100+'%'
// let usama = score[1]/totalScore*100+'%'
// let adil = score[2]/totalScore*100+'%'

// console.log('Score of ali is 350.' + 'Percentage:' + ali)
// console.log('Score of usama is 350.' + 'Percentage:' + usama)
// console.log('Score of adil is 350.' + 'Percentage:' + adil)

// ================CHAPTER NO:14,15(Q NO 9)===================

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// let colors = ['blue','yellow','red','green','orange'];
// document.write("Original array: " + colors.join(", ") + "<br><br>");

// let user = prompt('what color you wants to add in start')
// colors.unshift(user);

// document.write("Array after adding color to the start: " + colors.join(", ") + "<br><br>");


// let user2 = prompt('what color you wants to add in end');
// colors.push(user2);

// document.write('Array after adding color to the end: ' + colors.join(', ') + '<br><br>');

// colors.unshift('purple','pink');
// document.write('Array after adding two colors to the start: ' + colors.join(', ') + '<br><br>');

// colors.shift();
// document.write('after first color deleting: ' + colors.join(', ') + '<br><br>');

// colors.pop();
// document.write('after last color deleting: ' + colors.join(', ') + '<br><br>');

// let indexToAdd = prompt('Enter the index to add a color:');
// let colorAdd = prompt('Enter the new color add:');

// colors.splice(indexToAdd, 0 , colorAdd);
// document.write('Array after adding color at index: ' + indexToAdd + ': ' + colors.join(', ') + '<br><br>');

// let indexToDelete = prompt('Enter the index to delete color:');
// let colorDelete = prompt('Enter the number of colors to delete:');

// colors.splice(indexToDelete , colorDelete);
// document.write('Array after deleting colors from index' + indexToDelete + ': ' + colors.join(', ') + '<br><br>')


// ================CHAPTER NO:14,15(Q NO 10)===================

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// let students = ['ali','ansar','farman','Aamir'];

// students.sort();
// console.log(students);

// ================CHAPTER NO:14,15(Q NO 11)===================

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let citysName = ['karachi','multan','lahore','islamabad','quetta'];

// let a = citysName.slice(2,4);

// document.write(a.join(', '))


// ================CHAPTER NO:14,15(Q NO 12)===================

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// let arr = ['This','is','my','cat'];
// console.log(arr)

// joinMethod = arr.join(' - ')
// console.log(joinMethod);

// joinMethod = arr.join(' ')
// console.log(joinMethod);


// ================CHAPTER NO:14,15(Q NO 13)===================

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let divices = [];

// divices.push('keybord')
// divices.push('mouse')
// divices.push('printer')
// divices.push('monitor')

// console.log(divices)

// // fifo('first in first out k mutabik keybord pehly enter hua pehly 
// // out ho ga isi tarha sub so on')

// let value1 = divices.shift();
// let value2 = divices.shift();

// console.log('keybord pehly aya pehly delet hua: ',value1)
// console.log('os k bad mouse aya wo delete hua: ',value2)

// console.log('2 value baqi reh gai',divices)



// ================CHAPTER NO:14,15(Q NO 14)===================

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// let divices = [];

// divices.push('keybord');
// divices.push('mouse');
// divices.push('printer');
// divices.push('monitor');

// console.log(divices);

// // lifo('lifo last inter first out k mutabik keybord start main
// // enter hua pehly delete ho jay ga isi tarha so on')

// let value1 = divices.pop();
// let value2 = divices.pop();

// console.log(divices)


// / ================CHAPTER NO:14,15(Q NO 15)===================

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


// let phoneManufacturers = ['Apple','Samsung','xiaomi','realmi','motorola'];
// let dropDown = '<select>';

// for(let i = 0; i < phoneManufacturers; i++){
//     dropDown += '<option>' + phoneManufacturers[i] + '</option>';
// }

// dropDown += '</select>';
// document.write(dropDown)
// console.log(dropDown)