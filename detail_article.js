import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
  ScrollView,
} from 'react-native';
import { Separator, Button } from '../components/index';

const windowWidth = Dimensions.get('window').width;

class ArticleDetail extends Component {
  backHomepage = () => {
    this.props.navigation.navigate('Article');
  };

  render() {
    console.log('Data in ArticleDetail:', this.props.route.params.data);
    const { route } = this.props;
    const data = route.params.data;

    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <Image source={{ uri: data.thumbnail }} style={styles.image} />
            <Separator height={10} />
            <View style={styles.splicingContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Separator height={10} />
              <Text style={styles.date}>Diubah pada tanggal : {data.date}</Text>
              <Separator height={10} />
              <Text style={styles.isi}>{data.content}</Text>
              <Separator height={20} />
            </View>
            <Button
              text="Read More"
              onPress={() =>
                Linking.openURL(data.link).catch((err) =>
                  console.error('Error', err)
                )
              }
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  BackgroundArticle: {
    flex: 1,
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    resizeMode: 'stretch',
  },
  date: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  isi: {
    fontSize: 15,
    textAlign: 'justify',
  },
  splicingContainer: {
    padding: 10,
  },
  backbtn: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});

export default ArticleDetail;
