import { deletePetition } from 'apis/petition.api';
import { useDialog } from 'hooks/useDialog';
import { useSuccesToast } from 'hooks/useToast';
import { useMutation, useQueryClient } from 'react-query';
import * as KEY from 'constants/key.constant';
import { useNavigate } from 'react-router-dom';

const DeletePetitionFeature = (petitionId: number) => {
  const navigate = useNavigate();
  const { closeDialog } = useDialog();
  const queryClient = useQueryClient();

  const deleteMutate = useMutation(deletePetition, {
    onSuccess: () => {
      useSuccesToast('삭제 완료');
      navigate('/');
      queryClient.invalidateQueries([KEY.PETITION_LIST]);

      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteSubmit = () => {
    deleteMutate.mutate(petitionId);
    closeDialog();
  };

  return { deleteSubmit };
};

export default DeletePetitionFeature;