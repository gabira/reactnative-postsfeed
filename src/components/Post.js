import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
    color: '#C5C5C5',
    marginBottom: 10,
  },
  description: {},
});

const Post = ({ content }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{content.title}</Text>
      <Text style={styles.author}>{content.author}</Text>
    </View>
    <Text style={styles.description}>{content.description}</Text>
  </View>
);

Post.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Post;
