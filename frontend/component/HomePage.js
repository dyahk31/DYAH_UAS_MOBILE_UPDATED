import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,  StyleSheet, Image, ScrollView, Pressable, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Order from './Order';

const HomePage = () => {
  const [isNavigated, setIsNavigated] = useState(false);

  const handleNext = () => {
    setIsNavigated(true);
  };

  const handleBack = () => {
    setIsNavigated(false);
  }

  if(isNavigated){
    return(
      <View>
      <Order handleBack={handleBack}/>
      </View>
    )
  }
  
  return (
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#A4BABB' }}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}/>
      <Text style={styles.title}>
        Welcome!
      </Text>
      <Text style={styles.text}>
        Nora Laundry is #1 Laundry Specialist!
      </Text>
      <View
      style={styles.box1}>
      <Text style={styles.box1Title}>Choose our Laundry Service!</Text>
 
 {/* classic */}
        <View style={styles.service}>
          <Text style={styles.classicText}>Classic Service</Text>
          <View style={styles.priceBox}>
            <View style={styles.up}>
              <Text style={styles.upText}>2 Days Laundry Service</Text>
            </View>
            <Text style={styles.price}>Rp 35.000</Text>
            <Text style={styles.kg}>/ per Kg</Text>
            <Text style={styles.minimum}>Only 3 Kg Minimum Order</Text>
          </View>
          <Image 
          source={require('../assets/time.jpg')}
          style={styles.timeIcon}
          />
          <Text style={styles.timeText}>Next Day Delivery</Text>
          <Image 
          source={require('../assets/basket.jpg')}
          style={styles.basketIcon}
          />
          <Text style={styles.basketText}>Free Pickup & Delivery</Text>
        </View>
        

{/* express */}
        <View style={styles.service}>
          <Text style={styles.expressText}>Express Service</Text>
          <LinearGradient
          colors={['#45789D', '#629CB1', '#8FD2D4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.priceBox2}
          >
           <View style={styles.up2}>
              <Text style={styles.upText2}>Sameday Express Service</Text>
            </View>
            <Text style={styles.price2}>Rp 50.000</Text>
            <Text style={styles.kg2}>/ per Kg</Text>
            <Text style={styles.minimum2}>Only 3 Kg Minimum Order</Text>
          
          <Image 
          source={require('../assets/time2.jpg')}
          style={styles.timeIcon2}
          />
          <Text style={styles.timeText2}>5 Hours Turnaround Time</Text>
          <Image 
          source={require('../assets/basket2.jpg')}
          style={styles.basketIcon2}
          />
          <Text style={styles.basketText2}>Free Pickup & Delivery</Text>
        </LinearGradient>
        </View>

        <TouchableOpacity >
          <Text style={styles.btnNext} onPress={handleNext}>Next</Text>
        </TouchableOpacity>

      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
    marginTop: 50,
    marginLeft: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 30,
    marginTop: 20
  },
  text: {
    marginLeft: 30
  },
  box1: {
    backgroundColor: 'white',
    borderRadius: 40,
    width: 'auto',
    height: '90%',
    marginTop: 10
  },
  box1Title: {
    color: '#29446C',
    marginLeft: 30,
    marginTop: 20,
    fontWeight: 600
  },
  boxTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    color: '#29446C',
    fontWeight: 600
  },
  img: {
    alignSelf: 'center'
  },
  service: {
    backgroundColor: '#D9F0F1',
    width: 250,
    height: 300,
    alignSelf: 'center',
    marginTop: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 9,
  },
  priceBox: {
    backgroundColor: '#A8DADC',
    width: 220,
    height: 110,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
    
  },
  priceBox2: {
    width: 220,
    height: 110,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  up: {
    backgroundColor: '#A4BABB',
    borderRadius: 30,
    width: 150,
    padding: 4,
    marginTop: 10,
    marginLeft: 10
  },
  up2: {
    backgroundColor: '#76A8AA',
    borderRadius: 30,
    width: 150,
    padding: 4,
    marginTop: 10,
    marginLeft: 10
  },
  upText: {
    color: '#1D3557',
    fontSize: 12,
    textAlign: 'center'
  },
  upText2: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  },
  price: {
    fontSize: 35,
    fontWeight: 800,
    color: '#1D3557',
    marginLeft: 10
  },
  price2: {
    fontSize: 35,
    fontWeight: 800,
    color: 'white',
    marginLeft: 10
  },
  kg: {
    fontSize: 10,
    marginLeft: 175,
    marginTop: -20
  },
  kg2: {
    fontSize: 10,
    marginLeft: 175,
    marginTop: -20,
    color: 'white'
  },
  minimum: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 10,
    color: '#1D3557'
  },
  minimum2: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 10,
    color: 'white'
  },
  timeIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 20
  },
  timeIcon2: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 30
  },
  timeText: {
    marginLeft: 70,
    marginTop: -25
  },
  timeText2: {
    marginLeft: 50,
    marginTop: -25
  },
  basketIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 20
  },
  basketIcon2: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 20
  },
  basketText: {
    marginLeft: 70,
    marginTop: -25
  },
  basketText2: {
    marginLeft: 50,
    marginTop: -25
  },
  classicText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 700,
    color: '#1D3557'
  },
   expressText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 700,
    color: '#1D3557'
  },
  btnNext: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#D9F0F1',
    marginTop: 40,
    width: '30%',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 9,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  }
});


export default HomePage;
