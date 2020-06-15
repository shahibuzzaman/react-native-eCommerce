import React, {useState, useEffect} from 'react';

import {Button, Card, Icon} from 'react-native-elements';
import SnackBar from 'react-native-snackbar-component';
import {postCart} from '../actions';
import {connect} from 'react-redux';
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Products from './Products';

const ProductsScreen = ({route, navigation}) => {
  const {categorySlug} = route.params;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const api =
    'https://fadoll.com/wc-api/v3/products/?&filter[category]=' +
    categorySlug +
    '&consumer_key=ck_dd172b0edbf112bd76904a6112291370a4403aaf&consumer_secret=cs_b989504ffc25f1e7e538e107001c1091871557dc';

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={{padding: 0}}>
        <Products item={item} navigation={navigation} />
      </View>
    );
  };

  const keyExtractor = (item) => String(item.id);

  return (
    <View style={{flex: 1}}>
      <View style={{}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};

export default connect(null, {postCart})(ProductsScreen);
