import * as React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 10,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});
const StyledInput = (props: TextInputProps): JSX.Element => {
  return <TextInput {...props} style={styles.input} />;
};
export { StyledInput };
