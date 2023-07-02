const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
        const contact = await contacts.getContactById(id);
        return console.log(contact);
    case "add":
        const newContact = await contacts.addContact({name, email, phone});
        return console.log(newContact);

    case "remove":
        const removeContact = await contacts.removeContact(id);
        return console.log(removeContact);

    default:
        console.warn('\x1B[31m Unknown action type!');
  }
};

//invokeAction({ action: "list" });
//invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssH"});
//invokeAction({action: "add", name:"Freddie", email:"freddie@mail.com", phone:"12345678"});
//invokeAction({action: "remove", id:"5NYH68Aa2UdQwi0XSmAre"});

