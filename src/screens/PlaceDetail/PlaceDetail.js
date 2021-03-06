import React, { Component } from "react";
import {
  View,Image,Text,StyleSheet,TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { deletePlace } from "../../store/actions/index";
class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    const { navigation } = this.props;
    const selectedPlace =navigation.getParam('selectedPlace');
    this.props.onDeletePlace(selectedPlace.key);
    navigation.goBack();
  }
  render() {
    const { navigation } = this.props;
    const selectedPlace =navigation.getParam('selectedPlace');
    return (
      <View style={styles.container}>
        <View>
          <Image source={selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(null , mapDispatchToProps)(PlaceDetail);
