// Задача 4

// Имеется объект, поле name изменить на Roman Zaviyazkin , поле age заменить на 25

//через класс можно, но это изменит запись условия, что нельзя, поэтому без класса решу
//но было бы классно: если значение null, то false :)
class Users {
    constructor(age = null, name = null) {
        this.age = age,
        this.name = name
    }
}

const user = {
age: 16,
name: 'Dean Azimbaev'
}
user.age = 25,
user.name = 'Roman Zaviyazkin'
console.log(user)

// Задача 5

// Написать функцию hasRequiredFields(),
// которая проверяет объекты типа user на наличие в нем значений,
// и если есть все необходимые значения, то функция должна возвращать true , иначе false
// Например:

const user1 = {}
const user2 = {
age: 23
};
const user3 = {
age: 23,
name: ''
}
const user4 = {
age: '',
name: ''
}
const user5 = {
age: 23,
name: 'Dean'
}

console.log(typeof Object.entries(user5)[1][1])
hasRequiredFields = (object) => {
    let result = false
    for (let item of Object.entries(object)) {
        if(item[0][0] == 'age' && item[0][1] && item[1][0] == 'name' && typeof item[1][1] == 'string') {
        result = true
        }
        result = false
    }
    return result
}

console.log(hasRequiredFields(user1)); // false, в объект отсутвуют необходимые поля
console.log(hasRequiredFields(user2)); // false, отсутсвует поле age
console.log(hasRequiredFields(user3)); // false, значение поля name пустое
console.log(hasRequiredFields(user4)); // false, значение всех полей пустые, так не пойдет
console.log(hasRequiredFields(user5)); // true, потому что все поля есть и в них тоже есть значения



