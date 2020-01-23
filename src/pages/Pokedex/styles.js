import styled from 'styled-components/native';
import { Platform, StatusBar } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${`${Platform.OS === "android" ? StatusBar.currentHeight : 0}px`};
  background-color: #f0f0f0
`;

export const PokemonList = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;  
`;

export const SearchBarContainer = styled.View`
  padding: 20px 10px;
  flex-direction: row;
`;

export const SearchBar = styled.TextInput`
  padding: 10px;
  height: 40px;
  border-radius: 10px;
  background-color: #fff;
  flex: 1;
  margin:0 10px;
`;


export const SearchButton = styled.TouchableOpacity`
  padding: 10px;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: #fc6c6d;
  border-radius: 20px;
`;



export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 40px;
`;

export const Footer = styled.View`
  height: 40px;
`;
