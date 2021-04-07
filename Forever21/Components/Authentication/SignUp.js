import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert , Image , Button, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton} from 'react-native-paper';


const SignInScreen = (props) => {
    const navigation = useNavigation();
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('')
    const [checked, setChecked] = React.useState('first');
    const [phonenumber, setphonenumber] = useState('');
    const [email, setemail] = useState('');
    const [confirmemail, setconfirmemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    
    const showDatepicker = () => {
    showMode('date');
    };
    
    const showTimepicker = () => {
    showMode('time');
    };


    const [value, setValue] = React.useState('english');

    const Divider=(props) => {
        return  <View {...props}>
          <View style={styles.line}></View>
          <Text style={styles.textOR}>( Optional )</Text>
          <View style={styles.line}></View>
        </View>
    }

  return (
    <ScrollView>
    <View style={styles.container }>
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <Text style={{ color: 'grey' }}>FIRST NAME</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setfirstname(text)}
            value={firstname}
            placeholder='Type your first name'
          />
        </View>


        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>LAST NAME</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setlastname(text)}
            value={lastname}
            placeholder='Type your last name'
          />
        </View>

        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>DATE OF BIRTH</Text>
          
          <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>

        </View>

        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>GENDER</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                <View >
                    <Text style={styles.male}>Male</Text>
                    <RadioButton value="male" />
                </View>
                <View style={styles.female}>
                    <Text style={styles.male}>Female</Text>
                    <RadioButton value="female" />
                </View>
            </RadioButton.Group>
        </View>

        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>PHONE NUMBER</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setphonenumber(text)}
            value={phonenumber}
            placeholder='Type your phone number'
          />
        </View>

        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>EMAIL ADDRESS</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setemail(text)}
            value={email}
            placeholder='Type your email'
          />
        </View>
        
        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>CONFIRM EMAIL ADDRESS</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setconfirmemail(text)}
            value={confirmemail}
            placeholder='Type your confirm email'
          />
        </View>

        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>PASSWORD</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            secureTextEntry={true}
            onChangeText={(text) => setpassword(text)}
            value={password}
            placeholder='Type your password'
          />
          <Text style={{ position: 'absolute', top: 27, right: 10 }}>Show</Text>
        </View>

        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>CONFIRM PASSWORD</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            secureTextEntry={true}
            onChangeText={(text) => setconfirmpassword(text)}
            value={confirmpassword}
            placeholder='Type your confirm password'
          />
          <Text style={{ position: 'absolute', top: 27, right: 10 }}>Show</Text>
        </View>

        <Divider style={styles.divider}></Divider>

        <View style={{ marginTop : 20 }}>
          <Text style={{ color: 'grey' }}>PREFERRED EMAIL LANGUAGE</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
                <View >
                    <Text style={styles.male}>English</Text>
                    <RadioButton value="english" />
                </View>
                <View style={styles.female}>
                    <Text style={styles.male}>Tiếng Việt</Text>
                    <RadioButton value="tiengviet" />
                </View>
            </RadioButton.Group>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop : 20 }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text>Please sign me up to ........</Text>
        </View>
        <TouchableOpacity style={{
          backgroundColor: 'yellow',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{
            marginTop: 30, textAlign: 'center',
            textDecorationLine: 'underline'
          }}>Forgot password?</Text>
        </TouchableOpacity>


        <View style={{ borderTopWidth: 1, marginTop: 30, borderColor: 'grey' }}></View>

      </View>

      <View style={{
        backgroundColor: '#e3e2da', padding: 20,
        position: 'absolute', bottom: 0,
        width: '100%'
      }}>
        <Text>Face ID setting</Text>
        <Text>Turn on/off face ID, go to [My account]  [Setting]  [Face ID]  On/Off</Text>
      </View>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container : {
        paddingTop: 40, 
        flex: 1,
    },
    line:{
        flex : 2 ,
        height : 1,
        backgroundColor : 'gray',
    },
    textOR: {
        flex : 1 ,
        textAlign :'center', 
        color : 'black',
    },
    divider: {
        flexDirection:'row',
        width : 370 ,
        height : 40 , 
        justifyContent : 'center',
        alignItems : 'center',
    },
    male : {
        color : 'gray' ,
        position : 'relative',
        top : 25 ,
        left : 40 ,
    },
    female : {
        position : 'absolute',
        left : 200 ,
    },
});

export default SignInScreen;