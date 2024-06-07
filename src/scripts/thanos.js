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

// У файлі src / scripts / thanos.js опишіть
// функцію thanos.Вона має пройтись по усьому
// масиву контактів у файлі
// src / db / db.json та із вірогідністю 50
// відсотків спробує видалити кожен контакт.
// Перевірити роботу функції можна виконавши
// команду npm run thanos, яка буде виконувати
// код у файлі src / scripts / thanos.js.
//  файлі src / db / db.json мають відбутися
//  відповідні зміни.
