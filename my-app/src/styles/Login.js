import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

container:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
},

view:{
  flex: 1, 
  backgroundColor:'white',
  marginTop: hp('5%'), 
},

title:{
  textAlign: 'center', 
  fontSize: hp('10%'),
},

subtitle:{
  fontSize: hp('3%'), 
  marginLeft: hp('33%'), 
  paddingBottom: hp('3%'),
},

type:{
  color:'black',
  fontSize: hp('3%'),
  fontWeight: "bold"
},

description:{
  color:'gray',
  fontSize: hp('2.2%'), 
},

button:{
  flex: 1,
    alignItems: 'center',
    padding: hp('2%'),
    marginTop: hp('3%'),
    backgroundColor: '#F8CC8F',
    width: wp('82.5%'),
    marginLeft: hp('5%'), 
},

image: {
  flex: 1,
  marginTop: hp('0%'),
  marginLeft: hp('9,5%'),
  resizeMode: 'contain',
},

textButton:{
  color:'black',
  fontWeight: 'bold'
},

textNovaConta: {
  textAlign: 'center',
  marginTop: hp('1%')
},

textCadastro: {
  fontWeight: 'bold',
  textDecorationLine: 'underline'
},

textSpace: {
  textDecorationLine: 'line-through'
}

});

export default styles;