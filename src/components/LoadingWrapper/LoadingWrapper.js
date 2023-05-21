import Loading from '../Loading';
import {Alert} from 'react-native';

const LoadingWrapper = props => {
  const {isLoading, error} = props;

  if (isLoading) return <Loading />;
  if (error) Alert.alert('Error', error.message);

  return props.children;
};

export default LoadingWrapper;
