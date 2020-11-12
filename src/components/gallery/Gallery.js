import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import styles from '../../styles';
import unsplashService, {nextPage, prevPage} from '../../actions';
import {connect} from 'react-redux';

class Gallery extends Component {
    componentDidMount() {
       this.props.unsplashService(this.props.page);
    } 
    
    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page) {
             this.props.unsplashService(this.props.page);                 
         }
    }

    onNextPage() {
        this.props.nextPage();
    }

    onPrevPage() {
        this.props.prevPage();
    }
 
    render() {           
        const {loading, error, items} = this.props;
        
        if (error) {
            return (
                <View style={styles.info}>
                    <Text style={styles.infoText,styles.red}>{error}</Text>
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

        const content = items.map((item) => {
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
       
        const PrevButton = () => {
            console.log(this.props.page);
            if (this.props.page===1) {
                return (
                    <TouchableOpacity style={styles.button, styles.disableButton}>
                        <Text style={styles.buttonText}>Prev Page</Text>
                    </TouchableOpacity>
                )
                }     
            return (
                <TouchableOpacity style={styles.button, styles.colorPrev} onPress={() => this.onPrevPage()}>
                    <Text style={styles.buttonText}>Prev Page</Text>
                </TouchableOpacity>
            )
        }

        return (
            <>
                <View style={styles.buttonContainer}>
                {PrevButton()}
                <Text style={styles.pageText}>Page {this.props.page}</Text> 
                <TouchableOpacity style={styles.button, styles.colorNext} onPress={() => this.onNextPage()}>
                    <Text style={styles.buttonText}>Next Page</Text>
                </TouchableOpacity> 
                </View>  
                
                <ScrollView>
                    <View style={styles.container}>
                        {content}
                        <StatusBar style="auto" /> 
                    </View>
                </ScrollView>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        page: state.page,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = {
    unsplashService,
    nextPage,
    prevPage
} 

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)