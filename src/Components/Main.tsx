import userData from 'data/userData.json';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions';

import Item from './Item';
import { Container } from './styles';

const Main = ({
  saveData,
  data,
}: typeof actions & { data: typeof userData }) => {
  React.useEffect(() => {
    if (data.length <= 0) {
      saveData(userData);
    }
  }, [saveData, data]);
  return (
    <Container>
      {data.map((val) => (
        <Item
          key={val.uuid}
          label={`${val.first} ${val.last}`}
          time={val.time}
          phone={val.contactDetails.phone}
          email={val.contactDetails.email}
          color={val.color}
        />
      ))}
    </Container>
  );
};

function mapStateToProps(state: any) {
  return {
    data: state.userData,
  };
}

export default connect(mapStateToProps, actions)(Main);
