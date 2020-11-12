import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      width: "100%",
      flexWrap: 'wrap'
    },
    thumb: {
      resizeMode: "contain",
      height: 170,
      width: 300
    },
    image:{
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: 20  
    },
    fullImage: {
      resizeMode: "contain",
      height: "100%",
      width: "100%"
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      flexWrap: 'wrap',
      marginBottom: 10,
      justifyContent: "center"
    },
    button: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      flexWrap: 'wrap',
      width: 100
    },
    colorNext: {
      backgroundColor: "#2E8B57",
    },
    colorPrev: {
      backgroundColor: "#008080",
    },
    buttonText: {
      fontSize: 20,
      color: "#FFFFFF",
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    infoText: {
      fontSize: 40
    },
    red: {
      color: 'red',
    },
    pageText: {
      fontSize: 20,
      color: "#000000",
      fontFamily: "Roboto",
      marginLeft: 10,
      marginRight: 10
    },
    disableButton: {
      backgroundColor: "#DCDCDC"
    }
  });

export default styles;  