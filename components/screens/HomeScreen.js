import React, {useState, useEffect} from 'react';

import {View, Text, FlatList} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const api =
    'https://fadoll.com/wp-json/wc/v3/products/categories?consumer_key=ck_dd172b0edbf112bd76904a6112291370a4403aaf&consumer_secret=cs_b989504ffc25f1e7e538e107001c1091871557dc&fbclid=IwAR0JNrFqrfP5tvhAvrMONJ6i44fEKqNAqiVlC1WKhPtdVDOmQn5DQht481c';

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            categorySlug: item.slug,
          });
        }}>
        <View
          style={{
            height: 120,
            width: 130,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            margin: 2,
          }}>
          <Text style={{fontSize: 16}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item) => String(item.id);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 200,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
          }}>
          Slide
        </Text>
        {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      </View>
      <View style={{padding: 10}}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
