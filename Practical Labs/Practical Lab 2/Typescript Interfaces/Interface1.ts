// 1. Interface
interface Student {
    name: string;
    grade: number;          
    hasPassed: () => boolean; 
}
//Object
const student: Student = { 
    name: "Yanda",
    grade: 70,
    hasPassed: function () {
        return this.grade >= 65;
    }
};


function evaluateStudent(student: Student): void {
    const passed = student.hasPassed();
    console.log(`${student.name} - Grade: ${student.grade} → ${passed ? "Passed" : "Failed"}`);
}


console.log(student.hasPassed());
evaluateStudent(student);                  


const student2: Student = {
    name: "Lethabo",
    grade: 52,
    hasPassed: () => student2.grade >= 65   
};

console.log(student2.hasPassed());         
evaluateStudent(student2);