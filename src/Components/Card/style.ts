import { ColorProps } from 'interfaces';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const CardHeaderTitle = styled.h4`
  color: ${({ theme }) => theme.colors.black[200]};
`;

export const SquareColor = styled.div<ColorProps>`
  width: 15px;
  height: 15px;
  background-color: ${({ theme, state }) => {
    switch (state) {
      case 'Warmup':
        return theme.colors.red;
      case 'green':
        return theme.colors.green;
      case 'VIP':
        return theme.colors.blue;
      default:
        return theme.colors.red;
    }
  }};
`;

export const CardState = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CardText = styled.span`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.black[100]};
`;

export const CardTriangle = styled.div`
  position: absolute;
  width: 20px;
  height: 15px;
  top: -14px;
  background: ${({ theme }) => theme.colors.white};
  clip-path: polygon(50% 0%, 0 100%, 100% 100%);
  box-shadow: 4px 2px 5px ${({ theme }) => theme.colors.black[300]};
`;
