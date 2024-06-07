import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from './generateContacts.js';

// export const addOneContact = async () => {
//   try {
//     const newContacts = [];
//     newContacts.push(createFakeContact());
//     const currentContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
//     const updateContacts = currentContacts.push(...newContacts);
//     await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
//   } catch (error) {
//     console.log(error);
//   }
// };

// await addOneContact();

// npm run add-one

// У файлі src / scripts / addOneContact.js опишіть функцію addOneContact.
// Вона має додавати до масиву у файлі src / db / db.json лише один
// згенерований контакт.Забезпечте правильне додавання одного контакту
// до масиву, збереження змін у файлі.
// Перевірити роботу функції можна виконавши команду npm run add - one,
//     яка буде виконувати код у файлі src / scripts / addOneContact.js.
//     У файлі src / db / db.json мають відбутися відповідні зміни.
export const addOneContact = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const newContact = createFakeContact();
    const updatedContacts = [...JSON.parse(contacts), newContact];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log(`Generated new contact and added new contact to the array.`);
  } catch (error) {
    console.error(`Error generating new contact: ${error.message}`);
  }
};
await addOneContact();
