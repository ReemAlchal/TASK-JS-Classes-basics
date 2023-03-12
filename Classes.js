/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  constructor(firstName,lastName,gender,birthday){
    this.firstName=firstName
    this.lastName=lastName
    this.gender=gender
    this.birthday=birthday
  }

  printName(){
    console.log(`${this.firstName} ${this.lastName}`)
  }
  calculateAge(currantYear){
    let age= currantYear-this.birthday
    return age
  }
}
const person1=new Person('Reem','Alchal','Female','1999')
const person2=new Person('Doha','Samir','Female','2001')
const person3=new Person('Mohamad','Alsaied','Male','2006')
const person4=new Person('Mohamad','Alsaied','Male','2006')
const person5=new Person('Mohamad','Alsaied','Male','2006')
const person6=new Person('Mohamad','Alsaied','Male','2006')
const person7=new Person('Mohamad','Alsaied','Male','2006')

person1.printName()
person2.printName()
person3.printName()

const sum = (person1.calculateAge(2023))+(person2.calculateAge(2023))+(person3.calculateAge(2023))
console.log(sum)

function getSum(persons)
{
  let ageSum = 0;
  persons.forEach(person=> ageSum+= person.calculateAge(2023))
  return ageSum
}
console.log(getSum([person1, person2, person3, person5, person4, person6, person7]))
/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  rating=[]
  constructor(title,duration,genre){
    this.title=title
    this.duration=duration
    this.genre=genre
  }
  rate(rate){
    if(rate>=0 && rate<=10){
      this.rating.push(rate)
    }
  }
averageRating(){
  let rates = 0;
  this.rating.forEach(rate=> rate+=rates)
  return rates/this.rating.length
}
}
/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here

class Actor extends Person{
  constructor(movies){
    this.movies=[]
    super (firstName,lastName,gender,birthday)
  }
  addMovie(movieName){
    this.movies.push(movieName)
  }
  }



