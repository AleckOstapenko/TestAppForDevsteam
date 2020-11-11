import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import styles from '../../styles';
import unsplashService from '../../actions';
import {connect} from 'react-redux';

class Picture extends Component {
 
  render() {
    const picture=this.props.route.params.urlPicture.full;
    return (
        <View style={styles.container}>
          <Image style={styles.fullImage} source={{uri: picture}} />
          <StatusBar style="auto" /> 
        </View>
      );
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.items,
      item: state.item,
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = {
  unsplashService
} 

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
