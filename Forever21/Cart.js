import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions ,removePerson} from 'react-native';
var { width } = Dimensions.get("window")
import { connect } from "react-redux";
// import { add1,add2, addPerson, pluscart,minuscart,  } from "./src/acctions/people";
import AsyncStorage from '@react-native-community/async-storage';

// import icons
import Icon from 'react-native-vector-icons/Ionicons';

class Cart extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       dataCart:[],
     };
  }

  onAddPeople() {
    this.props.dispatchAdd(this.state.count);
  }
  onPlusCart() {
    this.props.dispatchPlus(this.state.count);
  }
  onMinusCart() {
    this.props.dispatchMinus(this.state.count);
  }
  componentDidMount()
  {
    AsyncStorage.getItem('cart').then((cart)=>{
      if (cart !== null) {
        // We have data!!
        const cartfood = JSON.parse(cart)
        this.setState({dataCart:cartfood})
      }
    })
    .catch((err)=>{
      alert(err)
    })
  }

  render() {
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         {/* <View style={{height:20}} />
         <Text style={{fontSize:32,fontWeight:"bold",color:"#33c37d"}}>Cart Forever21</Text>
         <View style={{height:10}} /> */}

         <View style={{flex:1}}>

           <ScrollView>
             {
               this.state.dataCart.map((item,i)=>{
                return(
                  <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                    <Image resizeMode={"contain"} style={{width:width/3,height:width/3}}
                      //  source={{uri: item.image}}
                      source={{ uri: "https://file.hstatic.net/1000197303/file/mot-chiec-ao-len-oversize-la-sieu-sinh-cho-mua-dong-lanh-gia_b63e823732c748dda062dcc8b5db9aa5.jpg" }} 
                       />
                    <View style={{flex:1, backgroundColor:'trangraysparent', padding:10, justifyContent:"space-between"}}>
                      <View>
                        <Text style={{fontWeight:"bold", fontSize:20}}>{item.name}</Text>
                        <Text>SIZE : {item.size}</Text>
                      </View>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold',color:"black",fontSize:20}}>${item.price*item.quality}</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                            <Icon name="ios-remove-circle" size={35} color={"black"} />
                          </TouchableOpacity>
                          <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:18}}>{item.quality}</Text>
                          <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                            <Icon name="ios-add-circle" size={35} color={"black"} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                )
               })
             }

             <View style={{height:20}} />

             <View style={{height:20}} />
           </ScrollView>

         </View>

      </View>
    );
  }

  onChangeQual(i,type)
  {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quality;

    if (type) {
     cantd = cantd + 1
     dataCar[i].quality = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     dataCar[i].quality = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd==1){
     dataCar.splice(i,1)
     this.setState({dataCart:dataCar})
    }
  }
}
function mapStateToProps(store) {
  return {
    listUser: store.people.user,
    count: store.people.count,
    counttest: store.people.counttest
  };
}


function mapDispatchToProps(dispatch) {
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person)),
    dispatchRemovePerson: (person) => dispatch(removePerson(person)),
    dispatchAdd: (add) => dispatch(add1(add)),
    dispatchPlus: (plus) => dispatch(pluscart(plus)),
    dispatchMinus: (minus) => dispatch(minuscart(minus)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);


