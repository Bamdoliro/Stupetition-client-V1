import { useMutation } from 'react-query';
import { logoutUser } from 'apis/user.api';
import { useSetRecoilState } from 'recoil';
import { userEmpty, userState } from 'atoms/user.atom';

export const LogoutFeature = () => {
  const setUser = useSetRecoilState(userState);

  const { mutate } = useMutation(logoutUser, {
    onSuccess: () => {
      localStorage.clear();
      setUser(userEmpty);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logout = () => {
    mutate();
  };

  return { logout };
};
