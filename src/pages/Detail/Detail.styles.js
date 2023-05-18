import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9bbbb',
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height * 0.4,
  },
  textMargin: {
    margin: 5,
  },
  title: {
    color: '#682424',
    fontWeight: '900',
    fontSize: 32,
  },
  subtitle: {
    color: '#682424',
    fontWeight: '900',
    fontSize: 25,
  },
  line: {
    borderColor: '#ac7d7d',
    borderWidth: 0.7,
    marginVertical: 10,
  },
  details: {
    fontSize: 18,
    color: 'black',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
