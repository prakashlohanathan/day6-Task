// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

// class movie {
//     constructor(title, studio, rating) {
//       this.title = title;
//       this.studio = studio;
//       this.rating = rating;
//     }
  
//     getrating() {
//       return "the rating is  " + this.rating;
//     }
//   }
  
  
//   // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
   
//   class movie {
//       constructor(title, studio, rating){
//           this.title = title;
//           this.studio = studio;
//           this.rating = 'PG';
//       }
//   }
  
//   // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//   // the studio “Eon Productions”, and the rating “PG­13”
  
  
//   let CasinoRoyale = new movie( 'Casino Royal', 'Eon Productions', 'PG13');
//   let Avengers = new movie('Avenger Return','Marvel','PG');

  //2.Circle - Class
//Convert the UML diagram to Typescript class. - use number for double

// class Circle {
//   constructor(radius = 1.0, color = 'red') {
//        this.radius = radius;
//        this.color = color;
// }
// getRadius() {
//  return `(${this.radius},${this.color})`;
// }
// toString() {
// return `(${this.radius}, ${this.color})`;
// }
// }

// let circle = new Circle(); // default constructor
// let circle1 = new Circle(4,5);// parametized constructor, radius
// let circle2 = new Circle(5.5,`blue`);// parametized constructor, radius

// console.log(circle2.toString());

  //3.Write a “person” class to hold all the details
  
//   class person {
//     constructor (firstName, lastName, age,address,mobile) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.address = address;
//         this.mobile = mobile;
//         this.getFullName = function () {
//             return this.firstName + " " + this.lastName;
//         }
//     }
// }
 
// let person1 = new person ('sachin', 'kumar', 25 ,'405,Lakshminagar,salem',8877665544, );
// console.log(person1.age);
// console.log(person1.getFullName());

// 4.
// class uberFare {
//     constructor (city, fare, customerName) {
//         this.city = city;
//         this.fare = fare;
//         this.customerName  = customerName;
 
//     }
//         getFareCity(){
//             return "fare for the City is " +  this.fare;
//         }
 
// }
 
// let cityA = new uberFare( "cityA", 500, "customer1");
// let cityB = new uberFare( "cityB", 1200, "customer2");
 
// console.log(cityA.getFareCity()); // 500
// console.log(cityB.getFareCity()); // 1200

 