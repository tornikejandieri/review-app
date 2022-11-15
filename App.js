import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native"

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "nick", id: "2" },
    { name: "bart", id: "3" },
    { name: "toko", id: "4" },
    { name: "keta", id: "5" },
    { name: "toad", id: "6" },
    { name: "dimitrescu", id: "7" },
  ])

  const pressHandler = (id) => {
    setPeople((prevState) => {
      return prevState.filter((item) => item.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map((person) => (
          <View style={styles.person} key={person.key}>
            <Text>{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
})
