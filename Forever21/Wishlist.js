import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StarRating from 'react-native-star-rating';
import DummyText from './DummyText';
import TopNavigation from './TopNavigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Animated, { Easing } from 'react-native-reanimated'
import CartView from './Components/componentsredux/CardView'

const Wishlist = ({route}) => {
  const { Value, timing } = Animated
  const navigation = useNavigation();
  const {price ,size ,name ,star ,image} = route.params;
  const onMoveToDetail = () => {
    navigation.navigate('Home')
  }
  const onStarRatingPress = (item) => {
    console.log('item', item)
    setStar(item)
  }
  return (
    <CartView style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
        <Image  
        source={{ uri: "https://file.hstatic.net/1000197303/file/mot-chiec-ao-len-oversize-la-sieu-sinh-cho-mua-dong-lanh-gia_b63e823732c748dda062dcc8b5db9aa5.jpg" }}
        style={{ width: 100, height: 100, }} />
        <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, }}>{name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{price}</Text>
            <Text style={{ fontSize: 19, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{price}</Text>
          </View>
          <Text style={{ textAlign: 'center', width: 50, borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
            50%
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
          </View>
        </View>
      </CartView>
  )
}

const styles = StyleSheet.create({
  wishlistIcon: {
    marginRight: 5,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1
  },

});
export default Wishlist;