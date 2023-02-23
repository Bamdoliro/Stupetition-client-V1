import { answerPetition } from 'apis/petition.api';
import { useMutation } from 'react-query';
import { AnswerFeatureType } from './answer.props';

export const AnswerFeature = ({
  id,
  setComment,
  comment,
}: AnswerFeatureType) => {
  const answerMutate = useMutation(answerPetition, {
    onSuccess: () => {
      setComment('');
      //   refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const answerSubmit = () => {
    answerMutate.mutate({
      comment,
      petitionId: Number(id),
    });
  };
  return { answerSubmit };
};
