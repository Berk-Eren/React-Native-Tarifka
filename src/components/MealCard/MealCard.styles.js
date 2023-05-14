import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    height: 200,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  text: {
    textAlign: 'right',
    backgroundColor: '#00000085',
    color: 'white',
    paddingRight: 10,
    fontWeight: '700',
    fontSize: 45,
    textTransform: 'capitalize',
  },
});

export default styles;
