import {
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native';
import MealCard from '../../components/MealCard';

import styles from './Category.styles';

const Meals = ({navigation, route}) => {
  const meals = ['beef', 'beef', 'beef', 'beef'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {meals.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.navigate('Details', {title: 'Hello'})}>
            <View>
              <MealCard />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Meals;
