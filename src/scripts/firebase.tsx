import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, Database } from "firebase/database";

interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
  measurementId?: string | undefined;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const db: Database = getDatabase(app);

export const writeData = async (path: string, data: unknown): Promise<void> => {
  let output = "Nothing was run";
  const dbRef = ref(db, path);

  try {
    await set(dbRef, data);
    output = "Data was written";
  } catch (error) {
    output = `Error: ${error}`;
  }

  console.log(output);
};