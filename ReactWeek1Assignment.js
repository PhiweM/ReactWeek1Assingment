
// Task 1

class Student {
    constructor(name, email, community){
        this.name =name
        this.email = email
        this.community = community
    }
}

class  Bootcamp {
    constructor(name, level, students = []){
        this.name = name
        this.level = level
        this.students = students
    }

    registerStudent(studentToRegister) {
        
        const duplicates = this.students.filter((str)=> {
            if(str.email === studentToRegister.email){
                return studentToRegister;
            } 
        });
        console.log(duplicates);
        if(duplicates.length === 0){
                this.students.push(studentToRegister);
                console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals`);
            } else 
            {
                console.log(`Student ${studentToRegister.email} is already registered`);
         }

        return this.students;
    }
}

// const alpha = new Student('Peter','alpha@matrix.com', 'Web dev');
// const bravo = new Student('John','alpha@matrix.com', 'Web dev');
// const charlie = new Bootcamp('React','one', [bravo]);
// console.log(charlie);
// charlie.registerStudent(bravo);
