import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
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
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  add: {
    backgroundColor: "#F8CC8F",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
});

export default styles;