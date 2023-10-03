import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {DummyUser, LoginUser, UserType} from '../../utils/constants';
import auth from '@react-native-firebase/auth';
import useUserStore from '../useUserStore';

const useLogin = () => {
  const setUser = useUserStore(state => state.setUser);

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
      // setUser({...obj.user, platform: 'Google'})
    } catch (e: unknown) {
      console.log(`Error is: ${JSON.stringify(e)}`);
    }
  };

  const dummyLogin = () => {
    const dummyUser: UserType = {
      user: {
        name: 'Dummy User',
        email: 'dummydummy@user.com',
      },
      platform: LoginUser.dummy,
    };
    setUser(dummyUser);
  };

  return {googleSignIn, dummyLogin};
};

export default useLogin;