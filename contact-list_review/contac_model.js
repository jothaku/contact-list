function Contacts(id, name, lastname, phone, { city, address }) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.phone = phone;
  this.location = { city, address };
}
module.exports = { Contacts };
