import React, {useState, useEffect} from 'react';

import {View, Text, FlatList} from 'react-native';

const DetailsScreen = ({route, navigation}) => {
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
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const keyExtractor = (item) => String(item.id);

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 10}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
