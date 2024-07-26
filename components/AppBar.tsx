import { View, Text } from "react-native";

export default function AppBar() {

    return <View className="flex flex-row gap-4 px-4 h-16">
        <Text className="text-2xl font-semibold flex-1">Super Game</Text>
        <View className="bg-blue-200 w-10 h-10 rounded-full flex items-center justify-center">
            <Text className="text-blue-700 font-bold">MF</Text>
        </View>
    </View>
}