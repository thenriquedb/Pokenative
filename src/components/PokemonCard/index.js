import React, { useState, useEffect } from 'react';

import { TouchableOpacity } from 'react-native';

import { Container, PokemonName, Sprite, Infos, SpriteContainer, Type, TypeText, Details } from './styles';
import typeColorTemplates from "../../styles/typeColorTemplates";

import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";
import api from "../../services/api";

const PokemonCard = ({ name, url, navigation }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function setPokemonInfos() {
      const response = await api.get(`/pokemon/${name}`);
      setPokemon(response.data);

    }

    setPokemonInfos();
  }, []);

  return (
    pokemon ? (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Pokemon')}>
        <Container style={{ backgroundColor: typeColorTemplates[pokemon.types[0].type.name] }} >
          <PokemonName> #{pokemon.id}  {capitalizeFirstLetter(name)} </PokemonName>
          <Infos>
            <Details>
              {pokemon.types.map(item => {
                return (
                  <Type key={item.slot}>
                    <TypeText> {capitalizeFirstLetter(item.type.name)} </TypeText>
                  </Type>)
              })}
            </Details>

            <SpriteContainer>
              <Sprite
                source={{ uri: pokemon.sprites.front_default }} />
            </SpriteContainer>
          </Infos>
        </Container>
      </TouchableOpacity>
    ) : null

  );
};

export default PokemonCard;
