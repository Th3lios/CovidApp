import React , {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import {CASES} from '../../data/data';
import scale from '../../utils/scale';

const {width, height} = Dimensions.get("screen")

class HomeScreen extends Component {
  render() {

    const Item = ({id, title, value, date, color}) => (
      <View style={[styles.item]}>
        <View style={[styles.titleContainer]}>
          <Text style={[styles.title]}>{title}</Text>
        </View>
        <View style={[styles.valueContainer]}>
        <Text style={[styles.value]}>{value}</Text>
        <Text style={[styles.date]}>{date}</Text>
        </View>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item {...item} />
    );
    
    return (
      <View style={styles.flex}>
        <View>
          <Text style={[styles.region]}>Valparaíso</Text>
          <Text style={[styles.subtitle]}>Casos</Text>
          <FlatList
            data={CASES}
            contentContainerStyle={{
                flexDirection: 'column',
                flexWrap: 'wrap'
            }}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={[styles.itemList]}
          />
          <Text style={[styles.subtitle]}>Gráficos</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex:{
    padding: scale(16),
    flex: 1,
    backgroundColor: "#121218"
  },
  region: {
    fontWeight: "700",
    fontSize: scale(36),
    color: "#ffff",
  },
  subtitle: {
    paddingTop: scale(12),
    paddingBottom: scale(8),
    fontWeight: "700",
    fontSize: scale(24),
    color: "#ffff",
  },
  itemList: {
    height: scale(300),
  },
  item: {
    backgroundColor: "#1C1E24",
    paddingVertical: scale(7),
    paddingHorizontal: scale(16),
    marginVertical: scale(8),
    marginRight: scale(16),
    height: scale(133),
    width: scale(153),
    borderRadius: scale(26)
  },
  titleContainer:{
    height: scale(133/3.4)
  },
  title: {
    fontSize: scale(16),
    fontWeight: "700",
    color: "#ffff"
  },
  valueContainer: {
    flex:1,
    justifyContent: "space-between"
  },
  value:{
    fontSize: scale(36),
    fontWeight: "700",
    color: "#ffff",
    textAlign: "center"
  },
  date: {
    fontSize: scale(12),
    color: "#ffff",
    textAlign: "right"
  }
});

export default HomeScreen
