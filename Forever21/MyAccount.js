import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert , Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';


const MyAccountScreen = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const gotoSignIn = () => {
        navigation.navigate('SignIn')
    }
    const gotoSignUp = () => {
        navigation.navigate('SignUp')
    }
  return (
    <ScrollView>
    <View style= {styles.backgroundtop}>
        <View style={{ paddingTop: 40, flex: 1 }}>
            <View style={{ paddingHorizontal: 50 }}>
                <Text style={styles.text}>SIGN IN TO SAVE, SHOP AND VIEW ORDERS.</Text>
                <TouchableOpacity style={styles.signin} onPress = {() => { gotoSignIn()}}>
                <Text style={styles.textsignin}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.join} onPress = {() => { gotoSignUp()}}>
                <Text style={styles.textjoin}>JOIN</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
            <TouchableOpacity style={styles.trackorder}>
                <Text style={styles.texttrackorder}>TRACK ORDER</Text>
                <Text style={styles.texttrackorder1}>Track Order and view detail</Text>
                
            </TouchableOpacity>
            <View style={{ borderTopWidth: 1, marginTop: 1, borderColor: '#b3b3b3' }}></View>
            <TouchableOpacity style={styles.trackorder1}>
                <Text style={styles.texttrackorder}>FOREVER 21 CREDIT CRAD</Text>
                <Text style={styles.texttrackorder1}>Manager Forever 21 credit crad</Text>
                
            </TouchableOpacity>
            <View style={{ borderTopWidth: 1, borderColor: '#b3b3b3' }}></View>
            <TouchableOpacity style={styles.trackorder1}>
                <Text style={styles.texttrackorder}>FOREVER 21 VISA CREDIT CRAD</Text>
                <Text style={styles.texttrackorder1}>Manager Forever 21 Visa credit crad</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.notifications}>
                <Text style={styles.texttrackorder}>NOTIFICATIONS</Text>
                <Text style={styles.texttrackorder1}>View event</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.helpandsp}>
                <Text style={styles.texthelpandsp}>HELP & SUPPORT</Text>
            </TouchableOpacity>
            <View style={{ borderTopWidth: 1, marginTop: 1, borderColor: '#b3b3b3' }}></View>
            <TouchableOpacity style={styles.helpandsp1}>
                <Text style={styles.texthelpandsp}>SHIPPING INFO</Text>
            </TouchableOpacity>
            <View style={{ borderTopWidth: 1, borderColor: '#b3b3b3' }}></View>
            <TouchableOpacity style={styles.helpandsp1}>
                <Text style={styles.texthelpandsp}>FIND A STORE</Text>
            </TouchableOpacity>
            <View style={{ borderTopWidth: 1, borderColor: '#b3b3b3' }}></View>
            <TouchableOpacity style={styles.helpandsp1}>
                <Text style={styles.texthelpandsp}>GET THE FOREVER 21 CREDIT CRAD</Text>
            </TouchableOpacity>
            <View style={{ borderTopWidth: 1, borderColor: '#b3b3b3' }}></View>
            <TouchableOpacity style={styles.helpandsp1}>
                <Text style={styles.texthelpandsp}>CAREERS AT FOREVER 21</Text>
            </TouchableOpacity>
            <View style={{ borderTopWidth: 1, borderColor: '#b3b3b3' }}></View>
            <TouchableOpacity style={styles.helpandsp1}>
                <Text style={styles.texthelpandsp}>NEWSLETTR</Text>
            </TouchableOpacity>
            <View style={{ borderTopWidth: 1, borderColor: '#b3b3b3' }}></View>
            <TouchableOpacity style={styles.helpandsp1}>
                <Text style={styles.texthelpandsp}>RATE OUR APP</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    backgroundtop : {
        flex: 1 ,
        backgroundColor : '#d9d9d9',
    },
    text : {
        textAlign :'center', 
        fontWeight: 'bold', 
        fontSize: 15 ,
        color : 'black',
    },
    signin : {
        backgroundColor: 'black',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20 ,
        borderColor: 'gray',
        borderWidth: 1 ,
    },
    textsignin : {
        fontWeight: 'bold', 
        fontSize: 18 ,
        color : 'white',
    },
    join : {
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20 ,
        borderColor: 'gray',
        borderWidth: 1 ,
    },
    textjoin : {
        fontWeight: 'bold', 
        fontSize: 18 ,
        color : 'black',
    },
    trackorder : {
        backgroundColor: 'white',
        height: 60,
        marginTop: 30 ,
    },
    trackorder1 : {
        backgroundColor: 'white',
        height: 60,
    },
    notifications : {
        backgroundColor: 'white',
        height: 60,
        marginTop : 15 ,

    },
    texttrackorder : {
        fontSize: 15 ,
        color : 'gray',
        position : 'absolute',
        left : 20 ,
        top :  11,
    },
    texttrackorder1 : {
        fontSize: 12 ,
        color : '#a6a6a6',
        position : 'absolute',
        left : 20 ,
        top : 32 ,
    },
    icon : {
        position : 'absolute',
        left : 380 ,
        top : 18 ,
    },
    helpandsp : {
        backgroundColor: 'white',
        height: 50,
        marginTop: 15 ,
    },
    helpandsp1 : {
        backgroundColor: 'white',
        height: 50,
    },
    texthelpandsp : {
        fontSize: 12 ,
        color : 'gray',
        position : 'absolute',
        left : 20 ,
        top :  18,
    },
});

export default MyAccountScreen;