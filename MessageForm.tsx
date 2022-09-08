import React, {useRef, useState} from 'react';
import {TextInput, View, Button, Text, StyleSheet} from 'react-native';

function MessageForm() {
  const [text, setText] = useState<string>('');
  const [lastMessage, setLastMessage] = useState<{
    id: number;
    message: string;
    date: Date;
  } | null>(null);
  const nextId = useRef<number>(1);

  const onPress = () => {
    setLastMessage({
      message: text,
      date: new Date(),
      id: nextId.current,
    });
    setText('');
    nextId.current += '1';
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Button title="Press me" onPress={onPress} />
      {lastMessage && (
        <View>
          <Text>
            마지막 메세지{lastMessage.id}: {lastMessage.message} (
            {lastMessage.date.toLocaleString()})
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ff0000',
    padding: 10,
  },
});

export default MessageForm;
