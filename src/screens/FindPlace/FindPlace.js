import React , {Component} from 'react';
import {View ,Text} from 'react-native';
import {connect} from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
class FindPlaceScreen extends Component {
    onItemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });
        this.props.navigation.navigate('PlaceDetailScreen');
        // Navigation.push(this.props.componentId, {
        //     component: {
		// 	  name: 'awesome-places.PlaceDetailScreen',
		// 	  passProps:{
		// 		  selectedPlace:selPlace
		// 	  },
		// 	  options: {
		// 		topBar: {
		// 		  title: {
		// 			text: selPlace.name
		// 		  }
		// 		}
		// 	  }
        //     }
        // });
    }
    render(){
        return(
            <View>
                <PlaceList onItemSelected={this.onItemSelectedHandler} places={this.props.places} />
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        places:state.places.places
    }
}
export default connect(mapStateToProps)(FindPlaceScreen);