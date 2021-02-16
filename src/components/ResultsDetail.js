import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    console.log(result);
    return(
        <View style={{marginLeft:15}}>
            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.name} >{result.name}</Text>
            <Text> {result.rating} stars {result.review_count} reviews </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 10
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;