import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: ${`${(Dimensions.get('window').width / 2) - 20}px`};
  height: 110px;
  margin: 0 10px 10px 0;
  border-radius: 15px;
  padding: 10px 5px;
  border-radius: 10px;
`;

export const Infos = styled.View`
  flex: 1;
  flex-direction: row;
`;


export const PokemonName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
`;

export const Sprite = styled.Image`
  height: 85px;
  width: 85px;
`;

export const SpriteContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.2);
  border-radius: 50px;
`;

export const Type = styled.View`
  width: 80px;
  height: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.2)
`;

export const TypeText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Details = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;