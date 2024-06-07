import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const newArray = [];
  newArray.push(createFakeContact());
  try {
    const currentContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    currentContacts.push(...newArray);
    await fs.writeFile(PATH_DB, JSON.stringify(currentContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();

// npm run add-one
