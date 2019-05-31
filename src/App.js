import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import {
  StyleSheet, Text, ScrollView, View,
} from 'react-native';

import Post from '~/components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF786E',
  },
  header: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Provident nulla sed sequi quo hic veritatis.',
        author: 'Adrain Grimes',
        description:
          'Perferendis alias cum fugit autem saepe est possimus enim corrupti. Odit ipsa aut rem aut quo id. Itaque eaque a alias earum possimus delectus officia iure. Ipsum odit ea eos hic consequatur esse ipsam suscipit. Voluptates magnam velit. At sapiente velit.',
      },
      {
        id: 2,
        title: 'Similique molestiae cum adipisci adipisci adipisci.',
        author: 'Luigi Abshire',
        description:
          'Facere et perferendis ab laboriosam sapiente quasi soluta impedit animi. Excepturi doloribus voluptatem quis error. Nostrum culpa quibusdam.',
      },
      {
        id: 3,
        title: 'Quibusdam iste cumque illum delectus asperiores possimus in.',
        author: 'Delilah Ondricka',
        description:
          'Eligendi aut odio rerum aut. Odit expedita et inventore quis consequatur. Eligendi reiciendis quos rerum. Et quia aut occaecati ipsam quasi non maiores. Dicta dignissimos molestias libero aut maiores quos rem similique id.',
      },
      {
        id: 4,
        title: 'Incidunt amet doloribus eos quae eos.',
        author: 'Miss Jazmin Ortiz',
        description:
          'Et commodi atque consequatur animi provident animi aut. Voluptas ut laborum saepe quidem numquam nemo officiis eaque. Suscipit nesciunt dolore reiciendis. Velit ad explicabo aut enim placeat est omnis placeat. Minus hic soluta amet quos quis autem ea omnis sit.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Go Native APP</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} content={post} />
          ))}
          {posts.map(post => (
            <Post key={post.id} content={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
