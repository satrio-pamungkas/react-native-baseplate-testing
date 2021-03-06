import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import { useFonts, Raleway_300Light, Raleway_500Medium, Raleway_700Bold, Raleway_800ExtraBold } from '@expo-google-fonts/raleway';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import Background from '../assets/Pattern.png';
import Parenting from '../assets/menu/Parenting.png';
import Tips from '../assets/menu/Tips.png';
import Habit from '../assets/menu/Habit.png';
import Learning from '../assets/menu/Learning.png';
import Games from '../assets/menu/Games.png';

export default function Home({ navigation }) {
    const [items, setItems] = React.useState([
        { name: 'Parent Tahu', code: '#1abc9c', icon: 'user-check', img: Parenting },
        { name: 'Tips Parent', code: '#2ecc71', icon: 'info-circle', img: Tips },
        { name: 'Daily Habit', code: '#3498db', icon: 'check-square', img: Habit },
        { name: 'Fun Learning', code: '#9b59b6', icon: 'book', img: Learning },
        { name: 'Fun Games', code: '#e76f51', icon: 'gamepad', img: Games },
    ]);

    let [fontsLoaded] = useFonts({
        Raleway_300Light,
        Raleway_500Medium,
        Raleway_700Bold,
        Raleway_800ExtraBold,
    });

    if (!fontsLoaded) {
        return (
            <Text>Loading</Text>
        )
    } else {
        return (
            <View style={styles.container}>
                <Image source={Background} style={styles.imagePattern}></Image>
                <View style={styles.selamatDatangColumn}>
                    <Text style={styles.selamatDatang}>Selamat Datang</Text>
                    <Text style={styles.parent}>Parent !</Text>
                </View>
                <View style={styles.shapeAtas}></View>
                <FlatGrid
                    itemDimension={130}
                    data={items}
                    style={styles.gridView}
                    spacing={10}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Tips Parent');
                        }}>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            {/* <Image source={Background} style={styles.shapeBackground}></Image> */}
                                {/* <FontAwesome5 name={item.icon} size={24} color="white" style={{ marginBottom: 10 }}/> */}
                                <Image source={item.img} style={styles.imgStyle}></Image>
                                <Text style={styles.itemName}>{item.name}</Text>
                                {/* <Text style={styles.itemCode}>Deskripsi Singkat</Text> */}
                            </View>
                        </TouchableOpacity>
                    )}
                    > 
                </FlatGrid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#296FD7"
    },
    imagePattern: {
        width: 400,
        height: 200,
    },
    selamatDatang: {
        fontFamily: 'Raleway_500Medium',
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        marginLeft: 2
    },
    parent: {
        fontFamily: 'Raleway_800ExtraBold',
        color: "rgba(255,255,255,1)",
        fontSize: 30,
    },
    selamatDatangColumn: {
        width: 300,
        marginTop: 40,
        marginLeft: 24,
        marginBottom: 40,
        position: 'absolute',
    },
    selamatDatangColumnFiller: {
        flex: 1
    },
    shapeAtas: {
        backgroundColor: 'white',
        height: 30,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
    },
    gridView: {
        flex: 1,
        backgroundColor: 'white',
        // backgroundColor: '#e5e5e5',
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 10,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemCode: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Raleway_500Medium',
        marginBottom: 10,
    },
    shapeBackground: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    imgStyle: {
        justifyContent: 'center',
        width: '60%',
        height: '50%',
        marginLeft: 10,
    }
});


