import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles';
import unsplashService from '../../actions';
import {connect} from 'react-redux';

class Gallery extends Component {
    componentDidMount() {
       this.props.unsplashService(0);
    } 
    
    componentDidUpdate(prevProps) {
         if (JSON.stringify(this.props.items)!==JSON.stringify(prevProps.items)) {
             this.props.unsplashService(0);                 
         }
    }

    Picture =({route, navigation}) => {
        console.log(route);
        console.log(navigation);  
        return (
            <View style={styles.container}>
              <Text>Picture Screen</Text>
              <StatusBar style="auto" /> 
            </View>
          );  
    }

    render() {           
        const content=this.props.items.map((item) => {
            const {id, urls, user} = item;
            // console.log(id, urls.thumb, user.name);
                       
             return (
                <View style={styles.image} key={id.substr(0,4)}>
                    <Image key={id} style={styles.thumb} 
                        source={{uri: urls.thumb}}
                        onClick={() => navigation.navigate('Picture', {idPicture: {id}})} />
                    <Text>{user.name}</Text>
                </View>                    
             )
        })
       
        return (
        <View style={styles.container}>
            {content}
            <StatusBar style="auto" /> 
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        item: [],
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = {
    unsplashService
} 

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)