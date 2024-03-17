import { openDB } from "idb";
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (content) => {
  try {
    const db = await openDB("jate", 1);
    const tx = db.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.add({ content });
    const result = await request;
  } catch (error) {
    console.error("putDb not implemented", error);
  }
};

export const getDb = async () => {
  try {
    console.log("GET from the database");

    const db = await openDB("jate", 1);
    const tx = db.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.getAll();
    const result = await request;
    const position = result.length - 1;
    if (result.length === 0) {
      return null;
    } else {
      return result[position].content;
    }
  } catch (error) {
    console.error("getDb not implemented", error);
  }
};
initdb();
