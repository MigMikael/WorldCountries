import React, { useState } from 'react'
import { COLORS } from '../config/colors'
import { connect } from 'react-redux';
import { colorChange } from '../redux/actions/ColorChangeAction';
import { 
  StyleSheet, 
  View, 
  TextInput, 
  Button,
  Text
} from 'react-native';

const AddCountry = (props) => {
  const onSelectColor = (colorName) => {
    console.log(colorName)
    props.colorChange({ colorName });
    props.navigation.goBack()
  }

  return (
    <View>
      <Text>Choose Color</Text>
      {Object.keys(COLORS).map((key) => (
        <Button
          key={key}
          title={COLORS[key].name}
          color={COLORS[key].hexCode}
          onPress={() => onSelectColor(key)}
        />
      ))}
    </View>
  )
}

const mapStateToProps = state => ({ })

export default connect(mapStateToProps, { colorChange })(AddCountry)