import { updatePassword } from 'apis/user.api';
import { useSuccesToast } from 'hooks/useToast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { UpdatePasswordType } from 'types/user.type';

export const UpdatePasswordFeature = (
  updatePasswordData: UpdatePasswordType,
) => {
  const navigate = useNavigate();
  const { mutate } = useMutation(updatePassword, {
    onSuccess: () => {
      useSuccesToast('비밀번호 변경 성공');
      navigate('/login');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const submit = () => {
    const { currentPassword, password, rePassword } = updatePasswordData;

    if (password === rePassword) {
      mutate({
        currentPassword,
        password,
      });
    } else {
      useSuccesToast('비밀번호가 틀립니다');
    }
  };

  return { submit };
};