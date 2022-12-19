const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let cont= 0 ;
for (let i = 0; i < foodSchedule.length; i++) {
    const list = foodSchedule[i];
    if(list.isVegan == false){
list.name = fruits[cont]
cont ++
    }
    
}
console.log(foodSchedule);
