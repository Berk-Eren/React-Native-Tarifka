import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './CategoryCard.styles';

const CategoryCard = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={props.onPress}>
      <Image
        crossOrigin="use-credentials"
        source={{uri: props.img_url}}
        style={styles.image}
      />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
