import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../../src/hooks/useResults';
import ResultsList from '../../src/components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState ('');
    const [results, errorMessage, searchApi] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    

    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onTermChange = {(newTerm) => setTerm(newTerm)}
                onTermSubmit = {() => searchApi(term)}
            />
            <ScrollView>
                <ResultsList
                 results={filterResultsByPrice('$')} 
                 title='Cost Effective'
                 />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title='Pricier'
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title='Expensive'
                />
                {errorMessage ? <Text>{errorMessage}</Text>:null}
            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;