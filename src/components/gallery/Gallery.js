import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {StatusBar} from 'expo-status-bar';
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

    render() {           
        const {loading, error, items} = this.props;
        
        if (error) {
            return (
                <View style={styles.info}>
                    <Text style={styles.infoText,styles.res}>{error}</Text>
                    <StatusBar style="auto" /> 
                </View>
            );
        }
        
        if (loading) {
            return (
                <View style={styles.info}>
                    <Text style={styles.infoText}>Loading...</Text>
                    <StatusBar style="auto" /> 
                </View>
            );
        }       

        const content=items.map((item) => {
            const {id, urls, user} = item;
            const thumb = urls.thumb;
            const full = urls.full;
                                   
             return (
                <View style={styles.image} key={id.substr(0,4)}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {urlPicture: {full}})} >
                        <Image key={id} style={styles.thumb} 
                            source={{uri: thumb}} />
                    </TouchableOpacity>    
                    <Text>{user.name}</Text>
                </View>                    
             )
        })
       
        return (
            <ScrollView>
                <View style={styles.container}>
                    {content}
                    <StatusBar style="auto" /> 
                </View>
            </ScrollView>
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