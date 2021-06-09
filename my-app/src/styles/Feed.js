import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  
  image:{
    height: 200, 
    width: null, 
    flex: 1
  },

  shareIcon:{
    color:'blue',
  }

});

export default styles;