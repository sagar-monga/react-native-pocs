import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginUser, UserType} from '../../utils/constants';
import utils from '../../utils/utils';
import useFirestore from '../firebase/useFirestore';
import useUserStore from '../useUserStore';

const useLogin = () => {
  const setUser = useUserStore(state => state.setUser);
  const {addUser} = useFirestore();

  const googleSignIn = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      console.log(`Checked for play services`);
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      console.log(`Sign in complete`);

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log(`Credential generated`);

      // Sign-in the user with the credential
      const obj = await auth().signInWithCredential(googleCredential);
      console.log(`Signed in`);

      _addGoogleUserToFirestore(obj.user);
    } catch (e: unknown) {
      console.log(`Error is: ${JSON.stringify(e)}`);
    }
  };

  const _addGoogleUserToFirestore = (user: FirebaseAuthTypes.User) => {
    const newUser: UserType = {
      platform: LoginUser.google,
      user: {
        displayName: user.displayName,
        email: user.email,
        metadata: user.metadata,
        photoURL: user.photoURL,
        multiFactor: user.multiFactor,
        phoneNumber: user.phoneNumber,
        emailVerified: user.emailVerified,
        isAnonymous: user.isAnonymous,
        uid: user.uid,
        providerData: user.providerData,
      },
      id: user.uid,
      featuresAvailable: [],
      isInternalUser: false,
    };
    addUser(newUser);
    setUser(newUser);
  };
  const dummyLogin = () => {
    const dummyUser: UserType = {
      user: {
        name: 'Dummy User',
        email: 'dummydummy@user.com',
      },
      platform: LoginUser.dummy,
      id: utils.getRandomStringUUID(),
      featuresAvailable: [],
      isInternalUser: false,
    };
    addUser(dummyUser);
    setUser(dummyUser);
  };

  return {googleSignIn, dummyLogin};
};

export default useLogin;
