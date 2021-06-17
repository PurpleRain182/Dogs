import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  image: {
    height: 200,
    width: null,
    flex: 1
  },

  shareIcon: {
    color: 'blue',
  },

  uploadImage: {
    flex: 1,
    resizeMode: 'contain',
    width: wp('30%'), 
    height: hp('25%'),
    marginTop: 100, 
    marginLeft: 120
  },

  uploadText: {
    flex: 1,
    alignContent: 'center',
    marginBottom: 150,
    marginTop: 0
  },

  uploadButton: {
    backgroundColor: '#F8CC8F',
    marginLeft: 20
  },

});

export default styles;