import { CardContainer } from 'Components/styles';
import { ColorProps } from 'interfaces';
import styled from 'styled-components';

export const ItemTitle = styled.div<ColorProps>`
  width: 300px;
  padding: 1rem 2rem;
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
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5em;
  box-shadow: 4px 2px 5px ${({ theme }) => theme.colors.black[300]};
`;

export const ItemContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  &:hover > ${CardContainer} {
    display: block;
  }
`;
