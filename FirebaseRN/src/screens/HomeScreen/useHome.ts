import auth from '@react-native-firebase/auth';
import useUserStore from '../../hooks/useUserStore';
import {LoginUser} from '../../utils/constants';

const useHome = () => {
  const {user, setUser} = useUserStore();
  const getName = () => {
    switch (user?.platform) {
      case LoginUser.dummy:
        return user.user.name;
      case LoginUser.google:
        return user.user.displayName;
      default:
        return '';
    }
  };

  const logout = async () => {
    switch (user?.platform) {
      case LoginUser.dummy:
        break;
      case LoginUser.google:
        await auth().signOut();
        break;
      default:
        break;
    }
    setUser(undefined);
  };
  return {user, getName, logout};
};

export default useHome;
