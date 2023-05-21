import {ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <ActivityIndicator
      size={150}
      color="blue"
      style={{alignSelf: 'center', flex: 1}}
    />
  );
};

export default Loading;
