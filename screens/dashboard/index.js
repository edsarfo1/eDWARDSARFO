import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';

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
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  const handlePress = () => {
    console.log(field1, field2, field3);
    setField1('');
    setField2('');
    setField3('');
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TextInput
        placeholder="Field 1"
        value={field1}
        onChangeText={text => setField1(text)}
      />
      <TextInput
        placeholder="Field 2"
        value={field2}
        onChangeText={text => setField2(text)}
      />
      <TextInput
        placeholder="Field 3"
        value={field3}
        onChangeText={text => setField3(text)}
      />
      <Button title="Submit" onPress={handlePress} />
    </View>
  );
};

export default Dashboard;
