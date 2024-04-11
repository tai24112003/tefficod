import {
  Dimensions,
  StyleSheet,
} from "react-native";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  ImageBackground: {
    height: "100%",
    width: "100%",
  },
  View: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0.07 * windowHeight,
  },
  TextInput: {
    flexDirection: "row",
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    width: "80%",
    marginVertical: "2%",
    height: "35",
    borderRadius: 50,
    padding: 10,
  },

  viewBtn: {
    marginTop: 0.05 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  textSignIn: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnSignIn: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "80%",
    borderRadius: 50,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  imageLogo: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },

  viewProfile: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    // marginTop: 40,
  },
  imgBackground: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.12,
    borderRadius: 10,
  },
  avatar: {},
  imgAvatar: {
    marginTop: -50,
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0093B0",
  },
  info: {
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 10,
    width: windowWidth * 0.75,
    height: windowHeight * 0.23,
  },
  option: {
    width: windowWidth * 0.7,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  textOption: {
    color: "#0093B0",
    fontSize: 18,
  },
  line: {
    borderBottomWidth: 1,
    opacity:0.1,
    width: "95%",
  },
  logOut: {
    padding: 15,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 10,
    width: windowWidth * 0.75,
    height: windowHeight * 0.075,
  },
  textLogOut: {
    fontSize: 18,
    color: "red",
  },
  back: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
    marginLeft:10
  },
  iconBack: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0093B0",
  },
  textBack: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0093B0",
  },
  textEditProfile:{
    width:'100%',
    alignItems:'flex-start'
  },
  styleTextEdit:{
    margin:10,
    fontWeight:'bold',
    fontSize:25
  },
  editInfo:{
    justifyContent: "space-around",
    alignItems: "center",
    width: windowWidth * 0.95,
    height: windowHeight * 0.35,
  },
  editOption:{
    paddingLeft:20,
    alignItems:'flex-start',
    flexDirection:'row',
    width:'100%',

  },
  inputEdit:{
    paddingLeft:10,
    width:'100%',
    height:'100%'
  },
  btnSave:{
    marginTop:30,
    backgroundColor:'#0093B0',
    width:windowWidth*0.5,
    height:windowHeight*0.06,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  textSave:{
    color:'white',
    fontSize:18
  },
  textTitle:{
    width:'90%',

  },
  inputChange:{
    paddingHorizontal:10,
    borderColor:'rgba(128, 128, 128, 0.2)',
    borderRadius:10,
    borderWidth:1,
    width:'90%',
    height:'17%'
},
viewAbout:{
    marginTop:windowHeight*0.05,
    alignItems: "center",
    justifyContent: "center",
},
version:{
    marginTop:30,
    flexDirection:'row',
    width:'100%',
    height:'12%',
    borderBottomWidth:1,
    borderTopWidth:1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    borderColor:'rgba(128, 128, 128, 0.2)',
},
about:{
    alignItems:'center',
    marginTop:30,
    width:'100%',
    height:'38%',
    borderBottomWidth:1,
    borderTopWidth:1,
    justifyContent:'space-between',
    borderColor:'rgba(128, 128, 128, 0.2)',
},
detailAbout:{
    width:'100%',   
    height:'33.333%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10
}
});
export default styles;
