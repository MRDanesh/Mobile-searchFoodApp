import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../../src/hooks/useResults';

const SearchScreen = () => {

    const [term, setTerm] = useState ('');
    const [results, errorMessage, searchApi] = useResults();
    
    

    return (
        <View style={styles.background}>
            <SearchBar 
            term={term} 
            onTermChange = {(newTerm) => setTerm(newTerm)}
            onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>:null}
            <Text>We found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default SearchScreen;