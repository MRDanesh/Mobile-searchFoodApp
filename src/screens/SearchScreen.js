import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../../src/api/yelp';

const SearchScreen = () => {

    const [term, setTerm] = useState ('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params:{
                limit: 50,
                term,
                location: 'Montreal'
            }
        });
        setResults(response.data.businesses);
    };
    

    return (
        <View style={styles.background}>
            <SearchBar 
            term={term} 
            onTermChange = {(newTerm) => setTerm(newTerm)}
            onTermSubmit = {() => searchApi()}
            />
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