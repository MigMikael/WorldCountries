import React, { useState, useEffect } from 'react';
import CountryCard from '../../components/CountryCard'
import { COLORS } from '../../config/colors'
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native'
import { connect } from 'react-redux';
import { fetchCountries } from '../../redux/actions/CountriesAction'

const Home = (props) => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { navigation: { navigate }} = props

  useEffect(() => {
    // setIsLoading(true)
    // fetch("https://restcountries.eu/rest/v2/all").then(response => {
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch')
    //   }
    //   return response.json()
    // }).then(countriesData => {
    //   setIsLoading(false)
    //   console.log(countriesData)
    //   setCountries(countriesData)
    // })
    props.dispatch(fetchCountries())
  }, [])

  const CountriesList = () => {
    return (props.countries.map(country => {
      return (
        <CountryCard country={country} key={country.name} nav={navigate} />
      )
    }))
  }

  const currentColor = COLORS[props.colorName].hexCode

  const blackOut = () => {
    props.dispatch({
      type: 'COLOR_CHANGE',
      payload: { colorName: 'BLACK' }
    })
  }

  return (
    <View style={{ 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: currentColor,
    }}>
      <View style={{ flexDirection: "row", width: '100%'}}>
        <Text style={{ color: "#fff", flex: 7, height: '100%' }}>
          Current Color : {currentColor}
        </Text>
        <Button onPress={() => navigate("AddCountry")} title="Setting"/>
        <Button onPress={() => blackOut()} title="Black"/>
      </View>
      {
        props.loading ?
        <Text style={{ marginTop: "50%" }}>Loading...</Text>
        :
        <ScrollView style={{ width: "100%" }}>
          <CountriesList />
          {/* <Text>Country should appear here</Text> */}
        </ScrollView>
      }
    </View>
  )
}

const mapStateToProps = state => {
  return { 
    colorName: state.color.colorName,
    countries: state.country.countries,
    loading: state.country.loading,
    error: state.country.error
  }
}

export default connect(mapStateToProps)(Home)
