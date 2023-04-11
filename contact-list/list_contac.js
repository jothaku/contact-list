const { Contacts } = require("./contac_model");

let contacts = [
  new Contacts(1, "Juan", "Perez", 5551234, {
    city: "Ciudad de Mexico",
    address: "Av. Principal #123",
  }),
  new Contacts(2, "Maria", "Garcia", 5555678, {
    city: "Guadalajara",
    address: "Calle Secundaria #456",
  }),
  new Contacts(3, "Juan", "Lopez", 5555678, {
    city: "Monterrey",
    address: "Col. Centro #789",
  }),
];

function addContact(contact = new Contacts()) {
  contacts.push(contact);
}

addContact(
  new Contacts(4, "Luisa", "Martinez", "555-7890", {
    city: "Querétaro",
    address: "Av. Principal #456",
  })
);

console.log(contacts);

function deleteContact(id) {
  contacts.splice(id - 1, 1);
}

deleteContact(2, contacts);

console.log(contacts);

function printContacts() {
  console.log(contacts);
}

printContacts();

console.log();
