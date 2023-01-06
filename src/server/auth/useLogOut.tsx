import axios from '../axios/axiosCustom';
import useAuth from './context/useAuth';

function useLogOut() {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({ pwd: '', roles: [], accessToken: '', user: '' });
    try {
      const response = await axios('/logout', {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
}

export default useLogOut;
