import { useState } from 'react';
import { StatusType } from 'types/petition.type';
import { useRecoilValue } from 'recoil';
import { userState } from 'atoms/user.atom';
import { useNavigate } from 'react-router-dom';
import MiniButton from 'components/common/MiniButton';
import { PetitionListFeature } from 'features/home/petitionList.feature';
import PetitionList from '../../../common/PetitionList';
import RadioTabMenu from '../../../common/RadioTabMenu';
import * as S from './style';

const Main = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [status, setStatus] = useState<StatusType>('PETITION');
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(true);
  const { isLoading, isError, data } = PetitionListFeature(status);

  return (
    <S.MainLayout>
      {isBannerOpen && (
        <S.Banner>
          <S.BannerText>
            학생청원,
            <br />
            학생들의 목소리를 듣다
          </S.BannerText>
          <S.CloseBanner onClick={() => setIsBannerOpen(false)}>
            X 닫기
          </S.CloseBanner>
        </S.Banner>
      )}
      <S.ContentsWrap>
        <S.ContentsInnerWrap>
          <S.SubNav>
            <RadioTabMenu setStatus={setStatus} status={status} />
            {user.authority && (
              <MiniButton
                onClick={() => navigate('/petition/write')}
                option="FILLED"
                value="청원 추가"
              />
            )}
          </S.SubNav>
          <S.PetitionWrap>
            {user.authority ? (
              data.map((item) => {
                return (
                  <PetitionList
                    key={item.id}
                    id={item.id}
                    createdAt={item.createdAt}
                    title={item.title}
                    numberOfApprover={item.numberOfApprover}
                    status={status}
                  />
                );
              })
            ) : (
              <div>로그인을 해야지 청원을 하지 ;;</div>
            )}
          </S.PetitionWrap>
        </S.ContentsInnerWrap>
      </S.ContentsWrap>
    </S.MainLayout>
  );
};

export default Main;
