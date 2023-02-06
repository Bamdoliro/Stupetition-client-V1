import styled from 'styled-components';
import { color } from 'styles/theme';

export const Desc = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${color.gray500};
  padding-bottom: 12px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  border-radius: 12px;
  background-color: #f3f6ff;
  padding: 0px 0px 0px 16px;
`;

export const Img = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 9px;
`;

export const Input = styled.input`
  border-radius: 0px 12px 12px 0px;
  background-color: #f3f6ff;
  width: 100%;
  height: 100%;
  font-size: 16px;
`;