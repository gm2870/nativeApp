import React ,{Component} from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

class placeList extends Component {
  render() {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.places}
        renderItem={(info) => (
          <ListItem
            placeName={info.item.name}
            placeImage={info.item.image}
            onItemPressed={() => this.props.onItemSelected(info.item.key)  }
          />
        )}
      />
    );
  }

};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
