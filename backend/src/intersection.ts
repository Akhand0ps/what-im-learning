//what is the diff b/w interface and type
// interface is used to define the structure of an object, while type can be used to define a union or intersection of types
// type is more flexible and can be used to define a union or intersection of types, while interface is used to define the structure of an object


type Employee = {
    name: string,
    starDate : Date,
}

type Manager = {
    name: string,
    department: string,
}

type TeamLead = Employee & Manager;
const teamLead: TeamLead = {
    name: "John Doe",
    starDate: new Date(),
    department: "Engineering"
};