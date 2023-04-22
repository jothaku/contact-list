const { Contacts } = require("./contac_model");

//FUNCIÓN PARA ACTUALIZAR UN CONTACTO

function updateContact(id, name, lastname, phone, city, address) {
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex !== -1) {
    const updatedContact = {
      ...contacts[contactIndex],
      name: name || contacts[contactIndex].name,
      lastname: lastname || contacts[contactIndex].lastname,
      phone: phone || contacts[contactIndex].phone,
      location: {
        city: city || contacts[contactIndex].location.city,
        address: address || contacts[contactIndex].location.address,
      },
    };
    contacts[contactIndex] = updatedContact;
    return "Contacto actualizado correctamente";
  } else {
    return "No se pudo actualizar el contacto";
  }
}

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

function deleteContact(id) {
  contacts.splice(id - 1, 1);
}

deleteContact(2, contacts);

function printContacts() {
  console.log(contacts);
}

printContacts();

updateContact(3, undefined, undefined, "555-12567");

printContacts();
