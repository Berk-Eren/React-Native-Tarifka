import {View, ImageBackground, Text} from 'react-native';
import styles from './MealCard.styles';

const MealCard = function () {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: 'https://www.makbul.com/Content/global/images/products/2/244/ORG-gullu-lokum-kg394.jpg',
        }}>
        <Text style={styles.text}>Hello</Text>
      </ImageBackground>
    </View>
  );
};

export default MealCard;
