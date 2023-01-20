function Student(name,rollNo,marks){
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
    // this.getMarks = function(){
    //     return this;
    // }
}

Student.prototype.getMarks = function(){
    return this.marks;
}

var student1 = new Student("abc",15,79);
var student2 = new Student("pqrs",20,79);
console.log(student1);
console.log(student2);

console.log(student1.getMarks()==student2.getMarks());