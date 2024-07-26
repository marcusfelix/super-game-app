import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import AppBar from '@/components/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import GameTile from '@/components/GameTile';
import { Game } from '@/slices/games';
import { toggleFavorite } from '@/slices/favorites';
import { RootState } from '@/stores/store';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const games = useSelector((state: RootState) => state.games);
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();
  const router = useRouter();

  const addToFavorites = (game: Game) => {
    dispatch(toggleFavorite(game.id));
  }

  const navigateTo = (game: Game) => {
    router.navigate(`/details/${game.id}`,)
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
        data={(games?.value ?? []).filter((game) => favorites.value.includes(game.id))} 
        renderItem={renderItem}
        keyExtractor={item => item.id} 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
