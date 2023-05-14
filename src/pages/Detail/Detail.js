import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from './Detail.styles';

const Stack = createNativeStackNavigator();

const Details = ({route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/08/kasibeyaz-bosphorus-subat-2020.jpg',
          }}
        />
        <Text style={styles.title}>{route.params?.title}</Text>
        <Text style={styles.subtitle}>Subtitle</Text>
        <View style={styles.line}></View>
        <Text style={styles.details}>Details</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
