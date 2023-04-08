let contacts = [
  {
    name: "Juan Perez",
    phone: "555-1234",
    email: "juanperez@example.com",
  },
  {
    name: "Maria Garcia",
    phone: "555-5678",
    email: "mariagarcia@example.com",
  },
  {
    name: "Juan Lopez",
    phone: "555-5678",
    email: "lopez27@example.com",
  },
];

function addContact(name, phone, email, contactsList) {
  const newContact = {
    name: name,
    phone: phone,
    email: email,
  };
  contactsList.push(newContact);
}

addContact("Luisa Martinez", "555-7890", "luisamartinez@example.com", contacts);

console.log(contacts);

function deleteContact(name, contactsList) {
  for (let i = 0; i < contactsList.length; i++) {
    if (contactsList[i].name === name) {
      contactsList.splice(i, 1);
      break;
    }
  }
}

deleteContact("Luisa Martinez", contacts);

console.log(contacts);

function printContacts(contactsList) {
  for (let i = 0; i < contactsList.length; i++)
    console.log(
      `Nombre: ${contactsList[i].name}, Teléfono: ${contactsList[i].phone}, Email: ${contactsList[i].email}`
    );
}

printContacts(contacts);
