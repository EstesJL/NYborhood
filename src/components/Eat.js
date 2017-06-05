import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

const yelp = require('yelp-fusion');

console.warn(process.env.YELP_CLIENT);

const token = yelp.accessToken(clientId, clientSecret).then(response => {
  console.log(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

export class Eat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.eatText}>Eat in {this.props.currentNeighborhood}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eatText: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});
