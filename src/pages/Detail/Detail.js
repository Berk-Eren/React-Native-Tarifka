import {
  SafeAreaView,
  View,
  Linking,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';

import styles from './Detail.styles';
import LoadingWrapper from '../../components/LoadingWrapper';

import useFetch from '../../hooks/useFetch';

const Details = ({route}) => {
  const [refreshCounter, setRefreshCounter] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const [isLoading, data, error] = useFetch(
      'GET',
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.mealId}`,
    );
  }, [refreshCounter]);

  const resendRequest = () => {
    setRefreshCounter(val => val);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoadingWrapper isLoading={isLoading} error={error}>
        {data.meals && (
          <ScrollView
            refreshControl={<RefreshControl onRefresh={resendRequest} />}>
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
      </LoadingWrapper>
    </SafeAreaView>
  );
};

export default Details;
