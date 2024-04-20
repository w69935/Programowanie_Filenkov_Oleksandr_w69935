class Książka {
    constructor(tytuł, autor, rok) {
        this.tytuł = tytuł;
        this.autor = autor;
        this.rok = rok;
    }
    info() {
       return this.tytuł + " - " + this.autor + " " + this.rok;
    };
}

const Test = new Książka("test", "Test", 1963);
console.log(Test.info());


const student = {
    firstName: "Jan",
    lastName: "Kowalski",
    number: 30,
    marks: {
        math: 5,
        pe: 3,
        physics: 2
    },
    averageMark: function() {
        let avg = 0;
        marksList =  Object.values(this.marks)
        for (let mark of marksList)
            avg += parseFloat(mark);
        avg /= marksList.length;
        return avg;
    }
};
console.log("Average mark -> " + student.averageMark().toFixed(2));

class Triangle {
    constructor(side, height, name) {
        this.side = side;
        this.height = height;
        this.name = name;
    }

    getArea() {
        return 0.5 * (parseFloat(this.side) * parseFloat(this.height));
    }

    info() {
        return `name -> ${this.name}\n` +
               `height -> ${this.height}\n` +
               `side -> ${this.side}\n` +
               `area -> ${this.getArea()}`;
    }

    static compareArea(triangle1, triangle2) {
        const area1 = triangle1.getArea();
        const area2 = triangle2.getArea();
        return area1 > area2 ? triangle1 : triangle2;
    }
}

const tr1 = new Triangle(22, 26, 'tr1');
const tr2 = new Triangle(15, 19, 'tr2');
const tr3 = new Triangle(8, 13, 'tr3');

console.log(tr1.info());
console.log(tr2.info());
console.log(tr3.info());
console.log("Comparison tr1 and tr2 :  " + Triangle.compareArea(tr1, tr2).name);

class Trapezoid {
    constructor(height, base1, base2, name) {
        this.height = height;
        this.base1 = base1;
        this.base2 = base2;
        this.name = name;
    }

    get area() {
        return 0.5 * (this.base1 + this.base2) * this.height;
    }

    info() {
        return `name -> ${this.name}\nheight -> ${this.height}\nbase 1 -> ${this.base1}\nbase 2 -> ${this.base2}\narea -> ${this.area}`;
    }

    changeName(newName) {
        this.name = newName;
    }
}

const trz1 = new Trapezoid(5, 4, 6, "trz1");
const trz2 = new Trapezoid(6, 3, 7, "trz2");
const trz3 = new Trapezoid(7, 5, 8, "trz3");

function compareTriangleAndTrapezoid(triangle, trapezoid) {
    console.log(triangle.area > trapezoid.area
        ? `name -> ${triangle.name}\narea -> ${triangle.area}`
        : `name -> ${trapezoid.name}\narea -> ${trapezoid.area}`);
}

console.log(trz1.info());
console.log(trz2.info());
console.log(trz3.info());
trz1.changeName("trz1_v1");
console.log("trz1 (name changed) -> \n" + trz1.info());

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }

    isSquare() {
        return this.length === this.width;
    }
}

function createRectangle() {
    const length = parseFloat(prompt("Enter the length:"));
    const width = parseFloat(prompt("Enter the width:"));

    const rectangle = new Rectangle(length, width);
    displayRectangleInfo(rectangle);
}

function displayRectangleInfo(rectangle) {
    console.log(`Length: ${rectangle.length}`);
    console.log(`Width: ${rectangle.width}`);
    console.log(`Area: ${rectangle.getArea()}`);
    console.log(`Perimeter: ${rectangle.getPerimeter()}`);
    console.log(rectangle.isSquare() ? 'This is a square.' : 'This is not a square.');
}

class Car {
    constructor(make, model, year, color, maxSpeed) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    accelerate(value) {
        this.maxSpeed += value;
    }

    decelerate(value) {
        this.maxSpeed = (this.maxSpeed - value >= 0) ? this.maxSpeed - value : 0;
    }    

    getInfo() {
        return `${this.make} ${this.model} (${this.year}), Color: ${this.color}, Speed: ${this.maxSpeed}`;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const myCar = new Car("Nissan", "Silvia", 1999, "Black", 200);
console.log(myCar.getInfo());
console.log("speed + 50")
myCar.accelerate(50);
console.log(myCar.getInfo());
console.log("speed - 20") 
myCar.decelerate(20);
console.log(myCar.getInfo()); 
console.log("Age of the car:", myCar.getAge()); 

class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into the account.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdrawal(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from the account.`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

const myAccount = new BankAccount(520);

console.log("Initial balance -> ", myAccount.getBalance());
myAccount.deposit(30); 
console.log("Current balance after deposit:", myAccount.getBalance());
myAccount.withdrawal(76);
console.log("Current balance after withdrawal:", myAccount.getBalance()); 

class Employee {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

class EmployeeManagement {
    constructor() {
        this.employeeList = [];
    }

    addEmployee(firstName, lastName, salary) {
        const newEmployee = new Employee(firstName, lastName, salary);
        this.employeeList.push(newEmployee);
    }

    removeEmployee(firstName, lastName) {
        this.employeeList = this.employeeList.filter(employee => {
            return !(employee.firstName === firstName && employee.lastName === lastName);
        });
    }

    getEmployee(firstName, lastName) {
        return this.employeeList.find(employee => {
            return employee.firstName === firstName && employee.lastName === lastName;
        });
    }

    saveToJSON() {
        const jsonData = JSON.stringify(this.employeeList, null, 2);
        return jsonData;
    }

    loadFromJSON(jsonData) {
        this.employeeList = JSON.parse(jsonData);
        console.log("Employee data loaded from JSON string.");
    }
}

// Example usage:

const management = new EmployeeManagement();

management.addEmployee("John", "Doe", 5000);
management.addEmployee("Jane", "Smith", 6000);
management.addEmployee("Michael", "Johnson", 4500);

const jsonData = management.saveToJSON();
console.log(jsonData);

management.removeEmployee("Jane", "Smith");

console.log(management.employeeList);

class Product {
    constructor(name, price, availablePieces) {
        this.name = name;
        this.price = price;
        this.availablePieces = availablePieces;
    }
}

class ProductManagement {
    constructor() {
        this.productList = [];
    }

    addProduct(name, price, availablePieces) {
        const newProduct = new Product(name, price, availablePieces);
        this.productList.push(newProduct);
    }

    removeProduct(name) {
        this.productList = this.productList.filter(product => {
            return product.name !== name;
        });
    }

    changePrice(name, newPrice) {
        const product = this.productList.find(product => {
            return product.name === name;
        });
        if (product) {
            product.price = newPrice;
        } else {
            console.log("Product not found.");
        }
    }

    saveToJSON() {
        const jsonData = JSON.stringify(this.productList, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "products.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    loadFromJSON(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const jsonData = e.target.result;
            this.productList = JSON.parse(jsonData);
            console.log("Products loaded from JSON file.");
        };
        reader.readAsText(file);
    }
}
const prodManagement = new ProductManagement();
prodManagement.addProduct("Product A", 120, 3);
prodManagement.addProduct("Product B", 20, 5);
console.log("List ->\n", prodManagement.productList);
prodManagement.removeProduct("Product A");
//prodManagement.changePrice("Product B", 350);
console.log("List(changed + //commented) ->\n", prodManagement.productList);
prodManagement.saveToJSON();