import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name= 'search' />
            <TextInput 
            value={term} 
            onChangeText={(newTerm) => onTermChange(newTerm)} 
            onEndEditing={() => onTermSubmit()}
            style={styles.inputStyle} placeholder="search" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }


});

export default SearchBar;