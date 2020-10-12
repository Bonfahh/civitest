import React, {useCallback, useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

import Header from '../../Components/Header';
import {
  SafeContainer,
  Container,
  Button,
  Title,
  Subtitle,
  Row,
  DateText,
  RefreshWrap,
  RefreshTouch,
  ReadRow,
  ReadText,
} from './styles';
import api from '../../services/api';
import {format} from 'date-fns';
import {View} from 'react-native';

const Home = ({navigation}) => {
  const animation = useRef();

  const [messages, setMessages] = useState([]);

  const getMessages = useCallback(() => {
    api.get('messages').then((res) => {
      if (res.data) {
        setMessages(res.data);
      }
    });
  }, []);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  const dateFormat = (date) => {
    const newData = format(date * 1000, 'MM/dd/yyyy  HH:mm');

    return newData;
  };

  const handleDetails = (m) => {
    api.put(`messages/${m.id}`);
    navigation.navigate('Details', {message: m});
  };

  return (
    <SafeContainer>
      <Header />
      <Container>
        <RefreshWrap>
          <RefreshTouch
            onPress={() => {
              animation.current.play();
              getMessages();
            }}>
            <LottieView
              loop={false}
              progress={1}
              ref={animation}
              resizeMode="contain"
              source={require('../../assets/lottie/refresh.json')}
            />
          </RefreshTouch>
        </RefreshWrap>
        {messages.map((m) => (
          <Button read={m.read} onPress={() => handleDetails(m)}>
            <Row>
              <View>
                <Title numberOfLines={1}>{m.subject}</Title>
                <Subtitle>
                  {m.detail.length < 10
                    ? m.detail
                    : `${m.detail.substring(0, 10)}...`}
                </Subtitle>
              </View>
              <DateText>{dateFormat(m.timestamp)}</DateText>
            </Row>
            {m.read && (
              <ReadRow>
                <Icon name="check" size={24} color="black" />
                <ReadText>Read</ReadText>
              </ReadRow>
            )}
          </Button>
        ))}
      </Container>
    </SafeContainer>
  );
};

export default Home;
