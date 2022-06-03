import React from 'react';
import {Text, Image, View, Button} from 'react-native'
import { STRING_HEADER } from '../global/strings';
import {styles} from './styles';

const Header = ({subtitle, call=() => {}}) => {
    //Un return solo puede retornar un elemento o un padre
    return (
        <View style={styles.header}>
           <Text style={styles.textTitle}>{STRING_HEADER.headerTitle}</Text>  
           <Text>{subtitle}</Text>
           <Button onPress={() => call(subtitle)} style={styles.button}>Image</Button>
        </View>
    );
}
export default Header;