import firestore from '@react-native-firebase/firestore';
import {UserType} from '../../utils/constants';
import {useState} from 'react';
import useAsyncEffect from '../useAsyncEffect';

enum CollectionNames {
  User = 'user',
  // FeatureFlag = 'feature-flag',
}

const useFirestore = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useAsyncEffect(async () => {
    const userQuerySnapshot = await firestore()
      .collection(CollectionNames.User)
      .get();

    userQuerySnapshot.docs.forEach((doc, index) => {
      console.log(`doc ${index}: ${JSON.stringify(doc.data())}`);
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
  }, []);

  return {
    users,
  };
};

export default useFirestore;
