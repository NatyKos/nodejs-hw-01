import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const allContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    return allContacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());

// npm run count
