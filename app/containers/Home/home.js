import React, { useState, useEffect } from 'react';
import CountryCard from '../../components/CountryCard'
import {
  Text,
  View,
  ScrollView,
} from 'react-native'

const Home = (props) => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { navigation: { navigate }} = props

  useEffect(() => {
    console.log("It works ")
    setIsLoading(true)
    fetch("https://restcountries.eu/rest/v2/all").then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch')
      }
      return response.json()
    }).then(countriesData => {
      setIsLoading(false)
      console.log(countriesData)
      setCountries(countriesData)
    })
  }, [])

  const CountriesList = () => {
    return (countries.map(country => {
      return (
        <CountryCard country={country} key={country.name} nav={navigate} />
      )
    }))
  }

  return (
    <View style={{ 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {
        isLoading ?
        <Text style={{ marginTop: "50%" }}>Loading...</Text>
        :
        <ScrollView style={{ width: "100%" }}>
          <CountriesList />
        </ScrollView>
      }
    </View>
  )
}

export default Home
