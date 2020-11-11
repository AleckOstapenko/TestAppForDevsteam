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
    },
    fullImage: {
      resizeMode: "contain",
      height: "100%",
      width: "100%"
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
  });

export default styles;  