import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    height: Dimensions.get('window').height / 10,
    borderRadius: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: 'gray',
    borderWidth: 1,
  },
  image: {
    flex: 0.25,
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    flex: 1,
    alignSelf: 'center',
    paddingLeft: 10,
    color: 'black',
  },
});

export default styles;
