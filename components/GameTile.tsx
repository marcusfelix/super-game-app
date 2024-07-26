import { Game } from "@/slices/games";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { Link } from "expo-router";

interface Props {
    game: Game;
    isFavorite: boolean;
    onPress: () => void;
    onFavorite: () => void;
}
export default function GameTile({ game, isFavorite, onPress, onFavorite }: Props){ 
    return <View className="p-2 rounded-lg flex flex-col mb-4 gap-y-4" >
        <View className="flex flex-row gap-4">
            <Image source={{uri: game.iconURL}} className="w-20 h-20 rounded-lg"/>
            <View className="flex flex-col flex-1">
                <Text className="text-xl tracking-tighter font-semibold">{game.title}</Text>
                <View className="flex flex-row gap-1">
                    {new Array(5).fill(0).map((e, i) => (
                        <TabBarIcon key={i} name={(i + 1) <= Math.floor(game.rating) ? 'star' : 'star-outline'} size={16} color={"#f97316"} />
                    ))}
                </View>
            </View>
            <TouchableOpacity onPress={onFavorite} className="mr-2">
                <TabBarIcon name={isFavorite ? 'star' : 'star-outline'} size={22} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onPress} className="px-6 py-2 bg-black/10 rounded-lg bg-purple-200">
            <Text className="text-lg text-center text-purple-700 font-semibold">Details</Text>
        </TouchableOpacity>
    </View>
}