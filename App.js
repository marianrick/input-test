import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Navigation from "./Navigation";
import Button from "./Button";

export default function App() {
  const [tab, setTab] = useState(1)
  const EXAMPLE_AMOUNT = 4;
  const EXAMPLES = {
    0: (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        <View style={styles.wrapper}>
          <Navigation amount={EXAMPLE_AMOUNT} setTab={setTab} current={tab} />
          <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.frame}>
              <Text style={styles.mb10}>
                Form with multiple inputs:{'\n'}
                KeyboardAvoidingView ✅{'\n'}
                keyboardShouldPersistTaps: handled
              </Text>
              <TextInput value="Hey you 1" style={styles.input} />
              <TextInput value="Hey you 2" style={styles.input} />
              <TextInput value="Hey you 3" style={styles.input} />
              <TextInput value="Hey you 4" style={styles.input} />
              <TextInput value="Hey you 5" style={styles.input} />
              <TextInput value="Hey you 6" style={styles.input} />
              <TextInput value="Hey you 7" style={styles.input} />
              <TextInput value="Hey you 8" style={styles.input} />
              <TextInput value="Hey you 9" style={styles.input} />
              <TextInput value="Hey you 10" style={styles.input} />
              <TextInput value="Hey you 11" style={styles.input} />
              <TextInput value="Hey you 12" style={styles.input} />
              <TextInput value="Hey you 13" style={styles.input} />
              <Button />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    ),
    1: (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        <View style={styles.wrapper}>
          <Navigation amount={EXAMPLE_AMOUNT} setTab={setTab} current={tab} />
          <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
            <View style={styles.frameSpread}>
              <View>
                <Text style={styles.mb10}>
                  Single / focused input:{'\n'}
                  KeyboardAvoidingView ✅{'\n'}
                  keyboardShouldPersistTaps: handled
                  keyboardDismissMode: on-drag
                </Text>
                <TextInput value="Hey you 1" style={styles.input} />
              </View>
              <Button />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    ),
    2: (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        <View style={styles.wrapper}>
          <Navigation amount={EXAMPLE_AMOUNT} setTab={setTab} current={tab} />
          <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
            <View style={styles.frameSpread}>
              <View>
                <Text style={styles.mb10}>
                  Few focused inputs:{'\n'}
                  KeyboardAvoidingView ✅{'\n'}
                  keyboardShouldPersistTaps: handled
                  keyboardDismissMode: on-drag
                </Text>
                <TextInput value="Hey you 1" style={styles.input} />
                <TextInput value="Hey you 2" style={styles.input} />
              </View>
              <Button />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    ),
    3: (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        <View style={styles.wrapper}>
          <Navigation amount={EXAMPLE_AMOUNT} setTab={setTab} current={tab} />
          <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
            <View style={styles.frameSpread}>
              <View>
                <Text style={styles.mb10}>
                  Too much focused inputs, but it still works:{'\n'}
                  KeyboardAvoidingView ✅{'\n'}
                  keyboardShouldPersistTaps: handled
                  keyboardDismissMode: on-drag
                </Text>
                <TextInput value="Hey you 1" style={styles.input} />
                <TextInput value="Hey you 2" style={styles.input} />
                <TextInput value="Hey you 3" style={styles.input} />
                <TextInput value="Hey you 4" style={styles.input} />
                <TextInput value="Hey you 5" style={styles.input} />
                <TextInput value="Hey you 6" style={styles.input} />
              </View>
              <Button />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    ),
  }

  return EXAMPLES[tab] != null ? EXAMPLES[tab] : <Navigation amount={EXAMPLE_AMOUNT} setTab={setTab} />;
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  frame: {
    padding: 20,
  },
  frameSpread: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#dee2e6',
    padding: 15,
    backgroundColor: '#f8f9fa',
    marginBottom: 10,
  },
  mb10: {
    marginBottom: 10,
  },
});
