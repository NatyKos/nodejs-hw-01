import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const filteredContacts = contacts.filter(() => {
      return Math.random() < 0.5;
    });
    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await thanos();

// npm run thanos
