import React, {useEffect, useState} from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Card from "./Card";
import HomePage from "./HomePage";

const Order = ({handleBack}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type_service, setType_service] = useState('');
  const [note, setNote] = useState('');

useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.0.9:5000/cust');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.log('Failed to fetch customer data');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };



  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`http://192.168.0.9:5000/cust/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        const updatedDataList = data.map((item) => {
          if (item.id === id) {
            return { ...item, ...updatedData };
          }
          return item;
        });
        setData(updatedDataList);
      } else {
        console.log('Error updating data');
      }
    } catch (error) {
      console.log('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://192.168.0.9:5000/cust/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedDataList = data.filter((item) => item.id !== id);
        setData(updatedDataList);
      } else {
        console.log('Error deleting data');
      }
    } catch (error) {
      console.log('Error deleting data:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://192.168.0.9:5000/cust', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          address,
          type_service,
          note
        }),
      });
      if (response.ok) {
        fetchData();
        setName('');
        setAddress('');
        setType_service('');
        setNote('');
      } else {
        console.log('Error submitting data');
      }
    } catch (error) {
      console.log('Error submitting data:', error);
    }
  };

    return(
        <ScrollView >
        <View style={styles.container}>
            <Image 
            source={require('../assets/laundry.png')}
            style={styles.backgroundImage}
            />
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image 
            source={require('../assets/arrow.png')}
            style={styles.arrow}
            />
            </TouchableOpacity>
    <View style={styles.box}>
        <Text style={styles.formTitle}>Order Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Classic or Express"
        value={type_service}
        onChangeText={(text) => setType_service(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Note"
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      
      <Pressable style={styles.button} onPress={handleSubmit}>
      <Text style={styles.btnText}>Submit</Text>
      </Pressable>

{/* customer data after submitting */}
        <Text style={styles.boxTitle}>Order List</Text>
      {data.length > 0 ? (
        data.map((item) => (
          <Card
            key={item.id}
            data={item}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <Text style={styles.dataText}>You haven't submitted any data yet</Text>
      )} 
      </View>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: '#D9F0F1',
    borderRadius: 5
  },
  formTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    color: '#29446C',
    fontWeight: 600
  },
  button: {
    width: 70,
    paddingLeft: 13,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1D3557',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  btnText: {
    color: 'white'
  },
  arrow: {
    marginTop: 50,
    flex: 1,
    aspectRatio: 1,
    width: '100%',
    marginLeft: 20
  },
  container: {
    flex: 1,
  },
  box: {
    marginTop: 110,
    backgroundColor: 'white',
    borderRadius: 20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
  },
  boxTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 600,
    color: '#29446C',
    marginBottom: 20
  },
  dataText: {
    marginLeft: 20
  }
})

export default Order;