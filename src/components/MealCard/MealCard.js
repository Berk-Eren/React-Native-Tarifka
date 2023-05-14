import {View, ImageBackground, Text} from 'react-native';
import styles from './MealCard.styles';

const MealCard = function (props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: props.mealUri,
        }}>
        <Text style={styles.text}>{props.mealName}</Text>
      </ImageBackground>
    </View>
  );
};

export default MealCard;
