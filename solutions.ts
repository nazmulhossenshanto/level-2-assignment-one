// Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}


// problem2

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}


// problem3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}


// problem4
const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// problem5
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

// problem6
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string
  ) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student1 = new Student("Alice", 20, "A");
// probelm7
function getIntersection(
  array1: number[],
  array2: number[]
): number[] {
  return array1.filter((number) => array2.includes(number));
}
