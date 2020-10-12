import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Components/Header';

import {
  SafeContainer,
  Container,
  Title,
  DetailText,
  ChevronWrap,
} from './styles';

const Details = ({navigation, route}) => {
  const {message = {}} = route.params;

  return (
    <SafeContainer>
      <Header />
      <Container>
        <ChevronWrap onPress={() => navigation.pop()}>
          <Icon name="chevron-left" size={40} color="#ffffff" />
        </ChevronWrap>
        <Title>{message.subject}</Title>
        <DetailText>{message.detail}</DetailText>
      </Container>
    </SafeContainer>
  );
};

export default Details;
