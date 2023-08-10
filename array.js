const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class : 11, name: 'Agun'};
const friends = [12, 13, 14, 15, 16, 17, 18, 19];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

//--------------------------------
console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(255) !== -1){

}

//concat : 
const newFriendsAge = [20, 21, 23, 24];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);