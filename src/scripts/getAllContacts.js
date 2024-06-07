import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    return await fs.readFile(PATH_DB, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());

// npm run get-all
