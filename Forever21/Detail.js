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

const Detail = ({route}) => {
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
  const scroll_y = useRef(new Animated.Value(0)).current;
  

  const _diff_clamp_scroll_y = Animated.diffClamp(scroll_y, 0, 50)

    const _header_height = Animated.interpolateNode( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [50, 0],
      extrapolate: 'clamp'
    })

    const _header_translate_y = Animated.interpolateNode( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    })

    const _header_opacity = Animated.interpolateNode( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
  return (
    <View>
      <SafeAreaView style={styles.safe_area_view}>
        <Animated.View
          style={[
            styles.header,
            {
              height: _header_height,
              transform: [{translateY: _header_translate_y}],
              opacity: _header_opacity
            }
          ]}
        >
          <Image 
            source={{ uri: "https://file.hstatic.net/1000197303/file/mot-chiec-ao-len-oversize-la-sieu-sinh-cho-mua-dong-lanh-gia_b63e823732c748dda062dcc8b5db9aa5.jpg" }}
            style={{width: 152, height: 30}}
          />
          <View style={styles.fake_icon_box}>
            <Icon name="search" size={22} color="#000000" />
          </View>
        </Animated.View>
        <Animated.ScrollView
          style={[
            styles.scroll_view,
            {

            }
          ]}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={5}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: scroll_y }}
            }
          ])}
        >
          <Image
          style={styles.banner}
          source={{ uri: "https://file.hstatic.net/1000197303/file/mot-chiec-ao-len-oversize-la-sieu-sinh-cho-mua-dong-lanh-gia_b63e823732c748dda062dcc8b5db9aa5.jpg" }}
          />
          <View >   
            <View style={{ marginRight: 100, marginVertical: 10 }}>
                <Text style={{  marginLeft : 15 ,fontSize: 30, fontWeight: 'bold' }}>{price}$</Text>
                <View style={{ paddingRight: 200, marginLeft: 10, marginBottom: 10 }}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={star}
                    selectedStar={onStarRatingPress}
                    // starStyle={{ color: 'grey', fontSize: 25 }}
                    StarColor='red'
                    starSize={25}
                  />
                </View>
            </View>
            <View style={{ marginRight: 100, marginVertical: 0 }}>
              <Text style={{  marginLeft : 15 , fontSize: 19, fontWeight: '100' }}>{name}</Text>
            </View>
            <View style={{ marginRight: 100, marginVertical: 10 }}>
              <Text style={{ marginLeft: 10, fontSize: 19, fontWeight: '100' }}>{size}</Text>
            </View>
        </View>
        <DummyText />

        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create ({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner:{
    height: 350,
    width: '200%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  fake_icon_box: {
    backgroundColor: '#e4e6eb',
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8
  }
});

export default Detail;