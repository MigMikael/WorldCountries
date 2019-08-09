import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'react-native-remote-svg';
import { COLORS } from '../config/colors'
import {
  View,
  Text,
  Button
} from 'react-native'
import { connect } from 'react-redux';

const CountryDetail = (props) => {
  const { navigation } = props
  const code = navigation.getParam('code', '')

  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { colorName, countries } = useSelector(
    state => ({
      colorName: state.color.colorName,
      countries: state.country.countries
    })
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    fetch("https://restcountries.eu/rest/v2/alpha/" + code).then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch")
      }
      return response.json()
    }).then(countryData => {
      setIsLoading(false)
      setCountry(countryData)
    })
  }, [])

  const DetailView = () => {
    return (
      <View style={{ marginTop: "10%" }}>
        <Image
          source={{ uri: country.flag }}
          style={{ width: 400, height: 300 }}
        />
        <Text style={{ color: '#fff' }}>
          <Text style={{ fontWeight: 'bold' }}>Name : </Text> 
          {country.name}
        </Text>
        <Text style={{ color: '#fff' }}>
          <Text style={{ fontWeight: 'bold' }}>Population : </Text> 
          {country.population}
        </Text>
        <Text style={{ color: '#fff' }}>
          <Text style={{ fontWeight: 'bold' }}>Capital : </Text> 
          {country.capital}
        </Text>
        <Text style={{ color: '#fff' }}>
          <Text style={{ fontWeight: 'bold' }}>Region : </Text> 
          {country.region}
        </Text>
        <Text style={{ color: '#fff' }}>
          <Text style={{ fontWeight: 'bold' }}>Subregion : </Text>
          {country.subregion}
        </Text>
        <Text style={{ color: '#fff' }}>
          <Text style={{ fontWeight: 'bold' }}>Total Country : </Text>
          {countries.length}
        </Text>

        <Button title="Turn of light" onPress={() => dispatch({ type: 'COLOR_CHANGE', payload: { colorName: 'BLACK'} })} />
      </View>
    )
  }

  const currentColor = COLORS[colorName].hexCode

  return (
    <View style={{ 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      width: '100%',
      height: '100%', 
      backgroundColor: currentColor }}>
      {
        isLoading ? 
        <Text style={{ marginTop: "50%" }}>Loading...</Text>
        :
        <DetailView />
      }
      
    </View>
  )
}

// const mapStateToProps = state => {
//   return { 
//     colorName: state.color.colorName,
//     countries: state.country.countries 
//   }
// }

export default CountryDetail