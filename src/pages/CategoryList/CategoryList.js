import {ScrollView, SafeAreaView} from 'react-native';
import Card from '../../components/CategoryCard';
import styles from './CategoryList.style';
import useFetch from '../../hooks/useFetch';

const Categories = ({navigation}) => {
  const [isLoading, data, error] = useFetch(
    'GET',
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  const meals = ['beef', 'steak', 'a', 'b', ...'helfdsdfsdfsdfadsfadffsdlo'];
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      {data.categories && (
        <ScrollView>
          {data.categories.map((item, index) => {
            return (
              <Card
                title={item.strCategory}
                key={item.idCategory}
                onPress={() => {
                  navigation.push('Meals', {title: item.strCategory});
                }}
                img_url={item.strCategoryThumb}
              />
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Categories;
