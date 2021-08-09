import React, { useState, useCallback } from 'react';
import { StyleSheet, ScrollView, Text, Alert } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import YoutubePlayer from "react-native-youtube-iframe";

export default function Example() {
    let deskripsi = "\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry."

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
            <YoutubePlayer
                height={250}
                play={playing}
                videoId={"iee2TATGMyI"}
                onChangeState={onStateChange}/>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Raleway_300Light',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        padding: 20,
    }
});
