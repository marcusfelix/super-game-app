import { StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Game, requestGames } from '@/slices/games';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '@/components/AppBar';
import GameTile from '@/components/GameTile';
import { toggleFavorite } from '@/slices/favorites';
import { RootState } from '@/stores/store';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const games = useSelector((state: RootState) => state.games);
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(requestGames(null));
  }, []);

  const navigateTo = (game: Game) => {
    router.navigate(`/details/${game.id}`,)
  }

  const addToFavorites = (game: Game) => {
    dispatch(toggleFavorite(game.id));
  }

  const renderItem = (item) => <GameTile 
    game={item.item}
    isFavorite={favorites.value.includes(item.item.id)}
    onPress={() => navigateTo(item.item)}
    onFavorite={() => addToFavorites(item.item)}
  />
  
  return (
    <SafeAreaView>
      <AppBar/>
      <FlatList 
        className='mx-4'
        data={games.value} 
        renderItem={renderItem}
        keyExtractor={item => item.id} 
      />
    </SafeAreaView>
  )
  
  
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
