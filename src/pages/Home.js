import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import Header from '../components/Header';
import Container from '../components/Container';

const Promotions = {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  name: 'File de peito de Frango 1kg',
  price: '9,99',
  image: 'https://www.auroraalimentos.com.br/extranet/thumbnail/fill/500x400/Produto/1654___file_de_peito_aurora_1555331616097.png',
  profile: {
    image: 'https://play-lh.googleusercontent.com/Z3ULm72r8xsy1wk6vBRDeppON2j7JySEiE6q6NLVWeOo41ZUf5J6CYEeRyoc3i3anRY',
  }
};

// {
//   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//   name: 'Caixa de Leite',
//   price: '29,99',
//   image: 'https://sabealimentos.com.br/assets/img/upload/caixa-desnatado.png'
// },

// https://medium.com/@KPS250/creating-image-slider-with-flatlist-in-react-native-1815d3793d99
// https://github.com/wcandillon/can-it-be-done-in-react-native/blob/master/the-10-min/src/Swiper/Swiper.tsx

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Carnes',
    image: 'https://aguiarbuenosaires.com/wp-content/uploads/2016/06/carnes-argentinas-cortes-dicas-cortes-2.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Vegetais',
    image: 'https://64.media.tumblr.com/0091ce5b8c09418f9762d59457c5e43a/tumblr_p4yxjek5UR1uoxyuao1_400.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Limpeza',
    image: 'https://64.media.tumblr.com/abf58677166dc54706d6de643ec64324/tumblr_inline_prhrb3oVR61wqfwiw_1280.jpg'
  },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d73',
  //   name: 'Ver Todas',
  //   image: 'https://www.newsrondonia.com.br/imagensNoticias/image/Porque-Toda-Pequena-Empresa-Precisa-de-Um-Site-00.jpg'
  // },
];

const ESTABELECIMENTOS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Zafari',
    image: 'https://aguiarbuenosaires.com/wp-content/uploads/2016/06/carnes-argentinas-cortes-dicas-cortes-2.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Compre Bem',
    image: 'https://64.media.tumblr.com/0091ce5b8c09418f9762d59457c5e43a/tumblr_p4yxjek5UR1uoxyuao1_400.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Super Útil',
    image: 'https://64.media.tumblr.com/abf58677166dc54706d6de643ec64324/tumblr_inline_prhrb3oVR61wqfwiw_1280.jpg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    name: 'Ver Todos',
    image: 'https://www.newsrondonia.com.br/imagensNoticias/image/Porque-Toda-Pequena-Empresa-Precisa-de-Um-Site-00.jpg'
  },
];

const popular = {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  name: 'Carne Bonina 1kg',
  price: '69,99',
  image: 'https://aguiarbuenosaires.com/wp-content/uploads/2016/06/carnes-argentinas-cortes-dicas-cortes-2.jpg',
  profile: {
    image: 'https://media.glassdoor.com/sqll/2482728/zaffari-squarelogo-1558435516909.png'
  }
}

const windowWidth = Dimensions.get('window').width;

const Promotion = ({ id, name, image, price, profile, navigation }) => (
  <TouchableOpacity
    key={id}
    activeOpacity={1}
    style={styles.promotionItem}
    onPress={() =>
      navigation.navigate('Profile', { names: ['Brent', 'Satya', 'Michaś'] })
    }>
    <Image style={styles.promotionBackground} source={{ uri: 'https://i.pinimg.com/originals/31/0b/15/310b15fbf06808f61c04d92112439273.png' }} />
    <Image style={styles.promotionImage} source={{ uri: image }} />

    <View style={styles.promotionItemContent}>
      <Image source={{ uri: profile.image }} style={styles.promotionProfile} />
      <View style={styles.line} />
      <View style={styles.promotionColumn1}>
        <Text style={styles.promotionName}>{name}</Text>
      </View>
      <View style={styles.promotionColumn2}>
        <Text style={styles.promotionPrice}>R$ {price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Category = ({ key, name, image, navigation, redirectTo }) => {

  const onPress = () => {
    if (name == 'Ver Todos') {
      if (redirectTo == 'Profile') {
        redirectTo = 'Stores'
      }
      return (
        navigation.navigate(redirectTo)
      )
    }
    return (
      navigation.navigate(redirectTo, {
        name
      })
    )
  }

  return (
    <TouchableOpacity
      id={key}
      activeOpacity={0.75}
      style={styles.item}
      onPress={onPress}>
      <Image source={{ uri: image }} style={styles.background} />
      <View style={styles.itemContent}>
        <View style={styles.opacity} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
};

function Home({ navigation }) {

  const renderCategory = ({ item }) => (
    <Category id={item.id} name={item.name} image={item.image} navigation={navigation} redirectTo='Category' />
  );

  const renderEstabelecimentos = ({ item }) => (
    <Category id={item.id} name={item.name} image={item.image} navigation={navigation} redirectTo='Profile' />
  );

  return (
    <Container>

      <Header isHome={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between'
        }}
      >
        <SafeAreaView style={styles.container}>

          <View style={styles.promotion}>
            {/* <Text style={styles.title}>Promoções</Text> */}

            <Promotion id={Promotions.id} name={Promotions.name} image={Promotions.image} profile={Promotions.profile} price={Promotions.price} navigation={navigation} />

            {/* <FlatList
              horizontal
              data={Promotions}
              renderItem={renderPromotionItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            /> */}
          </View>

          <View style={styles.category}>
            <Text style={styles.title}>Categorias</Text>
            <FlatList
              horizontal
              data={DATA}
              renderItem={renderCategory}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 15 }}
            />
          </View>

          <View style={styles.stores}>
            <Text style={styles.title}>Estabelecimentos</Text>
            <FlatList
              horizontal
              data={ESTABELECIMENTOS}
              renderItem={renderEstabelecimentos}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 15 }}
            />
          </View>


          <View style={styles.popular}>
            <Text style={styles.title}>Mais Relevante</Text>

            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.popularItem}
              onPress={() =>
                navigation.navigate('Profile', { names: ['Brent', 'Satya', 'Michaś'] })
              }>
              <Image source={{ uri: popular.image }} style={styles.popularBackground} />
              <Image source={{ uri: popular.profile.image }} style={styles.popularProfile} />
              <View style={styles.popularItemContent}>
                <View style={styles.opacity} />
                <View style={styles.popularTextContent}>
                  <Text style={styles.popularName}>{popular.name}</Text>
                  <Text style={styles.popularPrice}>R$ {popular.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </ScrollView>

    </Container>
  );
}

const { width, fontScale } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f3fdff',
  },
  promotion: {
    flex: 2,
    minHeight: 300,
    paddingHorizontal: 15,
    marginBottom: 15
  },
  category: {
    flex: 1,
    height: 150,
    paddingHorizontal: 15,
    marginRight: -15,
    marginBottom: 15
  },
  stores: {
    flex: 1,
    height: 150,
    paddingHorizontal: 15,
    marginRight: -15,
    marginBottom: 15
  },
  popular: {
    flex: 2,
    paddingHorizontal: 15,
    height: 200,
    marginBottom: 15
  },
  title: {
    fontSize: 26,
    color: '#0b355d',
    fontWeight: 'bold'
  },
  item: {
    position: 'relative',
    width: windowWidth / 2.5,
    borderColor: '#f7f7f7',
    borderWidth: 1,
    marginHorizontal: 2,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  name: {
    fontSize: 18,
    color: '#fff',
    zIndex: 99,
  },
  itemContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacity: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.6,
    borderRadius: 15,
  },
  // MAIS RELEVANTE
  popularItem: {
    flex: 1,
    position: 'relative'
  },
  popularBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  popularProfile: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 50,
    height: 50,
    aspectRatio: 1,
    borderRadius: 100,
    overflow: 'hidden',
    zIndex: 99
  },
  popularItemContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  popularTextContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  popularName: {
    fontSize: 22 / fontScale,
    color: '#fff',
    fontWeight: 'bold',
  },
  popularPrice: {
    fontSize: 22 / fontScale,
    color: '#fff',
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
    backgroundColor: 'red'
  },
  // SECTION: PROMOÇÕES
  promotionItem: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    // width: windowWidth,
    maxHeight: 320,
    // marginVertical: 20,
  },
  promotionBackground: {
    position: 'absolute',
    width: '100%',
    height: windowWidth * 0.6,
    bottom: 0,
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  promotionImage: {
    position: 'absolute',
    top: 0,
    right: -40,
    width: '100%',
    height: 200,
    aspectRatio: 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  promotionItemContent: {
    flex: 1,
    height: '50%',
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 0,
    alignItems: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  promotionColumn1: {
    flex: 1
  },
  promotionColumn2: {
    flex: 0.5,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'red',
    marginRight: 10
  },
  promotionProfile: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 50,
    height: 50,
    aspectRatio: 1,
    borderRadius: 100,
    overflow: 'hidden',
    zIndex: 99
  },
  line: {
    // backgroundColor: 'yellow',
    // position: 'absolute',
    // top: 70,
    // left: 0,
    // width: 50,
    // height: 5
  },
  promotionName: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  promotionPrice: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center'
  },
});

export default Home;
