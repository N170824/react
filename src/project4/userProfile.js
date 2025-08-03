import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseApp } from './firebase-config'; 

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const UserProfile = async (userId, userData, profilePicFile) => {
  const picRef = ref(storage, `profile_pics/${userId}`);
  await uploadBytes(picRef, profilePicFile);
  const profilePicUrl = await getDownloadURL(picRef);

  await setDoc(doc(db, 'users', userId), {
    ...userData,
    profilePic: profilePicUrl,
  });
};

