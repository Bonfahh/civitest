import styled from 'styled-components/native';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background: #47718f;
`;

export const Container = styled.View`
  flex: 1;
  background: #f6f7fb;

  padding-horizontal: 20;
`;

export const Title = styled.Text`
  font-size: 24;
  font-weight: bold;

  margin-top: 20;
  margin-bottom: 30;

  align-self: center;
  text-align: center;
`;

export const DetailText = styled.Text`
  font-size: 16;
`;

export const ChevronWrap = styled.TouchableOpacity`
  position: absolute;
  top: -45;
  left: 0;
  background-color: #47718f;
`;
