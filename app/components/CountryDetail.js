import React, { useState, useEffect } from 'react'
import Image from 'react-native-remote-svg';
import {
  View,
  Text
} from 'react-native'

const CountryDetail = (props) => {
  const { navigation } = props
  const code = navigation.getParam('code', '')

  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Name : </Text> 
          {country.name}
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Population : </Text> 
          {country.population}
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Capital : </Text> 
          {country.capital}
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Region : </Text> 
          {country.region}
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Subregion : </Text>
          {country.subregion}
        </Text>
      </View>
    )
  }

  return (
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {
        isLoading ? 
        <Text style={{ marginTop: "50%" }}>Loading...</Text>
        :
        <DetailView />
      }
      
    </View>
  )
}

export default CountryDetail