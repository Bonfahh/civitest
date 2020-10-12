import styled from 'styled-components/native';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background: #47718f;
`;

export const Container = styled.View`
  flex: 1;
  background: #f6f7fb;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => (props.read ? '#f2f2f2' : '#ffffff')};
  height: 80;
  border-bottom-color: 'rgba(0, 0, 0, 0.2)';
  border-bottom-width: 1;
  justify-content: center;
  align-items: flex-start;
  padding-horizontal: 10;
`;

export const Title = styled.Text`
  font-size: 20;
  color: #2a2a2a;
`;

export const Subtitle = styled.Text`
  color: #b3b3b3;
`;

export const DateText = styled.Text`
  color: #a6a6a6;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const RefreshWrap = styled.View`
  position: absolute;
  top: -43;
  right: 0;
  background-color: #47718f;
`;

export const RefreshTouch = styled.TouchableOpacity`
  width: 40;
  height: 40;
  align-self: flex-end;
`;

export const ReadRow = styled(Row)`
  position: absolute;
  bottom: 5;
  right: 10;
  justify-content: flex-end;
`;

export const ReadText = styled(Subtitle)`
  font-size: 12;
`;
