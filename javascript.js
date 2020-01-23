class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const personList = [];

// List of starting persons

const startList = [
  ['Erik Galstian', 25],
  ['Karo Ghulyan', 26],
  ['Derenik Khachatryan', 24],
  ['Hayk Sahakyan', 29]
];

//Instantiating starting persons

for (i = 0; i < startList.length; i++) {
  const name = startList[i][0];
  const age = startList[i][1];
  personList.push(new Person(name, age));
  setInterval(() => {
    if (personList.find(x => x.name == name)) {
      personList.find(x => x.name == name).age++;
    }
  }, 1000);
}

//Function that checks age of every person and removes old people

function checkAge() {
  setInterval(() => {
    for (i = 0; i < personList.length; i++) {
      if (personList[i].age >= 40) {
        console.log(personList[i].name + ' is dead!');
        personList.splice(i, 1);
        i--;
      }
    }
  }, 1000);
}

//Function that instantiates new person

function newPerson() {
  setInterval(() => {
    const name = faker.name.findName();
    const age = faker.random.number({ min: 1, max: 50 });
    personList.push(new Person(name, age));
    setInterval(() => {
      if (personList.find(x => x.name == name)) {
        personList.find(x => x.name == name).age++;
      }
    }, 1000);
  }, 2000);
}

//Calling the functions
newPerson();
checkAge();

//Logging the personList

setInterval(() => {
  console.log(personList);
}, 1000);
