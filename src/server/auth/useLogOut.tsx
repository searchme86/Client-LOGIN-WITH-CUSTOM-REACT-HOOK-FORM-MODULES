import axios from '../axios/axiosCustom';
import { useStateContext } from '../../context/NewContext';
import { contextActionCreator } from '../../context/NewContextType';

function useLogOut() {
  const { dispatch } = useStateContext();

  const logout = async () => {
    dispatch(contextActionCreator.setUserLogout());

    try {
      await axios('/logout', {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
}

export default useLogOut;
