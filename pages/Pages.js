import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

function Page() {
    const [items, setItems] = React.useState([
        { name: 'Judul konten disini', code: '#1abc9c', icon: 'user-check' },
        { name: 'Judul konten disini', code: '#2ecc71', icon: 'info-circle' },
        { name: 'Judul konten disini', code: '#3498db', icon: 'check-square' },
        { name: 'Judul konten disini', code: '#9b59b6', icon: 'book' },
        { name: 'Judul konten disini', code: '#deab90', icon: 'gamepad' },
        { name: 'Judul konten disini', code: '#deab90', icon: 'gamepad' },
        { name: 'Judul konten disini', code: '#deab90', icon: 'gamepad' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
            </View>
            <View style={styles.shapes}></View>
            <FlatGrid
                    itemDimension={400}
                    data={items}
                    style={styles.gridView}
                    spacing={10}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Page');
                        }}>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            {/* <Image source={Background} style={styles.shapeBackground}></Image> */}
                                <View style={styles.columnsatu}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemCode}>Deskripsi Singkat</Text>
                                </View>
                                <View style={styles.columndua}>
                                    <TouchableOpacity style={styles.buttonStyle}>
                                        <Text style={[styles.buttonText, { color: item.code }]} >Lihat</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    > 
            </FlatGrid>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#296FD7"
    },
    heading: {
        backgroundColor: '#296FD7',
        height: 100,
        width: '80%',
        marginLeft: 14,
    },
    description: {
        fontFamily: 'Raleway_300Light',
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
    },
    gridView: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        // backgroundColor: '#e5e5e5',
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 10,
        padding: 10,
        paddingLeft: 15,
        height: 75,
        flexDirection: "row",
    },
    itemName: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
    },
    itemCode: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Raleway_500Medium',
        marginBottom: 10,
    },
    columnsatu: {
        flex: 4,
    },
    columndua: {
        flex: 1,
    },
    buttonStyle: {
        height: '60%',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
    },
})

export default Page;