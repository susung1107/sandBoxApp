import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// components
import SearchField from '../components/searchField/SearchField';

const HomeScreen = () => {
  const [openSearch, setOpenSearchField] = useState(false);

  const showSearchField = () => {
    setOpenSearchField(true);
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.searchContainer]}>
        <TouchableOpacity
          style={[styles.searchform]}
          onPress={() => showSearchField()}>
          <Text style={[styles.searchText]}>검색어를 입력해주세요</Text>
        </TouchableOpacity>
      </View>
      <View>{openSearch && <SearchField />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingTop: 20,
  },
  searchform: {
    backgroundColor: '#f3f3f3',
    borderRadius: 7,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  searchText: {
    fontSize: 15,
    letterSpacing: -0.8,
    lineHeight: 21,
    color: '#aaa',
  },
});

export default HomeScreen;
