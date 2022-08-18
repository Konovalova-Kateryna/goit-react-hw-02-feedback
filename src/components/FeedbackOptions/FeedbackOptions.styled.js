import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 10px;
`;

export const OptionBtn = styled.button`
  font-size: 20px;
  background-color: #58d5df;
  border-radius: 8px;
  padding: 10px 13px;

  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
`;
