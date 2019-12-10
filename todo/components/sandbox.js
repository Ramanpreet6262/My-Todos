// This component is made to practise flexbox..
// It is not a part of project

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // justifyContent can be center, flex-end, flex-start, space-between and space-around
    alignItems: 'flex-end',
    // alignItems can be center, flex-end, flex-start, space-between and space-around
    paddingTop: 40,
    backgroundColor: '#ddd'
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: {
    flex: 2,
    backgroundColor: 'gold',
    padding: 20
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 30
  },
  boxFour: {
    flex: 3,
    backgroundColor: 'skyblue',
    padding: 40
  }
});

// View is actually a wrapper just like a div container in html...

/* By default, Views use flexbox out of the box under the hood.

This means 2 things-- First, we can add a flex: 1 property to it in css 
which allows component to take all the available space on the screen and secondly everything inside
that flex container now becomes a flex item automatically*/

/* There are in total 2 axis: main axis and cross axis. Main Axis is whatever we give value to flexDirection
And cross axis opposite to it...
Now, justifyContent works on main axis and alignItems on cross axis*/

/* Like, we had flex property on container, we can also have flex property on each one of these different 
boxes */

/* In app.js there was a issue when we add many todos, we can't scroll to all as it was going down the screen
i.e. flatlist was being pushed down the screen
So we will solve it with flexbox */
