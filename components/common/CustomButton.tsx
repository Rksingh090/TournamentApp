import React from 'react'
import { Button, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'
import { AppColor } from '../../utils/constant';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text>Hello</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: AppColor.main,
    padding: 10

  }
});

export default CustomButton