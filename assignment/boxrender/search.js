var fruit = [
    {id : 1, name: 'banana', color: 'yellow'},
    {id : 2, name: 'apple', color: 'red'}
];

//search by key
 for (var i=0; i<fruit; i++){
     console.log(fruit[i]);
 }

 //search by name
 function search(food, value)
 { 
for (var i=0; i<fruit.length; i++){
    if(food[i].name==value){
        console.log(food[i]);
    }
}
}
search(fruit,'apple');