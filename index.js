const contacts = require("./contacts");
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
        const contact = await contacts.getContactById(id);
        return console.table(contact);
    case "add":
        const newContact = await contacts.addContact({name, email, phone});
        return console.table(newContact);

    case "remove":
        const removeContact = await contacts.removeContact(id);
        return console.table(removeContact);

    default:
        console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);

//invokeAction({ action: "list" });
//invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssH"});
//invokeAction({action: "add", name:"Freddie", email:"freddie@mail.com", phone:"12345678"});
//invokeAction({action: "remove", id:"xrHdMuHyWwTdYDoPZQ_4C"});

