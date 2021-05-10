import { CardContainer } from 'Components/styles';
import { Props } from 'interfaces';
import { BiAlarm, BiEdit, BiPhone } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';

import {
  CardHeader,
  CardHeaderTitle,
  CardInfo,
  CardState,
  CardText,
  CardTriangle,
  CardWrapper,
  SquareColor,
} from './style';

const Card = ({ label, time, phone, email, color }: Props) => {
  return (
    <CardContainer>
      <CardTriangle />
      <CardWrapper>
        <CardHeader>
          <CardHeaderTitle>{label}</CardHeaderTitle>
          <BiEdit />
        </CardHeader>
        <CardState>
          <SquareColor state={color} />
          <CardText>{color}</CardText>
        </CardState>
        <CardInfo>
          <BiAlarm color="#9ba5a5" />
          <CardText>{time}</CardText>
        </CardInfo>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <CardHeaderTitle>Contact details:</CardHeaderTitle>
        </CardHeader>
        <CardInfo>
          <BiPhone color="#9ba5a5" />
          <CardText>{phone}</CardText>
        </CardInfo>
        <CardInfo>
          <FiMail color="#9ba5a5" />
          <CardText>{email}</CardText>
        </CardInfo>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
