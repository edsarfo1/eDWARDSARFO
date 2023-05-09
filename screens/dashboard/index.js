import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const handlePress = () => {
    console.log(field1, field2, field3);
    setField1('');
    setField2('');
    setField3('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Field 1"
        value={field1}
        onChangeText={text => setField1(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Field 2"
        value={field2}
        onChangeText={text => setField2(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Field 3"
        value={field3}
        onChangeText={text => setField3(text)}
      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  itemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});

export default Dashboard;
