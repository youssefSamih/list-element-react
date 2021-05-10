import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  position: absolute;
  display: none;
  top: 62px;
  left: 20px;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 2px 5px ${({ theme }) => theme.colors.black[300]};
  padding: 0.1rem 1rem;
  z-index: 3;
  border-radius: 15px;
`;
