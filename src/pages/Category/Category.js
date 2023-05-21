import {
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native';
import MealCard from '../../components/MealCard';
import LoadingWrapper from '../../components/LoadingWrapper';

import styles from './Category.styles';

import useFetch from '../../hooks/useFetch';

const Meals = ({navigation, route}) => {
  const [isLoading, data, error] = useFetch(
    'GET',
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.title}`,
  );

  return (
    <SafeAreaView style={styles.container}>
      <LoadingWrapper isLoading={isLoading} error={error}>
        {data.meals && (
          <ScrollView style={styles.scrollView}>
            {data.meals.map(item => (
              <TouchableWithoutFeedback
                key={item.idMeal}
                onPress={() =>
                  navigation.navigate('Details', {
                    title: item.strMeal,
                    mealId: item.idMeal,
                  })
                }>
                <View>
                  <MealCard
                    mealName={item.strMeal}
                    mealUri={item.strMealThumb}
                  />
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        )}
      </LoadingWrapper>
    </SafeAreaView>
  );
};

export default Meals;
