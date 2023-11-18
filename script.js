const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
 
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter((person) => person.profession == 'developer');
  console.log(developers);
}

// 2. Add Data
function addData() {
  const newName = prompt('Enter your name: ');
  const newAge = prompt('Enter your age: ');
  const newProfession = prompt('Enter your profession:');

  if(!newName || isNaN(newAge) || !newProfession){
    alert('Invalid input.Please enter the valid details');
    return;
  }

  let newData = {name : newName, age : newAge, profession : newProfession};
  data.push(newData);
  console.log(data);

}

// 3. Remove Admins
function removeAdmin() {
  const removeAdmins = data.filter((person)=> person.profession !== 'admin');
  console.log(removeAdmins);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "Rohan", age: 25, profession: "developer" },
    { name: "Sohan", age: 28, profession: "Ux designer" },
  ]
  
  const concenatedArray = data.concat(dummyArray);
  console.log(concenatedArray);
}

// 5. Average Age
function averageAge() {
  // const totalAge = data.reduce((sum, person)=> sum + person.age, 0);
  // const average = totalAge / data.length;
  // console.log(average);

  let sum = 0;
  data.forEach((user)=>{
    sum = sum + user.age;

  }
);
   const average = sum / data.length;
  console.log(average);

  
}

// 6. Age Check
function checkAgeAbove25() {
  isAge25 = false;
  data.forEach((user)=>{
    if(user.age > 25)
    {
      isAge25 = true;
     console.log(isAge25);
     return;
    }
    
  })

  if(isAge25 == false)
  console.log(isAge25);
}

// 7. Unique Professions
function uniqueProfessions() {

const uniqueProfession =[];

for(const person of data){
  const profession = person.profession;

  if(!uniqueProfession.includes(profession))
  {
    uniqueProfession.push(profession);
  }
}


console.log(uniqueProfession);



}

// 8. Sort by Age
function sortByAge() {
   let sortedData = data.sort((a,b)=> a.age - b.age);

    
   console.log(sortedData);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnIndex = data.findIndex((person=>person.name === "john"));
  if(johnIndex !== -1){
   data[johnIndex].profession = "manager";
  }
  else{
    console.log("john entry not found");
  }

  console.log(data);
  
  
}


// 10. Profession Count
function getTotalProfessions() {

  let developerCount = 0;
  let adminCount = 0;

  data.forEach(person => {
    const profession = person.profession;

   
    if (profession === "developer") {
      developerCount++;
    } else if (profession === "admin") {
      adminCount++;
    }
  });

  console.log("Total number of developers:", developerCount);
  console.log("Total number of admins:", adminCount);
 

}
