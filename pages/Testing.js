import React, { useState, useCallback } from 'react';
import { StyleSheet, ScrollView, Text, Alert, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Example() {
    let deskripsi = "\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry."
    let imageUrl = "https://img.freepik.com/free-vector/colorful-mountains-landscape-background_52683-24001.jpg?size=626&ext=jpg";

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    return (
        <ScrollView>
            <Text style={styles.heading}>Judul konten disini dan dapat diubah</Text>
            <Text style={styles.author}>Penyunting: Muhammad Raihan</Text>
            { imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image}></Image>
            ) : (
                null
            )}
            <Text style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
                {'\n\n'}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
                {deskripsi}
                
            </Text>
            <YoutubePlayer
                height={250}
                play={playing}
                videoId={"iee2TATGMyI"}
                onChangeState={onStateChange}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Raleway_300Light',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        paddingLeft: 20,
        paddingRight: 20,
    },
    heading: {
        fontFamily: 'Raleway_700Bold',
        fontSize: 28,
        color: 'black',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    image: {
        height: 250,
        width: '100%',
    },
    author: {
        fontFamily: 'Raleway_500Medium',
        fontSize: 14,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 20,
    }
});
