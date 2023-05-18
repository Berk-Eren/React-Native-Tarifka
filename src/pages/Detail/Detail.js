import {
  SafeAreaView,
  View,
  Linking,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './Detail.styles';

import useFetch from '../../hooks/useFetch';

const Details = ({route}) => {
  const [isLoading, data, error] = useFetch(
    'GET',
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.mealId}`,
  );
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      {data.meals && (
        <ScrollView>
          <Image
            style={styles.image}
            source={{
              uri: data.meals[0].strMealThumb,
            }}
          />
          <Text style={[styles.title, styles.textMargin]}>
            {data.meals[0].strMeal}
          </Text>
          <Text style={[styles.subtitle, styles.textMargin]}>
            {data.meals[0].strArea}
          </Text>
          <View style={[styles.line, styles.textMargin]}></View>
          <Text style={[styles.details, styles.textMargin]}>
            {data.meals[0].strInstructions}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(data.meals[0].strYoutube)}>
            <Text style={styles.buttonText}>Watch Youtube</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Details;
