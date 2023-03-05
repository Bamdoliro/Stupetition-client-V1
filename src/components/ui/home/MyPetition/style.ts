import { color } from 'styles/theme.style';
import styled from 'styled-components';

export const MyPetitionLayout = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: ${color.white};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InnerWrap = styled.div`
  width: 74.4%;
`;

export const RadioTabMenuWrap = styled.div`
  margin: 48px 0px 32px 0px;
`;

export const PetitionWrap = styled.div`
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  gap: 3%;
  width: 100%;
`;