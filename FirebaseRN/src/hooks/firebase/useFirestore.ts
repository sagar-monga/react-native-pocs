import firestore from '@react-native-firebase/firestore';
import {UserType} from '../../utils/constants';
import {useState} from 'react';
import useAsyncEffect from '../useAsyncEffect';

enum CollectionNames {
  User = 'user',
  FeatureFlag = 'feature-flag',
}

const useFirestore = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const userCollection = firestore().collection(CollectionNames.User);
  const featureFlagCollection = firestore().collection(
    CollectionNames.FeatureFlag,
  );

  useAsyncEffect(async () => {
    const users = await getAllUsers();
    setUsers(users);
  }, []);

  const getAllUsers = async () => {
    const userQuerySnapshot = await userCollection.get();
    //TODO: Return users from here
    userQuerySnapshot.docs.forEach((doc, index) => {
      // console.log(`doc ${index}: ${JSON.stringify(doc.data(), null, 4)}`);
    });

    //* REALTIME
    // function onResult(
    //   querySnapshot: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>,
    // ) {
    //   console.log(`Got Users collection result. ${querySnapshot.size}`);
    //   querySnapshot.forEach((doc, index) =>
    //     console.log(`doc ${index}: ${JSON.stringify(doc.data())}`),
    //   );
    // }
    // function onError(error: Error) {
    //   console.error(error);
    // }
    // firestore().collection('user').onSnapshot(onResult, onError);
  };

  const getUserById = async (id: string) => {
    try {
      const results = await userCollection.where('id', '==', id).get();
      //TODO: RETURN CONVERTED MODEL here
    } catch (error: any) {
      console.log(`Error in getUserById: ${error}`);
    }
  };

  const addUser = async (user: UserType) => {
    try {
      await userCollection.add(user);
    } catch (error: any) {
      console.log(`Error in addUser: ${error}`);
    }
  };

  return {
    users,
    addUser,
    getUserById,
  };
};

export default useFirestore;
