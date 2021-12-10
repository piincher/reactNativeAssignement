import React from 'react'
import { TextInput,StyleSheet,View} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

const SearchBar = ({onTermChange,searchField,addItem}) => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={searchField}
            placeholder='search'
            onChangeText={onTermChange}
            />
            <AntDesign name="plussquareo" style={styles.iconStyle} onPress={addItem}/>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    inputStyle:{
        flex:1,
        fontSize:18,
    },
    backgroundStyle:{
    marginTop: 100,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom:10
    },
    iconStyle:{
        alignSelf:'center',
        marginHorizontal:15,
        fontSize:35,
    }
})

export default SearchBar