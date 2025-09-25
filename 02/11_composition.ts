class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  getBookInfo() {
    return `"${this.title}" by ${this.author}`;
  }
}

class Student {
  name: string;
  rollNo: number;
  books: Book[]; // Student has-a list of Books

  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
    this.books = []; // initially no books
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  getStudentInfo() {
    const bookList = this.books.map(b => b.getBookInfo()).join(", ") || "No books";
    return `Name: ${this.name}, Roll No: ${this.rollNo}, Books: ${bookList}`;
  }
}

// Usage
const book1 = new Book("Mathematics", "R.D. Sharma");
const book2 = new Book("Physics", "H.C. Verma");

const student1 = new Student("Faizan", 101);
student1.addBook(book1);
student1.addBook(book2);

console.log(student1.getStudentInfo());
// Output: Name: Faizan, Roll No: 101, Books: "Mathematics" by R.D. Sharma, "Physics" by H.C. Verma
