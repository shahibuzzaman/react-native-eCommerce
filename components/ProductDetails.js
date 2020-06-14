import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

export default function DetailsScreen({route, navigation}) {
  /* 2. Get the param */
  const {itemId} = route.params;
  const {otherParam} = route.params;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const api =
    'https://fadoll.com/wc-api/v3/products/' +
    itemId +
    '/?consumer_key=ck_dd172b0edbf112bd76904a6112291370a4403aaf&consumer_secret=cs_b989504ffc25f1e7e538e107001c1091871557dc';

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => setData(json.product))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const styles = {
    container: {
      flex: 1,

      backgroundColor: 'white',
    },
    productImg: {
      width: 200,
      height: 200,
    },
    name: {
      fontSize: 24,
      color: '#696969',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
    },
    price: {
      marginTop: 10,
      fontSize: 18,
      color: 'green',
      fontWeight: 'bold',
    },
    description: {
      textAlign: 'center',
      marginTop: 10,
      color: '#696969',
    },
    star: {
      width: 40,
      height: 40,
    },
    btnColor: {
      height: 30,
      width: 30,
      borderRadius: 30,
      marginHorizontal: 3,
    },
    btnSize: {
      height: 40,
      width: 40,
      borderRadius: 40,
      borderColor: '#778899',
      borderWidth: 1,
      marginHorizontal: 3,
      backgroundColor: 'white',

      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    starContainer: {
      justifyContent: 'center',
      marginHorizontal: 30,
      flexDirection: 'row',
      marginTop: 20,
    },
    contentColors: {
      justifyContent: 'center',
      marginHorizontal: 30,
      flexDirection: 'row',
      marginTop: 20,
    },
    contentSize: {
      justifyContent: 'center',
      marginHorizontal: 30,
      flexDirection: 'row',
      marginTop: 20,
    },
    separator: {
      height: 2,
      backgroundColor: '#eeeeee',
      marginTop: 20,
      marginHorizontal: 30,
    },
    shareButton: {
      marginTop: 10,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#00BFFF',
    },
    shareButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    addToCarContainer: {
      marginHorizontal: 30,
    },
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center', marginHorizontal: 30, margin: 20}}>
          <Image
            style={styles.productImg}
            source={{
              uri: data.featured_src,
            }}
          />
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.price}>{data.price} ৳</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec
          </Text>
        </View>

        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => this.clickEventListener()}>
            <Text style={styles.shareButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
