import React , {Component} from 'react';
import {View,Button} from 'react-native';
import {connect} from 'react-redux';
import {addPlace} from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';

class SharePlaceScreen extends Component {
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }
    render(){
        return(
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                {/* <Button
                title="Toggle"
                onPress={(btnId) => this.navigationButtonPressed(btnId)}
                /> */}
            </View>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName))
    }
}

export default connect(null,mapDispatchToProps)(SharePlaceScreen);