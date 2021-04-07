import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { login } from "./testapi";
import { signup } from "./testapi";
import { products } from "./testapi";
export default function App() {
  const [token, setToken] = useState()
  const onLogin = async () => {
    const result = await login({
      "email": "hello@gmail.com",
      "password": "123456"
    })
    console.log('result', result)
  }

  const onSignup = async () => {
    const result = await signup({
      "email": "hello1234@gmail.com",
      "password": "123456",
      "userName" : "ABC"
    })
    console.log('result', result)
  }

  const onProduct = async () => {
    const result = await product({
    })
    console.log('result', result)
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <TouchableOpacity onPress={onLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignup}>
        <Text style={{ marginTop : 20 }}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onProduct}>
        <Text style={{ marginTop : 20 }}>SignUp</Text>
      </TouchableOpacity>
    </View>

    
  )
}