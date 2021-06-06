// Задача 1
// Написать функцию высчитывающую сумму всех отрицательных элементов в массиве
// [Отрицательные элементы, это те значения, которые меньше нуляы]
// Например sumOfNegatives([1, -2, 3, 0, -5]); // -7

sumOfNegatives = (arr) => {
    let sum = 0
    for(let item of arr) {
        (item < 0) ? (sum += item) : null 
    }
    return sum
}
console.log('Sum of negatives is ', sumOfNegatives([1, -2, 3, 0, -5]))

// Задача 2

// Имеется массив сотрудников it отдела, подсчитать среднее арифметическое зарплат сотрудников

const it_department_employees = [
{
name: 'Roman',
salary: 1200
},
{
name: 'Aijan',
salary: 2000
},
{
name: 'Asel',
salary: 8000
},
{
name: 'Timur',
salary: 2100
},
{
name: 'Altynai',
salary: 300
}
]

countAverageSalary = (arr) => {
    let sumOfSalaries = 0
    let averageSalary
    for(let item of arr) {
        averageSalary = (sumOfSalaries += item.salary)/arr.length
    }   
    return averageSalary
}
console.log('Average salary in it-dep is ', countAverageSalary(it_department_employees))

// Задача 3

// Из выше стоящего задания. Отфильтровать сотрудников и оставить только тех, у кого ЗП больше 1500 ,
// из осташвихся сотрудников каждого повысить на 500, результат записать в новый массив.
filterHighSalary = (arr) => {
    let filteredArray = arr.filter(item => item.salary > 1500)
    for(let item of filteredArray) {
        item.salary += 500
    }
        return filteredArray
}
console.log('List of increased salaries: ', filterHighSalary(it_department_employees))
