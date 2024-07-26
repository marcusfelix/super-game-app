
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Detail, requestDetails } from '@/slices/detail';
import { RootState } from '@/stores/store';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';

import { Image, View } from 'react-native';
import { ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Details() {
  const { id } = useLocalSearchParams();

  const favorites = useSelector((state: RootState) => state.favorites);
  const details = useSelector((state: RootState) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestDetails(id));
  }, [])

  const game = details?.value as Detail

  if (!game) {
    return null;
  }
  
  return (
    <ScrollView>
        <View className='bg-gray-400'>
            <Image source={{uri: game.bannerURL}} style={{width: '100%', height: 200}} />
            <View className='absolute top-36 w-full'>
                <Image source={{uri: game.iconURL}} className='w-28 h-28 mx-auto rounded-xl'/>
            </View>
        </View>
        <View className='px-4 py-20'>
            <Text className='text-lg'>{game.description}</Text>
        </View>
    </ScrollView>
  );
}
