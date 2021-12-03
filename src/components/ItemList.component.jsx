import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'


const ItemList = ({ data }) => {
    return (
        <View>
            <FlatList data={data} keyExtractor={data => data.product} renderItem={({ item }) => {
                return <Text>{item.product}</Text>
            }} />
        </View>
    )
}

const styles = StyleSheet.create({})
export default ItemList