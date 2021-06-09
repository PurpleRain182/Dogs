import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  view: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: hp('3%'),
    paddingRight: hp('5%'),
    paddingLeft: hp('5%')
  },

  image: {
    flex: 1,
    marginTop: hp('0%'),
    marginLeft: hp('7.5%'),
    resizeMode: 'contain',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    padding: hp('2%'),
    marginTop: hp('3%'),
    backgroundColor: '#F8CC8F',
    width: wp('82.5%'),
    marginLeft: hp('5%'),
  },

  textButton: {
    color: 'black',
    fontWeight: 'bold'
  },

  textCadastro: {
    marginTop: hp('3%'),
    textAlign: 'center'
  },

  textCadastro1: {
    textAlign: 'center',
    fontWeight: 'bold'
  },

});

export default styles;