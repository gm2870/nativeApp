import React from 'react';
import {Text , View , StyleSheet , TouchableOpacity , Image} from 'react-native';

const listItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image style={styles.placeImage} source={props.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
    
);

const styles = StyleSheet.create({
    listItem:{
        width:'100%',
        padding:10,
        backgroundColor:'#eee',
        marginBottom:5,
        flexDirection:'row',
        alignItems:'center'
    },
    placeImage:{
        marginRight:8,
        width:30,
        height:30

    }
});
export default listItem ;