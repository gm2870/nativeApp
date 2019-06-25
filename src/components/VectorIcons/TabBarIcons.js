import React ,{Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
class TabBarIcons extends Component {
    render(){
        const { name, color, size } = this.props;
        return(
            <Ionicons
            style={{ width: 24, height: 24, margin: 5 }}
            name={name}
            size={size} 
            color={color}
        />
        );
    }
}
 
export default TabBarIcons ;