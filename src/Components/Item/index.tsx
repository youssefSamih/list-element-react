import Card from 'Components/Card';
import { Props } from 'interfaces';

import { ItemContainer, ItemTitle } from './style';

const Item = ({ label, time, phone, email, color }: Props) => {
  return (
    <ItemContainer>
      <ItemTitle state={color} data-testid="label">
        {label}
      </ItemTitle>
      <Card {...{ label, time, phone, email, color }} />
    </ItemContainer>
  );
};

export default Item;
