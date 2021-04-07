import React, {useState, useEffect , useRef} from 'react';
import {View, Text, StatusBar ,SafeAreaView,StyleSheet,
  Image,
  ScrollView} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {TOPNAVI_H, BANNER_H} from './constants';
import Icon from 'react-native-vector-icons/Ionicons'
import Animated, { Easing } from 'react-native-reanimated'


const TopNavigation = props => {
  const { Value, timing } = Animated
  const safeArea = useSafeArea();

  const {title, scrollA} = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);
  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener(a => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });
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

    return(
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
          <View style={[styles.fake_post, {backgroundColor: '#222222'}]} />
          <View style={[styles.fake_post, {backgroundColor: '#333333'}]} />
          <View style={[styles.fake_post, {backgroundColor: '#444444'}]} />
          <View style={[styles.fake_post, {backgroundColor: '#555555'}]} />
          <View style={[styles.fake_post, {backgroundColor: '#666666'}]} />

        </Animated.ScrollView>
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  
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
  scroll_view: {
    flex: 1
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8
  }
})

export default TopNavigation;
