// Scooter Constructor
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver Constructor
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation Constructor
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  module.exports = { Scooter, Driver, PickupLocation };
  
  const scooter1 = new Scooter(2022, "Red", "Yamaha");
console.log(scooter1); 

const driver1 = new Driver("Alex", 30, "5 years");
console.log(driver1); 

const location1 = new PickupLocation("123 Main St", "New York");
console.log(location1);

