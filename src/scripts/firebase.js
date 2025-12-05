import { initializeApp, getDatabase, ref, set, get, child } from "firebase/app";

const firebaseConfig = {
   apiKey: process.env.apiKey,
   authDomain: process.env.authDomain,
   projectId: process.env.projectId,
   storageBucket: process.env.storageBucket,
   messagingSenderId: process.env.messagingSenderId,
   appId: process.env.appId,
   measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getData = async (path, pname) => {
   var data = 'Nothing was run';
   var dbRef = ref(db, path)
   await get(child(dbRef, pname))
      .then((snapshot) => {
         data = snapshot.exists();
         if (snapshot.exists()) {
            data = snapshot.val();
         } else {
            data = "No";
         }
      })
      .catch((error) => {
         data = `Error: ${error}`
      });
   return data;
}

export const writeData = async (path, data) => {
   var output = 'Nothing was run';
   var dbRef = ref(db, path)
   await set(dbRef, data)
      .then(() => {
         output = 'Data was written';
      })
      .catch((error) => {
         output = `Error: ${error}`
      });
   console.log(output);
}
export const setData = async (route, newData) => {
   try {
      if (typeof newData !== 'object' || newData === null || Array.isArray(newData) || Object.keys(newData).length === 0) {
         throw new Error('newData must be a non-empty object.');
      } else {
         const dbRef = child(db, route); // Create a reference to the route
         await update(dbRef, newData); // Update the data 
      }
      console.log('Data updated successfully!');
   } catch (error) {
      console.error('Error updating data:', error);
   }
}
