import React, { useState } from 'react';
import { View, Text, Button, TextInput, Pressable, ScrollView } from 'react-native';

const Card = ({ data, handleUpdate, handleDelete, route }) => {
  const [name, setName] = useState(data.name);
  const [address, setAddress] = useState(data.address);
  const [type_service, setType_service] = useState(data.type_service);
  const [note, setNote] = useState(data.note);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setName(data.name);
    setAddress(data.address);
    setType_service(data.type_service);
    setNote(data.note);
  };

  const handleSaveClick = () => {
    const updatedData = {
      name,
      address,
      type_service,
      note
    };
    handleUpdate(data.id, updatedData);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    handleDelete(data.id);
  };

  return (
    <View style={styles.card}>
      {isEditing ? (
        <View>
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
          <Pressable onPress={handleSaveClick} style={styles.save}>
          <Text>Save</Text>
          </Pressable>
          <Pressable onPress={handleCancelClick} style={styles.cancel}>
          <Text>Cancel</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <View style={styles.boxData}>
          <Text style={styles.cardText}>Name                  : {data.name}</Text>
          <Text style={styles.cardText}>Address              : {data.address}</Text>
          <Text style={styles.cardText}>Type of Service : {data.type_service}</Text>
          <Text style={styles.cardText}>Note                    : {data.note}</Text>
          </View>
          <Pressable onPress={handleEditClick} style={styles.edit}>
          <Text>Edit</Text>
          </Pressable>
          <Pressable onPress={handleDeleteClick} style={styles.delete}>
          <Text>Delete</Text>
          </Pressable>
          
        </View>
      )}
    </View>
  );
};

const styles = {
  card: {
    backgroundColor: '#D9F0F1',
    borderRadius: 20,
    padding: 30,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: '#F1FAEE',
    borderRadius: 5
  },
  edit: {
    width: 70,
    paddingLeft: 22,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F0D904',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 20
  },
  delete: {
    width: 70,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F90000',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  save: {
    width: 70,
    paddingLeft: 18,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#2575EE',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 5
  },
  cancel: {
    width: 70,
    paddingLeft: 13,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#A29C9C',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 5
  },
  boxData: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
};

export default Card;
