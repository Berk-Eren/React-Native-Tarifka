import {View, Text, Button, ScrollView, SafeAreaView} from 'react-native';
import Card from '../../components/CategoryCard';
import styles from './CategoryList.style';

const Categories = ({navigation}) => {
  const meals = ['beef', 'steak', 'a', 'b', ...'helfdsdfsdfsdfadsfadffsdlo'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {meals.map((item, index) => {
          return (
            <Card
              title={item}
              key={index}
              onPress={() => {
                navigation.push('Meals', {title: item});
              }}
              img_url="https://w7.pngwing.com/pngs/607/104/png-transparent-googleplex-google-logo-google-search-oliver-atom-text-logo-business.png"
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
