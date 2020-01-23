import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from "react-native";

import PokemonCard from "../../components/PokemonCard";

import {
  Container,
  Title,
  PokemonList,
  Footer,
  SearchBarContainer,
  SearchBar,
  SearchButton
} from './styles';
import api from "../../services/api";
import { MaterialIcons } from "@expo/vector-icons";

const itemsPerPage = 40;

const Pokedex = ({ navigation }) => {
  const [pokemons, setPokemons] = useState(null);
  const [totalItemsLoaded, setTotalItemsLoaded] = useState(itemsPerPage);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('pikachu');

  useEffect(() => {
    async function loadInitialPokemons() {
      const response = await api.get(`/pokemon?offset=${0}&limit=${itemsPerPage}`);
      setPokemons(response.data.results);
    }
    loadInitialPokemons();
  }, []);


  async function loadMorePokemons() {
    if (loading) return;

    setLoading(true);
    const response = await api.get(`/pokemon?offset=${totalItemsLoaded}&limit=${itemsPerPage}`);

    setPokemons([...pokemons, ...response.data.results]);
    setTotalItemsLoaded(totalItemsLoaded + itemsPerPage);
    setLoading(false);
  }

  async function search() {
    const response = await api.get(`/${searchText}`);
    setPokemons(response.data.results);
  }

  async function filterGeneration() {
    const response = await api.get(`/pokedex/${3}/`);
    setPokemons(response.data.pokemon_entries);
  }

  const renderFooter = () => {
    return (
      <Footer>
        <ActivityIndicator />
      </Footer>
    )
  }

  return (
    <Container>
      <SearchBarContainer>
        <SearchBar placeholder="Nome ou ID" />
        <SearchButton onPress={() => filterGeneration()}>
          <MaterialIcons name="search" size={20} color="#fff" />
        </SearchButton>
      </SearchBarContainer>

      <PokemonList>
        <FlatList
          data={pokemons}
          numColumns={2}
          onEndReached={() => loadMorePokemons()}
          onEndReachedThreshold={0.1}
          keyExtractor={item => item.name}
          ListFooterComponent={renderFooter()}
          renderItem={({ item }) =>
            <PokemonCard
              navigation={navigation}
              name={item.name}
              url={item.url} />}
        />
      </PokemonList>
    </Container>
  );
};

export default Pokedex;
