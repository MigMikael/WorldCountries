import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const CountryCard = (props) => {
  const navigate = props.nav
  return (
    <TouchableOpacity onPress={ () => navigate('CountryDetail', { code: props.country.alpha3Code })}>
      <View style={{
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: 1,
        borderLeftColor: 1,
        width: '100%',
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingLeft: "2%",
        flexDirection: 'row'
      }}>
        <View style={{ flexDirection: 'column' }}>
          <Text>{props.country.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CountryCard