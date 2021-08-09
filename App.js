import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Raleway_300Light, Raleway_500Medium, Raleway_700Bold, Raleway_800ExtraBold } from '@expo-google-fonts/raleway';
import Home from './pages/Home';
import Page from './pages/Pages';
import Testing from './pages/Testing';

function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users?since=135')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
 
    return (
        <View style={styles.container}>
            {/* <Button onPress={() => {
                navigation.navigate('Beranda')
                }}
                title="Learn">
            </Button>
            <Button onPress={() => {
                navigation.navigate('Testing')
                }}
                title="Testing">
            </Button> */}
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Details', { idUser: item.login, });
                    }}>
                        <View style={styles.viewList}>
                            <Text style={styles.textItemLogin}>{item.login}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}

function DetailScreen({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { idUser } = route.params;

    useEffect(() => {
        fetch(`https://api.github.com/users/${idUser}`)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    return (
        <View style={styles.detaiiView}>
            <View style={styles.viewContent}>
                <Image source={{ uri: data.avatar_url }} style={styles.ImageDetail}></Image>
                <Text style={{fontSize: 24}}>{data.name}</Text>
            </View>
        </View>
    )
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    )
}

function BerandaStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Beranda" component={Home} />
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: '#296FD7',
                },
                headerTintColor: '#fff',
            }} name="Page" component={Page} />
        </Stack.Navigator>
    )
}

function TestingStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Testing" component={Testing} />
        </Stack.Navigator>
    )
}

export default function App() {
    const [items, setItems] = React.useState([
        { name: 'Parent Tahu', code: '#1abc9c', icon: 'user-check' },
        { name: 'Tips Parent', code: '#2ecc71', icon: 'info-circle' },
        { name: 'Daily Habit', code: '#3498db', icon: 'check-square' },
        { name: 'Fun Learning', code: '#9b59b6', icon: 'book' },
        { name: 'Fun Games', code: '#deab90', icon: 'gamepad' },
    ]);

    let [fontsLoaded] = useFonts({
        Raleway_300Light,
        Raleway_500Medium,
        Raleway_700Bold,
        Raleway_800ExtraBold,
    });

    if (!fontsLoaded) {
        return (
            <Text>Loading ...</Text>
        )
    } else {
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="HomeStack" component={HomeStackScreen} />
                    <Tab.Screen name="BerandaStack" component={BerandaStackScreen}/>
                    <Tab.Screen name="TestingStack" component={TestingStackScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    point: {
        fontSize: 20,
    },
    viewList: {
        height: 100,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center'
    },
    textItemLogin: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginLeft: 20,
        fontSize: 16
    },
    detaiiView: {
        flex: 1,
        alignItems: 'center',
    },
    viewContent: {
        marginTop: 50,
    },
    ImageDetail: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
    },
});
